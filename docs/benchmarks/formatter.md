# Formatter benchmarks: Prettier vs oxfmt vs Vite+ (`vp fmt`)

**Date:** 2026-10-02  
**Branch:** `lint`  
**Machine:** omarchy (Omarchy 4.0.4, `ID_LIKE=arch`) — Intel Core i7-4870HQ @ 2.50 GHz, 4 cores / 8 threads, ~16 GiB RAM  
**Repo:** `chips-and-cookies` (format check over the project tree)

## Versions

| Tool | Version | Notes |
|------|---------|--------|
| oxfmt | 0.71.0 | Project formatter (`package.json` scripts `format` / `format:check`) |
| Prettier | 3.8.0 | Temporary install for comparison only (not kept) |
| vite-plus (`vp`) | 1.0.0 | Temporary install for comparison; toolchain reports bundled **oxfmt@0.70.0** |

Shared format settings used for the comparison (`.oxfmtrc.json` / matching Prettier RC):

- `trailingComma: "none"`, `tabWidth: 2`, `semi: true`, `singleQuote: false`, `printWidth: 200`
- oxfmt also: `sortPackageJson: false`, `ignorePatterns: ["**/routeTree.gen.ts"]`

## Commands

Warm runs: one cold invocation, then five warm invocations. Times below are **warm averages** (n=5) unless noted.

```bash
# oxfmt (project binary)
./node_modules/.bin/oxfmt --check

# Vite+ format (wraps oxfmt; options forwarded to Oxfmt)
vp fmt --check

# Prettier (temporary; config aligned with .oxfmtrc.json)
./node_modules/.bin/prettier --check . --config /tmp/prettier-bench.prettierrc.json
```

oxfmt / `vp fmt` report their own `Finished in …ms on 156 files using 8 threads`. Prettier does not; its times are wall-clock for the same redirect-capture pattern (file birth → mtime).

## Warm averages

| Tool | Warm average | Per-run warm samples | Cold |
|------|--------------|----------------------|------|
| **oxfmt** | **~1046 ms** | 1003, 988, 1060, 1078, 1103 ms | 974 ms |
| **vp fmt** | **~1143 ms** | 1061, 1116, 1102, 1143, 1295 ms | 1054 ms |
| **Prettier** | **~1410 ms** (wall) | ~1422, 1461, 1380, 1417, 1369 ms | ~1454 ms |

Relative to oxfmt warm average (~1046 ms):

- `vp fmt` ≈ **1.09×** (about **+97 ms**)
- Prettier ≈ **1.35×** (about **+364 ms** wall)

## Notes

- **`vp fmt` wraps oxfmt.** Vite+ help states options are forwarded to Oxfmt; `vp toolchain` for vite-plus@1.0.0 lists a dependency on oxfmt@0.70.0. Observed check output matches oxfmt’s “Finished in … on N files using T threads” shape. The small slowdown vs project oxfmt@0.71.0 is consistent with an extra CLI/wrapper layer (and a slightly older bundled oxfmt).
- **File-set caveat:** oxfmt / `vp fmt` checked **156** files (routeTree.gen.ts ignored). Prettier warned on `src/routeTree.gen.ts`, so it included at least that extra file — not a perfect apples-to-apples corpus.
- **Decision:** the project **kept oxfmt**, not vite-plus. Scripts remain `"format": "oxfmt"` and `"format:check": "oxfmt --check"`. vite-plus was only used for this benchmark and was not adopted as the formatter toolchain.
