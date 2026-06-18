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
- Demo video must be publicly visible on an accepted video host.
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
- License: `LICENSE` contains MIT.
- README includes UiPath Test Cloud, UiPath workflow automation, coded-agent logic, low-code UiPath workflow intent, and setup instructions.
- Local `npm run submission-audit` checks the public demo, public repo, deck link, required files, README terms, and final blockers.
- UiPath Automation Cloud invite has been found; the final account invite step is pending explicit user confirmation.

## Pending Before Final Submit

- Paste the real UiPath Labs environment URL into Devpost Additional info.
- Complete the UiPath Automation Cloud invite and capture the real environment URL; do not use a guessed or placeholder URL.
- If Zack is submitting solo, save Devpost participation as `Individual` rather than `Team`.
- Replace the current Devpost project story because the public preview shows duplicated empty Markdown headings.
- Preview the public Devpost page after those edits and confirm no private email, token, credential, tenant secret, or unsupported live-platform claim appears.
- Zack should review the Official Rules and Devpost Terms before checking the terms checkbox.
- Click `Submit project` only after the above items are complete.

## Risk Notes

- The current MVP is honest about UiPath Labs access: it demonstrates the safe orchestration workflow and states that the live UiPath Test Cloud adapter is pending sandbox access.
- Do not claim the project already runs live UiPath Test Cloud until a real Labs environment is connected.
- Do not include screenshots or URLs that expose tenant secrets, emails beyond required submission fields, tokens, or private customer data.
- Keep the YouTube video public or unlisted-but-accessible for judges through the judging period.
