# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- **Memorial Archive format** (`src/memorial-archive.ts`) — the portable,
  platform-independent archive at the heart of the discovered value thesis
  (see `DISCOVERY.md`). Typed `MemorialArchive` schema plus `serialize`,
  `deserialize`, `validate`, `createMemorial`, and `isMemorialArchive`, with a
  canonical (content-addressable) serializer and a guaranteed **lossless
  export/import round-trip** — the README's stated quality gate, now enforced by
  tests. Re-exported from `src/index.ts` for cross-estate consumption.
- CONVERGENCE Sprint: Full PRODUCTION promotion — CI/CD, prototype skeleton, ADRs, badge row
- Provenance materials deployed from local source archive

## [0.1.0] - 2026-02-13

### Added

- Initial public release as part of the organvm eight-organ system
- Core project structure and documentation
- README with portfolio-quality documentation

[Unreleased]: https://github.com/organvm-ii-poiesis/shared-remembrance-gateway/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/organvm-ii-poiesis/shared-remembrance-gateway/releases/tag/v0.1.0
