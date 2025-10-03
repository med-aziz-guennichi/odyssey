import * as React from "react";

export type SearchItem = {
  id: string;
  title: string;
  subtitle?: string;
  href: string;
  icon?: React.ReactNode;
  group?: string; // e.g., "Navigation", "Quick start", "Reports"
  keywords?: string[]; // additional search terms
};
