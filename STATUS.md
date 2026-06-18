# Current Status

Last updated: 2026-06-19

## UiPath AgentHack

Status: **IN_PROGRESS**

What is done:

- Public GitHub repo is available.
- GitHub Pages demo is live.
- Devpost project draft exists.
- Devpost draft is 4/5 steps complete.
- UiPath Automation Cloud invite has been completed.
- UiPath Labs environment URL has been captured and saved in Devpost Additional info.
- Devpost Additional info is saved with solo participation (`Individual`) and an empty team-name field.
- Devpost Project Story has been replaced with the clean final story.
- Public Devpost preview has been checked for the clean story, demo embed, public demo link, and absence of private email or one-time UiPath URL text.
- Demo video URL is filled on Devpost.
- Presentation deck path is present in the repo.
- Devpost thumbnail asset is ready in `docs/screenshots/devpost-thumbnail.png`.
- Local preflight passes: typecheck, build, submission files, and audit.

Current blocker:

- Final Devpost submission requires action-time confirmation before checking the Official Rules / Devpost Terms checkbox and clicking `Submit project`.

Current Devpost draft issues observed:

- Devpost project thumbnail still shows the placeholder image. The local thumbnail asset is ready, but automated upload was not available in the current browser tooling.
- Official Rules and Devpost Terms are not yet accepted.
- Final `Submit project` has not been clicked.

Remaining work:

- Optionally upload `docs/screenshots/devpost-thumbnail.png` as the Devpost project thumbnail if a manual browser file picker is available.
- Follow `docs/FINAL_SUBMISSION_RUNBOOK.md` for final field checks.
- After explicit rules/terms confirmation, set `officialRulesReadyToAccept` in `submission.readiness.local.json`, rerun `npm run final-readiness`, then complete Devpost finalization.
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
