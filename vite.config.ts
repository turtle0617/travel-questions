import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/conf ig/
export default defineConfig({
  base: '/travel-questions/',
  plugins: [react()],
})
