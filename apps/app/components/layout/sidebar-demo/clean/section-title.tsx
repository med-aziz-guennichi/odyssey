import { ChevronLeft } from "@carbon/icons-react";
import { softSpringEasing } from "./constants";

export function SectionTitle({
  title,
  onToggleCollapse,
  isCollapsed,
}: {
  title: string;
  onToggleCollapse: () => void;
  isCollapsed: boolean;
}) {
  if (isCollapsed) {
    return (
      <div
        className="relative shrink-0 w-full flex justify-center transition-all duration-500"
        style={{ transitionTimingFunction: softSpringEasing }}
        data-name="Section Title Collapsed"
      >
        <button
          onClick={onToggleCollapse}
          className="box-border content-stretch flex flex-row items-center justify-center overflow-clip p-0 relative rounded-lg shrink-0 cursor-pointer transition-all duration-500 hover:bg-muted text-muted-foreground hover:text-neutral-300 size-10 min-w-10"
          style={{ transitionTimingFunction: softSpringEasing }}
        >
          <ChevronLeft
            size={16}
            className="transition-transform duration-500"
            style={{
              transitionTimingFunction: softSpringEasing,
              transform: "rotate(180deg)",
            }}
          />
        </button>
      </div>
    );
  }

  return (
    <div
      className="relative shrink-0 w-full overflow-hidden transition-all duration-500"
      style={{ transitionTimingFunction: softSpringEasing }}
      data-name="Section Title"
    >
      <div className="flex flex-row items-center justify-between relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start relative h-10 overflow-hidden transition-opacity opacity-100 duration-500">
          <div className="box-border content-stretch flex flex-col gap-2 items-start justify-center px-2 py-1 relative shrink-0">
            <div className="font-['Lexend:SemiBold',_sans-serif] font-semibold text-[18px] text-left text-foreground">
              <p className="leading-[27px] whitespace-pre">{title}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center pr-1">
          <button
            onClick={onToggleCollapse}
            className="box-border content-stretch flex flex-row items-center justify-center overflow-clip p-0 relative rounded-lg shrink-0 cursor-pointer transition-all duration-500 hover:bg-muted text-muted-foreground hover:text-neutral-300 size-10 min-w-10"
            style={{ transitionTimingFunction: softSpringEasing }}
          >
            <ChevronLeft size={16} className="transition-transform duration-500" />
          </button>
        </div>
      </div>
    </div>
  );
}
