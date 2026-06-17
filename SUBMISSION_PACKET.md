# Submission Packet Draft

## Project Title

Enterprise AI Engineering Orchestrator

## Short Tagline

Agentic release-risk, test-generation, and human-approval workflow for enterprise engineering teams.

## Project Summary

Enterprise AI Engineering Orchestrator is a working local demo of an AI-assisted engineering workflow dashboard. It reads simulated repository and release context, identifies high-risk changes, proposes targeted tests, assembles evidence, and routes a human approval checkpoint before release promotion.

The MVP is intentionally safe: it does not call live customer systems, store credentials, or mutate external platforms. It demonstrates the orchestration surface and decision workflow needed before wiring real provider integrations.

## Shared Value Proposition

Modern coding agents can generate code and tests quickly, but enterprise teams still need governance: risk visibility, evidence, approval routing, and release accountability. This project turns agent output into an operational workflow a QA lead, release manager, or senior engineer can trust.

## UiPath AgentHack Positioning

Recommended track: **UiPath Test Cloud**

Position as:

> A human-governed agentic QA orchestration layer for regulated enterprise releases.

UiPath components to describe:

- UiPath Automation as the orchestration and governance layer.
- UiPath Test Cloud as the planned execution surface for impacted test runs.
- Human approval task before release promotion.
- Codex-style coding agent for test generation and repair.

Demo emphasis:

1. Run a risk scan.
2. Show impacted tests and evidence.
3. Generate test drafts.
4. Route release approval through human governance.

## GitLab Transcend Positioning

Position as:

> A repository-aware developer workflow agent that turns GitLab context into release-confidence actions.

GitLab components to describe:

- GitLab Context as the repo/MR signal source.
- GitLab CI-style test and failure signals.
- Agent workflow that performs a concrete action: identifies missing tests and updates the work queue.

Demo emphasis:

1. Switch positioning to GitLab Transcend.
2. Show `GitLab Context` in Repo Context and workflow.
3. Click `Generate Tests`.
4. Explain how a real integration would use merge request diffs, CI status, and generated test patches.

## Mind the Product Positioning

Position as:

> A shippable AI workflow product that helps engineering/product teams validate release risk before customer impact.

Demo emphasis:

1. Present the buyer/user: senior engineers, QA leads, release managers.
2. Show a polished operational workflow, not just a slide concept.
3. Explain the minimum product loop: risk scan, evidence, action, approval.
4. Leave room for analytics instrumentation such as Novus.ai if required by the rules.

## Built With

- React
- TypeScript
- Vite
- Lucide React
- Local simulated state

## Safety Notes

- No live GitLab, UiPath, Devpost, or customer API calls.
- No credentials, cookies, localStorage/sessionStorage scraping, or browser session access.
- No external mutations.
- Integration points are represented as safe demo states and can be gated later.

## Suggested Devpost Fields

### Inspiration

Enterprise teams are adopting coding agents, but the hard part is not just generating code. The harder problem is deciding what changed, what tests are missing, what evidence proves readiness, and who approves the release. This project explores that governance layer.

### What it does

It provides a dashboard where a team can run a simulated release-risk scan, review repository context, inspect impacted tests, generate test work items, collect evidence, and approve or hold a release.

### How we built it

The current MVP is a React/Vite application with local simulated workflow state. The UI is structured around reusable panels for release risk, repo context, agent workflow, impacted tests, human approval, and evidence. The same codebase can be positioned for UiPath, GitLab, and product-focused hackathon submissions.

### Challenges

The main challenge is designing an agent workflow that feels enterprise-trustworthy rather than a generic chatbot. The MVP focuses on traceability, evidence, and human checkpoints before adding live integrations.

### Accomplishments

- Built a working responsive dashboard.
- Added three hackathon positioning modes.
- Implemented local workflow state for scan, generation, and approval.
- Kept the integration boundary safe and explicit.

### What is next

- Connect GitLab merge request and CI context.
- Connect UiPath Test Cloud execution and Automation Cloud approval routing.
- Generate real test patches and evidence bundles.
- Add product analytics instrumentation for usage validation.
