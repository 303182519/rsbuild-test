import { defineConfig } from "@rsbuild/core";
import { pluginBasicSsl } from "@rsbuild/plugin-basic-ssl";
import { pluginCheckSyntax } from "@rsbuild/plugin-check-syntax";
import { pluginReact } from "@rsbuild/plugin-react";

console.log("NODE_ENV", process.env.NODE_ENV);

export default defineConfig({
  source: {
    entry: {
      index: "./src/pages/index/index.tsx",
    },
    include: [/node_modules[\\/]react-router[\\/]/],
  },
  output: {
    // minify: false,
    polyfill: "usage",
  },
  html: {
    template({ entryName }) {
      const templates = {
        index: "./static/index.html",
      };
      return templates[entryName] || "./static/index.html";
    },
  },
  plugins: [pluginBasicSsl(), pluginReact(), pluginCheckSyntax()],
});
