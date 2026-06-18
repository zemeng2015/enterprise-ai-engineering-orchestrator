# Deployment Prep

This project is deployed on GitHub Pages from the public GitHub repository.

## Recommended Repository

```text
enterprise-ai-engineering-orchestrator
```

## Local Verification

```bash
npm ci
npm run typecheck
npm run build
npm audit --audit-level=high
```

## GitHub Pages

The repository includes:

- `.github/workflows/ci.yml`
- `.github/workflows/pages.yml`
- Vite `base: "./"` so the app works under a GitHub Pages subpath.

After pushing to GitHub:

1. Open repository settings.
2. Go to **Pages**.
3. Set source to **GitHub Actions**.
4. Push to `main` or run the `Deploy to GitHub Pages` workflow manually.

Expected demo URL format:

```text
https://zemeng2015.github.io/enterprise-ai-engineering-orchestrator/
```

Current public URLs:

```text
Repository: https://github.com/zemeng2015/enterprise-ai-engineering-orchestrator
Demo: https://zemeng2015.github.io/enterprise-ai-engineering-orchestrator/
```

## External Actions Still Open

- Novus.ai setup for Mind the Product requires GitHub authorization to let Novus/Pendo read this repository and create an installation pull request.
- Demo video is uploaded as an unlisted YouTube video: https://youtu.be/8AKMY8VoN7c
- GitLab Devpost project is submitted and publicly visible. The remaining GitLab action is to ensure the YouTube video field is saved on the GitLab Devpost project and, if possible, add live GitLab Orbit evidence.
- UiPath Labs access request has been submitted; sandbox URL and credentials are pending.
