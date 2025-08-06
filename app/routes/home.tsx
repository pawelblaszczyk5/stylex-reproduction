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
  dynamicMedia: () => ({
    backgroundColor: {
      "@media (min-width:1024px)": "purple",
      default: "gray",
    },
  }),
  dynamicConditional: () => ({
    fontSize: {
      ":is([data-hovered])": 45,
      default: 35,
    },
  }),
});

export default function Home() {
  return (
    <h1
      {...stylex.props(
        example.static,
        example.dynamicMedia(),
        example.dynamicConditional()
      )}
    >
      Hello world
    </h1>
  );
}
