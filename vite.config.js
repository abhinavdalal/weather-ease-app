import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://abhinavdalal.github.io/weather-ease-app/'
})
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
