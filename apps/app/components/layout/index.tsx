/* ODYSSEY-FileCopyrightText: 2025-present Aziz */
/* ODYSSEY-License-Identifier: MIT */

import { useState } from "react";
import { Header } from "./header";
import { TwoLevelSidebar } from "./sidebar-demo/clean";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    // Layout shell
    <div className="h-dvh flex bg-background overflow-hidden">
      <TwoLevelSidebar /> {/* will stretch to full height */}
      <div className="flex-1 min-w-0 flex flex-col">
        <Header
          isSidebarOpen={sidebarOpen}
          onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
        />
        <main className="flex-1 min-h-0 overflow-auto mx-4 my-4">
          <div className="h-full">{children}</div>
        </main>
      </div>
    </div>
  );
}
