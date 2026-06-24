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
| Demo video under 3 minutes | YouTube demo is 2:30, has no copyright issue, and the GitLab Devpost public page verifies YouTube ID `8AKMY8VoN7c`. | Done |
| GitLab Duo Agent Platform artifact | Project-level skill exists at `skills/release-risk-orbit/SKILL.md`. | Added |
| Meaningful GitLab Orbit usage | The repository now includes the skill artifact plus local GitLab Orbit CLI evidence in `docs/gitlab-orbit-local-proof.md` and `outputs/gitlab-orbit-local-*.json`. Remote Orbit API and AI Catalog publication still require authenticated GitLab access. | Stronger local Orbit proof / remote still pending |

## Current Risk

The largest GitLab-specific judging risk is no longer basic submission completeness; it is whether judges require remote Orbit API output or AI Catalog publication. This repository now includes an installable project-level GitLab Duo skill artifact and local Orbit CLI proof, but the public web dashboard remains a simulated integration and remote Orbit access is not authenticated in this environment.

## Best Next Action

Before the June 24, 2026 2:00pm EDT deadline:

1. If GitLab Orbit access is available, run one remote Orbit query against an indexed project or group and add the output/evidence to the README or Devpost story.
2. If Orbit access is not available, use the local Orbit CLI proof as the strongest honest evidence and label the public dashboard as a simulated workflow prototype.
3. Keep the YouTube demo accessible to judges through the Devpost video field during the judging period.
