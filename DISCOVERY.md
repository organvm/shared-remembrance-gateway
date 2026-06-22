# DISCOVERY — shared-remembrance-gateway

**Date:** 2026-06-22 · **Verdict:** VALUE FOUND → promoted to ranked tier
**Organ:** ORGAN-II (Art) · `organvm-ii-poiesis/shared-remembrance-gateway`
**Build-out:** First task DELIVERED — the Memorial Archive format ships in
`src/memorial-archive.ts` with a proven lossless round-trip
(`tests/memorial-archive.test.ts`, 20 tests, build green). The repo is no longer dark.

## Value Thesis

On its surface this repo is `DESIGN_ONLY`: the code is a one-function stub and the
weight is in documentation — a 30 KB portfolio-grade README, a 55 KB concept
exploration, ADRs, and a pitch deck describing an ambitious privacy-first
"digital home" metaverse (Unity client, on-device computer vision, UGC-to-NFT,
AI host). The metaverse-in-full is not buildable here and is not the latent
value. The latent value is a single, sharply-scoped, defensible idea buried in
that spec: **a portable, platform-independent digital-memorial archive format** —
a self-contained bundle of a deceased person's photos, audio, text, objects, and
spatial arrangement that can be exported, validated, and re-imported losslessly,
independent of any platform that hosts it. The README already commits to this as
a hard quality gate ("Memorial data export/import must round-trip without loss")
and as a guaranteed user right ("every memorial can be exported as a
self-contained archive independent of the platform"). Extracted from the Unity /
blockchain / CV machinery it does not need, this becomes a small, testable
TypeScript library + JSON schema that is (1) **reusable across the estate** — any
ORGAN-II project handling memory, provenance, or user-owned creative artifacts
can consume it, and it composes with `audio-synthesis-bridge` (memorial
soundscapes) and `showcase-portfolio`; (2) **the atom of the clearest revenue
path** — the spec's own business model lists a B2B white-label memorial platform
for funeral homes, hospices, and religious organizations, a real and underserved
market, and a standardized portable archive is exactly the interoperability asset
that sale requires; and (3) **buildable now** in the repo's existing TS/Jest
stack, turning a dark design doc into a shipping, depended-upon package. The grief
domain also gives it durable, non-speculative meaning that outlasts metaverse
hype: data portability for the dead is a guarantee, not a feature. That is real,
specific, present value — not archival.

## Highest Latent Value (ranked)

1. **Portable Memorial Archive format + reference library** *(promote & build)* —
   typed schema (`MemorialArchive`) with `serialize` / `deserialize` / `validate`
   and a guaranteed lossless round-trip. The smallest extraction of the concept's
   most defensible idea; reusable; revenue-aligned; buildable today.
2. **The concept/spec corpus itself** — README, concept exploration, ADRs, and
   pitch deck are a coherent, fundable product narrative (grant/portfolio asset
   for ORGAN-II), independent of whether the platform is ever built.
3. **B2B white-label memorial offering** — the nearest commercial wedge; depends
   on (1) as its interoperability substrate.

## Single Best Concrete First Task

**Implement the Memorial Archive format in `src/`.** Replace the stub with a
typed `MemorialArchive` data model (memorial metadata, photo/audio/text/object
items, spatial placement, access policy) plus `serialize()`, `deserialize()`, and
`validate()` functions, and a Jest test proving an arbitrary memorial round-trips
to JSON and back with zero loss. This converts the README's stated quality gate
into executing, depended-upon code and gives the rest of the estate a real
artifact to consume. Keep the build green.
