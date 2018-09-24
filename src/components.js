import React from "react";
import { DocsLayout } from "mdx-go";

const nav = [
  "Home",
  "Developing on Linux",
  "Developing on Windows",
  "VSCode Configuration"
];

export const PageLayout = ({ children, ...props }) => (
  <DocsLayout {...props} filter={route => nav.includes(route.name)} order={nav}>
    {children}
  </DocsLayout>
);
