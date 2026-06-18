import readline from "node:readline";

const releaseContext = {
  release_id: "checkout-2026.06.17",
  repository: "enterprise-checkout-api",
  changed_files: 12,
  high_risk_areas: ["OAuth callback guard", "Release gate API"],
  ci_signal: "2 flaky tests isolated",
};

const recommendedTests = [
  "Generate regression tests for invalid OAuth nonce and stale state.",
  "Add retry-exhaustion coverage for invoice worker timeout handling.",
  "Generate release-gate API contract tests for approval payload changes.",
];

function describe() {
  return {
    name: "release-risk-review",
    description: "Assess enterprise release risk and draft a human-review evidence packet.",
    tools: [
      {
        name: "assess_release_risk",
        description: "Return release risk, risk drivers, recommended tests, and approval state.",
        parameters: [
          {
            name: "release_id",
            type: "string",
            required: false,
            description: "Release identifier to evaluate.",
          },
        ],
      },
      {
        name: "draft_human_review_packet",
        description: "Create a concise review packet for a QA owner or release manager.",
        parameters: [
          {
            name: "owner",
            type: "string",
            required: false,
            description: "Human reviewer name or role.",
          },
        ],
      },
    ],
  };
}

function assessReleaseRisk(args = {}) {
  const releaseId = args.release_id || releaseContext.release_id;

  return {
    release_id: releaseId,
    risk_score: 71,
    approval_state: "needs-human-review",
    summary: "Auth callback and release-gate changes require targeted tests before promotion.",
    context: releaseContext,
    recommended_tests: recommendedTests,
    evidence_packet: {
      generated_by: "anna-app/release-risk-review",
      human_gate: "QA owner must approve after reviewing generated tests and evidence.",
      next_action: "Attach review packet to chat and keep release held until approval.",
    },
  };
}

function draftHumanReviewPacket(args = {}) {
  const owner = args.owner || "QA owner";
  const assessment = assessReleaseRisk(args);

  return {
    title: `Release review packet for ${assessment.release_id}`,
    owner,
    decision: "hold-for-review",
    body: [
      `Risk score: ${assessment.risk_score}`,
      `Summary: ${assessment.summary}`,
      `Required reviewer: ${owner}`,
      `Recommended tests: ${assessment.recommended_tests.join(" | ")}`,
    ].join("\n"),
  };
}

function callTool(params = {}) {
  const name = params.name;
  const args = params.args || {};

  if (name === "assess_release_risk") {
    return { output: assessReleaseRisk(args) };
  }

  if (name === "draft_human_review_packet") {
    return { output: draftHumanReviewPacket(args) };
  }

  throw new Error(`Unknown tool: ${name}`);
}

function handle(request) {
  if (request.method === "describe") {
    return describe();
  }

  if (request.method === "call") {
    return callTool(request.params);
  }

  throw new Error(`Unsupported method: ${request.method}`);
}

const rl = readline.createInterface({ input: process.stdin });

rl.on("line", (line) => {
  if (!line.trim()) {
    return;
  }

  try {
    const request = JSON.parse(line);
    const result = handle(request);
    process.stdout.write(`${JSON.stringify({ jsonrpc: "2.0", id: request.id, result })}\n`);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    process.stdout.write(`${JSON.stringify({ jsonrpc: "2.0", id: null, error: { code: -32000, message } })}\n`);
  }
});
