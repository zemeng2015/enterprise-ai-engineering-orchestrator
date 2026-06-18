# Devpost Drafts

Use these as copy/paste starting points after the public GitHub repo and demo URL are available.

Shared links to fill in later:

```text
GitHub repo: https://github.com/zemeng2015/enterprise-ai-engineering-orchestrator
Demo URL: https://zemeng2015.github.io/enterprise-ai-engineering-orchestrator/
Demo video: TBD
```

Current UiPath AgentHack status:

```text
Devpost draft: created
Draft progress: 3/5 steps complete
UiPath Labs request: submitted
Blocking field: UiPath Labs environment URL
Remaining submission asset: demo video
```

## UiPath AgentHack

### Project title

Enterprise AI Engineering Orchestrator

### Tagline

Human-governed agentic QA orchestration for enterprise release risk.

### Submission track

UiPath Test Cloud

### What it does

Enterprise AI Engineering Orchestrator turns release changes into a governed QA workflow. It reviews simulated repository context, identifies high-risk areas, proposes targeted tests, assembles evidence, and routes a human approval checkpoint before release promotion.

### UiPath angle

The project is designed around UiPath as the orchestration and governance layer. The current MVP demonstrates the workflow surface and safe integration boundary. The planned UiPath integration would use UiPath Automation Cloud to coordinate the agent workflow, UiPath Test Cloud to execute impacted tests, and a human-in-the-loop approval task before a release can move forward.

### Built with

React, TypeScript, Vite, Lucide React, local simulated workflow state.

### Demo flow

1. Switch positioning to `UiPath AgentHack`.
2. Show `UiPath Automation` in Repo Context and Agent Workflow.
3. Click `Run Risk Scan`.
4. Review impacted tests and evidence.
5. Click `Generate Tests`.
6. Click `Approve Release` to show the human checkpoint.

### Safety note

This MVP does not call live UiPath or customer systems yet. No credentials or tokens are collected. The demo keeps external integrations mocked until the authorization and platform setup are complete.

## GitLab Transcend Hackathon

### Project title

Enterprise AI Engineering Orchestrator

### Tagline

Repository-aware developer workflow agent for release confidence.

### What it does

The app demonstrates a concrete developer workflow: take repository context, assess release risk, identify missing tests, generate test work items, and produce an evidence packet for review. It is an operational dashboard rather than a chatbot.

### GitLab angle

The GitLab positioning emphasizes `GitLab Context` as the source of merge request, code ownership, and CI signals. The Codex Test Agent uses those signals to propose targeted tests and release gates. In a live version, this would connect to GitLab merge requests, CI pipeline status, generated test patches, and review comments.

### Built with

React, TypeScript, Vite, Lucide React, local simulated workflow state.

### Demo flow

1. Switch positioning to `GitLab Transcend`.
2. Show the Repo Context panel and Agent Workflow timeline.
3. Click `Generate Tests`.
4. Explain the mapped path from GitLab MR diff to generated tests and approval evidence.

### Safety note

The MVP uses local simulated state and does not mutate GitLab repositories, branches, issues, merge requests, or CI settings.

## Mind the Product: Everyone Ships Now

### Project title

Enterprise AI Engineering Orchestrator

### Tagline

A shippable AI workflow product for product-minded engineering teams.

### What it does

The app gives engineering/product teams a compact release-readiness workflow: run a risk scan, review affected areas, generate test actions, collect evidence, and make a visible human approval decision. It is focused on a single painful operational loop rather than a broad platform.

### Product angle

This project is aimed at senior engineers, QA leads, release managers, and product-minded builders who need to ship faster without losing trust. The MVP demonstrates a clear product loop and can be instrumented with product analytics for learning and iteration.

### Built with

React, TypeScript, Vite, Lucide React, local simulated workflow state.

### Demo flow

1. Switch positioning to `Mind the Product`.
2. Show the buyer/user and workflow loop.
3. Click `Run Risk Scan`.
4. Click `Generate Tests`.
5. Click `Approve Release`.
6. Explain next iteration: analytics instrumentation and real integration pilots.

### Safety note

This version is a safe local product demo. It does not collect credentials, scrape browser sessions, or mutate external systems.

### Current submission blocker

Mind the Product requires Novus.ai to be installed and firing on the live deployed project, plus a screenshot of the Novus dashboard. Novus setup requires authorizing the Novus/Pendo GitHub app to read the repository and create an installation pull request.

## Shared Answers

### Inspiration

Coding agents can generate implementation quickly, but enterprise teams still need trust: what changed, what is risky, what tests prove readiness, and who approved the decision. This project explores the operational layer around AI-generated engineering work.

### Challenges

The main challenge was avoiding a generic chatbot demo. The useful product surface is a workflow: context, risk, generated actions, evidence, and human approval.

### Accomplishments

- Built a responsive dashboard MVP.
- Added per-hackathon positioning modes.
- Implemented scan, generated-test, and approval states.
- Kept integration boundaries safe and explicit.
- Prepared CI, README, MIT license, and demo script.

### What's next

- Add the UiPath Labs environment URL after access is provisioned.
- Record and host the demo video.
- Complete Devpost finalization.
- Connect GitLab MR and CI context.
- Connect UiPath Automation Cloud and Test Cloud.
- Add product analytics instrumentation for Mind the Product.
