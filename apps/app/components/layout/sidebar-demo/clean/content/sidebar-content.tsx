import type { SidebarContent } from "@/components/layout/sidebar-demo/clean/types";
import {
  AddLarge,
  Analytics,
  Archive,
  Calendar as CalendarIcon,
  ChartBar,
  CheckmarkOutline,
  CloudUpload,
  Dashboard,
  DocumentAdd,
  Flag,
  Folder,
  FolderOpen,
  Group,
  InProgress,
  Integration,
  Notification,
  Report,
  Security,
  Settings,
  Share,
  StarFilled,
  Time,
  User,
  UserMultiple,
  View,
} from "@carbon/icons-react";

export function getSidebarContent(activeSection: string): SidebarContent {
  const contentMap: Record<string, SidebarContent> = {
    dashboard: {
      title: "Dashboard",
      sections: [
        {
          title: "Dashboard Types",
          items: [
            {
              icon: <View size={16} className="text-foreground" />,
              label: "Overview",
              isActive: true,
            },
            {
              icon: <Dashboard size={16} className="text-foreground" />,
              label: "Executive Summary",
              hasDropdown: true,
              children: [
                { label: "Revenue Overview" },
                { label: "Key Performance Indicators" },
                { label: "Strategic Goals Progress" },
                { label: "Department Highlights" },
              ],
            },
            {
              icon: <ChartBar size={16} className="text-foreground" />,
              label: "Operations Dashboard",
              hasDropdown: true,
              children: [
                { label: "Project Timeline" },
                { label: "Resource Allocation" },
                { label: "Team Performance" },
                { label: "Capacity Planning" },
              ],
            },
            {
              icon: <Analytics size={16} className="text-foreground" />,
              label: "Financial Dashboard",
              hasDropdown: true,
              children: [
                { label: "Budget vs Actual" },
                { label: "Cash Flow Analysis" },
                { label: "Expense Breakdown" },
                { label: "Profit & Loss Summary" },
              ],
            },
          ],
        },
        {
          title: "Report Summaries",
          items: [
            {
              icon: <Report size={16} className="text-foreground" />,
              label: "Weekly Reports",
              hasDropdown: true,
              children: [
                { label: "Team Productivity" },
                { label: "Project Completion" },
                { label: "Budget Utilization" },
                { label: "Client Satisfaction" },
              ],
            },
            {
              icon: <StarFilled size={16} className="text-foreground" />,
              label: "Monthly Insights",
              hasDropdown: true,
              children: [
                { label: "Revenue Growth" },
                { label: "New Clients" },
                { label: "Team Expansion" },
                { label: "Cost Reduction" },
              ],
            },
            {
              icon: <View size={16} className="text-foreground" />,
              label: "Quarterly Analysis",
              hasDropdown: true,
              children: [
                { label: "Market Position" },
                { label: "ROI" },
                { label: "Customer Retention" },
                { label: "Innovation Index" },
              ],
            },
          ],
        },
        {
          title: "Business Intelligence",
          items: [
            {
              icon: <ChartBar size={16} className="text-foreground" />,
              label: "Performance Metrics",
              hasDropdown: true,
              children: [
                { label: "Sales Conversion" },
                { label: "Lead Response Time" },
                { label: "Customer Lifetime Value" },
                { label: "Churn Rate" },
              ],
            },
            {
              icon: <Analytics size={16} className="text-foreground" />,
              label: "Predictive Analytics",
              hasDropdown: true,
              children: [
                { label: "Q4 Revenue Forecast" },
                { label: "Resource Demand" },
                { label: "Market Trends" },
                { label: "Risk Assessment" },
              ],
            },
          ],
        },
      ],
    },

    tasks: {
      title: "Enterprises",
      sections: [
        {
          title: "Quick Actions",
          items: [
            {
              icon: <AddLarge size={16} className="text-foreground" />,
              label: "New enterprise",
              link: "/enterprise/add-enterprise",
            },
            {
              icon: <Settings size={16} className="text-foreground" />,
              label: "Filter enterprises",
            },
          ],
        },
        {
          title: "My Enterprises",
          items: [
            {
              icon: <Time size={16} className="text-foreground" />,
              label: "Due today",
              hasDropdown: true,
              children: [
                { label: "Review design mockups" },
                { label: "Update documentation" },
                { label: "Test new feature" },
              ],
            },
            {
              icon: <InProgress size={16} className="text-foreground" />,
              label: "In progress",
              hasDropdown: true,
              children: [
                { label: "Implement user auth" },
                { label: "Database migration" },
              ],
            },
            {
              icon: <CheckmarkOutline size={16} className="text-foreground" />,
              label: "Completed",
              hasDropdown: true,
              children: [
                { label: "Fixed login bug" },
                { label: "Updated dependencies" },
                { label: "Code review completed" },
              ],
            },
          ],
        },
        {
          title: "Other",
          items: [
            {
              icon: <Flag size={16} className="text-foreground" />,
              label: "Priority tasks",
              hasDropdown: true,
              children: [
                { label: "Security update" },
                { label: "Client presentation" },
              ],
            },
            {
              icon: <Archive size={16} className="text-foreground" />,
              label: "Archived",
            },
          ],
        },
      ],
    },

    projects: {
      title: "Projects",
      sections: [
        {
          title: "Quick Actions",
          items: [
            {
              icon: <AddLarge size={16} className="text-foreground" />,
              label: "New project",
            },
            {
              icon: <Settings size={16} className="text-foreground" />,
              label: "Filter projects",
            },
          ],
        },
        {
          title: "Active Projects",
          items: [
            {
              icon: <FolderOpen size={16} className="text-foreground" />,
              label: "Web Application",
              hasDropdown: true,
              children: [
                { label: "Frontend development" },
                { label: "API integration" },
                { label: "Testing & QA" },
              ],
            },
            {
              icon: <FolderOpen size={16} className="text-foreground" />,
              label: "Mobile App",
              hasDropdown: true,
              children: [
                { label: "UI/UX design" },
                { label: "Native development" },
              ],
            },
          ],
        },
        {
          title: "Other",
          items: [
            {
              icon: <CheckmarkOutline size={16} className="text-foreground" />,
              label: "Completed",
            },
            {
              icon: <Archive size={16} className="text-foreground" />,
              label: "Archived",
            },
          ],
        },
      ],
    },

    calendar: {
      title: "Calendar",
      sections: [
        {
          title: "Views",
          items: [
            {
              icon: <View size={16} className="text-foreground" />,
              label: "Month view",
            },
            {
              icon: <CalendarIcon size={16} className="text-foreground" />,
              label: "Week view",
            },
            {
              icon: <Time size={16} className="text-foreground" />,
              label: "Day view",
            },
          ],
        },
        {
          title: "Events",
          items: [
            {
              icon: <Time size={16} className="text-foreground" />,
              label: "Today's events",
              hasDropdown: true,
              children: [
                { label: "Team standup (9:00 AM)" },
                { label: "Client call (2:00 PM)" },
                { label: "Project review (4:00 PM)" },
              ],
            },
            {
              icon: <CalendarIcon size={16} className="text-foreground" />,
              label: "Upcoming events",
            },
          ],
        },
        {
          title: "Quick Actions",
          items: [
            {
              icon: <AddLarge size={16} className="text-foreground" />,
              label: "New event",
            },
            {
              icon: <Share size={16} className="text-foreground" />,
              label: "Share calendar",
            },
          ],
        },
      ],
    },

    teams: {
      title: "Teams",
      sections: [
        {
          title: "My Teams",
          items: [
            {
              icon: <Group size={16} className="text-foreground" />,
              label: "Development Team",
              hasDropdown: true,
              children: [
                { label: "John Doe (Lead)" },
                { label: "Jane Smith" },
                { label: "Mike Johnson" },
              ],
            },
            {
              icon: <Group size={16} className="text-foreground" />,
              label: "Design Team",
              hasDropdown: true,
              children: [{ label: "Sarah Wilson" }, { label: "Tom Brown" }],
            },
          ],
        },
        {
          title: "Quick Actions",
          items: [
            {
              icon: <AddLarge size={16} className="text-foreground" />,
              label: "Invite member",
            },
            {
              icon: <UserMultiple size={16} className="text-foreground" />,
              label: "Manage teams",
            },
          ],
        },
      ],
    },

    analytics: {
      title: "Analytics",
      sections: [
        {
          title: "Reports",
          items: [
            {
              icon: <Report size={16} className="text-foreground" />,
              label: "Performance report",
            },
            {
              icon: <ChartBar size={16} className="text-foreground" />,
              label: "Task completion",
            },
            {
              icon: <Analytics size={16} className="text-foreground" />,
              label: "Team productivity",
            },
          ],
        },
        {
          title: "Insights",
          items: [
            {
              icon: <StarFilled size={16} className="text-foreground" />,
              label: "Key metrics",
              hasDropdown: true,
              children: [
                { label: "Task completion metrics" },
                { label: "Time tracking analysis" },
                { label: "Team efficiency report" },
                { label: "Performance benchmarks" },
              ],
            },
          ],
        },
      ],
    },

    files: {
      title: "Files",
      sections: [
        {
          title: "Quick Actions",
          items: [
            {
              icon: <CloudUpload size={16} className="text-foreground" />,
              label: "Upload file",
            },
            {
              icon: <AddLarge size={16} className="text-foreground" />,
              label: "New folder",
            },
          ],
        },
        {
          title: "Recent Files",
          items: [
            {
              icon: <DocumentAdd size={16} className="text-foreground" />,
              label: "Recent documents",
              hasDropdown: true,
              children: [
                { label: "Project proposal.pdf" },
                { label: "Meeting notes.docx" },
                { label: "Design specs.figma" },
              ],
            },
            {
              icon: <Share size={16} className="text-foreground" />,
              label: "Shared with me",
            },
          ],
        },
        {
          title: "Organization",
          items: [
            {
              icon: <Folder size={16} className="text-foreground" />,
              label: "All folders",
            },
            {
              icon: <Archive size={16} className="text-foreground" />,
              label: "Archived files",
            },
          ],
        },
      ],
    },

    settings: {
      title: "Settings",
      sections: [
        {
          title: "Account",
          items: [
            {
              icon: <User size={16} className="text-foreground" />,
              label: "Profile settings",
            },
            {
              icon: <Security size={16} className="text-foreground" />,
              label: "Security",
            },
            {
              icon: <Notification size={16} className="text-foreground" />,
              label: "Notifications",
            },
          ],
        },
        {
          title: "Workspace",
          items: [
            {
              icon: <Settings size={16} className="text-foreground" />,
              label: "Preferences",
              hasDropdown: true,
              children: [
                { label: "Theme settings" },
                { label: "Time zone" },
                { label: "Default notifications" },
              ],
            },
            {
              icon: <Integration size={16} className="text-foreground" />,
              label: "Integrations",
            },
          ],
        },
      ],
    },
  };

  return contentMap[activeSection] || contentMap.tasks;
}
