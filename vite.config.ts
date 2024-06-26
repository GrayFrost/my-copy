import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import copy from "rollup-plugin-copy";
import path from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);

// const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  root: "src",
  plugins: [
    react(),
    copy({
      targets: [
        { src: "manifest.json", dest: "dist" },
        { src: "src/icons/**", dest: "dist/icons" },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "dist"),
    rollupOptions: {
      input: {
        popup: path.resolve(__dirname, "src/popup/index.html"),
        options: path.resolve(__dirname, "src/options/index.html"),
        content: path.resolve(__dirname, "src/content/content_script.ts"),
        background: path.resolve(__dirname, "src/background/service_worker.ts"),
      },
      output: {
        assetFileNames: "assets/[name]-[hash].[ext]",
        chunkFileNames: "js/[name]-[hash].js",
        entryFileNames: (chunkInfo) => {
          const baseName = path.basename(
            chunkInfo.facadeModuleId as string,
            path.extname(chunkInfo.facadeModuleId as string)
          );
          const saveArr = ["content_script", "service_worker"];
          return `[name]/${
            saveArr.includes(baseName) ? baseName : chunkInfo.name
          }.js`;
        },
        name: "[name].js",
      },
    },
  },
});
