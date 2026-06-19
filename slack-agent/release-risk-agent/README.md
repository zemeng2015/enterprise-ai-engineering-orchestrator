# Enterprise Release Risk Agent for Slack

This folder contains a Slack Agent Builder submission scaffold for the Slack Agent Builder Challenge.

It is intentionally honest about the current state:

- Prepared: agent flow, MCP-style tool contract, local proof.
- Pending: live Slack developer sandbox URL and judge access.

## Agent Flow

1. Open or join `#release-risk-review`.
2. Call MCP tool `release_risk.review` with release metadata.
3. Post a concise risk summary into the Slack thread.
4. Attach recommended tests and owner assignments.
5. Hold release promotion until human approval is captured.

## Files

- `slack-agent.example.json`: Slack Agent Builder draft manifest.
- `mcp-server.example.json`: MCP-style release-risk review tool contract.
- `sample-slack-thread.json`: sample thread transcript for local proof.

## Local Proof

```bash
npm run slack:proof
```

The proof verifies the prepared agent and MCP artifacts without claiming a live Slack sandbox.
