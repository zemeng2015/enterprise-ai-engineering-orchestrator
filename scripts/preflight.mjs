import { existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { spawnSync } from "node:child_process";

const requiredFiles = [
  "README.md",
  "LICENSE",
  "SUBMISSION_PACKET.md",
  "DEVPOST_DRAFTS.md",
  "DEMO_SCRIPT.md",
  "DEPLOYMENT.md",
  ".github/workflows/ci.yml",
  ".github/workflows/pages.yml",
  "docs/screenshots/orchestrator-desktop.png",
  "docs/screenshots/orchestrator-mobile.png",
  "docs/anna-ai-native-readiness.md",
  "docs/band-of-agents-readiness.md",
  "docs/slack-agent-builder-readiness.md",
  "docs/pending-submission-field-packets.md",
  "docs/pending-submission-fields.json",
  "docs/h0-zero-stack-evaluation.md",
  "anna-app/release-risk-review/manifest.json",
  "anna-app/release-risk-review/ui/index.html",
  "anna-app/release-risk-review/executas/release-risk-review/tool.mjs",
  "slack-agent/release-risk-agent/slack-agent.example.json",
  "slack-agent/release-risk-agent/mcp-server.example.json",
  "slack-agent/release-risk-agent/sample-slack-thread.json",
];

const commands = [
  ["npm", ["run", "anna:proof"]],
  ["npm", ["run", "band:proof"]],
  ["npm", ["run", "slack:proof"]],
  ["npm", ["run", "typecheck"]],
  ["npm", ["run", "build"]],
  ["npm", ["audit", "--audit-level=high"]],
];

function run(command, args) {
  const useNpmCli = command === "npm" && process.env.npm_execpath;
  const useCmdExe = process.platform === "win32" && command === "npm" && !useNpmCli;
  const executable = useNpmCli ? process.execPath : useCmdExe ? "cmd.exe" : command;
  const finalArgs = useNpmCli
    ? [process.env.npm_execpath, ...args]
    : useCmdExe
      ? ["/c", command, ...args]
      : args;
  const cacheCandidates = [
    process.env.NPM_CONFIG_CACHE,
    process.env.TMP,
    process.env.TEMP,
    join(process.cwd(), "outputs", "npm-cache"),
  ].filter(Boolean);
  let npmCacheDir = cacheCandidates.find((dir) => existsSync(dir)) || cacheCandidates[0];

  if (npmCacheDir && !existsSync(npmCacheDir)) {
    try {
      mkdirSync(npmCacheDir, { recursive: true });
    } catch {
      npmCacheDir = undefined;
    }
  }
  const env = {
    ...process.env,
    ...(npmCacheDir ? { NPM_CONFIG_CACHE: npmCacheDir } : {}),
  };
  const result = spawnSync(executable, finalArgs, {
    stdio: "inherit",
    shell: false,
    env,
  });

  if (result.error) {
    console.error(`Failed to run ${executable}: ${result.error.message}`);
    process.exit(1);
  }

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

const missing = requiredFiles.filter((file) => !existsSync(file));

if (missing.length > 0) {
  console.error("Missing submission files:");
  for (const file of missing) {
    console.error(`- ${file}`);
  }
  process.exit(1);
}

for (const [command, args] of commands) {
  run(command, args);
}

console.log("Preflight passed: submission files, typecheck, build, and audit are ready.");
