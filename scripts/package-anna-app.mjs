import { existsSync, mkdirSync, rmSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { dirname, join } from "node:path";

const repoRoot = process.cwd();
const appRoot = "anna-app/release-risk-review";
const output = join(
  repoRoot,
  "..",
  "..",
  "outputs",
  "release-risk-review-anna-app.zip",
);

function fail(message) {
  console.error(`Anna package failed: ${message}`);
  process.exit(1);
}

for (const file of [
  `${appRoot}/README.md`,
  `${appRoot}/manifest.json`,
  `${appRoot}/ui/index.html`,
  `${appRoot}/executas/release-risk-review/tool.mjs`,
  `${appRoot}/skills/release-risk-review/SKILL.md`,
  "docs/anna-ai-native-readiness.md",
]) {
  if (!existsSync(file)) {
    fail(`missing ${file}`);
  }
}

mkdirSync(dirname(output), { recursive: true });

if (existsSync(output)) {
  rmSync(output);
}

const result = spawnSync("git", [
  "archive",
  "--format=zip",
  "--output",
  output,
  "HEAD",
  appRoot,
  "docs/anna-ai-native-readiness.md",
  "README.md",
  "LICENSE",
  "package.json",
], {
  cwd: repoRoot,
  stdio: "inherit",
  shell: false,
});

if (result.error) {
  fail(result.error.message);
}

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}

console.log(`Anna App package written: ${output}`);
