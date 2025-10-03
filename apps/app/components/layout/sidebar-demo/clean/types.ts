import * as React from "react";

export interface MenuItem {
  icon?: React.ReactNode;
  label: string;
  hasDropdown?: boolean;
  isActive?: boolean;
  link?: string;
  children?: MenuItem[];
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

export interface SidebarContent {
  title: string;
  sections: MenuSection[];
}
