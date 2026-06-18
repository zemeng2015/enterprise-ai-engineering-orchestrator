import { existsSync, readFileSync } from "node:fs";

const localPath = "submission.readiness.local.json";
const examplePath = "submission.readiness.example.json";

function fail(messages) {
  console.error("Final readiness check failed:");
  for (const message of messages) {
    console.error(`- ${message}`);
  }
  console.error("");
  console.error(`Create ${localPath} from ${examplePath}, fill final values, then rerun npm run final-readiness.`);
  process.exit(1);
}

function isHttpsUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "https:";
  } catch {
    return false;
  }
}

function hasPlaceholder(value) {
  const normalized = String(value || "").toLowerCase();
  return normalized.includes("replace-with") || normalized.includes("placeholder") || normalized.includes("example.com");
}

function isDemoVideoUrl(value) {
  if (!isHttpsUrl(value)) {
    return false;
  }

  const host = new URL(value).hostname.toLowerCase();
  return host.includes("youtube.com") || host.includes("youtu.be") || host.includes("vimeo.com") || host.includes("loom.com");
}

if (!existsSync(localPath)) {
  fail([
    `${localPath} is missing.`,
    "UiPath Labs environment URL is still needed.",
    "Demo video URL is still needed.",
    "Participation type must be confirmed as Individual or Team.",
    "Devpost final fields must be saved and preview-checked.",
  ]);
}

let config;
try {
  config = JSON.parse(readFileSync(localPath, "utf8"));
} catch (error) {
  fail([`${localPath} is not valid JSON: ${error.message}`]);
}

const errors = [];

if (!isHttpsUrl(config.uipathLabsEnvironmentUrl || "") || hasPlaceholder(config.uipathLabsEnvironmentUrl)) {
  errors.push("uipathLabsEnvironmentUrl must be a real HTTPS URL from UiPath Labs, not a placeholder.");
}

if (!isDemoVideoUrl(config.demoVideoUrl || "")) {
  errors.push("demoVideoUrl must be an HTTPS YouTube, Vimeo, or Loom URL.");
}

if (!["Individual", "Team"].includes(config.participationType)) {
  errors.push("participationType must be either Individual or Team.");
}

if (config.participationType !== "Individual") {
  errors.push("If Zack is submitting solo, participationType should be Individual and Devpost should match it.");
}

if (!isHttpsUrl(config.devpostProjectUrl || "")) {
  errors.push("devpostProjectUrl must be the public Devpost project preview URL.");
}

if (config.devpostLabsUrlSaved !== true) {
  errors.push("devpostLabsUrlSaved must be true after the real Labs URL is saved in Devpost Additional info.");
}

if (config.devpostProjectStoryCleaned !== true) {
  errors.push("devpostProjectStoryCleaned must be true after replacing the duplicated Story headings in Devpost Project details.");
}

if (config.participationType === "Individual" && config.devpostParticipationFieldSaved !== true) {
  errors.push("devpostParticipationFieldSaved must be true after Devpost participation is saved as Individual.");
}

if (config.devpostFinalPreviewChecked !== true) {
  errors.push("devpostFinalPreviewChecked must be true after previewing the public project page.");
}

if (config.officialRulesReadyToAccept !== true) {
  errors.push("officialRulesReadyToAccept must be true only after reviewing the Official Rules and Devpost Terms.");
}

if (errors.length > 0) {
  fail(errors);
}

console.log("Final readiness check passed: local final URLs and Devpost field decisions are ready.");
