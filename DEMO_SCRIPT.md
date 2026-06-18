# 5-Minute Demo Script

Use this for the UiPath AgentHack demo video. Keep the recording under 5 minutes and show the running app, not only slides.

Recommended demo URL:

```text
https://zemeng2015.github.io/enterprise-ai-engineering-orchestrator/
```

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

- Keep `UiPath AgentHack` selected for the final submission recording.
- Point out `UiPath Automation` in the Repo Context panel as the planned orchestration layer.
- Point out `UiPath Automation` in the Agent Workflow timeline as the human approval route.
- Mention that `GitLab Transcend` and `Mind the Product` modes are present only to show the reusable product surface, but the Devpost submission is for UiPath Test Cloud.

## 4:20 - 5:00 Closing

Close with:

This MVP demonstrates the release-governance layer that enterprise AI engineering teams need: context, risk, generated tests, evidence, and human approval in one workflow.

Next steps are live GitLab context, UiPath Test Cloud execution, Automation Cloud approval routing, and real generated test patches.

## Exact Click Path

1. Open the live demo URL.
2. Confirm `Positioning` is set to `UiPath AgentHack`.
3. Click `Run Risk Scan`.
4. Scroll or point to `Impacted Tests`.
5. Click `Generate Tests`.
6. Point to `Evidence`.
7. Click `Approve Release`.
8. Close by showing the public GitHub repo and README.

## Recording Checklist

- Browser zoom: 100%.
- Window size: desktop/laptop width, not mobile.
- Keep the Devpost page closed during recording unless showing final project links.
- Do not show private email, tokens, browser profile settings, or UiPath credentials.
- If Labs access has not arrived yet, say clearly: "The public MVP uses a safe simulated adapter; the UiPath Labs environment will replace this adapter for the final connected run."
