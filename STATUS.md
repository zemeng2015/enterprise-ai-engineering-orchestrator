# Current Status

Last updated: 2026-06-18

## UiPath AgentHack

Status: **IN_PROGRESS**

What is done:

- Public GitHub repo is available.
- GitHub Pages demo is live.
- Devpost project draft exists.
- Devpost draft is 3/5 steps complete.
- UiPath Labs access request has been submitted.
- Presentation deck path is present in the repo.
- Local preflight passes: typecheck, build, submission files, and audit.

Current blocker:

- Waiting for UiPath Labs environment URL. Devpost requires this URL in Additional info before finalization.

Remaining work:

- Add UiPath Labs URL to Devpost when received.
- Record and upload the demo video.
- Follow `docs/FINAL_SUBMISSION_RUNBOOK.md` for final field checks.
- Fill `submission.readiness.local.json` locally and run `npm run final-readiness` when Labs/video URLs are available.
- Complete Devpost finalization.
- Optionally update README/screenshots after real UiPath Labs access is connected.

## Active Public Links

- Demo: https://zemeng2015.github.io/enterprise-ai-engineering-orchestrator/
- Repository: https://github.com/zemeng2015/enterprise-ai-engineering-orchestrator

## Decision

Use `enterprise-ai-engineering-orchestrator` as the primary Devpost submission repository. The earlier `uipath-agenthack-qa-orchestrator` repo is a narrower first MVP and should not be the main Devpost artifact unless the submission direction changes.

## Submission Prep Artifacts

- Final runbook: `docs/FINAL_SUBMISSION_RUNBOOK.md`
- Devpost field fixes: `docs/DEVPOST_FIELD_FIXES.md`
- Demo script: `DEMO_SCRIPT.md`
- Teleprompter script: `docs/DEMO_TELEPROMPTER.md`
- Video recording package: `docs/VIDEO_RECORDING_PACKAGE.md`
- Devpost copy: `DEVPOST_DRAFTS.md`
