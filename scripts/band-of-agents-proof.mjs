import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join } from "node:path";

const outputPath = join("outputs", "band-agent-collaboration-proof.json");
const integrationRoot = join("band-agents", "release-governance");
const agentsPath = join(integrationRoot, "agents.json");
const transcriptPath = join(integrationRoot, "room-transcript.jsonl");
const envExamplePath = join(integrationRoot, ".env.example");
const agentConfigExamplePath = join(integrationRoot, "agent_config.example.yaml");

const proof = {
  candidate: "Lablab Band of Agents Hackathon",
  project: "Enterprise Multi-Agent Release Governance Orchestrator",
  release_id: "checkout-2026.06.17",
  band_room_model: "release-risk-governance",
  live_band_api_status: "pending-account-access",
  boundary:
    "This is a local Band-ready collaboration proof. It does not claim a live Band API transcript until Band account/API access is available.",
  agents: [
    {
      id: "planner",
      name: "Release Planner Agent",
      responsibility: "Open the release room and publish scope, owners, and policy gates.",
    },
    {
      id: "risk-evidence",
      name: "Risk Evidence Agent",
      responsibility: "Convert repository and CI context into structured release-risk facts.",
    },
    {
      id: "qa-test",
      name: "QA Test Agent",
      responsibility: "Turn the risk facts into targeted regression, contract, and workflow tests.",
    },
    {
      id: "human-review",
      name: "Human Review Agent",
      responsibility: "Hold promotion until a reviewer approves the evidence packet.",
    },
  ],
  handoffs: [
    {
      from: "planner",
      to: "risk-evidence",
      room: "release-risk-governance",
      payload: "12 changed files, 4 owned services, 2 critical routes, release gate changed",
    },
    {
      from: "risk-evidence",
      to: "qa-test",
      room: "release-risk-governance",
      payload: "Risk score 71, auth callback contract changed, invoice retry branch weakened",
    },
    {
      from: "qa-test",
      to: "human-review",
      room: "release-risk-governance",
      payload: "Three targeted tests recommended with owners and acceptance criteria",
    },
    {
      from: "human-review",
      to: "planner",
      room: "release-risk-governance",
      payload: "Decision remains hold-for-human-review until evidence is approved",
    },
  ],
  generated_actions: [
    "Generate OAuth nonce replay regression test",
    "Add invoice retry exhaustion coverage",
    "Prepare release gate API contract fixture diff",
  ],
  approval_state: "needs-human-review",
};

function fail(message) {
  console.error(`Band proof failed: ${message}`);
  process.exit(1);
}

for (const file of [agentsPath, transcriptPath, envExamplePath, agentConfigExamplePath]) {
  if (!existsSync(file)) {
    fail(`missing ${file}`);
  }
}

const agentSpec = JSON.parse(readFileSync(agentsPath, "utf8"));
const transcript = readFileSync(transcriptPath, "utf8")
  .trim()
  .split(/\r?\n/)
  .filter(Boolean)
  .map((line) => JSON.parse(line));

if (proof.agents.length < 3) {
  fail("proof must include at least three coordinating agents");
}

if (agentSpec.room_model !== proof.band_room_model) {
  fail("agent spec room model must match the proof room model");
}

if (!Array.isArray(agentSpec.agents) || agentSpec.agents.length !== proof.agents.length) {
  fail("agent spec must describe the same four agents as the proof");
}

for (const requiredTool of ["band_send_message", "band_add_participant", "band_get_participants", "band_create_chatroom"]) {
  if (!agentSpec.platform_tools?.includes(requiredTool)) {
    fail(`agent spec is missing Band platform tool ${requiredTool}`);
  }
}

if (!proof.handoffs.every((handoff) => handoff.room === proof.band_room_model)) {
  fail("every handoff must use the same Band-ready room model");
}

if (transcript.length !== proof.handoffs.length) {
  fail("sample room transcript must contain one message per handoff");
}

if (!transcript.every((entry) => entry.room === proof.band_room_model && entry.tool === "band_send_message")) {
  fail("sample room transcript must use the Band room and band_send_message tool");
}

if (proof.approval_state !== "needs-human-review") {
  fail("proof must preserve the human review checkpoint");
}

const canonical = JSON.stringify(proof, Object.keys(proof).sort(), 2);
const digest = createHash("sha256").update(JSON.stringify(proof)).digest("hex");
const artifact = {
  ...proof,
  proof_digest_sha256: digest,
};

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, `${JSON.stringify(artifact, null, 2)}\n`, "utf8");

console.log(`Band of Agents proof passed: ${proof.agents.length} agents, ${proof.handoffs.length} handoffs, digest ${digest}.`);
