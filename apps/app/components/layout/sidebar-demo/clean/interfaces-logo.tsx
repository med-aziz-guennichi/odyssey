import svgPaths from "@/imports/svg-svkvdgwod6";

// Optional: tiny className helper
function cn(...a: Array<string | false | null | undefined>) {
  return a.filter(Boolean).join(" ");
}

type Props = { className?: string; title?: string };

export function InterfacesLogo({ className, title = "Interfaces" }: Props) {
  return (
    <div
      // text-foreground makes the logo color follow your theme tokens
      className={cn("relative aspect-[24/24] shrink-0 overflow-hidden text-foreground", className)}
      aria-label={title}
    >
      <svg
        viewBox="0 0 24 16"
        role="img"
        aria-hidden={false}
        className="block h-full w-full"
      // Ensure the whole svg inherits color
      >
        <title>{title}</title>
        {/* Use currentColor instead of a hard-coded white fill */}
        <path d={svgPaths.p36880f80} fill="currentColor" />
        <path d={svgPaths.p355df480} fill="currentColor" opacity={0.9} />
        <path d={svgPaths.pfa0d600} fill="currentColor" opacity={0.8} />
      </svg>
    </div>
  );
}
