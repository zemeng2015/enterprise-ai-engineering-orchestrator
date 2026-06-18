# Anna AI-Native App Hackathon Readiness

This repository now includes an Anna-specific package for the Anna AI-Native App Hackathon.

## Candidate Fit

- Hackathon: Anna AI-Native App Hackathon
- Deadline: June 22, 2026 at 11:59 PM ET
- Format: online
- Eligibility: open worldwide, solo or teams up to 5
- Prize: $300 winner-takes-all
- Requirement fit: focused AI-native workflow, working demo, meaningful AI use, fit with Anna, and human review.

The project maps cleanly to Anna because the core product is a single workflow rather than a broad platform: inspect release risk, call a tool layer for evidence, recommend tests, preserve state, and keep a human approval checkpoint.

## Submitted Artifact Shape

Anna hackathon materials say a submission can be a shareable Anna App, runnable project, zip, private/public repo, or local run instructions. This repo provides the runnable project path:

- Anna package: `anna-app/release-risk-review/`
- Manifest: `anna-app/release-risk-review/manifest.json`
- UI bundle entry: `anna-app/release-risk-review/ui/index.html`
- Executa-style local tool: `anna-app/release-risk-review/executas/release-risk-review/tool.mjs`
- Skill card: `anna-app/release-risk-review/skills/release-risk-review/SKILL.md`
- One-page judge packet: `anna-app/release-risk-review/SUBMISSION.md`
- Local proof command: `npm run anna:proof`
- Package command: `npm run anna:package`
- Stable package asset: `https://github.com/zemeng2015/enterprise-ai-engineering-orchestrator/releases/download/v2026-june-submission/release-risk-review-anna-app.zip`

## Local Verification

Run:

```bash
npm run anna:proof
```

Expected result:

```text
Anna App proof passed: manifest, UI bundle, local Executa tool, and human-review workflow are ready.
```

Generate the standalone Anna submission zip:

```bash
npm run anna:package
```

## Submission Copy

Title:

```text
Release Risk Review: Human-Governed Enterprise AI Workflow for Anna
```

Short description:

```text
Release Risk Review is an Anna App prototype that turns an enterprise release candidate into a structured AI-native workflow: inspect release context, call a release-risk tool, generate targeted test actions, save review state, and stop at a human approval checkpoint.
```

What was built:

```text
I packaged Enterprise AI Engineering Orchestrator as a focused Anna App prototype. The app UI shows a release-risk review workspace, the local Executa-style tool returns risk score/evidence/recommended tests through JSON-RPC over stdio, and the Skill card tells the assistant how to prepare a human-review packet without auto-promoting a risky release.
```

How AI is used:

```text
The AI workflow acts as a release-review assistant. It reads release context, calls the risk assessment tool, explains the highest-risk changes, drafts targeted test actions, and prepares the human approval packet. The important product behavior is not a chatbot response; it is an inspectable workflow with tool output, saved state, and explicit human review.
```

Anna connection:

```text
The repository includes a schema-2 Anna App manifest, static UI bundle, local Executa-style tool, and Skill card under `anna-app/release-risk-review/`. This mirrors Anna's app model: UI, tools, state, permissions, and human review around one workflow.
```

Standalone package:

```text
https://github.com/zemeng2015/enterprise-ai-engineering-orchestrator/releases/download/v2026-june-submission/release-risk-review-anna-app.zip
```

Boundary:

```text
This is a runnable hackathon prototype package, not a published Anna App Store listing. It uses safe simulated release context and does not call live customer systems or mutate repositories.
```

Judge quickstart:

```text
The package includes anna-app/release-risk-review/SUBMISSION.md with the public demo, repository, stable release zip, exact local verification commands, and the Anna judging-fit mapping.
```
