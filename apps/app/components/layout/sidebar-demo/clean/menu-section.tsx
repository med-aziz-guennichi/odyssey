import { softSpringEasing } from "./constants";
import { MenuItem as Row } from "./menu-item";
import { SubMenuItem } from "./sub-menu-item";
import type { MenuSection as TMenuSection } from "./types";

export function MenuSection({
  section,
  expandedItems,
  onToggleExpanded,
  isCollapsed,
}: {
  section: TMenuSection;
  expandedItems: Set<string>;
  onToggleExpanded: (itemKey: string) => void;
  isCollapsed?: boolean;
}) {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-stretch p-0 relative shrink-0 w-full">
      <div
        className={`relative shrink-0 w-full transition-all duration-500 overflow-hidden ${isCollapsed ? "h-0 opacity-0" : "h-10 opacity-100"
          }`}
        style={{ transitionTimingFunction: softSpringEasing }}
      >
        <div className="flex flex-col justify-center relative size-full">
          <div className="box-border content-stretch flex flex-col h-10 items-start justify-center p-[16px] relative w-full">
            <div className="font-['Lexend:Regular',_sans-serif] text-[14px] text-left text-muted-foreground">
              <p className="leading-[20px] whitespace-pre">{section.title}</p>
            </div>
          </div>
        </div>
      </div>

      {section.items.map((item, index) => {
        const itemKey = `${section.title}-${index}`;
        const isExpanded = expandedItems.has(itemKey);
        return (
          <div key={itemKey} className="w-full flex flex-col content-stretch">
            <Row
              item={item}
              isExpanded={isExpanded}
              onToggle={() => onToggleExpanded(itemKey)}
              onItemClick={() => console.log(`Clicked ${item.label}`)}
              isCollapsed={isCollapsed}
            />
            {isExpanded && item.children && !isCollapsed && (
              <div className="flex flex-col gap-1 mb-2">
                {item.children.map((child, childIndex) => (
                  <SubMenuItem
                    key={`${itemKey}-${childIndex}`}
                    item={child}
                    onItemClick={() => console.log(`Clicked ${child.label}`)}
                  />
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
