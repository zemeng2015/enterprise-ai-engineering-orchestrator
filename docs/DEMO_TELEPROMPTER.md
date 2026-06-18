# Demo Teleprompter

Target length: 4:30 to 4:50.

## Opening

Enterprise teams are adopting coding agents, but release governance has not caught up. A generated patch still needs risk assessment, targeted tests, evidence, and a human decision before it should move toward production.

This project is Enterprise AI Engineering Orchestrator, submitted to UiPath AgentHack under the UiPath Test Cloud track.

## Product Tour

This is a working dashboard, not a slide-only concept. The workflow starts with a release candidate, repository context, and a risk score. The goal is to turn engineering signals into a governed QA action plan.

The left side shows the operational areas: Release Risk, Agent Workflow, Repo Context, Impacted Tests, and Evidence.

The top positioning control is set to UiPath AgentHack. In this mode, the product is framed around UiPath Automation as the orchestration layer and UiPath Test Cloud as the validation surface.

## Risk Scan

I will click Run Risk Scan.

The scan simulates the coding-agent workflow reading changed files, ownership, CI signals, and high-risk release paths. The important part is that the agent output is not treated as an automatic release decision. It becomes evidence for a governed workflow.

The dashboard surfaces the current risk score, high-risk areas, changed files, and test drafts.

## Impacted Tests

The Impacted Tests table shows the concrete work queue. For example, the OAuth callback guard is high risk because the login redirect path changed. The suggested action is to generate regression tests for invalid nonce and stale state.

This is where UiPath Test Cloud fits into the final implementation: impacted test runs and validation evidence can be coordinated and attached to the release decision.

## Generate Tests

I will click Generate Tests.

The Codex Test Agent now turns the risk findings into targeted test work. In a connected implementation, this would create JUnit, Mockito, API contract, or frontend component tests, then feed the execution result back into the UiPath-governed workflow.

## Evidence

The Evidence panel shows the audit packet. It is intentionally visible because enterprise teams need to explain what changed, which tests were generated, what was reviewed, and why a release was approved or held.

## Human Approval

Now I will click Approve Release.

This is the core enterprise pattern: not autonomous production mutation, but governed automation. Agents prepare context and evidence. UiPath coordinates the workflow. A human remains accountable for high-impact release approval.

## Close

The current public MVP uses safe simulated workflow state and does not call live customer systems or store credentials. UiPath Labs access has been requested, and the integration seam is ready to replace the simulated adapter with UiPath Automation Cloud and Test Cloud calls.

The public GitHub repository includes the README, setup instructions, UiPath component plan, demo script, presentation deck, screenshots, and MIT license.

Enterprise AI Engineering Orchestrator shows how coding agents, UiPath Test Cloud, UiPath Automation, and human approval can work together to make AI-assisted engineering faster without giving up release accountability.
