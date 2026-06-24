# GitLab Orbit Local Proof

Generated on 2026-06-24 with `glab 1.105.0` and Orbit local CLI `0.79.0`.

## Purpose

This proof strengthens the GitLab Transcend Showcase submission by demonstrating that the repository can be indexed and queried through GitLab Orbit's local Knowledge Graph CLI.

It is not a claim of remote GitLab Orbit API access or AI Catalog publication. Remote Orbit still requires an authenticated GitLab token.

## Evidence Files

- `outputs/gitlab-orbit-local-schema.json`
- `outputs/gitlab-orbit-local-repos.json`
- `outputs/gitlab-orbit-local-manifest.json`
- `outputs/gitlab-orbit-local-file-count.json`
- `outputs/gitlab-orbit-local-language-counts.json`
- `outputs/gitlab-orbit-local-release-risk-definitions.json`

## Commands

```powershell
& "$env:LOCALAPPDATA\glab-cli\bin\orbit.exe" index . --stats
& "$env:LOCALAPPDATA\glab-cli\bin\orbit.exe" schema --raw
& "$env:LOCALAPPDATA\glab-cli\bin\orbit.exe" list --format json
& "$env:LOCALAPPDATA\glab-cli\bin\orbit.exe" sql "select repo_path, project_id, branch, status, last_indexed_at from _orbit_manifest" -F json
& "$env:LOCALAPPDATA\glab-cli\bin\orbit.exe" sql "select language, count(*) as files from gl_file group by language order by files desc" -F json
& "$env:LOCALAPPDATA\glab-cli\bin\orbit.exe" sql "select file_path, name, definition_type, start_line, end_line from gl_definition where lower(file_path) like '%release%' or lower(name) like '%risk%' order by file_path, start_line limit 50" -F json
```

## Summary

- Repository status: indexed.
- Indexed files: 286.
- Indexed definitions: 3420.
- Indexed relationships: 4476.
- Language distribution from `gl_file`: 179 JavaScript files, 5 TypeScript files, 102 unknown files.
- Release-risk query returned definitions for the Anna app release-risk tool, Band agent scaffold, Slack MCP/agent scaffold, and the frontend high-risk counter.

## Remaining GitLab-Specific Gap

Remote Orbit API access still returns `401 Unauthorized` because no GitLab token is present in the environment. AI Catalog publication is also not proven locally. A message was sent to the GitLab hackathon manager with the Devpost, repository, demo, video, skill artifact, proof index, and a question about whether a separate AI Catalog URL is required.
