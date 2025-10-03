import { getSidebarContent } from "@/components/layout/sidebar-demo/clean/content/sidebar-content";
import type { SidebarContent } from "@/components/layout/sidebar-demo/clean/types";
import type { SearchItem } from "./types";

/** Optional: your global routes outside the sidebar */
export const coreRoutes: SearchItem[] = [
  { id: "home", title: "Home", href: "/", group: "Navigation" },
  {
    id: "dashboard",
    title: "Dashboard",
    href: "/dashboard",
    group: "Navigation",
  },
  {
    id: "analytics",
    title: "Analytics",
    href: "/analytics",
    group: "Navigation",
  },
  { id: "settings", title: "Settings", href: "/settings", group: "Navigation" },
];

/** Flatten sidebar content into search items */
export function buildSidebarIndex(activeSection: string): SearchItem[] {
  const content: SidebarContent = getSidebarContent(activeSection);

  const items: SearchItem[] = [];

  content.sections.forEach((section, si) => {
    section.items.forEach((item, ii) => {
      const group = content.title; // e.g., "Projects", "Dashboard", etc.

      // Make a sluggy href if you don't have real links yet
      const base = `/${slug(content.title)}/${slug(item.label)}`;
      items.push({
        id: `${content.title}-${si}-${ii}`,
        title: item.label,
        href: base,
        icon: item.icon,
        group,
      });

      (item.children ?? []).forEach((child, ci) => {
        items.push({
          id: `${content.title}-${si}-${ii}-${ci}`,
          title: child.label,
          href: `${base}/${slug(child.label)}`,
          group,
        });
      });
    });
  });

  return items;
}

function slug(s: string) {
  return s
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

/** Final search data source (merge sidebar + core routes) */
export function getSearchIndex(activeSection: string) {
  return [...coreRoutes, ...buildSidebarIndex(activeSection)];
}
