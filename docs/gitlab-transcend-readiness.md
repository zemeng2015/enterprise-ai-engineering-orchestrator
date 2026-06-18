# GitLab Transcend Readiness

Status as of 2026-06-19 CST.

## Public Submission

- Devpost project: https://devpost.com/software/enterprise-ai-orchestrator-for-gitlab
- Edit URL: https://devpost.com/submit-to/30053-gitlab-transcend-hackathon/manage/submissions/1053807-enterprise-ai-orchestrator-for-gitlab/edit
- Public repository: https://github.com/zemeng2015/enterprise-ai-engineering-orchestrator
- Live demo: https://zemeng2015.github.io/enterprise-ai-engineering-orchestrator/
- Demo video: https://youtu.be/8AKMY8VoN7c

## Requirement Check

| Requirement | Evidence | Status |
|---|---|---|
| Devpost registration/submission | Public Devpost page is live and the edit page shows `Submitted`. | Done |
| Public open source repository | GitHub repository is public and includes source, README, setup instructions, CI, and MIT license. | Done |
| Working project URL | GitHub Pages demo is live. | Done |
| Text description/story | Public Devpost story explains developer pain point, workflow, implementation, challenges, accomplishments, and next steps. | Done |
| Demo video under 3 minutes | YouTube unlisted demo is 2:31 and has no copyright issue. | Needs Devpost field save/verification for GitLab |
| GitLab Duo Agent Platform artifact | Project-level skill exists at `skills/release-risk-orbit/SKILL.md`. | Added |
| Meaningful GitLab Orbit usage | The skill defines the intended Orbit query workflow and fallback safety rules, but the current web demo still uses simulated GitLab context rather than live Orbit API/CLI output. | Weak / needs live Orbit proof if available |

## Current Risk

The largest GitLab-specific judging risk is not basic submission completeness; it is theme fit. The Showcase Track expects an agent, flow, or skill that meaningfully uses GitLab Orbit through the API, CLI, or skill interface. This repository now includes an installable project-level GitLab Duo skill artifact, but the public web dashboard remains a simulated integration.

## Best Next Action

Before the June 24, 2026 2:00pm EDT deadline:

1. Save the YouTube demo URL into the GitLab Devpost video field.
2. Update the Devpost story to mention the `skills/release-risk-orbit/SKILL.md` artifact.
3. If GitLab Orbit access is available, run one real Orbit query against an indexed project or group and add the output/evidence to the README or Devpost story.
4. If Orbit access is not available, keep the submission honest and label it as an installable skill plus simulated dashboard prototype.
