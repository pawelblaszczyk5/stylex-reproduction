import { reactRouter } from "@react-router/dev/vite";
// @ts-expect-error - untyped module
import stylexPlugin from "@stylexjs/postcss-plugin";
import { defineConfig } from "vite";
import babel from "vite-plugin-babel";

const typedStylexPlugin = stylexPlugin as (options: {
  babelConfig?: unknown;
  cwd?: string;
  exclude?: Array<string>;
  include?: Array<string>;
  useCSSLayers?: boolean;
}) => never;

const babelConfig = {
  plugins: [
    [
      "@stylexjs/babel-plugin",
      {
        treeshakeCompensation: true,
        unstable_moduleResolution: {
          type: "commonJS",
        },
      },
    ],
  ],
  presets: ["@babel/preset-typescript"],
};

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        typedStylexPlugin({
          babelConfig: {
            babelrc: false,
            ...babelConfig,
          },
          include: ["./app/**/*.{js,jsx,ts,tsx}"],
          useCSSLayers: true,
        }),
      ],
    },
  },
  plugins: [
    reactRouter(),
    babel({
      babelConfig,
      filter: /\.[jt]sx?$/u,
      loader: "jsx",
    }),
  ],
});
