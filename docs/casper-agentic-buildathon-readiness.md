# Casper Agentic Buildathon Readiness

## Project

Enterprise AI Orchestrator: Verifiable Agentic Release Audit on Casper

## Fit

The Casper-specific extension turns an AI-assisted release decision into a verifiable audit receipt. The dashboard prepares a release-risk decision, canonicalizes the evidence payload, calculates a SHA-256 hash, and exposes the intended Casper Testnet receipt fields for judging.

## Implemented Now

- Casper positioning mode in the live dashboard.
- Casper receipt panel with audit ID, decision, payload hash, chain, and transaction status.
- Reproducible audit proof generator: `npm run casper:proof`.
- Verified Casper Testnet faucet transfer proof:
  - Transaction hash: `6b2bad1bfd8fb5bd57d344310a0876c05ff454513df793b43f5b87e6e3f8af84`
  - Explorer URL: `https://testnet.cspr.live/transaction/6b2bad1bfd8fb5bd57d344310a0876c05ff454513df793b43f5b87e6e3f8af84`
  - Result: transferred `5,000.00 CSPR` from `faucet.cspr` to the selected Casper Snap account.
  - Status: `Success` on CSPR.live Testnet.
- Generated local proof files:
  - `outputs/casper-audit-payload.json`
  - `outputs/casper-audit-proof.json`

## Honest Submission Boundary

The current repository now includes a verified Casper Testnet transfer proof for the account used by the demo. The proof generator prepares the release-audit payload and SHA-256 hash that the demo correlates with this Testnet proof. This is a truthful transaction proof, not a custom Casper contract deployment, so the final DoraHacks submission should describe it as a Testnet transfer/audit receipt workflow unless a stronger deploy or contract interaction is added before judging.

## Required Final Proof Before Submission

1. Generate or import a Casper Testnet account. Done: Casper Snap public key `0202567874ab8773690476e4d2cec5ec09cffb279a10fa41c078a193f19a51bbf22e`.
2. Fund it through the Casper Testnet faucet. Done: faucet transaction `6b2bad1bfd8fb5bd57d344310a0876c05ff454513df793b43f5b87e6e3f8af84`.
3. Capture the deploy or transaction hash from Casper Testnet. Done: explorer URL above.
4. Update `src/data/demoData.ts`, this readiness file, and the DoraHacks submission with the explorer URL. Source and docs are updated; DoraHacks Profile, Details, and Team steps are filled. The remaining DoraHacks blocker is the final Contact step, which requires a real Telegram username plus one backup contact.
5. Optional stronger proof: add a custom Casper Testnet contract/deploy action that carries or directly references the audit payload hash before final judging.

## References Checked

- Casper Agentic Buildathon DoraHacks page requires a working prototype deployed on Casper Testnet with a transaction-producing on-chain component.
- Casper Docs describe Testnet prerequisites: Casper account keys, enough Testnet CSPR, and either Casper CLI contract installation or Casper JS SDK transfer/deploy flows.
- Casper JS SDK docs describe `casper-js-sdk@next`, account key generation, and sending transfer deploys that return a hash verifiable on `https://testnet.cspr.live/`.
