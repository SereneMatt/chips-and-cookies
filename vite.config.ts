import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { cloudflare } from '@cloudflare/vite-plugin'

const vanillaExtractCloudflareCompatibility = {
  name: 'vanilla-extract-cloudflare-ssr',
  configResolved(config: import('vite').ResolvedConfig) {
    // vanilla-extract uses externals to share its SSR file-scope adapter.
    // Cloudflare forbids resolve.external in Worker environments, so bundle
    // these helpers into the SSR Worker build after Vite resolves plugins.
    const ssr = config.environments.ssr
    if (ssr) ssr.resolve.external = []
  },
}

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    devtools(),
    vanillaExtractCloudflareCompatibility,
    cloudflare({ viteEnvironment: { name: 'ssr' } }),
    vanillaExtractPlugin(),
    tanstackStart(),
    viteReact(),
  ],
})

export default config
