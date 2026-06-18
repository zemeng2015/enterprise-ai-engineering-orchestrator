# Official Rules Review Notes

Last reviewed: 2026-06-18

Sources:

- UiPath AgentHack rules: https://uipath-agenthack.devpost.com/rules
- Devpost Terms of Service: https://info.devpost.com/legal/terms-of-service
- Hackathon dates page: https://uipath-agenthack.devpost.com/details/dates

These notes are a submission checklist, not legal advice. Zack should personally review the rules and terms before checking the Devpost terms checkbox.

## Key Submission Requirements

- Submission deadline: 2026-06-29 at 11:45pm EDT.
- Project start must be during the submission period; Devpost draft currently uses `17/06/2026`.
- Track: `3. UiPath Test Cloud`.
- Repository must be public, include source code/assets/instructions, and include a visible open-source license.
- README must describe the project, UiPath components, agent type, and setup instructions.
- Demo video must show the project running and stay under 5 minutes.
- Demo video must be visible on an accepted video host.
- Completed presentation deck must be linked with public access.
- Submission materials should avoid third-party trademarks/music/copyrighted assets unless authorized.
- Project must be original work and not violate third-party IP or privacy rights.
- The submitted project should be available free of charge for judging/testing through the judging period.

## Current Evidence

- Public repo: https://github.com/zemeng2015/enterprise-ai-engineering-orchestrator
- Public demo: https://zemeng2015.github.io/enterprise-ai-engineering-orchestrator/
- Demo video: https://youtu.be/8AKMY8VoN7c
- Presentation deck: https://github.com/zemeng2015/enterprise-ai-engineering-orchestrator/raw/main/docs/uipath-agenthack-presentation.pptx
- Thumbnail asset: `docs/screenshots/devpost-thumbnail.png`
- Public proof package: https://zemeng2015.github.io/enterprise-ai-engineering-orchestrator/submission-proof-index.json
- Stable release package: https://github.com/zemeng2015/enterprise-ai-engineering-orchestrator/releases/tag/v2026-june-submission
- License: `LICENSE` contains MIT.
- README includes UiPath Test Cloud, UiPath workflow automation, coded-agent logic, low-code UiPath workflow intent, and setup instructions.
- Local `npm run submission-audit` checks the public demo, public repo, deck link, required files, README terms, and final blockers.
- UiPath Automation Cloud invitations were accepted, and UiPath Labs Test Manager proof is captured in the public proof package.

## Current Submitted State

- UiPath AgentHack is submitted on Devpost and remains editable until the deadline.
- Devpost participation is saved as `Individual`.
- The UiPath Labs environment URL is saved in Devpost Additional info and tracked only in the ignored local readiness file.
- The public Devpost page should be previewed after any future edit to confirm no private email, token, credential, tenant secret, or unsupported live-platform claim appears.
- If browser editing is restored, paste the relevant proof block from `docs/devpost-proof-link-patch.md`.

## Risk Notes

- The current MVP is honest about UiPath Labs access: it demonstrates the safe orchestration workflow and includes a real UiPath Labs Test Manager project plus manual `Passed` validation proof.
- Do not claim the public web demo automatically runs live UiPath Test Cloud. Current proof is a hackathon Test Manager project and manual validation result.
- Do not include screenshots or URLs that expose tenant secrets, emails beyond required submission fields, tokens, or private customer data.
- Keep the YouTube video public or unlisted-but-accessible for judges through the judging period.
