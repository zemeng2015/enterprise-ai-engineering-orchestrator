# Anna Hackathon Submission

## Project

Release Risk Review: Human-Governed Enterprise AI Workflow for Anna

## One-Line Summary

An Anna App prototype that turns an enterprise release candidate into an inspectable AI-native workflow: review release context, call a risk tool, recommend targeted tests, save state, and stop at a human approval checkpoint.

## Submission Links

- Live demo: https://zemeng2015.github.io/enterprise-ai-engineering-orchestrator/
- Public repository: https://github.com/zemeng2015/enterprise-ai-engineering-orchestrator
- Stable release package: https://github.com/zemeng2015/enterprise-ai-engineering-orchestrator/releases/download/v2026-june-submission/release-risk-review-anna-app.zip
- Readiness notes: https://raw.githubusercontent.com/zemeng2015/enterprise-ai-engineering-orchestrator/main/docs/anna-ai-native-readiness.md

## Judge Quickstart

From the repository root:

```bash
npm install
npm run anna:proof
```

Expected proof output:

```text
Anna App proof passed: manifest, UI bundle, local Executa tool, and human-review workflow are ready.
```

To regenerate the standalone zip:

```bash
npm run anna:package
```

## What To Inspect

- `manifest.json`: schema-2 app manifest with prompt guidance, static UI view, storage permissions, and chat artifact permission.
- `ui/index.html`: compact release-risk review UI for one clear workflow.
- `executas/release-risk-review/tool.mjs`: JSON-RPC 2.0 stdio tool with `describe`, `assess_release_risk`, and `draft_human_review_packet`.
- `skills/release-risk-review/SKILL.md`: assistant behavior card for producing a review packet without auto-approval.
- `fixtures/release-risk-review.jsonl`: sample tool-call transcript for the local workflow.

## Fit With Anna

Anna's hackathon asks for small, useful AI-native app prototypes around one workflow. This package focuses on a single enterprise developer workflow: release-risk review. It uses the Anna-style building blocks of app UI, tools, saved state, permissions, and human review rather than stopping at a chatbot demo.

## Boundary

This is a runnable hackathon prototype package, not a published Anna App Store listing. It uses safe simulated release context and does not call live customer systems, mutate repositories, send messages, or deploy code.
