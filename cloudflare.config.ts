import { defineConfig } from 'cf/config'

// `wrangler.jsonc` set `previews` to an empty object, so preview deployments
// inherit this same Worker. Branch on `ctx.isPreview` when a preview needs
// different bindings.
export default defineConfig({
  worker: {
    name: 'chips-and-cookies',
    compatibilityDate: '2026-09-23',
    compatibilityFlags: ['nodejs_compat'],
    entrypoint: '@tanstack/react-start/server-entry',
    workersDev: true,
    previewUrls: true,
  },
})
