import type { MenuItem } from "./types";

export function SubMenuItem({
  item,
  onItemClick,
}: {
  item: MenuItem;
  onItemClick?: () => void;
}) {
  return (
    <div className="select-none w-full pl-9 pr-1 py-[1px]">
      <div
        className="h-10 w-full rounded-lg cursor-pointer transition-colors hover:bg-muted flex items-center px-3 py-1"
        onClick={onItemClick}
      >
        <div className="flex-1 min-w-0">
          <div className="font-['Lexend:Regular',_sans-serif] text-[14px] leading-[18px] truncate">
            {item.label}
          </div>
        </div>
      </div>
    </div>
  );
}
