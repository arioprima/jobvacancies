/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': resolve(__dirname, './src/components'),
      '@utils': resolve(__dirname, './src/utils'),
      '@styles': resolve(__dirname, './src/styles'),
      '@images': resolve(__dirname, './src/assets/images'),
      '@icons': resolve(__dirname, './src/assets/icons'),
      '@pages': resolve(__dirname, './src/pages'),
      '@layouts': resolve(__dirname, './src/layout'),
      '@context': resolve(__dirname, './src/context'),
      '@hooks': resolve(__dirname, './src/hooks'),
      '@config': resolve(__dirname, './src/config'),
      '@api': resolve(__dirname, './src/api'),
      '@lib': resolve(__dirname, './src/lib'),
      '@store': resolve(__dirname, './src/store'),
      '@router': resolve(__dirname, './src/routes'),
      '@services': resolve(__dirname, './src/services'),
      '@constants': resolve(__dirname, './src/constants'),
      '@types': resolve(__dirname, './src/types'),
    },
  },
})
