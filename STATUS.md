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
- Demo video URL is filled on Devpost.
- Presentation deck path is present in the repo.
- Devpost thumbnail asset is ready in `docs/screenshots/devpost-thumbnail.png`.
- Local preflight passes: typecheck, build, submission files, and audit.

Current blocker:

- Waiting for UiPath Labs environment URL. Devpost requires this URL in Additional info before finalization.

Current Devpost draft issues observed:

- Additional Info still has an empty UiPath Labs environment URL.
- Participation is currently saved as `Team`; change to `Individual` if Zack is submitting solo.
- Project Story currently shows duplicated empty Markdown headings before the real story.
- Official Rules and Devpost Terms are not yet accepted.
- Final `Submit project` has not been clicked.

Remaining work:

- Add UiPath Labs URL to Devpost when received.
- Confirm whether the Devpost participation field should be `Individual` or `Team`.
- Replace the duplicated Project Story with the clean final story from `DEVPOST_DRAFTS.md`.
- Optionally upload `docs/screenshots/devpost-thumbnail.png` as the Devpost project thumbnail.
- Follow `docs/FINAL_SUBMISSION_RUNBOOK.md` for final field checks.
- Fill the real Labs URL in `submission.readiness.local.json` and run `npm run final-readiness`.
- Complete Devpost finalization.
- Optionally update README/screenshots after real UiPath Labs access is connected.

## Active Public Links

- Demo: https://zemeng2015.github.io/enterprise-ai-engineering-orchestrator/
- Repository: https://github.com/zemeng2015/enterprise-ai-engineering-orchestrator
- Demo video: https://youtu.be/8AKMY8VoN7c

## Decision

Use `enterprise-ai-engineering-orchestrator` as the primary Devpost submission repository. The earlier `uipath-agenthack-qa-orchestrator` repo is a narrower first MVP and should not be the main Devpost artifact unless the submission direction changes.

## Submission Prep Artifacts

- Final runbook: `docs/FINAL_SUBMISSION_RUNBOOK.md`
- Devpost field fixes: `docs/DEVPOST_FIELD_FIXES.md`
- Demo script: `DEMO_SCRIPT.md`
- Teleprompter script: `docs/DEMO_TELEPROMPTER.md`
- Video recording package: `docs/VIDEO_RECORDING_PACKAGE.md`
- Devpost copy: `DEVPOST_DRAFTS.md`
