# Final Submission Runbook

Use this when finishing the UiPath AgentHack Devpost submission.

## Current Authoritative Links

- Devpost project draft: `Enterprise AI Orchestrator for UiPath`
- Public demo: https://zemeng2015.github.io/enterprise-ai-engineering-orchestrator/
- Public repository: https://github.com/zemeng2015/enterprise-ai-engineering-orchestrator
- Deck: https://github.com/zemeng2015/enterprise-ai-engineering-orchestrator/raw/main/docs/uipath-agenthack-presentation.pptx
- Demo video: https://youtu.be/8AKMY8VoN7c

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
4. Add the UiPath Labs environment URL after the access email arrives.
5. Confirm the demo video URL is still `https://youtu.be/8AKMY8VoN7c`.
6. If submitting solo, set the participation field to `Individual` rather than `Team`.
7. Replace the duplicated Project Story headings with the clean final story from `DEVPOST_DRAFTS.md`.
8. Follow `docs/DEVPOST_FIELD_FIXES.md` for the field-by-field final pass.
9. Preview the public project page and confirm there is no private email, token, credential, or unsupported claim.
10. Update local `submission.readiness.local.json` flags only after the matching Devpost field has actually been saved and checked.

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

Only click `Submit project` after all required fields are filled and the final preview has been checked. After submitting, Devpost still allows edits until the submission deadline, but the submission should be treated as final for judging quality.

## Known Current Blockers

- UiPath Labs environment URL is still required.
- The participation field currently needs a solo/team sanity check.
- The Project Story currently needs cleanup because duplicated empty Markdown headings are visible.
- Official Rules and Devpost Terms still need final review before checking the box.
