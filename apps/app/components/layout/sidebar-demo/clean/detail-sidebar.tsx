import * as React from "react";
import { softSpringEasing } from "./constants";
import { getSidebarContent } from "./content/sidebar-content";
import { MenuSection } from "./menu-section";
import { SearchContainer } from "./search-container";
import { SectionTitle } from "./section-title";

export function DetailSidebar({ activeSection }: { activeSection: string }) {
  const [expandedItems, setExpandedItems] = React.useState<Set<string>>(new Set());
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const content = getSidebarContent(activeSection);

  const toggleExpanded = (itemKey: string) => {
    setExpandedItems((prev) => {
      const next = new Set(prev);
      next.has(itemKey) ? next.delete(itemKey) : next.add(itemKey);
      return next;
    });
  };

  const toggleCollapse = () => setIsCollapsed((v) => !v);

  return (
    <div
      className={`bg-sidebar box-border content-stretch flex flex-col gap-4 h-full items-start justify-start overflow-visible p-4 relative rounded-r-2xl shrink-0 transition-all duration-500 ${isCollapsed ? "w-16 min-w-16 !px-0 justify-center" : "w-80"
        }`}
      style={{ transitionTimingFunction: softSpringEasing }}
      data-name="Detail Sidebar"
    >
      <SectionTitle title={content.title} onToggleCollapse={toggleCollapse} isCollapsed={isCollapsed} />
      <SearchContainer isCollapsed={isCollapsed} />

      <div
        className={`basis-0 box-border content-stretch flex flex-col grow min-h-px min-w-10 p-0 relative shrink-0 w-full overflow-y-auto transition-all duration-500 ${isCollapsed ? "gap-2 items-center justify-start" : "gap-4 items-start justify-start"
          }`}
        style={{ transitionTimingFunction: softSpringEasing }}
      >
        {content.sections.map((section, index) => (
          <MenuSection
            key={`${activeSection}-${index}`}
            section={section}
            expandedItems={expandedItems}
            onToggleExpanded={toggleExpanded}
            isCollapsed={isCollapsed}
          />
        ))}
      </div>
    </div>
  );
}
