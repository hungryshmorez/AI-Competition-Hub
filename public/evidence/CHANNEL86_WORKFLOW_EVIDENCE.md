# CHANNEL 86 — Workflow Evidence Report

Generated from the raw exports in `evidence/raw/`. Factual only: anything not stored is marked UNAVAILABLE; reconstructions are marked INFERRED. Detailed data: `channel86-workflow-manifest.json`.


## 1. Project Overview

CHANNEL 86 is a game-art project for an original open-world video game: a surreal mystery / psychedelic comedy / retro horror world set in Bellweather, California, where an impossible TV broadcast signal leaks into a cheerful suburb. All competition art was produced through the AI Competition Hub on 2026-09-28 (UTC).

## 2. Competition Goal

Game Art category submission. Deadline October 1, 2026, 11:59 PM Pacific. Deliverables: six finished artworks (key art, character sheet, environment, open-world gameplay, gameplay encounter, boss battle) and a clean showcase.

## 3. Creative Direction

Established CHANNEL 86 cast (21 canonical characters in the vault), warm sunset palettes, CRT/broadcast artefacts, playable third-person readability with HUD. Direction was calibrated through Chill vs Vibrant world tests and a 0–4 Visual Intensity scale (see §11). Research brief: `hub/research/channel86_game_art_research.md` (project record).

## 4. Tools / Model

- Model: `hy-image-v3.5-preview` (HY IMAGE 3.5) on GMI Cloud — every generation record and every GMI record shows this model.
- Seed: 0 on every request.
- Size: 2560×1440 for all competition images; earlier diagnostic/identity tests used 1024×1024 and 2048×2048.
- Max 5 references per request.
- Composite: Python Pillow, deterministic layout (no model).

## 5. Hub / Infrastructure

- Hub: https://ai-competition-hub-beta.vercel.app/ (Vite/React on Vercel).
- Server function `api/generate.ts` holds `GMI_API_KEY`; the key never reaches frontend JavaScript.
- `api/gmi-status.ts`: read-only request status used to verify every request in this archive.
- References stored in Vercel Blob (public HTTPS) and the GitHub repo vault.
- Hub state in browser localStorage key `competition-hub-v1` (exported read-only; not cleared).
- Screenshots of the current state: `evidence/show-your-work/screenshots/`.

## 6. Reference Library

57 Hub assets: {'character': 23, 'world': 22, 'generation': 12}. 21 canonical characters (all documented, including those not in the final six), 22 world references (Chill + Vibrant), 12 generated images re-used as references, and 2 lineup images (rows A/B) used for the ensemble sheet. 47 distinct references were actually sent. Full list: `CHANNEL86_REFERENCE_HISTORY.md`.

## 7. Chronological Development

387 events from 2026-09-28T09:40:45Z to 2026-09-28T21:48:34Z (`CHANNEL86_MASTER_TIMELINE.md`). Phases by GMI submit time:

- Hub build & GitHub milestones: GitHub commits 09:40–14:17 UTC
- Early benchmark + GMI-only diagnostics: 12:30–14:23 (incl. 5 failed GMI 400s) UTC
- Environment style runs (Chill/Vibrant): 14:19–14:51 UTC
- Controlled identity / world tests: 14:52–14:53 UTC
- Pose tests: 15:02–15:06 UTC
- Interaction tests: 15:13–15:16 UTC
- Finalist rounds 01–03: 15:27–16:20 UTC
- Gameplay Grammar: 16:33–17:42 UTC
- Visual Intensity 0–4: 17:51–17:55 UTC
- Final batch 01–05 and redos: 18:07–18:37 UTC
- Character-sheet iterations: 18:07–20:17 UTC
- Master key art attempts: 20:18–20:35 UTC
- Deterministic six-image composite: 21:16 UTC

Category counts (Hub + GMI-only): Environment style development 15, Character sheet 14, Early benchmark 7, Key art 6, Pose tests 5, Interaction tests 5, Visual Intensity 5, Open-world gameplay 4, Encounter / Static Pool 4, Environment / Bellweather 4, Diagnostic / infrastructure test 4, Controlled reference tests 3, HUD / UI 3, Gameplay Grammar 3, Mr. 86 boss 1, Final composite 1

## 8. Character Development

Identity was built from the vault: identity test (Mr. 86), pose tests (Mara, Static, Zero, Instant Lee, Bobby), interaction tests (pairs). Key identity rules came from failures: Zero must be headless/unique and never a Mr. 86 copy; Bobby and Static positions must not swap; props must be unique.

- `c909ee5b` **Character Identity Test — Mr. 86 — 01** — Hub CANDIDATE · 1 refs · 2026-09-28T14:52:40Z · no defects recorded
- `3f6eb121` **Pose Test — Mara Solís — CHILL — 01** — Hub CANDIDATE · 5 refs · 2026-09-28T15:02:45Z · no defects recorded
- `f4e5f55b` **Pose Test — Static — VIBRANT — 01** — Hub CANDIDATE · 5 refs · 2026-09-28T15:03:32Z · no defects recorded
- `41f01b8d` **Pose Test — Zero — CHILL — 01** — Hub CANDIDATE · 5 refs · 2026-09-28T15:04:34Z · no defects recorded
- `c87bf12e` **Pose Test — Instant Lee — VIBRANT — 01** — Hub CANDIDATE · 5 refs · 2026-09-28T15:05:25Z · no defects recorded
- `ae287a74` **Pose Test — Bobby — VIBRANT — 01** — Hub CANDIDATE · 5 refs · 2026-09-28T15:06:13Z · no defects recorded
- `aa55b444` **Interaction Test — Static + Bobby — Signal Accident — 01** — Hub CANDIDATE · 5 refs · 2026-09-28T15:13:36Z · no defects recorded
- `e555afd1` **Interaction Test — Mara + Zero — Alley Encounter — 01** — Hub CANDIDATE · 5 refs · 2026-09-28T15:14:27Z · no defects recorded
- `dbe95a08` **Interaction Test — Instant Lee + Mr. 86 — Confrontation — 01** — Hub CANDIDATE · 5 refs · 2026-09-28T15:15:17Z · no defects recorded
- `b2c6edb3` **Interaction Test — Vicar Sparkle + Static — TV Exorcism — 01** — Hub CANDIDATE · 5 refs · 2026-09-28T15:16:08Z · no defects recorded
- `74998fae` **Interaction Test — Mara + Instant Lee — Motorcycle Escape — 01** — Hub CANDIDATE · 5 refs · 2026-09-28T15:16:59Z · no defects recorded

## 9. Character-Sheet Iterations

Failed attempts are evidence. Chain (RECORDED unless noted):

- `216c7d64` **FINAL 01 — Character Design Sheet — The Cast of Channel 86** — Hub CANDIDATE · 5 refs · 2026-09-28T18:07:30Z · Each character appears ONCE, not twice (the three-quarter views are missing); No height-guide lines; Instant Lee is seated on his motorcycle rather than standing
- `0659a892` **FINAL 01b — Character Design Sheet — The Cast of Channel 86** — Hub CANDIDATE · 5 refs · 2026-09-28T18:36:18Z · Still ONE view per character: HY ignored the front + three-quarter pairs a second time; Bobby's callout shows plain cartoon eyes instead of static-screen eyes; Zero's callout is only a sleeve
- `32944b76` **FINAL 01c — Character Design Sheet — The Cast of Channel 86** — Hub CANDIDATE · 5 refs · 2026-09-28T18:50:08Z · ZERO slot rendered as a DUPLICATE MR. 86 (Zero had no reference image); Belt buckle shows '86', which the prompt did not allow
- `60380946` **FINAL 01c — Character Design Sheet — The Cast of Channel 86 — retry 2 (Zero ref)** — Hub CANDIDATE · 5 refs · 2026-09-28T18:52:04Z · Instant Lee MISSING: Bobby stands under the 'INSTANT LEE' label, and there is no BOBBY label; Only 5 callout boxes; the headphones are missing; Lee's mask became an ornate Venetian mask
- `39e07c0a` **FINAL 01d — Character Design Sheet — The Cast of Channel 86** — Hub CANDIDATE · 5 refs · 2026-09-28T18:58:40Z · Instant Lee and Mr. 86 SWAPPED positions: Mr. 86 stands under the 'INSTANT LEE' label and Lee (on his motorcycle again) under 'MR. 86'; Name labels also repeated under the prop boxes (12 labels instead of 6); Lee is seated on the motorcycle despite 'STANDING without his motorcycle'
- `c90af23e` **FINAL 01e — Character Design Sheet — The Cast of Channel 86** — Hub CANDIDATE · 5 refs · 2026-09-28T19:17:29Z · Bobby and Static swapped (Bobby 3rd, Static 4th), so the headphones box sits under Bobby and the gloves under Static; Labels appear ONLY under the prop boxes, not under the standing characters; Zero rendered as an empty headless suit (invisible man) instead of a black void head; he has metal hands borrowed from Static
- `a75ee50a` **FINAL 01e — Character Design Sheet — The Cast of Channel 86** — Hub CANDIDATE · 5 refs · 2026-09-28T19:36:25Z · made in the Hub outside this workspace — evaluation UNAVAILABLE
- `5bcbdd2b` **FINAL 01e — Character Design Sheet — The Cast of Channel 86** — Hub CANDIDATE · 5 refs · 2026-09-28T19:49:20Z · made in the Hub outside this workspace — evaluation UNAVAILABLE
- `438cf5c2` **FINAL 01e — Character Design Sheet — The Cast of Channel 86** — Hub CANDIDATE · 5 refs · 2026-09-28T19:50:41Z · made in the Hub outside this workspace — evaluation UNAVAILABLE
- `089db5d5` **FINAL 01e — Character Design Sheet — The Cast of Channel 86** — Hub CANDIDATE · 5 refs · 2026-09-28T19:55:44Z · made in the Hub outside this workspace — evaluation UNAVAILABLE
- `59f78f89` **FINAL 01e — Character Design Sheet — The Cast of Channel 86** — Hub CANDIDATE · 5 refs · 2026-09-28T20:00:53Z · made in the Hub outside this workspace — evaluation UNAVAILABLE
- `d97d81cc` GMI-only request (not in Hub), status failed, 2026-09-28T19:42:50Z
- `f3e60bcd` **FINAL 01f — Ensemble Character Sheet — Ten Characters** — Hub FINAL · 2 refs · 2026-09-28T20:17:03Z · user marked FINAL; built from lineup images 59f78f89 (row A) and a75ee50a (row B) as 2 references to beat the 5-reference limit for 10 characters

Zero corrections: 32944b76 rendered Zero as a duplicate Mr. 86 (no Zero reference) → 60380946 swapped Zero reference in (lost Bobby) → 39e07c0a added one Zero line → final ensemble. Static/Bobby corrections: c90af23e swapped Bobby/Static; order-lock prompt and lineup rows fixed it. Prop corrections: 32944b76 exact prop strip; belt buckle "86" defect noted.

## 10. Gameplay Grammar

- `6a619eb1` **GAMEPLAY GRAMMAR TEST — Mara — Bellweather Boulevard — 01** — Hub FINAL · 3 refs · 2026-09-28T16:33:08Z · Mara fills about 45% of the screen height, not 15%. The camera is too close, which reads as a character showcase; Gibberish sign text on 2 storefronts ('Cumdention', 'Coinveus LGRUPOOEL'), despite the blank-sign rule; Still reads as a 2D comic illustration (halftone ink linework) more than an in-engine 3D render
- `76abd3b4` **Gameplay Grammar Test 02 — Dimensional Open World** — Hub CANDIDATE · 3 refs · 2026-09-28T16:39:50Z · no defects recorded
- `0417a2a0` **Gameplay Grammar Test 03 — MASTER — Channel 86 Open World** — Hub CANDIDATE · 3 refs · 2026-09-28T17:42:10Z · no defects recorded

Test 01 (Mara, Bellweather Boulevard) was marked FINAL by the user and is the current open-world gameplay final.

## 11. Visual Intensity Tests

- `4fbe8e64` **Channel 86 Intensity 0 — Grounded** — Hub CANDIDATE · 3 refs · 2026-09-28T17:51:12Z · no defects recorded
- `fc7fba37` **Channel 86 Intensity 1 — Subtle Signal** — Hub CANDIDATE · 3 refs · 2026-09-28T17:52:55Z · no defects recorded
- `93519ccf` **Channel 86 Intensity 2 — Sweet Spot** — Hub CANDIDATE · 3 refs · 2026-09-28T17:53:45Z · no defects recorded
- `47180032` **Channel 86 Intensity 3 — Heavy Signal** — Hub CANDIDATE · 3 refs · 2026-09-28T17:54:28Z · no defects recorded
- `4db45974` **Channel 86 Intensity 4 — Full Signal** — Hub CANDIDATE · 3 refs · 2026-09-28T17:55:10Z · no defects recorded

## 12. Bellweather Development

- `d1317daf` **Benchmark 02 · Bellweather Environment** — Hub REJECT · 0 refs · 2026-09-28T12:32:56Z · no defects recorded
- `be2520c6` **Benchmark 02 — Bellweather Environment** — Hub REJECT · 0 refs · 2026-09-28T12:49:20Z · no defects recorded
- `07b6deda` **Benchmark 02 — Bellweather Environment v2 (painted-set anomalies)** — Hub REJECT · 0 refs · 2026-09-28T12:50:44Z · no defects recorded
- `5410e30f` **Environment Style Test — CHILL — 01** — Hub CANDIDATE · 5 refs · 2026-09-28T14:19:50Z · no defects recorded
- `de6ddc80` **Environment Style Test — VIBRANT — 01** — Hub CANDIDATE · 5 refs · 2026-09-28T14:24:43Z · no defects recorded
- `73d492dc` **Environment Test — CHILL — 02** — Hub CANDIDATE · 5 refs · 2026-09-28T14:51:03Z · no defects recorded
- `4acc30b7` **Environment Test — VIBRANT — 02** — Hub CANDIDATE · 5 refs · 2026-09-28T14:51:44Z · no defects recorded
- `0fbaaaeb` **FINALIST — Environment — Channel 86 Station — 01** — Hub CANDIDATE · 5 refs · 2026-09-28T15:31:51Z · The central broadcast structure is not monumental; there are several mid-size towers instead of one dominant objective; Foreground mini-golf hole is lifted closely from vibrant-world-05 (reference copying); Flooded maintenance passage is only suggested by the water in the drain
- `d7c54f86` **FINALIST — Environment — Channel 86 Station — 02** — Hub CANDIDATE · 5 refs · 2026-09-28T16:03:12Z · TEXT LEAK: 'CHANNEL 86' painted twice on the station; About 3–4× taller than its surroundings, not 5–10×; it reads as one round building rather than a stacked 'cathedral'; Limited impossible vertical repetition
- `40a604ba` **FINALIST — Environment — Channel 86 Station — 03** — Hub CANDIDATE · 5 refs · 2026-09-28T16:20:40Z · Value instruction NOT followed: the foreground channel is sunlit and bright, not dark; The swirling static hole in the sky from v02 is gone; The station is still only about 4–5× the height of its surroundings
- `1ddfc887` **FINAL 02 — Environment / Level Design — Bellweather Broadcast District** — Hub FINAL · 5 refs · 2026-09-28T18:08:11Z · The channel holds water rather than being a dry concrete route; Two small storefront signs carry illegible lettering; Contamination is light (static screens only); little rainbow leakage

Plus the Chill 01–05 / Vibrant 01–05 runs (and Vibrant 05 re-run 9ddd9525) listed in the ledger.

## 13. Open-World Gameplay Development

- `c7b7e9a7` **FINALIST — Gameplay Exploration — Cass Pike — 01** — Hub CANDIDATE · 5 refs · 2026-09-28T15:28:54Z · DUPLICATED PROP: camera apparatus appears on BOTH forearms (violates 'EXACTLY ONE primary camera apparatus'); Camera arm is not raised to document an anomaly; Cass's face is hidden (expected from the behind-camera angle)
- `bafeab23` **FINALIST — Gameplay Exploration — Cass Pike — 02** — Hub CANDIDATE · 5 refs · 2026-09-28T16:00:35Z · TEXT LEAK: 'RECOR STOP' sign, 'RECIVS' posters and lettering on record sleeves; Cass is larger than 20% of the frame, and the camera sits at roughly her shoulder height, not above her head; Storefront TVs mostly face forward rather than turning toward Cass
- `4b23c80e` **FINAL 03 — Open-World Gameplay — Instant Lee Motorcycle Pursuit** — Hub CANDIDATE · 3 refs · 2026-09-28T18:09:02Z · Lee faces the CAMERA on a stationary-looking bike instead of racing away; no sense of pursuit or motion blur; He is about 55% of frame height (target 25–30%), with a slightly pasted-on look; Illegible lettering on two roadside shop signs
- `0787a53b` **FINAL 03b — Open-World Gameplay — Instant Lee Freeway Pursuit** — Hub CANDIDATE · 3 refs · 2026-09-28T18:37:04Z · No visible red/blue police light reflections; Minimap has an 'N' compass letter; Tiny illegible glyphs on one distant gantry sign
- `6a619eb1` **GAMEPLAY GRAMMAR TEST — Mara — Bellweather Boulevard — 01** — Hub FINAL · 3 refs · 2026-09-28T16:33:08Z · Mara fills about 45% of the screen height, not 15%. The camera is too close, which reads as a character showcase; Gibberish sign text on 2 storefronts ('Cumdention', 'Coinveus LGRUPOOEL'), despite the blank-sign rule; Still reads as a 2D comic illustration (halftone ink linework) more than an in-engine 3D render

The Instant Lee motorcycle images (4b23c80e, 0787a53b) are preserved as history and remain CANDIDATE. They are NOT the current final. The current final is 6a619eb1 (Mara).

## 14. Static Pool Development

- `4cf77ef1` **FINALIST — Creature Encounter — Lyle Flutterman + Bobby — 01** — Hub CANDIDATE · 5 refs · 2026-09-28T15:29:46Z · Bobby faces camera with both hands raised and is not leaning back or looking at Lyle, so his reaction is weak; Lyle is playing the guitar calmly instead of crashing through; the wall is broken but he is not mid-motion; No fluorescent pool light; the recreation-center reading is light (arcade cabinet, benches)
- `189f52de` **FINALIST — Creature Encounter — Lyle Flutterman + Bobby — 02** — Hub CANDIDATE · 5 refs · 2026-09-28T16:01:30Z · Lyle's hands are still in a playing position; the guitar isn't swinging from the collision; The pool has water in it rather than being drained, and the TV sits in the shallows, not on the pool floor; Wings are spread, not folded, and neither wing rips a second wall section
- `41ce2019` **FINAL 04 — Gameplay Encounter — Static + Bobby / The Dead Pool** — Hub CANDIDATE · 4 refs · 2026-09-28T18:09:54Z · The safe path (dry tile islands) is not clearly shown; The pool reads as full of corruption rather than drained
- `d12dad33` **FINAL 04b — Gameplay Combat — Zero Rises / The Static Pool** — Hub FINAL · 4 refs · 2026-09-28T18:37:38Z · Zero is roughly human-sized, not towering 3×; Static and Bobby are fairly large in frame; The radio icon belongs to Mara, but the players here are Static and Bobby

## 15. Mr. 86 Boss Development

- `c909ee5b` **Character Identity Test — Mr. 86 — 01** — Hub CANDIDATE · 1 refs · 2026-09-28T14:52:40Z · no defects recorded
- `72abea79` **Mr. 86 World Test — CHILL — 01** — Hub CANDIDATE · 5 refs · 2026-09-28T14:53:13Z · no defects recorded
- `03ce869d` **Mr. 86 World Test — VIBRANT — 01** — Hub CANDIDATE · 5 refs · 2026-09-28T14:53:49Z · no defects recorded
- `dbe95a08` **Interaction Test — Instant Lee + Mr. 86 — Confrontation — 01** — Hub CANDIDATE · 5 refs · 2026-09-28T15:15:17Z · no defects recorded
- `76ed6e76` **FINAL 05 — Boss Battle — Mara vs. Mr. 86 / Broadcast Tower** — Hub FINAL · 4 refs · 2026-09-28T18:10:29Z · Mara is about 35% of frame height (target 20–25%); Arms are machinery rather than yellow eye-covered suit sleeves; No clearly levitating cars/debris

## 16. Key Art Development

- `32a89b78` **FINALIST — Key Art — The Signal Arrives — 01** — Hub CANDIDATE · 5 refs · 2026-09-28T15:27:58Z · Poses stay close to the reference sheets: Mara stands facing camera; she is not moving toward camera or looking back over her shoulder; No monumental distant transmission structure; background hierarchy is weak for flagship key art; Architecture does not visibly repeat or bend; static tear is limited to the sky
- `e940153c` **FINALIST — Key Art — The Signal Arrives — 02** — Hub CANDIDATE · 5 refs · 2026-09-28T15:59:38Z · TEXT LEAK: readable 'CHANNEL 86' / 'CHANNER 86' signage on the tower (twice); Mara runs sideways across the frame rather than toward camera; she isn't clearly looking back at Mr. 86; Mr. 86 stands frontal with arms spread; he is not walking or reaching specifically toward Mara
- `a4078721` **FINALIST — Key Art — The Signal Arrives — 03** — Hub FINAL · 5 refs · 2026-09-28T16:18:56Z · Mara now faces forward/left instead of looking back over her shoulder at Mr. 86; Tower reverted to a lattice radio tower rather than a 'cathedral' of stacked studios; Mr. 86 is still mostly frontal, not clearly walking toward Mara
- `bd409151` GMI-only successful key art (2026-09-28T20:18:22Z) — not saved in Hub; evaluation UNAVAILABLE
- `d35cfc6a` GMI-only failed first submit of FINAL 06 (2026-09-28T20:33:00Z)
- `b43f87c9` **FINAL 06 — Master Key Art — Clean Artwork** — Hub CANDIDATE · 5 refs · 2026-09-28T20:35:50Z · reviewer recommended REJECT; Mr. 86's face is absent from the tower (key story beat missing); Instant Lee wears a grinning gold joker-like face, not the gold TRAGIC mask; rides a generic black cruiser, not the panther motorcycle; Zero duplicated: two void-head figures in the doorway

## 17. Final Six Selections

| # | Role | Request ID | Title | Panel |
|---|---|---|---|---|
| 1 | Key Art | `a4078721-86fe-4962-bd6c-bccd914ef48b` | FINALIST — Key Art — The Signal Arrives — 03 | Top-left |
| 2 | Character Design Sheet | `f3e60bcd-b1f7-49e9-85e2-319bfda0f53c` | FINAL 01f — Ensemble Character Sheet — Ten Characters | Top-center |
| 3 | Bellweather Environment / Level Design | `1ddfc887-9315-4e1c-b4e1-840c7f6a3606` | FINAL 02 — Environment / Level Design — Bellweather Broadcast District | Top-right |
| 4 | Mara Open-World Gameplay | `6a619eb1-5645-4cf4-b17a-6c4db79624ab` | GAMEPLAY GRAMMAR TEST — Mara — Bellweather Boulevard — 01 | Bottom-left |
| 5 | Static Pool Gameplay Encounter | `d12dad33-c213-44a5-bbc5-0e345b300efc` | FINAL 04b — Gameplay Combat — Zero Rises / The Static Pool | Bottom-center |
| 6 | Mr. 86 Boss Battle | `76ed6e76-c382-4a2d-920d-f2d8cad7e867` | FINAL 05 — Boss Battle — Mara vs. Mr. 86 / Broadcast Tower | Bottom-right |

Files: `evidence/finals/` (byte-identical to GMI outputs; see integrity checks).

## 18. Final Composite Assembly

This showcase was assembled from six existing finished CHANNEL 86 artworks using deterministic image compositing/layout. No new generative artwork was created during the composite step.

- Master PNG: `evidence/composite/CHANNEL86_Final_Six-Image_Showcase_MASTER.png` (5568×2160), sha256 `fb78ed1625b4b191877605936de5aa850b01d5dd1784b1ba088f6949741c556d`
- Layout: 3×2, 48 px margin/gutter, 1792×1008 panels, background (22,20,19), LANCZOS, no crop.
- Model generation cost: $0.00. No GMI request.
- Recorded in the Hub as a composite record (type composite, requestId null, cost 0).

## 19. Prompt Archive Summary

96 distinct prompt texts (74 sent to GMI, 24 saved Prompt Lab records). Every Hub prompt matches its GMI payload byte-for-byte after whitespace trim. See `CHANNEL86_PROMPT_ARCHIVE.md` and `CHANNEL86_PROMPT_EVOLUTION.md`.

## 20. Reference History Summary

Ordered reference slots are preserved for all 71 Hub generations (and the sent image URLs match GMI payloads). For GMI-only requests, references are URLs matched back to vault names where possible. See `CHANNEL86_REFERENCE_HISTORY.md`.

## 21. Generation Metadata

- Hub HY IMAGE generations: 71 (+1 composite record)
- GMI-only requests recovered: 12
- Complete metadata: 50; partial: 33
- Complete = in Hub, GMI success record, prompt matches GMI, written evaluation exists, output file downloaded. Partial = anything missing (usually the written evaluation, or not in Hub).

## 22. Cost Summary

- Recorded HY IMAGE cost (Hub records): **$1.704**
- Estimate for GMI-only successes (not recorded): $0.120
- Failed GMI requests: cost UNAVAILABLE
- Composite: $0.00
- GMI invoices: UNAVAILABLE

## 23. GitHub Workflow Milestones

55 workflow-relevant commits (table in `CHANNEL86_MASTER_TIMELINE.md`). Key ones:

- 2026-09-28T10:15:18Z `4e242bb` Add secure server-side GMI Hy-Image generation endpoint — All HY IMAGE calls go through a Vercel function holding GMI_API_KEY; the browser never sees the key.
- 2026-09-28T10:40:34Z `9273392` Add competition generation review workflow — Provides the REJECT / CANDIDATE / FINAL statuses used to review every output.
- 2026-09-28T10:43:20Z `314e610` Add persistent reference image upload API — References become public HTTPS URLs GMI can fetch, and persist between sessions.
- 2026-09-28T10:43:26Z `fa89b81` Route reference uploads through persistent Blob storage — References become public HTTPS URLs GMI can fetch, and persist between sessions.
- 2026-09-28T10:44:53Z `2dab95e` Track generation evidence metadata and submission costs — Every generation stores request ID, seed, size, refs and cost — the basis of this archive.
- 2026-09-28T14:09:48Z `f6bce65` Poll GMI status from the browser and record reference names/URLs per generation — Each generation records the exact ordered reference names/URLs sent.

## 24. Missing Metadata

See `CHANNEL86_MISSING_METADATA.md`. Summary: 2 request IDs known by prefix only; 12 GMI requests never saved in the Hub; status-change times never stored; GMI billing unavailable; GMI history older than the latest 20 requests not listable.

## 25. Reconciliation

| Check | Value |
|---|---|
| hub_localstorage_generations | 72 |
| hub_ui_total_generations | 72 |
| hub_evidence_export_summary | {'totalGenerations': 72, 'candidates': 61, 'finals': 7, 'estimatedCost': 1.736000000000001} |
| hy_image_generations_in_hub | 71 |
| composite_records | 1 |
| gmi_records_matched_to_hub | 71 |
| gmi_records_not_in_hub | 12 |
| gmi_not_in_hub_success | 5 |
| gmi_not_in_hub_failed | 7 |
| short_id_only_requests | 2 |
| local_output_files | 77 |
| prompt_payload_mismatches | 0 |
| sent_image_mismatches | 0 |
| hub_status_counts | {'REJECT': 4, 'CANDIDATE': 61, 'FINAL': 7} |
| hub_ui_candidates | 61 |
| hub_ui_finals | 7 |
| cost_hub_dashboard | 1.736 |
| cost_recorded_hy | 1.704 |
| cost_difference_explained | 0.032 = Hub costFor() applied to the $0 composite record |

Issues:

- 12 GMI requests exist that are not in the Hub (5 successful, 7 failed).
- 2 further requests are known only by 8-character prefix (bb5a2d15, 88d298bc).
- Hub dashboard cost $1.736 includes $0.032 for the composite; true composite cost is $0.00.
- Hub FINAL count 7 includes the composite record; finished artworks = 6.
- b43f87c9 recommended REJECT but Hub status is CANDIDATE.
- Hub composite record statement uses earlier wording; the archive uses the required exact statement.
- Earlier record said FINAL 06 first submit had no GMI request; GMI shows failed request d35cfc6a.

## 26. Final Evidence Checklist

- [x] Raw Hub state preserved
- [x] Raw localStorage preserved
- [x] Original references preserved
- [x] Character Vault documented
- [x] Environment Vault documented
- [x] Every recoverable prompt preserved
- [x] Every recoverable generation preserved
- [x] Rejected attempts preserved
- [x] Candidate attempts preserved
- [x] Final attempts preserved
- [x] Seeds preserved where available
- [x] Request IDs preserved where available
- [x] Dimensions preserved
- [x] Model preserved
- [x] Timestamps preserved where available
- [x] Costs preserved where available
- [x] Ordered reference selections preserved where available
- [x] Prompt revisions preserved
- [x] Parent/child iteration lineage preserved
- [x] Character-sheet failures documented
- [x] Zero corrections documented
- [x] Static/Bobby corrections documented
- [x] Prop corrections documented
- [x] Gameplay Grammar documented
- [x] Visual Intensity documented
- [x] Bellweather development documented
- [x] Instant Lee motorcycle gameplay preserved historically
- [x] Mara gameplay correctly identified as current final
- [x] Static Pool development documented
- [x] Mr. 86 boss development documented
- [x] Key-art development documented
- [x] GitHub workflow milestones documented
- [x] Six final artworks verified
- [x] Six-panel composite verified
- [x] Composite marked deterministic
- [x] Composite generation cost marked $0.00
- [x] Final PNG master preserved
- [x] Machine-readable manifest complete
- [x] Master timeline complete
- [x] All-generations ledger complete
- [x] Prompt archive complete
- [x] Prompt evolution complete
- [x] Reference history complete
- [x] Status history complete
- [x] Cost ledger complete
- [x] Workflow report complete
- [x] Final asset index complete
- [x] Missing metadata report complete
- [x] Submission summary complete
- [x] Show Your Work presentation complete
- [x] Generation counts reconciled
- [x] No missing data fabricated
- [x] Original artwork untouched

Automated checks: `evidence/raw/integrity-checks.json`. "Workflow report complete" and "Submission summary complete" are checked after both files are written by this script.