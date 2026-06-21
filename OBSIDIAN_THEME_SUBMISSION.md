# Eye Safe Writer Submission Pack

## GitHub Repo

Create a dedicated repository, suggested name:

```text
screamkface/eye-safe-writer
```

Repository root should contain:

```text
theme.css
manifest.json
README.md
LICENSE.md
CHANGELOG.md
screenshot.png
```

## Obsidian Releases Entry

Use this object in `community-css-themes.json`:

```json
{
  "name": "Eye Safe Writer",
  "author": "Nicola",
  "repo": "screamkface/eye-safe-writer"
}
```

## Screenshot Notes

Use notes in `theme-screenshot-notes/` to capture real Obsidian screenshots:

```text
theme-screenshot-notes/01-eye-safe-writer-light-showcase.md
theme-screenshot-notes/02-eye-safe-writer-dark-showcase.md
theme-screenshot-notes/03-eye-safe-writer-settings-showcase.md
```

## Release Steps

1. Copy files from `.obsidian/themes/Eye Safe Writer/` to dedicated repo root.
2. Open screenshot notes in Obsidian and capture real `screenshot.png` at 16:9.
3. Commit and tag `1.4.0` in dedicated theme repo.
4. Fork `obsidianmd/obsidian-releases`.
5. Add JSON entry to `community-css-themes.json`.
6. Open pull request.
