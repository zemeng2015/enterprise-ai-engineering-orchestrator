# Casper Agentic Buildathon Readiness

## Project

Enterprise AI Orchestrator: Verifiable Agentic Release Audit on Casper

## Fit

The Casper-specific extension turns an AI-assisted release decision into a verifiable audit receipt. The dashboard prepares a release-risk decision, canonicalizes the evidence payload, calculates a SHA-256 hash, and exposes the intended Casper Testnet receipt fields for judging.

## Implemented Now

- Casper positioning mode in the live dashboard.
- Casper receipt panel with audit ID, decision, payload hash, chain, and transaction status.
- Reproducible audit proof generator: `npm run casper:proof`.
- Generated local proof files:
  - `outputs/casper-audit-payload.json`
  - `outputs/casper-audit-proof.json`

## Honest Submission Boundary

The current repository does not yet include a completed Casper Testnet deploy or transfer hash. The proof generator prepares the payload and hash that should be anchored on Casper Testnet. The final DoraHacks submission should not be marked complete until a real Testnet transaction or deployed on-chain component is attached.

## Required Final Proof Before Submission

1. Generate or import a Casper Testnet account.
2. Fund it through the Casper Testnet faucet.
3. Submit a transaction-producing on-chain action that carries or correlates to the audit payload hash.
4. Capture the deploy or transaction hash from Casper Testnet.
5. Update `src/data/demoData.ts`, this readiness file, and the DoraHacks submission with the explorer URL.

## References Checked

- Casper Agentic Buildathon DoraHacks page requires a working prototype deployed on Casper Testnet with a transaction-producing on-chain component.
- Casper Docs describe Testnet prerequisites: Casper account keys, enough Testnet CSPR, and either Casper CLI contract installation or Casper JS SDK transfer/deploy flows.
- Casper JS SDK docs describe `casper-js-sdk@next`, account key generation, and sending transfer deploys that return a hash verifiable on `https://testnet.cspr.live/`.
