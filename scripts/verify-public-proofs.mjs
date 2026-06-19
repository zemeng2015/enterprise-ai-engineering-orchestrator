const liveDemoUrl = "https://zemeng2015.github.io/enterprise-ai-engineering-orchestrator/";
const hostedProofIndexUrl = new URL("submission-proof-index.json", liveDemoUrl).toString();
const releaseApiUrl =
  "https://api.github.com/repos/zemeng2015/enterprise-ai-engineering-orchestrator/releases/tags/v2026-june-submission";

const liveDemoSnippets = [
  "Submission Proofs",
  "Public judging links",
  "uipath-test-manager-execution-passed.png",
  "novus-dashboard-live-after-install.png",
  "release-risk-orbit/SKILL.md",
  "6b2bad1bfd8fb5bd57d344310a0876c05ff454513df793b43f5b87e6e3f8af84",
  "Anna App Package",
  "Band of Agents",
  "Slack Agent Builder",
];

const htmlSnippets = [
  "d4534eaf-1206-4a28-9f1e-5a43cfb3d975",
  "pendo",
];

const proofLinks = [
  {
    label: "UiPath Test Manager passed execution proof",
    url: "https://raw.githubusercontent.com/zemeng2015/enterprise-ai-engineering-orchestrator/main/docs/uipath-test-manager-execution-passed.png",
    contentTypeIncludes: "image/png",
  },
  {
    label: "UiPath Test Manager project dashboard proof",
    url: "https://raw.githubusercontent.com/zemeng2015/enterprise-ai-engineering-orchestrator/main/docs/uipath-test-manager-project-dashboard-running.png",
    contentTypeIncludes: "image/png",
  },
  {
    label: "Novus/Pendo dashboard proof",
    url: "https://raw.githubusercontent.com/zemeng2015/enterprise-ai-engineering-orchestrator/main/docs/novus-dashboard-live-after-install.png",
    contentTypeIncludes: "image/png",
  },
  {
    label: "GitLab Duo Agent Skill artifact",
    url: "https://raw.githubusercontent.com/zemeng2015/enterprise-ai-engineering-orchestrator/main/skills/release-risk-orbit/SKILL.md",
    requiredText: "GitLab Orbit",
  },
  {
    label: "Casper Testnet transaction proof",
    url: "https://testnet.cspr.live/transaction/6b2bad1bfd8fb5bd57d344310a0876c05ff454513df793b43f5b87e6e3f8af84",
    finalUrlIncludes: "6b2bad1bfd8fb5bd57d344310a0876c05ff454513df793b43f5b87e6e3f8af84",
  },
  {
    label: "Anna App judge submission packet",
    url: "https://raw.githubusercontent.com/zemeng2015/enterprise-ai-engineering-orchestrator/main/anna-app/release-risk-review/SUBMISSION.md",
    requiredText: "Judge Quickstart",
  },
  {
    label: "Band-ready multi-agent collaboration proof",
    url: "https://raw.githubusercontent.com/zemeng2015/enterprise-ai-engineering-orchestrator/main/docs/band-of-agents-readiness.md",
    requiredText: "local proof command",
  },
  {
    label: "Slack Agent readiness packet",
    url: "https://raw.githubusercontent.com/zemeng2015/enterprise-ai-engineering-orchestrator/main/docs/slack-agent-builder-readiness.md",
    requiredText: "MCP server integration",
  },
];

function fail(message) {
  console.error(`Public proof verification failed: ${message}`);
  process.exit(1);
}

async function fetchOk(url, label) {
  const response = await fetch(url, { redirect: "follow" });
  if (!response.ok) {
    fail(`${label} returned HTTP ${response.status}: ${url}`);
  }
  return response;
}

function extractFirstAsset(html, extension) {
  const pattern = new RegExp(`assets/[^"']+\\.${extension}`, "g");
  const match = html.match(pattern);
  return match?.[0];
}

const htmlResponse = await fetchOk(liveDemoUrl, "live demo");
const html = await htmlResponse.text();

const proofIndexResponse = await fetchOk(hostedProofIndexUrl, "hosted proof index JSON");
const proofIndex = await proofIndexResponse.json();

if (proofIndex.project !== "Enterprise AI Engineering Orchestrator") {
  fail("hosted proof index JSON has an unexpected project name");
}

if (proofIndex.proofIndexVersion !== "2026-06-19.6") {
  fail(`hosted proof index JSON has an unexpected version: ${proofIndex.proofIndexVersion}`);
}

if (!Array.isArray(proofIndex.proofs) || proofIndex.proofs.length < proofLinks.length) {
  fail("hosted proof index JSON does not list every expected proof");
}

for (const proof of proofLinks) {
  const found = proofIndex.proofs.some((entry) => entry.url === proof.url);
  if (!found) {
    fail(`hosted proof index JSON is missing proof URL: ${proof.url}`);
  }
}

const releaseResponse = await fetchOk(releaseApiUrl, "GitHub release metadata");
const release = await releaseResponse.json();

if (release.tag_name !== "v2026-june-submission") {
  fail(`GitHub release has an unexpected tag: ${release.tag_name}`);
}

const requiredReleaseAssets = [
  "enterprise-ai-orchestrator-source.zip",
  "release-risk-review-anna-app.zip",
];

for (const assetName of requiredReleaseAssets) {
  const hasAsset = release.assets?.some((asset) => asset.name === assetName);
  if (!hasAsset) {
    fail(`GitHub release does not include ${assetName}`);
  }
}

for (const snippet of htmlSnippets) {
  if (!html.includes(snippet)) {
    fail(`live demo HTML is missing expected text: ${snippet}`);
  }
}

const jsAsset = extractFirstAsset(html, "js");
if (!jsAsset) {
  fail("live demo HTML does not reference a JavaScript asset");
}

const jsResponse = await fetchOk(new URL(jsAsset, liveDemoUrl).toString(), "live demo JavaScript bundle");
const js = await jsResponse.text();

for (const snippet of liveDemoSnippets) {
  if (!js.includes(snippet)) {
    fail(`live demo JavaScript bundle is missing expected text: ${snippet}`);
  }
}

for (const proof of proofLinks) {
  const response = await fetchOk(proof.url, proof.label);
  const contentType = response.headers.get("content-type") ?? "";

  if (proof.contentTypeIncludes && !contentType.includes(proof.contentTypeIncludes)) {
    fail(`${proof.label} content type expected ${proof.contentTypeIncludes}; got ${contentType}`);
  }

  if (proof.finalUrlIncludes && !response.url.includes(proof.finalUrlIncludes)) {
    fail(`${proof.label} final URL did not include expected text: ${proof.finalUrlIncludes}`);
  }

  if (proof.requiredText) {
    const body = await response.text();
    if (!body.includes(proof.requiredText)) {
      fail(`${proof.label} did not include expected text: ${proof.requiredText}`);
    }
  }
}

console.log(
  "Public proof verification passed: live demo proof hub, hosted proof index JSON, GitHub release package, and all public proof links are reachable.",
);
