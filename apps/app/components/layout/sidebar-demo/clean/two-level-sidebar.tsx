import * as React from "react";
import { DetailSidebar } from "./detail-sidebar";
import { IconNavigation } from "./icon-navigation";

export function TwoLevelSidebar() {
  const [activeSection, setActiveSection] = React.useState("dashboard");
  return (
    <div className="flex flex-row h-full" data-name="Two Level Sidebar">
      <IconNavigation
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      <DetailSidebar activeSection={activeSection} />
    </div>
  );
}
