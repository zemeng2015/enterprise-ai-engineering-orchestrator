import { createHash } from "node:crypto";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const payload = {
  auditId: "EAIO-2026-06-17-AUTH-142",
  project: "Enterprise AI Engineering Orchestrator",
  release: "checkout release 2026.06.17",
  decision: "hold-for-human-review",
  chain: "casper-test",
  generatedAt: "2026-06-17T18:00:00.000Z",
  riskScore: 71,
  changedFiles: 12,
  highRiskAreas: ["OAuth callback guard", "Release gate API"],
  recommendedActions: [
    "Generate regression tests for invalid nonce and stale state",
    "Generate contract tests and API fixture diff",
    "Require human approval before promotion",
  ],
  evidence: [
    "Parsed merge request !4827 and mapped touched modules.",
    "Detected auth callback contract change with no matching test update.",
    "Generated JUnit skeleton for OAuth nonce replay scenario.",
    "Prepared human-in-the-loop approval task.",
  ],
};

const canonicalPayload = JSON.stringify(payload);
const payloadHash = createHash("sha256").update(canonicalPayload).digest("hex");

const proof = {
  ...payload,
  payloadHash,
  transactionStatus: "pending-testnet-funding",
  explorerUrl: null,
  nextAction:
    "Fund a Casper Testnet account, submit this payload hash through a transaction-producing component, then replace transactionStatus and explorerUrl with the real deploy or transfer proof.",
};

const outputDir = "outputs";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "casper-audit-payload.json"), `${JSON.stringify(payload, null, 2)}\n`);
writeFileSync(join(outputDir, "casper-audit-proof.json"), `${JSON.stringify(proof, null, 2)}\n`);

console.log(`Casper audit payload hash: ${payloadHash}`);
console.log("Wrote outputs/casper-audit-payload.json");
console.log("Wrote outputs/casper-audit-proof.json");
