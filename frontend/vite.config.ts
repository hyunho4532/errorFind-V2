import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    global: {}, 
  },

  server: {
    proxy: {
      '/api': {
        target: 'https://port-0-errorfind-backend-2aat2clulwvny3.sel5.cloudtype.app',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
