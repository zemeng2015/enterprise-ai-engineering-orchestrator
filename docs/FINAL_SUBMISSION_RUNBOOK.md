# Final Submission Runbook

Use this to audit or edit the UiPath AgentHack Devpost submission.

## Current Authoritative Links

- Devpost project: `Enterprise AI Orchestrator for UiPath`
- Public demo: https://zemeng2015.github.io/enterprise-ai-engineering-orchestrator/
- Public repository: https://github.com/zemeng2015/enterprise-ai-engineering-orchestrator
- Deck: https://github.com/zemeng2015/enterprise-ai-engineering-orchestrator/raw/main/docs/uipath-agenthack-presentation.pptx
- Demo video: https://youtu.be/8AKMY8VoN7c
- Thumbnail asset: `docs/screenshots/devpost-thumbnail.png`
- Official rules review notes: `docs/OFFICIAL_RULES_REVIEW_NOTES.md`

## Before Finalizing

Run the local checks:

```bash
npm run preflight
npm run submission-audit
npm run final-readiness
```

1. Confirm the Devpost project is still on `Track 3: UiPath Test Cloud`.
2. Confirm the GitHub repository field points to:

```text
https://github.com/zemeng2015/enterprise-ai-engineering-orchestrator
```

3. Confirm the deck field points to the public raw PPTX link.
4. Confirm the UiPath Labs environment URL remains saved in Devpost Additional info.
5. Confirm the ignored local readiness file contains the real Labs environment URL.
6. Confirm the demo video URL is still `https://youtu.be/8AKMY8VoN7c`.
7. If submitting solo, set the participation field to `Individual` rather than `Team`.
8. Replace the duplicated Project Story headings with the clean final story from `DEVPOST_DRAFTS.md`.
9. Optionally upload `docs/screenshots/devpost-thumbnail.png` as the Devpost thumbnail to replace the placeholder image if a manual file picker is available.
10. Follow `docs/DEVPOST_FIELD_FIXES.md` for the field-by-field final pass.
11. Preview the public project page and confirm there is no private email, token, credential, or unsupported claim.
12. Review `docs/OFFICIAL_RULES_REVIEW_NOTES.md`, the official rules, and the Devpost Terms before checking the final terms box.
13. Update local `submission.readiness.local.json` flags only after the matching Devpost field has actually been saved and checked.

## Demo Video Requirements

- Maximum length: 5 minutes.
- Host on YouTube, Vimeo, or Loom.
- Must show the solution running.
- Should walk through architecture, agents, orchestration, and human approval.
- Should say clearly that the public MVP is safe/simulated until UiPath Labs access is connected.
- Use `docs/VIDEO_RECORDING_PACKAGE.md` as the storyboard and frame checklist.

## Final Devpost Checklist

Devpost final reminder items:

- Track selected.
- Demo video included.
- Public GitHub repository linked.
- Completed presentation deck linked.
- Project started after May 14, 2026.
- UiPath Platform is described as the orchestration layer.
- Coded-agent usage is clearly indicated in README/project description.
- One track only.
- Official Rules and Devpost Terms checkbox accepted.

## Submit Step

Submitted. Devpost still allows edits until the submission deadline, but the submitted version should be treated as final for judging quality.

## Known Current Blockers

- None for the first submitted version.
- Optional polish: the thumbnail still shows the placeholder image; this does not block the submitted project.
