import { existsSync } from "node:fs";
import { spawnSync } from "node:child_process";

const requiredFiles = [
  "README.md",
  "LICENSE",
  "SUBMISSION_PACKET.md",
  "DEVPOST_DRAFTS.md",
  "DEMO_SCRIPT.md",
  "DEPLOYMENT.md",
  ".github/workflows/ci.yml",
  ".github/workflows/pages.yml",
  "docs/screenshots/orchestrator-desktop.png",
  "docs/screenshots/orchestrator-mobile.png",
  "docs/anna-ai-native-readiness.md",
  "anna-app/release-risk-review/manifest.json",
  "anna-app/release-risk-review/ui/index.html",
  "anna-app/release-risk-review/executas/release-risk-review/tool.mjs",
];

const commands = [
  ["npm", ["run", "anna:proof"]],
  ["npm", ["run", "typecheck"]],
  ["npm", ["run", "build"]],
  ["npm", ["audit", "--audit-level=high"]],
];

function run(command, args) {
  const useNpmCli = command === "npm" && process.env.npm_execpath;
  const executable = useNpmCli ? process.execPath : command;
  const finalArgs = useNpmCli ? [process.env.npm_execpath, ...args] : args;
  const result = spawnSync(executable, finalArgs, {
    stdio: "inherit",
    shell: false,
  });

  if (result.error) {
    console.error(`Failed to run ${executable}: ${result.error.message}`);
    process.exit(1);
  }

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

const missing = requiredFiles.filter((file) => !existsSync(file));

if (missing.length > 0) {
  console.error("Missing submission files:");
  for (const file of missing) {
    console.error(`- ${file}`);
  }
  process.exit(1);
}

for (const [command, args] of commands) {
  run(command, args);
}

console.log("Preflight passed: submission files, typecheck, build, and audit are ready.");
