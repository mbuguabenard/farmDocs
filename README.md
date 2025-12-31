# farmDocs — Farmer's Diary / Field Log

A lightweight, human-first farmer diary: a simple chronological log to record daily farm activities, observations, inputs, yields and notes. This repository is organized around the simple logic of a diary entry per day (or per event), keeping records readable, searchable, and easy to back up or export.

## Table of contents
- [Overview](#overview)
- [Core concepts](#core-concepts)
- [Recommended entry format (template)](#recommended-entry-format-template)
- [How to add an entry](#how-to-add-an-entry)
- [Examples](#examples)
- [Organization & storage suggestions](#organization--storage-suggestions)
- [Searching, exporting & backups](#searching-exporting--backups)
- [Contributing](#contributing)
- [License](#license)

## Overview
farmDocs is a diary-style log for farmers. Each entry captures what happened (activity), when it happened (date/time), contextual details (weather, field, crop, inputs), and any follow-up notes (observations, issues, yield estimates, photos). The goal is a practical, minimal structure that supports good record keeping without overhead.

Why keep a farmer diary?
- Track inputs and practices to link them with outcomes (yields, pest pressure).
- Remember timing of tasks (planting, fertilizing, spraying).
- Improve decision making across seasons.
- Create a reproducible dataset for audits, grant reporting, or agronomic analysis.

## Core concepts
- Entry: a single log item describing an event or day. Prefer one entry per day/per field event.
- Date-first: files or records are organized chronologically to make reading and backups trivial.
- Human-readable: prefer Markdown (or simple JSON/YAML) so entries are editable without special tools.
- Minimal required fields: Date, Field/Location, Activity, Crop, Inputs, Weather, Notes.
- Attachments: photos, receipts, or small CSVs can be linked or stored in an attachments/ folder.

## Recommended entry format (template)
Use a consistent structure for each entry. Markdown with a small frontmatter or header works well.

Example Markdown template:

```md
# 2025-03-12 — Field A — Planting

Date: 2025-03-12
Time: 09:30
Field / Block: Field A
Crop: Maize (variety: Kibo)
Activity: Planting
Crew: 3 people

Weather:
- Temp: 22–26°C
- Conditions: Partly cloudy, light breeze
- Soil moisture: adequate

Inputs / Materials:
- Seed: 25 kg (spacing 75cm x 25cm)
- Fertilizer: DAP 10 kg (applied in furrow)

Notes / Observations:
- Planting completed in 3 hours.
- Pests: none observed.
- Follow up: check germination 7 days after planting.

Attachments:
- attachments/2025-03-12-fieldA-planting.jpg
```

If you prefer structured files, use YAML or JSON with the same fields.

## How to add an entry
1. Create a new Markdown file named with the date and a short slug:
   - Example: `entries/2025-03-12-fieldA-planting.md`
2. Fill the template fields (date, field, crop, activity, weather, inputs, notes).
3. Commit to the repository (or sync to your preferred backup/storage).
4. Add photos to `attachments/` and reference them in the entry.

If you use a phone, a notes app that can export Markdown or plain text works well — copy/paste into files later.

## Examples
Daily summary example (short):

```md
# 2025-05-01 — Field B — Weeding

Date: 2025-05-01
Field: Field B
Crop: Beans
Activity: Weeding (manual), 2 workers

Weather: Sunny, 28°C
Notes: Weeds were mostly young; progress 60%. Spray scheduled in 10 days if regrowth occurs.
```

Event example (spraying):

```md
# 2025-06-20 — Field C — Pesticide application

Date: 2025-06-20
Field: Field C
Crop: Tomato
Activity: Spraying — insecticide (Imidacloprid), 200 mL in 20 L water, 0.01% concentration
Operator: John
Safety: PPE used (gloves, mask)
Notes: Avoid harvest 7 days after application.
```

## Organization & storage suggestions
- entries/ — store daily entries as Markdown files (named by date and slug).
- attachments/ — images and receipts referenced from entries.
- scripts/ — small utilities for export/search (optional).
- backup/ — periodic exports (zip or CSV) for redundancy.

Filename convention: YYYY-MM-DD[-field-or-slug].md makes chronological listing and tooling trivial.

## Searching, exporting & backups
- Search: simple text search (grep) across the entries folder works well:
  - grep -Ri "pesticide" entries/
- Export to CSV/JSON: write a small script to parse Markdown frontmatter and output structured data for analysis.
- Backups: keep a remote remote (GitHub, private git server, cloud storage) and periodically export to ZIP.
- If you need, I can help add scripts to:
  - Convert entries to CSV for spreadsheets,
  - Generate a simple web view,
  - Extract all image references into a gallery.

## Contributing
- Keep entries readable and dated.
- If you add a script, include usage in `scripts/README.md`.
- Open issues for feature requests (search, export formats, UI).


## License
Specify a license for this repository (e.g., MIT, CC-BY for notes). If you don't have one yet, consider adding LICENSE (MIT is a common permissive choice).

---

