import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dns from 'dns'
import { resolve } from 'path'

dns.setDefaultResultOrder('verbatim')
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '_components': resolve(__dirname, 'src/components/'),
      '_user': resolve(__dirname, 'src/user/'),
      '_helper': resolve(__dirname, 'src/helper/'),
    }
  },
  server: {
    proxy: {
      '/server': {
        target: 'http://localhost:8800',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/server/, ''),
      },
    },
  },
 
})