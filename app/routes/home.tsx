import type { Route } from "./+types/home";

import * as stylex from "@stylexjs/stylex";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const example = stylex.create({
  static: {
    color: {
      "@media (min-width:1024px)": "green",
      default: "red",
    },
  },
  dynamic: () => ({
    backgroundColor: {
      "@media (min-width:1024px)": "purple",
      default: "gray",
    },
  }),
});

export default function Home() {
  return (
    <h1 {...stylex.props(example.static, example.dynamic())}>Hello world</h1>
  );
}
