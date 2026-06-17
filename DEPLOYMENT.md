# Deployment Prep

This project is ready for GitHub Pages after it is pushed to a public GitHub repository.

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

## External Actions Still Requiring Confirmation

These actions create or change external public state and should be done only after explicit confirmation:

- Create public GitHub repository.
- Push local git commits to GitHub.
- Enable GitHub Pages.
- Add deployed URL to Devpost submissions.
- Create Devpost project drafts.
