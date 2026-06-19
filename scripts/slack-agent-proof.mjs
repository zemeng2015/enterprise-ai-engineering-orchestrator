import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join } from "node:path";

const root = join("slack-agent", "release-risk-agent");
const agentPath = join(root, "slack-agent.example.json");
const mcpPath = join(root, "mcp-server.example.json");
const threadPath = join(root, "sample-slack-thread.json");
const outputPath = join("outputs", "slack-agent-builder-proof.json");

function fail(message) {
  console.error(`Slack Agent proof failed: ${message}`);
  process.exit(1);
}

for (const file of [agentPath, mcpPath, threadPath]) {
  if (!existsSync(file)) {
    fail(`missing ${file}`);
  }
}

const agent = JSON.parse(readFileSync(agentPath, "utf8"));
const mcp = JSON.parse(readFileSync(mcpPath, "utf8"));
const thread = JSON.parse(readFileSync(threadPath, "utf8"));

const tool = mcp.tools?.find((entry) => entry.name === "release_risk.review");
if (!tool) {
  fail("MCP manifest must expose release_risk.review");
}

if (!agent.uses?.includes("MCP server integration")) {
  fail("Slack agent draft must declare MCP server integration");
}

if (!agent.workflow?.some((step) => step.step === "hold_for_human_approval")) {
  fail("Slack workflow must preserve human approval checkpoint");
}

for (const requiredJudge of ["slackhack@salesforce.com", "testing@devpost.com"]) {
  if (!agent.judge_access_required?.includes(requiredJudge)) {
    fail(`Slack agent draft is missing judge access requirement ${requiredJudge}`);
  }
}

if (thread.approval_state !== "hold-for-human-review") {
  fail("sample Slack thread must hold promotion for human review");
}

if (!thread.messages?.some((message) => message.text.includes("release_risk.review"))) {
  fail("sample Slack thread must show the MCP review tool call");
}

if (agent.status !== "sandbox-url-pending") {
  fail("proof must not claim a live Slack sandbox before one exists");
}

const proof = {
  candidate: "Slack Agent Builder Challenge",
  project: "Enterprise Release Risk Agent for Slack",
  track: agent.track,
  live_slack_sandbox_status: agent.status,
  mcp_tool: tool.name,
  workflow_steps: agent.workflow.length,
  judge_access_required: agent.judge_access_required,
  approval_state: thread.approval_state,
  boundary: agent.boundary,
};

const digest = createHash("sha256").update(JSON.stringify(proof)).digest("hex");
const artifact = {
  ...proof,
  proof_digest_sha256: digest,
};

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, `${JSON.stringify(artifact, null, 2)}\n`, "utf8");

console.log(`Slack Agent proof passed: MCP tool ${tool.name}, ${agent.workflow.length} workflow steps, digest ${digest}.`);
