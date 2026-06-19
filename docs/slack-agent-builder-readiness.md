# Slack Agent Builder Challenge Readiness

## Candidate

- Hackathon: Slack Agent Builder Challenge
- Public page: `https://slackhack.devpost.com/`
- Deadline: July 13, 2026 at 5:00 PM PDT.
- Current public signal checked on 2026-06-19 CST: page shows online, public, ages 18+, $42,000 cash prize pool, and enterprise agent tracks.
- Fit: strong, but final submission requires a real Slack developer sandbox URL and judge access.

## Official Requirements Captured

The project must use at least one of:

- Slack AI capabilities
- MCP server integration
- Real-Time Search API

The selected fit is `MCP server integration` plus a new Slack release-risk agent.

Submission needs:

- Project track.
- Text description of features and functionality.
- Around 3-minute demo video with working project footage.
- Architecture diagram.
- URL to the Slack developer sandbox.
- Access granted to `slackhack@salesforce.com` and `testing@devpost.com`.
- For the Slack Agent for Organizations track, a Slack App ID proving Marketplace submission or resubmission.

## Project Positioning

Submission title:

```text
Enterprise Release Risk Agent for Slack
```

Short description:

```text
A Slack-native release-risk agent that calls a local MCP review tool, posts targeted test recommendations into a release channel, and holds high-risk deployments for human approval.
```

Recommended track:

```text
New Slack Agent
```

Do not claim the Slack Agent for Organizations track unless a real Slack Marketplace submission and Slack App ID are completed.

## What Was Prepared

- Live demo mode: `Slack Agent Builder`.
- Local proof command: `npm run slack:proof`.
- Local proof artifact: `outputs/slack-agent-builder-proof.json`.
- Slack agent scaffold: `slack-agent/release-risk-agent/`.
- MCP-style tool manifest: `slack-agent/release-risk-agent/mcp-server.example.json`.
- Slack agent draft manifest: `slack-agent/release-risk-agent/slack-agent.example.json`.
- Public repository: `https://github.com/zemeng2015/enterprise-ai-engineering-orchestrator`.
- Live demo: `https://zemeng2015.github.io/enterprise-ai-engineering-orchestrator/`.
- Demo video: `https://youtu.be/8AKMY8VoN7c`.

## Local Verification

Run:

```bash
npm run slack:proof
```

Expected output:

```text
Slack Agent proof passed: MCP tool release_risk.review, 4 workflow steps, digest ...
```

The proof verifies:

- a Slack agent draft exists,
- an MCP server integration draft exists,
- the agent includes a release-risk review flow,
- the MCP tool exposes `release_risk.review`,
- the prepared workflow preserves a human approval checkpoint,
- the current boundary does not claim a live Slack sandbox.

## Submission Copy

```markdown
## Inspiration

Enterprise release review already happens in chat, but the facts needed for approval live across repositories, CI, QA plans, and human judgment. Slack is the right surface because it lets a release-risk agent meet reviewers where they already coordinate work.

## What it does

Enterprise Release Risk Agent for Slack opens a release review thread, calls a release-risk MCP tool, summarizes risky changes, recommends targeted tests, and blocks promotion until a human reviewer approves the evidence packet.

## How it uses Slack

The submitted package includes a Slack Agent draft under `slack-agent/release-risk-agent/`, an MCP-style tool manifest exposing `release_risk.review`, and a proof command, `npm run slack:proof`, that validates the agent flow, MCP integration, and human approval checkpoint. The live demo includes a `Slack Agent Builder` mode showing the intended review workflow.

## Built with

React, TypeScript, Vite, Node.js proof scripts, Slack Agent Builder draft, MCP-style review tool.

## Boundary

The current proof is Slack-ready but does not claim a live Slack sandbox URL until a real Slack developer workspace is connected. Final Slack judging requires sharing the sandbox with `slackhack@salesforce.com` and `testing@devpost.com`.
```

## Current Blocker

Final submission requires a real Slack developer sandbox URL. The sandbox must be accessible to `slackhack@salesforce.com` and `testing@devpost.com`. A Slack Marketplace App ID is only needed if entering the Slack Agent for Organizations track.
