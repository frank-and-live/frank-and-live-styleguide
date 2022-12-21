import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/#conditional-config
export default defineConfig(({ command  }) => {
  if (command === 'serve') {
    return {
      plugins: [vue({
        template: {
          compilerOptions: { //✅ here
            isCustomElement: tag => tag === 'lottie-player'
          }
        }
      })],
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
      },
      server: {
        port: 6543,
        https: false,
      },
    }
  } else {
    // command === 'build'
    return {
      base: '/docs/dist/',
      plugins: [vue({
        template: {
          compilerOptions: { //✅ here
            isCustomElement: tag => tag === 'lottie-player'
          }
        }
      })],
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
      },
      server: {
        port: 6543,
        https: false,
      },
    }
  }
})
