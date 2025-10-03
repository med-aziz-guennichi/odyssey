import { User } from "@carbon/icons-react";

export function Avatar() {
  return (
    <div
      className="bg-muted relative rounded-[999px] shrink-0 size-8"
      data-name="Avatar"
    >
      <div className="box-border content-stretch flex flex-row items-center justify-center overflow-clip p-0 relative size-8">
        <User size={16} className="text-foreground" />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-border border-solid inset-0 pointer-events-none rounded-[999px]"
      />
    </div>
  );
}
