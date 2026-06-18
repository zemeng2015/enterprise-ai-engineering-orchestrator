# Band Release Governance Agents

This folder is a Band-ready integration scaffold for the Lablab Band of Agents Hackathon candidate.

It follows the public Band documentation shape:

- remote agents run in the builder's environment,
- agent credentials come from the Band platform,
- agents communicate through a shared Band chat room,
- platform tools such as `band_send_message`, `band_add_participant`, `band_get_participants`, and `band_create_chatroom` are the collaboration layer,
- secrets are kept out of the repository.

## Agents

The submission uses four role-specific agents:

- Release Planner Agent
- Risk Evidence Agent
- QA Test Agent
- Human Review Agent

See `agents.json` for responsibilities, required inputs, emitted handoffs, and expected Band platform tools.

## Local Proof

From the repository root:

```bash
npm run band:proof
```

The proof validates the local room model, four agent roles, four handoffs, human review checkpoint, Band platform tool names, and the sample transcript in `room-transcript.jsonl`.

## Live Band Setup

When browser/account access is available:

1. Create four Remote Agents in Band.
2. Copy the agent UUIDs and API keys into a private `agent_config.yaml`.
3. Copy `.env.example` to `.env` and set LLM provider keys.
4. Create or join a Band room named `release-risk-governance`.
5. Add the four remote agents to the room.
6. Run the agents with the Band SDK or a custom REST/WebSocket integration.
7. Capture a live Band transcript screenshot or export before final judging.

## Boundary

This folder does not contain credentials, API keys, browser cookies, or live Band transcripts. The current artifact is a runnable local proof plus a Band-aligned integration scaffold.
