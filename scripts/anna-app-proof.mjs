import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { spawn } from "node:child_process";

const appRoot = "anna-app/release-risk-review";
const manifestPath = join(appRoot, "manifest.json");
const uiEntryPath = join(appRoot, "ui/index.html");
const toolPath = join(appRoot, "executas/release-risk-review/tool.mjs");
const skillPath = join(appRoot, "skills/release-risk-review/SKILL.md");

function fail(message) {
  console.error(`Anna proof failed: ${message}`);
  process.exit(1);
}

for (const file of [manifestPath, uiEntryPath, toolPath, skillPath]) {
  if (!existsSync(file)) {
    fail(`missing ${file}`);
  }
}

const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));

if (manifest.schema !== 2) {
  fail("manifest schema must be 2 for the Anna App UI prototype");
}

if (manifest.ui?.bundle?.entry !== "ui/index.html") {
  fail("manifest UI entry must point to ui/index.html");
}

const storageMethods = manifest.ui?.host_api?.storage || [];
for (const method of storageMethods) {
  if (!["get", "set", "delete", "list"].includes(method)) {
    fail(`manifest UI storage host API method is invalid: ${method}`);
  }
}

if (!manifest.system_prompt_addendum?.includes("human approval checkpoint")) {
  fail("manifest must preserve the human approval checkpoint");
}

const ui = readFileSync(uiEntryPath, "utf8");
for (const snippet of ["Release Risk Review", "Needs human review", "assess_release_risk"]) {
  if (!ui.includes(snippet)) {
    fail(`UI bundle is missing ${snippet}`);
  }
}

function callTool(requests) {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [toolPath], {
      stdio: ["pipe", "pipe", "pipe"],
      shell: false,
    });
    const lines = [];
    let stderr = "";

    child.stdout.on("data", (chunk) => {
      lines.push(...chunk.toString("utf8").trim().split(/\r?\n/).filter(Boolean));
    });

    child.stderr.on("data", (chunk) => {
      stderr += chunk.toString("utf8");
    });

    child.on("error", reject);
    child.on("close", (code) => {
      if (code !== 0) {
        reject(new Error(`tool exited ${code}: ${stderr}`));
        return;
      }
      resolve(lines.map((line) => JSON.parse(line)));
    });

    for (const request of requests) {
      child.stdin.write(`${JSON.stringify(request)}\n`);
    }
    child.stdin.end();
  });
}

const responses = await callTool([
  { jsonrpc: "2.0", id: 1, method: "describe" },
  {
    jsonrpc: "2.0",
    id: 2,
    method: "call",
    params: {
      name: "assess_release_risk",
      args: { release_id: "checkout-2026.06.17" },
    },
  },
  {
    jsonrpc: "2.0",
    id: 3,
    method: "call",
    params: {
      name: "draft_human_review_packet",
      args: { owner: "QA owner" },
    },
  },
]);

const describe = responses.find((response) => response.id === 1)?.result;
if (!describe?.tools?.some((tool) => tool.name === "assess_release_risk")) {
  fail("tool describe response does not expose assess_release_risk");
}

const assessment = responses.find((response) => response.id === 2)?.result?.output;
if (assessment?.approval_state !== "needs-human-review") {
  fail("assessment must hold the release for human review");
}

if (!Array.isArray(assessment.recommended_tests) || assessment.recommended_tests.length < 3) {
  fail("assessment must recommend targeted tests");
}

const packet = responses.find((response) => response.id === 3)?.result?.output;
if (!packet?.body?.includes("Risk score: 71")) {
  fail("review packet did not include the risk score");
}

console.log("Anna App proof passed: manifest, UI bundle, local Executa tool, and human-review workflow are ready.");
