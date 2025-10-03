/* ODYSSEY-FileCopyrightText: 2025-present Aziz */
/* ODYSSEY-License-Identifier: MIT */

import { Button } from "@repo/ui";
import { Bell, Settings } from "lucide-react";
import { Avatar } from "./sidebar-demo/clean";

interface HeaderProps {
  isSidebarOpen: boolean;
  onMenuToggle: () => void;
}

export function Header({ isSidebarOpen, onMenuToggle }: HeaderProps) {
  console.log("Header render, isSidebarOpen:", isSidebarOpen, onMenuToggle);
  return (
    <header className="h-14 sticky top-0 z-20 flex items-center justify-between px-4 border-b border-border bg-background/80 backdrop-blur">
      {/* Middle: (Optional) Search or breadcrumbs */}
      <div className="hidden md:flex flex-1 px-4">
        {/* Example placeholder for breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Dashboard</span>
          <span className="text-neutral-600">/</span>
          <span className="text-neutral-200 font-medium">Overview</span>
        </nav>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
        </Button>
        <div className="ml-2">
          <Avatar />
        </div>
      </div>
    </header>
  );
}
