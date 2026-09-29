# CHANNEL 86 — Submission Evidence Summary

**What it is.** CHANNEL 86 is an original open-world game concept: a surreal mystery / psychedelic comedy / retro horror world in Bellweather, California, where an impossible TV signal leaks into a sunny suburb.

**How the Hub was used.** All art was made in the AI Competition Hub (Vercel app → GMI Cloud → HY IMAGE 3.5). The Hub holds the reference vaults, Prompt Lab, generation records (request ID, prompt, seed, size, ordered references, cost) and the Reject/Candidate/Final review. The GMI key stays server-side.

**Model.** `hy-image-v3.5-preview`, seed 0, 2560×1440, up to 5 references. 83 GMI requests (71 saved in the Hub, 12 recovered from GMI only; 7 failed).

**References.** 21 canonical character screenshots (identity) and 22 world frames (Chill/Vibrant style) were uploaded, named and selected per request. Generated images were re-used as references to carry fixes forward.

**Prompt iteration.** 96 distinct prompt versions. Each change is diffed against its parent in the prompt-evolution file, with the reason when one was recorded.

**Failure review.** Every output was reviewed and kept, including 4 REJECTs and all failed GMI requests. Defects were written down (duplicate characters, swapped identities, text leaks, wrong props, weak framing) and fed into the next prompt or reference set.

**Character identity fixes.** Zero kept turning into a Mr. 86 copy, Bobby and Static swapped places, and props repeated. Fixes: reference-slot swaps, order-lock prompts, and finally two lineup images used as references for a 10-character ensemble sheet.

**How the work evolved.** Environments went from benchmarks through Chill/Vibrant tests to the Bellweather Broadcast District. Gameplay went from Cass Pike exploration and Instant Lee motorcycle pursuits (kept as history) to the Mara Bellweather Boulevard shot. The Static Pool went from a creature encounter to "Zero Rises". The Mr. 86 boss built on identity and world tests. Key art took three finalist rounds.

**Final six.** 1. Key Art (`a4078721`); 2. Character Design Sheet (`f3e60bcd`); 3. Bellweather Environment / Level Design (`1ddfc887`); 4. Mara Open-World Gameplay (`6a619eb1`); 5. Static Pool Gameplay Encounter (`d12dad33`); 6. Mr. 86 Boss Battle (`76ed6e76`).

**Showcase.** This showcase was assembled from six existing finished CHANNEL 86 artworks using deterministic image compositing/layout. No new generative artwork was created during the composite step. Master PNG 5568×2160; model generation cost $0.00.

**Preserved metadata.** Request IDs, full prompts, seeds, sizes, ordered references, GMI submit/complete times, output URLs and SHA-256 hashes, statuses, lineage, costs ($1.704 recorded), GitHub milestones, Hub screenshots, and a machine-readable manifest. Gaps are listed honestly in the missing-metadata report.