import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//     build: {
//         chunkSizeWarningLimit: 100000000
//     },
//     base: "/shourya-sinha",
// })
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'fix-gltf-mime',
      configureServer(server) {
        // Handle .gltf and .bin file MIME types
        server.middlewares.use((req, res, next) => {
          if (req.url.endsWith('.gltf')) {
            res.setHeader('Content-Type', 'model/gltf+json');
          }
          if (req.url.endsWith('.bin')) {
            res.setHeader('Content-Type', 'application/octet-stream');
          }
          next();
        });
      }
    }
  ],
  build: {
    chunkSizeWarningLimit: 100000000
  },
  base: "/Shourya_sinha_3d_portfolio/",
});
