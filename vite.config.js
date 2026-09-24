import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { createHash } from 'node:crypto'

const UPLOAD_FOLDER = 'portfolio/projects'

// Dev-only signer for Cloudinary uploads. The API secret is read from
// CLOUDINARY_API_SECRET (no VITE_ prefix), so it stays in Node and is never
// sent to the browser. This middleware does not exist in production builds.
const cloudinarySigner = (env) => ({
  name: 'cloudinary-dev-signer',
  apply: 'serve',
  configureServer(server) {
    server.middlewares.use('/__cloudinary/sign', (req, res) => {
      res.setHeader('Content-Type', 'application/json')
      res.setHeader('Cache-Control', 'no-store')

      const cloudName = env.CLOUDINARY_CLOUD_NAME || env.VITE_CLOUDINARY_CLOUD_NAME
      const apiKey = env.CLOUDINARY_API_KEY
      const apiSecret = env.CLOUDINARY_API_SECRET

      if (!cloudName || !apiKey || !apiSecret) {
        res.statusCode = 500
        res.end(JSON.stringify({ error: 'Add CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET to .env.local and restart the dev server.' }))
        return
      }

      const timestamp = Math.round(Date.now() / 1000)
      const signature = createHash('sha1')
        .update(`folder=${UPLOAD_FOLDER}&timestamp=${timestamp}${apiSecret}`)
        .digest('hex')

      res.end(JSON.stringify({ cloudName, apiKey, timestamp, signature, folder: UPLOAD_FOLDER }))
    })
  },
})

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react(), tailwindcss(), cloudinarySigner(env)],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  }
})
