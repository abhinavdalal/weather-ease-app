import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  css: {
    postcss: {
      plugins: [tailwindcss()]
    }
  }
});

// export default ({ mode }) => {
//   return defineConfig({
//     plugins: [
//       react(),
//     ],
//   });
// };
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";

// export default defineConfig({
//   plugins: [react()],
// });
