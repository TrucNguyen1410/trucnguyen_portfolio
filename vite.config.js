import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Resolve the public site URL.
// On Vercel, VERCEL_PROJECT_PRODUCTION_URL is the stable *.vercel.app domain
// (or a custom domain). Falls back to a placeholder for local builds.
const siteUrl = (() => {
  const host =
    process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL
  return host ? `https://${host}` : 'https://truc-portfolio.vercel.app'
})()

// Replace the __SITE_URL__ token in index.html at build time so the
// Open Graph / canonical / hreflang tags use absolute, correct URLs.
const htmlSiteUrl = () => ({
  name: 'html-site-url',
  transformIndexHtml(html) {
    return html.replaceAll('__SITE_URL__', siteUrl)
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), htmlSiteUrl()],
})
