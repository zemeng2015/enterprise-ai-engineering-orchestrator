---
name: release-risk-review
description: Assess an enterprise release candidate, generate targeted test recommendations, and prepare a human-review evidence packet for Anna.
---

# Release Risk Review

Use this skill when the user asks Anna to review a release candidate, inspect release risk, prepare QA evidence, or decide whether an enterprise release can proceed.

## Workflow

1. Identify the release candidate, changed areas, CI signals, and owner context.
2. Call the `assess_release_risk` tool when available.
3. Summarize the highest-risk areas and the generated test actions.
4. Keep the decision in `needs-human-review` unless the user explicitly asks to approve after reviewing evidence.
5. Attach or display the review packet for the human owner.

## Safety Boundary

Do not auto-promote, deploy, merge, or approve a high-risk release. The app is designed to make agent output inspectable before a human decision.

