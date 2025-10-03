import { ChevronDown } from "@carbon/icons-react";
import { softSpringEasing } from "./constants";
import type { MenuItem as TMenuItem } from "./types";

export function MenuItem({
  item,
  isExpanded,
  onToggle,
  onItemClick,
  isCollapsed,
}: {
  item: TMenuItem;
  isExpanded?: boolean;
  onToggle?: () => void;
  onItemClick?: () => void;
  isCollapsed?: boolean;
}) {
  const handleClick = () => {
    if (item.hasDropdown && onToggle) onToggle();
    else if (onItemClick) onItemClick();
  };

  return (
    <div
      className={`relative shrink-0 transition-all duration-500 ${isCollapsed ? "w-full flex justify-center" : "w-full"
        }`}
      style={{ transitionTimingFunction: softSpringEasing }}
    >
      <div
        className={`select-none rounded-lg cursor-pointer transition-all duration-500 flex items-center relative my-0.5 ${item.isActive ? "bg-muted" : "hover:bg-muted"
          } ${isCollapsed ? "w-10 min-w-10 h-10 justify-center p-4" : "w-full h-10 px-4 py-2"}`}
        style={{ transitionTimingFunction: softSpringEasing }}
        onClick={handleClick}
        title={isCollapsed ? item.label : undefined}
      >
        <div className="flex items-center justify-center shrink-0">{item.icon}</div>

        <div
          className={`flex-1 min-h-px min-w-px relative transition-opacity duration-500 overflow-hidden ${isCollapsed ? "opacity-0 w-0" : "opacity-100 ml-3"
            }`}
          style={{ transitionTimingFunction: softSpringEasing }}
        >
          <div className="flex flex-col justify-center relative size-full">
            <div className="font-['Lexend:Regular',_sans-serif] text-[14px] text-foreground leading-[20px] truncate">
              {item.label}
            </div>
          </div>
        </div>

        {item.hasDropdown && (
          <div
            className={`flex items-center justify-center shrink-0 transition-opacity duration-500 ${isCollapsed ? "opacity-0 w-0" : "opacity-100 ml-2"
              }`}
            style={{ transitionTimingFunction: softSpringEasing }}
          >
            <ChevronDown
              size={16}
              className="text-foreground transition-transform duration-500"
              style={{
                transitionTimingFunction: softSpringEasing,
                transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
