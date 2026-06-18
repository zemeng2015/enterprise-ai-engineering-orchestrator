export type HackathonMode = "uipath" | "gitlab" | "product" | "casper";

export type TestCase = {
  id: string;
  area: string;
  owner: string;
  risk: "high" | "medium" | "low";
  impact: string;
  suggestedAction: string;
  status: "Needs Review" | "Generated" | "Queued" | "Passing";
};

export type WorkflowStep = {
  label: string;
  agent: string;
  status: "complete" | "active" | "pending";
  evidence: string;
};

export const positioning = {
  uipath: {
    name: "UiPath AgentHack",
    angle: "Agentic QA orchestration for regulated enterprise releases",
    integration: "UiPath Automation",
    primaryCta: "Run Risk Scan",
  },
  gitlab: {
    name: "GitLab Transcend",
    angle: "Repository-aware developer workflow agent for release confidence",
    integration: "GitLab Context",
    primaryCta: "Generate Tests",
  },
  product: {
    name: "Mind the Product",
    angle: "Shippable AI product workflow with measurable operator feedback",
    integration: "Product Analytics",
    primaryCta: "Approve Release",
  },
  casper: {
    name: "Casper Buildathon",
    angle: "Verifiable agentic release-audit receipt anchored to Casper Testnet",
    integration: "Casper Testnet",
    primaryCta: "Generate Audit Receipt",
  },
} satisfies Record<HackathonMode, { name: string; angle: string; integration: string; primaryCta: string }>;

export const tests: TestCase[] = [
  {
    id: "AUTH-142",
    area: "OAuth callback guard",
    owner: "Platform",
    risk: "high",
    impact: "Login redirect path changed in 4 files",
    suggestedAction: "Generate regression tests for invalid nonce and stale state",
    status: "Needs Review",
  },
  {
    id: "BILL-088",
    area: "Invoice retry worker",
    owner: "Payments",
    risk: "medium",
    impact: "Queue timeout branch now bypasses dead-letter handling",
    suggestedAction: "Add Mockito coverage for retry exhaustion",
    status: "Queued",
  },
  {
    id: "REL-207",
    area: "Release gate API",
    owner: "DevEx",
    risk: "high",
    impact: "Approval payload contract changed",
    suggestedAction: "Generate contract tests and API fixture diff",
    status: "Generated",
  },
  {
    id: "UI-316",
    area: "Risk dashboard filters",
    owner: "Frontend",
    risk: "low",
    impact: "Filter state now persists across navigation",
    suggestedAction: "Run focused component tests",
    status: "Passing",
  },
];

export const workflow: WorkflowStep[] = [
  {
    label: "Read repo context",
    agent: "GitLab Context",
    status: "complete",
    evidence: "12 changed files, 4 owned services, 2 critical routes",
  },
  {
    label: "Map release risk",
    agent: "Codex Test Agent",
    status: "complete",
    evidence: "Risk score raised from 42 to 71 after auth diff",
  },
  {
    label: "Generate tests",
    agent: "Codex Test Agent",
    status: "active",
    evidence: "3 test drafts ready for human review",
  },
  {
    label: "Route approval",
    agent: "UiPath Automation",
    status: "pending",
    evidence: "Release waits on QA owner approval",
  },
];

export const evidenceLog = [
  "Parsed merge request !4827 and mapped touched modules.",
  "Detected auth callback contract change with no matching test update.",
  "Generated JUnit skeleton for OAuth nonce replay scenario.",
  "Prepared UiPath human-in-the-loop approval task.",
];

export const casperAuditProof = {
  auditId: "EAIO-2026-06-17-AUTH-142",
  decision: "hold-for-human-review",
  payloadHash: "be704f66fb2e9aa63f41e86e765c20f0120027651d4bca63b27ce85d2bc9ee01",
  chain: "casper-test",
  transactionStatus: "pending-testnet-funding",
  explorerUrl: "Pending real Casper Testnet deploy or transfer hash",
  generatedBy: "scripts/casper-audit-proof.mjs",
};
