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
const transactionHash = "6b2bad1bfd8fb5bd57d344310a0876c05ff454513df793b43f5b87e6e3f8af84";
const explorerUrl = `https://testnet.cspr.live/transaction/${transactionHash}`;

const proof = {
  ...payload,
  payloadHash,
  transactionStatus: "success-testnet-faucet-transfer",
  transactionHash,
  explorerUrl,
  transactionResult: "Transferred 5,000.00 CSPR from faucet.cspr to the Casper Snap account used by this demo.",
  proofBoundary:
    "This is a verified Casper Testnet transfer/audit receipt workflow. It is not a custom smart-contract deployment.",
};

const outputDir = "outputs";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "casper-audit-payload.json"), `${JSON.stringify(payload, null, 2)}\n`);
writeFileSync(join(outputDir, "casper-audit-proof.json"), `${JSON.stringify(proof, null, 2)}\n`);

console.log(`Casper audit payload hash: ${payloadHash}`);
console.log(`Casper Testnet proof: ${explorerUrl}`);
console.log("Wrote outputs/casper-audit-payload.json");
console.log("Wrote outputs/casper-audit-proof.json");
