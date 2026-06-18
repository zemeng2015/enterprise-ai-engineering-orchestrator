---
name: release-risk-orbit
description: Use GitLab Orbit context to turn merge request, CI, ownership, and dependency signals into release-risk test recommendations and approval evidence.
metadata:
  slash-command: enabled
---

# Release Risk Orbit Skill

Use this skill when a developer asks whether a GitLab merge request is ready to ship, which tests should run, or what evidence is needed before approval.

## Required Context

Ask for or infer:

- GitLab group or project full path.
- Merge request IID or branch/ref.
- Release target or deployment environment.
- Risk tolerance: normal, regulated, or hotfix.

## Orbit Query Plan

Use GitLab Orbit through the available interface in this order:

1. Prefer GitLab Duo Agent Platform Orbit tools when running inside Duo.
2. Use the Orbit skill/query interface if it is available in the active agent.
3. Use `glab orbit remote status` to verify indexing before CLI-backed queries.
4. Use the REST API only when a token and enabled top-level group are explicitly available.

Collect these signals:

- Files changed by the merge request.
- Owners and recent maintainers for changed areas.
- Tests, jobs, and pipelines touching the changed files.
- Services, packages, APIs, or deployment units connected to the changed files.
- Recent failures, vulnerabilities, or incidents connected to impacted paths.

## Workflow

1. Query Orbit for changed files and connected code owners.
2. Traverse from changed files to test files, CI jobs, and deployment surfaces.
3. Classify each impacted area as high, medium, or low release risk.
4. Recommend targeted test actions with the reason each test is needed.
5. Create a human approval evidence packet.

## Output Format

Return:

- `risk_summary`: concise release risk status.
- `orbit_evidence`: Orbit entities or query results used.
- `recommended_tests`: test names, owners, and why they matter.
- `approval_gate`: approve, hold, or needs-human-review.
- `next_actions`: specific GitLab MR comments, test jobs, or follow-up issues to create.

## Safety Rules

- Do not approve a release automatically.
- Do not modify branches, merge requests, CI settings, or issues without explicit user approval.
- If Orbit indexing is unavailable, say so and fall back to the local simulated demo state.
- Label fallback evidence as simulated, never as live GitLab Orbit output.
