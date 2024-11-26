import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

export default defineConfig({
  plugins: [react(), dts({ include: "src" }), libInjectCss()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.ts"), // Single entry point
      name: "aelf-smartcontract-viewer",
      fileName: "aelf-smartcontract-viewer",
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "@portkey/contracts",
        "@portkey/request",
        "aelf-sdk",
        "clsx",
        "copy-to-clipboard",
        "query-string",
        "react-json-tree",
        "framer-motion",
        "react-hook-form",
        "react-hot-toast",
        "tailwind-merge",
        "zod",
        "@nextui-org/react"
      ],
      output: {
        format: "umd", // UMD requires a single entry
        name: "aelf-smartcontract-viewer", // Global variable for UMD build
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    copyPublicDir: false,
  },
});
