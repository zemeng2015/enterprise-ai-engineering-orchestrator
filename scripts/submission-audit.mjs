import { existsSync, readFileSync, statSync } from "node:fs";

const links = [
  {
    label: "public demo",
    url: "https://zemeng2015.github.io/enterprise-ai-engineering-orchestrator/",
    requiredText: "Enterprise AI Engineering Orchestrator",
  },
  {
    label: "public repository",
    url: "https://github.com/zemeng2015/enterprise-ai-engineering-orchestrator",
    requiredText: "Enterprise AI Engineering Orchestrator",
  },
  {
    label: "presentation deck",
    url: "https://github.com/zemeng2015/enterprise-ai-engineering-orchestrator/raw/main/docs/uipath-agenthack-presentation.pptx",
    binary: true,
  },
];

const requiredFiles = [
  "README.md",
  "LICENSE",
  "SUBMISSION_PACKET.md",
  "DEVPOST_DRAFTS.md",
  "DEMO_SCRIPT.md",
  "STATUS.md",
  "docs/FINAL_SUBMISSION_RUNBOOK.md",
  "docs/OFFICIAL_RULES_REVIEW_NOTES.md",
  "docs/DEMO_TELEPROMPTER.md",
  "docs/DEVPOST_FIELD_FIXES.md",
  "docs/VIDEO_RECORDING_PACKAGE.md",
  "docs/uipath-agenthack-presentation.pptx",
  "docs/screenshots/devpost-thumbnail.png",
  "docs/screenshots/orchestrator-desktop.png",
  "docs/screenshots/orchestrator-mobile.png",
  "docs/video-frames/01-overview-uipath.png",
  "docs/video-frames/02-after-risk-scan.png",
  "docs/video-frames/03-after-generate-tests.png",
  "docs/video-frames/04-after-approval.png",
  "docs/video-frames/05-public-github-repo.png",
  "scripts/final-readiness.mjs",
  "submission.readiness.example.json",
];

const requiredReadmeTerms = [
  "UiPath AgentHack",
  "UiPath Test Cloud",
  "UiPath Automation",
  "Coded agent",
  "Low-code UiPath workflow",
  "Setup Instructions",
  "MIT",
];

const knownBlockerTerms = [
  "Devpost is ready at 4/5 steps with required fields saved",
  "thumbnail still shows the placeholder image",
  "Official Rules and Devpost Terms still need action-time confirmation",
];

const imageRequirements = [
  {
    path: "docs/screenshots/devpost-thumbnail.png",
    width: 1200,
    height: 800,
    maxBytes: 5 * 1024 * 1024,
    label: "Devpost thumbnail",
  },
];

function fail(message) {
  console.error(`Submission audit failed: ${message}`);
  process.exit(1);
}

function readText(path) {
  return readFileSync(path, "utf8");
}

function readPngDimensions(path) {
  const buffer = readFileSync(path);
  const signature = buffer.subarray(0, 8).toString("hex");
  if (signature !== "89504e470d0a1a0a") {
    fail(`${path} is not a PNG file`);
  }

  return {
    width: buffer.readUInt32BE(16),
    height: buffer.readUInt32BE(20),
  };
}

for (const file of requiredFiles) {
  if (!existsSync(file)) {
    fail(`missing required file: ${file}`);
  }
}

for (const requirement of imageRequirements) {
  const stats = statSync(requirement.path);
  if (stats.size > requirement.maxBytes) {
    fail(`${requirement.label} is too large: ${stats.size} bytes`);
  }

  const dimensions = readPngDimensions(requirement.path);
  if (dimensions.width !== requirement.width || dimensions.height !== requirement.height) {
    fail(
      `${requirement.label} must be ${requirement.width}x${requirement.height}; found ${dimensions.width}x${dimensions.height}`,
    );
  }
}

const readme = readText("README.md");
for (const term of requiredReadmeTerms) {
  if (!readme.includes(term)) {
    fail(`README.md is missing required term: ${term}`);
  }
}

const runbook = readText("docs/FINAL_SUBMISSION_RUNBOOK.md");
for (const term of knownBlockerTerms) {
  if (!runbook.includes(term)) {
    fail(`final submission runbook is missing blocker: ${term}`);
  }
}

for (const { label, url, requiredText, binary } of links) {
  const response = await fetch(url, { redirect: "follow" });
  if (!response.ok) {
    fail(`${label} link returned HTTP ${response.status}: ${url}`);
  }

  if (!binary && requiredText) {
    const body = await response.text();
    if (!body.includes(requiredText)) {
      fail(`${label} did not include expected text: ${requiredText}`);
    }
  }
}

console.log("Submission audit passed: public links, required files, README terms, submission assets, and final blockers are tracked.");
