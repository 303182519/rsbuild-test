import { defineConfig } from "@rsbuild/core";
import { pluginBabel } from "@rsbuild/plugin-babel";
import { pluginBasicSsl } from "@rsbuild/plugin-basic-ssl";
import { pluginCheckSyntax } from "@rsbuild/plugin-check-syntax";
import { pluginReact } from "@rsbuild/plugin-react";

console.log("NODE_ENV", process.env.NODE_ENV);

export default defineConfig({
  source: {
    entry: {
      index: "./src/pages/index/index.tsx",
      // about: './src/pages/about/index.tsx',
    },
    // 在正则表达式的例子中，我们使用 [\\/] 来匹配路径分隔符，这是
    // 因为不同的操作系统使用了不同的路径分隔符，使用 [\\/] 可以保证 macOS、Linux 和 Windows 的路径都被匹配到。
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
        // about: './static/index.html',
      };
      return templates[entryName] || "./static/index.html";
    },
  },
  plugins: [pluginBasicSsl(), pluginReact(), pluginCheckSyntax()],
});
