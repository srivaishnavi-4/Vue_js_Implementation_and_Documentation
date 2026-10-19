import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [vue()],

    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },

    server: {
      port: 5173,
      open: true
    },

    preview: {
      port: 4173
    },

    define: {
      __APP_VERSION__: JSON.stringify(env.APP_VERSION || '1.0.0')
    },

    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
      assetsInlineLimit: 4096
    }
  }
})