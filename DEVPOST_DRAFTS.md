# Devpost Drafts

Use these as copy/paste starting points after the public GitHub repo and demo URL are available.

Shared links to fill in later:

```text
GitHub repo: https://github.com/zemeng2015/enterprise-ai-engineering-orchestrator
Demo URL: https://zemeng2015.github.io/enterprise-ai-engineering-orchestrator/
Demo video: https://youtu.be/8AKMY8VoN7c
```

Current UiPath AgentHack status:

```text
Devpost project: submitted
UiPath Labs environment URL: saved in Devpost Additional info and local ignored readiness file
UiPath Test Manager: project created; manual release-risk validation result marked Passed
Participation type: Individual
Remaining blocker: none for the first submitted version
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

The project is designed around UiPath as the orchestration and governance layer. The public MVP demonstrates the workflow surface and safe integration boundary, and the UiPath Labs sandbox contains a Test Manager project with a manual `Passed` validation result for the release-risk gate. A fuller production integration would use UiPath Automation Cloud to coordinate the agent workflow, UiPath Test Cloud to execute impacted tests, and a human-in-the-loop approval task before a release can move forward.

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

This MVP does not call live customer systems. No credentials or tokens are collected. The public demo keeps external integrations mocked; the UiPath Labs proof is limited to a hackathon Test Manager project and manual passed validation evidence.

### Final project story

```markdown
## Inspiration

Enterprise QA and release teams often have the same problem: the work is not a lack of dashboards, it is the gap between repository changes, CI signal, process ownership, and a clear human decision. UiPath AgentHack is a strong fit because agentic automation should help teams turn release risk into governed action instead of yet another isolated report.

## What it does

Enterprise AI Orchestrator turns a release into an operator-style workflow: it summarizes delivery context, highlights risk, proposes generated test coverage, and keeps a human approval step before automation proceeds. For UiPath, the intended path is to connect this workflow to UiPath Test Cloud and agentic automation so release teams can move from risk review to executable validation.

## How we built it

The MVP is a React + TypeScript + Vite application with a compact enterprise workflow interface, simulated repository/CI signals, risk scoring, generated test recommendations, and an audit-friendly decision queue. The public demo, source repository, demo video, submission deck, and UiPath Labs Test Manager proof are available now so the next iteration can automate the workflow against the sandbox.

## Challenges

The main challenge was keeping the demo honest: the current version shows the orchestration pattern and human-governed workflow, with UiPath Labs Test Manager evidence captured as a manual validation proof. The product is structured so the simulated automation layer can be replaced with automatic UiPath execution once the integration is wired in.

## Accomplishments

We shipped a public demo, source repository, submission packet, presentation deck, demo video, and UiPath Labs Test Manager proof in one working session. The project is positioned as a practical bridge between enterprise release governance and agentic process automation.

## What we learned

The useful agentic layer is not only test generation; it is the evidence trail around risk, generated actions, and human approval. The interface needs to make automation decisions inspectable before teams trust it in a release workflow.

## What's next

Next steps are to automate UiPath Test Cloud execution, add robot/test execution status, persist audit trails, and package the workflow as a repeatable release-readiness assistant for enterprise engineering teams.
```

## GitLab Transcend Hackathon

### Project title

Enterprise AI Engineering Orchestrator

### Tagline

Repository-aware developer workflow agent for release confidence.

### What it does

The app demonstrates a concrete developer workflow: take repository context, assess release risk, identify missing tests, generate test work items, and produce an evidence packet for review. It is an operational dashboard rather than a chatbot.

### GitLab angle

The GitLab positioning emphasizes GitLab Orbit-style context as the source of merge request, code ownership, CI, dependency, and deployment signals. The repo now includes a project-level GitLab Duo Agent Skill at `skills/release-risk-orbit/SKILL.md`; the skill defines the reusable workflow for turning Orbit context into targeted tests, release gates, and approval evidence. The live dashboard currently demonstrates the same workflow with simulated GitLab context.

### Built with

React, TypeScript, Vite, Lucide React, local simulated workflow state.

### Demo flow

1. Switch positioning to `GitLab Transcend`.
2. Show the Repo Context panel and Agent Workflow timeline.
3. Click `Generate Tests`.
4. Explain the mapped path from GitLab MR diff to generated tests and approval evidence.
5. Point judges to `skills/release-risk-orbit/SKILL.md` as the GitLab Duo skill artifact.

### Safety note

The MVP uses local simulated state and does not mutate GitLab repositories, branches, issues, merge requests, or CI settings. If live GitLab Orbit access is unavailable, the submission should stay explicit that the dashboard is simulated and the reusable GitLab artifact is the project-level skill.

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

### Current submission status

Mind the Product has been submitted. Novus/Pendo is installed on the live deployed project, and a public dashboard proof screenshot is committed at `docs/novus-dashboard-live-after-install.png`.

## Casper Agentic Buildathon 2026

### Project title

Enterprise AI Orchestrator: Verifiable Agentic Release Audit on Casper

### Tagline

Agentic release governance with Casper Testnet audit receipts.

### What it does

The Casper extension turns an AI-assisted release decision into a verifiable audit receipt. The dashboard prepares the release-risk decision, canonicalizes the evidence payload, computes a SHA-256 hash, and displays the Casper Testnet receipt fields judges need to verify the decision trail.

### Casper angle

The project fits Casper by anchoring high-value enterprise agent decisions to a public testnet proof. Instead of treating an AI workflow as a black box, the release audit payload is hashed and correlated to a verified Casper Testnet transaction for the demo account.

Verified Testnet proof:

`https://testnet.cspr.live/transaction/6b2bad1bfd8fb5bd57d344310a0876c05ff454513df793b43f5b87e6e3f8af84`

This proof shows a successful `5,000.00 CSPR` faucet transfer to the Casper Snap account used by the demo. The current submission should describe this honestly as a Testnet transfer/audit receipt workflow, not as a custom smart-contract deployment.

### Built with

React, TypeScript, Vite, Node.js crypto, Casper Testnet proof workflow.

### Demo flow

1. Switch positioning to `Casper Buildathon`.
2. Show the release-risk context and human approval state.
3. Show the Casper receipt panel.
4. Run `npm run casper:proof` and show `outputs/casper-audit-proof.json`.
5. Open the Casper Testnet explorer URL and show the successful transaction.

### Safety note

The current repo prepares the audit payload and proof hash, and now includes a real Casper Testnet transaction proof. A stronger optional enhancement would be a custom Casper deploy or contract interaction that directly carries the audit hash.

## Anna AI-Native App Hackathon

### Title

Release Risk Review: Human-Governed Enterprise AI Workflow for Anna

### Tagline

An Anna App prototype for release-risk tool calls, saved review state, and human approval.

### Short description

Release Risk Review turns an enterprise release candidate into a structured AI-native workflow: inspect release context, call a release-risk tool, generate targeted test actions, save review state, and stop at a human approval checkpoint.

### What it does

The app focuses on one workflow. A release manager or QA owner opens the review, sees the release risk score, asks the tool layer for evidence, reviews the generated test recommendations, and keeps the final promotion decision behind a human checkpoint.

### How it uses Anna

The repository includes a schema-2 Anna App manifest, static UI bundle, local Executa-style JSON-RPC tool, and Skill card under `anna-app/release-risk-review/`. This mirrors Anna's app model: UI, tools, state, permissions, and assistant behavior bundled around a focused workflow.

### What to submit

- Repository: `https://github.com/zemeng2015/enterprise-ai-engineering-orchestrator`
- Live demo: `https://zemeng2015.github.io/enterprise-ai-engineering-orchestrator/`
- Anna package path: `anna-app/release-risk-review/`
- Readiness doc: `docs/anna-ai-native-readiness.md`
- Local proof command: `npm run anna:proof`
- Standalone Anna zip: `https://github.com/zemeng2015/enterprise-ai-engineering-orchestrator/releases/download/v2026-june-submission/release-risk-review-anna-app.zip`
- Demo video: `https://youtu.be/8AKMY8VoN7c`

### Boundary

This is a runnable hackathon prototype package, not a published Anna App Store listing. It uses safe simulated release context and does not call live customer systems or mutate repositories.

## Lablab Band of Agents Hackathon

### Title

Enterprise Multi-Agent Release Governance Orchestrator

### Tagline

Band-ready release governance where planner, risk, QA, and human-review agents coordinate through visible handoffs.

### Short description

Enterprise Multi-Agent Release Governance Orchestrator turns release readiness into a coordinated agent workflow. A planner agent opens the release room, a risk-evidence agent publishes structured release facts, a QA-test agent creates targeted validation work, and a human-review agent holds high-risk releases until evidence is approved.

### What it does

The demo adds a `Band of Agents` positioning mode to the live workflow. It shows a shared release-risk room model, agent handoffs, generated test actions, public proof links, and an explicit human approval checkpoint. The local proof script verifies four agents, four handoffs, and a final `needs-human-review` state.

### How it uses Band

This is currently a Band-ready local proof rather than a live Band API transcript. The intended Band room is `release-risk-governance`, where each agent publishes and consumes structured handoff payloads. Live Band account/API proof should be added if the Lablab submission path remains open and account access is available before final judging.

### What to submit

- Repository: `https://github.com/zemeng2015/enterprise-ai-engineering-orchestrator`
- Live demo: `https://zemeng2015.github.io/enterprise-ai-engineering-orchestrator/`
- Demo video: `https://youtu.be/8AKMY8VoN7c`
- Readiness doc: `docs/band-of-agents-readiness.md`
- Local proof command: `npm run band:proof`
- Local proof artifact: `outputs/band-agent-collaboration-proof.json`

### Boundary

The current proof is local and Band-ready. It does not claim a live Band API transcript until Band account/API access is available. The workflow uses safe simulated release context and does not mutate repositories, CI, customer systems, or external accounts.

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

- Keep the submitted Devpost pages updated with the public proof package when browser editing is available.
- Run the GitLab Duo skill against live GitLab Orbit context if access becomes available.
- Automate UiPath Test Cloud execution beyond the current manual `Passed` Test Manager proof.
- Add a stronger Casper deploy or contract interaction that directly carries the audit hash.
- Continue collecting product analytics signals from the installed Novus/Pendo SDK.
