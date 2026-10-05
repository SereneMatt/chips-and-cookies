import { defineConfig } from "oxlint";

export default defineConfig({
  ignorePatterns: ["dist/**", ".agents/**", ".codex/**", ".cloudflare/**", ".tanstack/**", ".wrangler/**"],
  plugins: ["react", "typescript", "unicorn", "oxc", "import", "jsx-a11y"],
  categories: {
    correctness: "error"
  },
  env: {
    browser: true,
    node: true
  },
  settings: {
    react: {
      version: "19.3.0"
    }
  },
  rules: {
    "oxc/no-accumulating-spread": "error"
  }
});
