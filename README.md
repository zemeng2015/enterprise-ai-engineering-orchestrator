# Enterprise AI Engineering Orchestrator

Reusable hackathon MVP for June 2026 remote prize submissions.

This is a local React/Vite demo of an engineering workflow orchestration product. It helps teams assess release risk, map repository context, generate targeted tests, collect evidence, and route human approval.

![Enterprise AI Engineering Orchestrator desktop dashboard](./docs/screenshots/orchestrator-desktop.png)

## Hackathon Positioning

The same demo can be described differently per submission:

- **UiPath AgentHack:** Agentic QA orchestration for regulated enterprise releases, with UiPath Automation / Test Cloud as the governance and human-approval layer.
- **GitLab Transcend:** Repository-aware developer workflow automation using GitLab context, CI signals, and generated tests.
- **Mind the Product:** A shippable AI workflow product that lets product-minded builders validate a concrete operational pain point quickly.

## What Works

- Switch between UiPath, GitLab, and product-MVP positioning.
- Run a simulated release risk scan.
- Generate test status changes from local UI state.
- Approve a release through a human checkpoint.
- Inspect impacted tests, workflow evidence, and repository context.

## Submission Materials

- [Submission packet draft](./SUBMISSION_PACKET.md)
- [5-minute demo script](./DEMO_SCRIPT.md)
- [Devpost draft copy](./DEVPOST_DRAFTS.md)
- [Deployment prep](./DEPLOYMENT.md)
- [UiPath AgentHack presentation deck](./docs/uipath-agenthack-presentation.pptx)
- [Devpost thumbnail asset](./docs/screenshots/devpost-thumbnail.png)

## UiPath AgentHack Readiness

This repository is the public code artifact for the UiPath AgentHack draft submission.

### Project Description

Enterprise AI Engineering Orchestrator helps enterprise engineering teams turn release context into governed QA action. The MVP ingests simulated repository and CI signals, surfaces release risk, recommends targeted tests, and routes the final decision through a human approval checkpoint.

### UiPath Components

The current public MVP demonstrates the orchestration and decision layer. The intended UiPath implementation path is:

- UiPath Test Cloud for approved validation execution.
- UiPath workflow automation for moving from release-risk review to test action.
- UiPath Labs sandbox environment for judging once access is provisioned.
- Human approval gates before agentic automation changes release state.

UiPath Labs access has been requested. The live Test Cloud adapter is pending sandbox access and is not represented as complete in this repository.

### Agent Type

Planned hybrid agent implementation:

- Coded agent logic for release-risk scoring, repository context normalization, and generated QA recommendations.
- Low-code UiPath workflow orchestration around test execution, review routing, and audit status updates.

### Setup Instructions

1. Install dependencies:

```bash
npm install
```

2. Start the local app:

```bash
npm run dev -- --port 5178
```

3. Open the app:

```text
http://127.0.0.1:5178/
```

4. Use the UiPath positioning mode in the left rail, run the release-risk workflow, inspect generated test recommendations, and approve or review the release checkpoint.

5. For production UiPath integration, replace the simulated execution adapter with UiPath Test Cloud calls after a UiPath Labs environment URL is available.

## Public Demo

- Demo: https://zemeng2015.github.io/enterprise-ai-engineering-orchestrator/
- Repository: https://github.com/zemeng2015/enterprise-ai-engineering-orchestrator

## Local Setup

```bash
npm install
npm run dev -- --port 5178
```

Open:

```text
http://127.0.0.1:5178/
```

Build:

```bash
npm run build
```

Security check:

```bash
npm audit --audit-level=high
```

## Current Submission Notes

- This version is a safe local demo. It does not call live GitLab, UiPath, Devpost, or customer systems.
- No credentials, tokens, cookies, or browser storage are collected.
- External integrations are represented as demo states and can be wired later behind explicit safety gates.
- Mind the Product final submission requires Novus.ai live instrumentation plus a hosted 2-3 minute demo video.

## License

MIT
