// vite.config.js
import { defineConfig } from "file:///mnt/c/Users/Novios/Documents/Bootcamp/valentina-material/modulo%202/project-promo-X-module-2-team-3/node_modules/vite/dist/node/index.js";
import injectHTML from "file:///mnt/c/Users/Novios/Documents/Bootcamp/valentina-material/modulo%202/project-promo-X-module-2-team-3/node_modules/vite-plugin-html-inject/dist/index.mjs";
import { ViteImageOptimizer } from "file:///mnt/c/Users/Novios/Documents/Bootcamp/valentina-material/modulo%202/project-promo-X-module-2-team-3/node_modules/vite-plugin-image-optimizer/dist/index.mjs";
import concat from "file:///mnt/c/Users/Novios/Documents/Bootcamp/valentina-material/modulo%202/project-promo-X-module-2-team-3/node_modules/@vituum/vite-plugin-concat/index.js";
import FastGlob from "file:///mnt/c/Users/Novios/Documents/Bootcamp/valentina-material/modulo%202/project-promo-X-module-2-team-3/node_modules/fast-glob/out/index.js";
import path from "node:path";
import { fileURLToPath } from "node:url";
var __vite_injected_original_import_meta_url = "file:///mnt/c/Users/Novios/Documents/Bootcamp/valentina-material/modulo%202/project-promo-X-module-2-team-3/vite.config.js";
var htmlFilesList = Object.fromEntries(
  FastGlob.sync("src/*.html").map((file) => [
    // This remove `src/` as well as the file extension from each
    // file, so e.g. src/nested/foo.js becomes nested/foo
    path.relative(
      "src",
      file.slice(0, file.length - path.extname(file).length)
    ),
    // This expands the relative paths to absolute paths, so e.g.
    // src/nested/foo becomes /project/src/nested/foo.js
    fileURLToPath(new URL(file, __vite_injected_original_import_meta_url))
  ])
);
var inputFilesList = {
  ...htmlFilesList,
  "main": "src/js/main.js"
};
var vite_config_default = defineConfig({
  base: "./",
  root: "src",
  publicDir: "../public",
  build: {
    minify: "esbuild",
    outDir: "../docs",
    sourcemap: "inline",
    emptyOutDir: true,
    rollupOptions: {
      input: inputFilesList,
      output: {
        sourcemap: true,
        entryFileNames: ({ name }) => {
          if (name === "main") {
            return "js/main.js";
          }
          return "[name].js";
        }
      }
    }
  },
  server: {
    open: "/index.html"
  },
  plugins: [
    injectHTML(),
    ViteImageOptimizer({
      /* pass your config */
    }),
    concat({
      input: ["main.js"]
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvbW50L2MvVXNlcnMvTm92aW9zL0RvY3VtZW50cy9Cb290Y2FtcC92YWxlbnRpbmEtbWF0ZXJpYWwvbW9kdWxvIDIvcHJvamVjdC1wcm9tby1YLW1vZHVsZS0yLXRlYW0tM1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL21udC9jL1VzZXJzL05vdmlvcy9Eb2N1bWVudHMvQm9vdGNhbXAvdmFsZW50aW5hLW1hdGVyaWFsL21vZHVsbyAyL3Byb2plY3QtcHJvbW8tWC1tb2R1bGUtMi10ZWFtLTMvdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL21udC9jL1VzZXJzL05vdmlvcy9Eb2N1bWVudHMvQm9vdGNhbXAvdmFsZW50aW5hLW1hdGVyaWFsL21vZHVsbyUyMDIvcHJvamVjdC1wcm9tby1YLW1vZHVsZS0yLXRlYW0tMy92aXRlLmNvbmZpZy5qc1wiOy8vIHZpdGUuY29uZmlnLmpzXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuLy8gaHRtbCBwYXJ0YWxzXG5pbXBvcnQgaW5qZWN0SFRNTCBmcm9tIFwidml0ZS1wbHVnaW4taHRtbC1pbmplY3RcIjtcbi8vIG9wdGltaXplIGltYWdlc1xuaW1wb3J0IHsgVml0ZUltYWdlT3B0aW1pemVyIH0gZnJvbSAndml0ZS1wbHVnaW4taW1hZ2Utb3B0aW1pemVyJztcbi8vIENvbmNhdGVuYXRlIEphdmFTY3JpcHQgZmlsZXMgKGxpa2UgZm9ybWVyIFN0YXJ0ZXIgS2l0KVxuaW1wb3J0IGNvbmNhdCBmcm9tICdAdml0dXVtL3ZpdGUtcGx1Z2luLWNvbmNhdCdcbi8vIENhbGN1bGF0ZSBwYXRoc1xuaW1wb3J0IEZhc3RHbG9iIGZyb20gJ2Zhc3QtZ2xvYidcbmltcG9ydCBwYXRoIGZyb20gJ25vZGU6cGF0aCc7XG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSAnbm9kZTp1cmwnO1xuXG4vLyBHZXQgYWxsIGh0bWwgZmlsZXNcbmNvbnN0IGh0bWxGaWxlc0xpc3QgPSBPYmplY3QuZnJvbUVudHJpZXMoXG4gIEZhc3RHbG9iLnN5bmMoJ3NyYy8qLmh0bWwnKS5tYXAoZmlsZSA9PiBbXG4gICAgLy8gVGhpcyByZW1vdmUgYHNyYy9gIGFzIHdlbGwgYXMgdGhlIGZpbGUgZXh0ZW5zaW9uIGZyb20gZWFjaFxuICAgIC8vIGZpbGUsIHNvIGUuZy4gc3JjL25lc3RlZC9mb28uanMgYmVjb21lcyBuZXN0ZWQvZm9vXG4gICAgcGF0aC5yZWxhdGl2ZShcbiAgICAgICdzcmMnLFxuICAgICAgZmlsZS5zbGljZSgwLCBmaWxlLmxlbmd0aCAtIHBhdGguZXh0bmFtZShmaWxlKS5sZW5ndGgpXG4gICAgKSxcbiAgICAvLyBUaGlzIGV4cGFuZHMgdGhlIHJlbGF0aXZlIHBhdGhzIHRvIGFic29sdXRlIHBhdGhzLCBzbyBlLmcuXG4gICAgLy8gc3JjL25lc3RlZC9mb28gYmVjb21lcyAvcHJvamVjdC9zcmMvbmVzdGVkL2Zvby5qc1xuICAgIGZpbGVVUkxUb1BhdGgobmV3IFVSTChmaWxlLCBpbXBvcnQubWV0YS51cmwpKVxuICBdKSk7XG5cbmNvbnN0IGlucHV0RmlsZXNMaXN0ID0ge1xuICAuLi5odG1sRmlsZXNMaXN0LFxuICAnbWFpbic6ICdzcmMvanMvbWFpbi5qcycsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJhc2U6IFwiLi9cIixcbiAgcm9vdDogXCJzcmNcIixcbiAgcHVibGljRGlyOiBcIi4uL3B1YmxpY1wiLFxuICBidWlsZDoge1xuICAgIG1pbmlmeTogXCJlc2J1aWxkXCIsXG4gICAgb3V0RGlyOiBcIi4uL2RvY3NcIixcbiAgICBzb3VyY2VtYXA6IFwiaW5saW5lXCIsXG4gICAgZW1wdHlPdXREaXI6IHRydWUsXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgaW5wdXQ6IGlucHV0RmlsZXNMaXN0LFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIHNvdXJjZW1hcDogdHJ1ZSxcbiAgICAgICAgZW50cnlGaWxlTmFtZXM6ICh7bmFtZX0pID0+IHtcbiAgICAgICAgICBpZiggbmFtZSA9PT0gJ21haW4nICkge1xuICAgICAgICAgICAgcmV0dXJuICdqcy9tYWluLmpzJztcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gZGVmYXVsdCB2YWx1ZVxuICAgICAgICAgIC8vIHJlZjogaHR0cHM6Ly9yb2xsdXBqcy5vcmcvY29uZmlndXJhdGlvbi1vcHRpb25zLyNvdXRwdXQtZW50cnlmaWxlbmFtZXNcbiAgICAgICAgICByZXR1cm4gXCJbbmFtZV0uanNcIjtcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgc2VydmVyOiB7XG4gICAgb3BlbjogXCIvaW5kZXguaHRtbFwiLFxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgaW5qZWN0SFRNTCgpLFxuICAgIFZpdGVJbWFnZU9wdGltaXplcih7XG4gICAgICAvKiBwYXNzIHlvdXIgY29uZmlnICovXG4gICAgfSksXG4gICAgY29uY2F0KHtcbiAgICAgIGlucHV0OiBbJ21haW4uanMnXVxuICAgIH0pLFxuICBdLFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsU0FBUyxvQkFBb0I7QUFFN0IsT0FBTyxnQkFBZ0I7QUFFdkIsU0FBUywwQkFBMEI7QUFFbkMsT0FBTyxZQUFZO0FBRW5CLE9BQU8sY0FBYztBQUNyQixPQUFPLFVBQVU7QUFDakIsU0FBUyxxQkFBcUI7QUFYOFEsSUFBTSwyQ0FBMkM7QUFjN1YsSUFBTSxnQkFBZ0IsT0FBTztBQUFBLEVBQzNCLFNBQVMsS0FBSyxZQUFZLEVBQUUsSUFBSSxVQUFRO0FBQUE7QUFBQTtBQUFBLElBR3RDLEtBQUs7QUFBQSxNQUNIO0FBQUEsTUFDQSxLQUFLLE1BQU0sR0FBRyxLQUFLLFNBQVMsS0FBSyxRQUFRLElBQUksRUFBRSxNQUFNO0FBQUEsSUFDdkQ7QUFBQTtBQUFBO0FBQUEsSUFHQSxjQUFjLElBQUksSUFBSSxNQUFNLHdDQUFlLENBQUM7QUFBQSxFQUM5QyxDQUFDO0FBQUM7QUFFSixJQUFNLGlCQUFpQjtBQUFBLEVBQ3JCLEdBQUc7QUFBQSxFQUNILFFBQVE7QUFDVjtBQUVBLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLFdBQVc7QUFBQSxFQUNYLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFdBQVc7QUFBQSxJQUNYLGFBQWE7QUFBQSxJQUNiLGVBQWU7QUFBQSxNQUNiLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxRQUNOLFdBQVc7QUFBQSxRQUNYLGdCQUFnQixDQUFDLEVBQUMsS0FBSSxNQUFNO0FBQzFCLGNBQUksU0FBUyxRQUFTO0FBQ3BCLG1CQUFPO0FBQUEsVUFDVDtBQUdBLGlCQUFPO0FBQUEsUUFDVDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLFdBQVc7QUFBQSxJQUNYLG1CQUFtQjtBQUFBO0FBQUEsSUFFbkIsQ0FBQztBQUFBLElBQ0QsT0FBTztBQUFBLE1BQ0wsT0FBTyxDQUFDLFNBQVM7QUFBQSxJQUNuQixDQUFDO0FBQUEsRUFDSDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
