const liveDemoUrl = "https://zemeng2015.github.io/enterprise-ai-engineering-orchestrator/";

const liveDemoSnippets = [
  "Submission Proofs",
  "Public judging links",
  "uipath-test-manager-execution-passed.png",
  "novus-dashboard-live-after-install.png",
  "release-risk-orbit/SKILL.md",
  "6b2bad1bfd8fb5bd57d344310a0876c05ff454513df793b43f5b87e6e3f8af84",
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

console.log("Public proof verification passed: live demo proof hub and all public proof links are reachable.");
