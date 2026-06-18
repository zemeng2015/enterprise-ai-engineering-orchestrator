# Public Submission Proof Index

This index collects the public evidence links used by the June 2026 hackathon submissions for Enterprise AI Engineering Orchestrator.

## Live Proof Hub

- Live demo: https://zemeng2015.github.io/enterprise-ai-engineering-orchestrator/
- Repository: https://github.com/zemeng2015/enterprise-ai-engineering-orchestrator

The live demo includes a `Submission Proofs` panel with public judging links for UiPath, Mind the Product, GitLab, and Casper.

## Proof Links

| Track | Public proof | What it verifies |
|---|---|---|
| UiPath AgentHack | https://raw.githubusercontent.com/zemeng2015/enterprise-ai-engineering-orchestrator/main/docs/uipath-test-manager-execution-passed.png | UiPath Labs Test Manager manual validation result is marked `Passed`. |
| UiPath AgentHack | https://raw.githubusercontent.com/zemeng2015/enterprise-ai-engineering-orchestrator/main/docs/uipath-test-manager-project-dashboard-running.png | UiPath Labs Test Manager project exists for `Enterprise AI Orchestrator`. |
| Mind the Product | https://raw.githubusercontent.com/zemeng2015/enterprise-ai-engineering-orchestrator/main/docs/novus-dashboard-live-after-install.png | Novus/Pendo mapped the deployed GitHub Pages demo. |
| GitLab Transcend | https://github.com/zemeng2015/enterprise-ai-engineering-orchestrator/blob/main/skills/release-risk-orbit/SKILL.md | Project-level GitLab Duo Agent Skill artifact for Orbit-style release-risk evidence. |
| Casper Agentic Buildathon | https://testnet.cspr.live/transaction/6b2bad1bfd8fb5bd57d344310a0876c05ff454513df793b43f5b87e6e3f8af84 | Verified Casper Testnet transaction paired with the generated audit receipt. |

## Verification

Run:

```bash
npm run verify:proofs
```

The verifier checks that the live demo is reachable, the deployed bundle contains the proof panel and key proof strings, the Pendo app ID is still present, and every public proof URL returns HTTP 200.

