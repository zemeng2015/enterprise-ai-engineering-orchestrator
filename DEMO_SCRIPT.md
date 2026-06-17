# 5-Minute Demo Script

## 0:00 - 0:30 Problem

Engineering teams are using coding agents to move faster, but release governance has not caught up. A generated patch still needs risk assessment, impacted tests, evidence, and human approval.

## 0:30 - 1:10 Product Overview

Open the dashboard and introduce the six operational regions:

- Release Risk
- Repo Context
- Agent Workflow
- Impacted Tests
- Human Approval
- Evidence

Explain that this is a safe local MVP with provider integrations represented as demo states.

## 1:10 - 2:00 Run Risk Scan

Click `Run Risk Scan`.

Narration:

The orchestrator reads repository context, maps release risk, and identifies which areas need generated or repaired tests. The risk score and evidence are visible before any approval decision.

## 2:00 - 2:50 Generate Tests

Click `Generate Tests`.

Narration:

The Codex Test Agent turns the risk findings into targeted test work. In a full integration, this would create JUnit/Mockito tests or frontend component tests and attach CI evidence.

## 2:50 - 3:35 Human Approval

Click `Approve Release`.

Narration:

The key enterprise pattern is not autonomous release mutation. It is governed automation: agents prepare evidence and humans approve the release decision.

## 3:35 - 4:20 Hackathon-Specific Positioning

Switch the positioning dropdown:

- UiPath AgentHack: show UiPath Automation as the orchestration layer.
- GitLab Transcend: show GitLab Context as the repository signal source.
- Mind the Product: position as a shippable product workflow with measurable feedback.

## 4:20 - 5:00 Closing

Close with:

This MVP demonstrates the release-governance layer that enterprise AI engineering teams need: context, risk, generated tests, evidence, and human approval in one workflow.

Next steps are live GitLab context, UiPath Test Cloud execution, Automation Cloud approval routing, and real generated test patches.
