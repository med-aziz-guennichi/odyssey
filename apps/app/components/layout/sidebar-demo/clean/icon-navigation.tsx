import {
  Analytics,
  Calendar,
  Dashboard,
  DocumentAdd,
  Enterprise,
  Folder,
  Settings,
  UserMultiple,
} from "@carbon/icons-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@repo/ui";
import { Avatar } from "./avatar";
import { IconNavButton } from "./icon-nav-button";
import { InterfacesLogo } from "./interfaces-logo";

export function IconNavigation({
  activeSection,
  onSectionChange,
}: {
  activeSection: string;
  onSectionChange: (section: string) => void;
}) {
  const navItems = [
    { id: "dashboard", icon: <Dashboard size={16} />, label: "Dashboard" },
    { id: "Enterprise", icon: <Enterprise size={16} />, label: "Enterprise" },
    { id: "projects", icon: <Folder size={16} />, label: "Projects" },
    { id: "calendar", icon: <Calendar size={16} />, label: "Calendar" },
    { id: "teams", icon: <UserMultiple size={16} />, label: "Teams" },
    { id: "analytics", icon: <Analytics size={16} />, label: "Analytics" },
    { id: "files", icon: <DocumentAdd size={16} />, label: "Files" },
  ] as const;

  return (
    <div
      className="bg-card box-border content-stretch flex flex-col gap-2 h-full items-center justify-start overflow-clip p-4 relative shrink-0 w-16 border-r border-border"
      data-name="Icon Navigation"
    >
      {/* Logo */}
      <div className="mb-2 size-10 flex items-center justify-center">
        <div className="size-7">
          <InterfacesLogo />
        </div>
      </div>

      {/* Navigation Icons */}
      <div className="flex flex-col gap-2 w-full items-center">
        {navItems.map((item) => (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="w-full flex justify-center">
                  {/* Wrap in a span to ensure the tooltip works even when the button is disabled */}
                  <IconNavButton
                    key={item.id}
                    isActive={activeSection === item.id}
                    onClick={() => onSectionChange(item.id)}
                  >
                    {item.icon}
                  </IconNavButton>
                </span>
              </TooltipTrigger>
              <TooltipContent side="right">{item.label}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>

      {/* Bottom section */}
      <div className="flex-1" />
      <div className="flex flex-col gap-2 w-full items-center">
        <IconNavButton
          isActive={activeSection === "settings"}
          onClick={() => onSectionChange("settings")}
        >
          <Settings size={16} />
        </IconNavButton>
        <div className="size-8">
          <Avatar />
        </div>
      </div>
    </div>
  );
}
