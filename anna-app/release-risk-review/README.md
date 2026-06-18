# Release Risk Review Anna App Prototype

This folder packages Enterprise AI Engineering Orchestrator as a focused Anna AI-Native App Hackathon artifact.

The prototype maps one workflow: review a release candidate, ask an AI/tool layer for release-risk evidence, generate targeted test actions, and keep the final decision behind a human approval checkpoint.

## Anna Fit

- App UI bundle: `ui/index.html` renders a compact release-risk review surface.
- Manifest: `manifest.json` is a schema-2 Anna App manifest with prompt guidance, storage/chat permissions, and a single default view.
- Executa-style tool: `executas/release-risk-review/tool.mjs` speaks JSON-RPC 2.0 over stdio for local proof.
- Skill card: `skills/release-risk-review/SKILL.md` describes how the assistant should run the review.
- Human review: the workflow stops at `needs-human-review` rather than auto-promoting a high-risk release.

## Local Proof

From the repository root:

```bash
npm run anna:proof
```

The proof script checks the manifest, verifies the UI entry file, starts the local tool, calls `describe`, calls `assess_release_risk`, and validates the human-review output.

## Submission Boundary

This is a runnable Anna App prototype package, not a published Anna App Store listing. It is suitable for the hackathon submission path that accepts a runnable project, zip, private repo, public repo, or local run instructions.

