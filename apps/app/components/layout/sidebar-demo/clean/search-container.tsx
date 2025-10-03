"use client";

import {
  ArrowUpRightIcon,
  CircleFadingPlusIcon,
  FileInputIcon,
  FolderPlusIcon,
  SearchIcon,
} from "lucide-react";
import * as React from "react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@repo/ui/components/command";

import { getSearchIndex } from "@/search/search-index";
import type { SearchItem } from "@/search/types";
import { useNavigateAdapter } from "@/search/use-navigate-adapter";
import { softSpringEasing } from "./constants";

export function SearchContainer({ isCollapsed = false, activeSection = "dashboard" }: { isCollapsed?: boolean; activeSection?: string; }) {
  const [open, setOpen] = React.useState(false);
  const { navigate } = useNavigateAdapter();

  // ⌘/Ctrl + K to open
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const searchData = React.useMemo<SearchItem[]>(() => getSearchIndex(activeSection), [activeSection]);
  return (
    <>
      {/* Animated container (same as your previous version) */}
      <div
        className={`relative shrink-0 transition-all duration-500 ${isCollapsed ? "w-full flex justify-center" : "w-full"
          }`}
        style={{ transitionTimingFunction: softSpringEasing }}
        data-name="Search Container"
      >
        {/* Trigger “button” with the same sizing/rounding animation */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className={`relative h-10 rounded-lg flex items-center transition-all duration-500 border border-border bg-card shadow-xs outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring
            ${isCollapsed ? "w-10 min-w-10 justify-center" : "w-full px-3"}
          `}
          style={{ transitionTimingFunction: softSpringEasing }}
        >
          {/* Left icon (always visible) */}
          <span
            className={`flex items-center justify-center shrink-0 transition-all duration-500 ${isCollapsed ? "p-1" : "-ms-1 me-3"
              }`}
            style={{ transitionTimingFunction: softSpringEasing }}
          >
            <SearchIcon className={`text-muted-foreground/80 ${isCollapsed ? "ml-6" : ""}`} size={16} aria-hidden="true" />
          </span>

          {/* Label fades/collapses away when sidebar is collapsed */}
          <span
            className={`flex-1 min-w-0 transition-[opacity,width,margin] duration-500 overflow-hidden text-left ${isCollapsed ? "opacity-0 w-0 m-0" : "opacity-100 w-auto"
              }`}
            style={{ transitionTimingFunction: softSpringEasing }}
          >
            <span className="text-sm text-muted-foreground/70 font-normal">Search</span>
          </span>

          {/* Shortcut badge (also fades out when collapsed) */}
          <kbd
            className={`bg-background text-muted-foreground/70 inline-flex h-5 items-center rounded border px-1 text-[0.625rem] font-medium transition-opacity duration-500 ${isCollapsed ? "opacity-0" : "opacity-100"
              }`}
            aria-hidden="true"
            style={{ transitionTimingFunction: softSpringEasing }}
          >
            ⌘K
          </kbd>

          {/* Subtle border overlay to match your old style */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-lg"
          />
        </button>
      </div>

      {/* Command Dialog (shadcn) */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />

        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          {/* Quick start examples (can keep or remove) */}
          <CommandGroup heading="Quick start">
            <CommandItem onSelect={() => setOpen(false)}>
              <FolderPlusIcon size={16} className="opacity-60" aria-hidden="true" />
              <span>New folder</span>
              <CommandShortcut className="justify-center">⌘N</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>
              <FileInputIcon size={16} className="opacity-60" aria-hidden="true" />
              <span>Import document</span>
              <CommandShortcut className="justify-center">⌘I</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>
              <CircleFadingPlusIcon size={16} className="opacity-60" aria-hidden="true" />
              <span>Add block</span>
              <CommandShortcut className="justify-center">⌘B</CommandShortcut>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          {/* Sidebar + site routes */}
          {groupBy(searchData, (i) => i.group ?? "Navigation").map(([group, rows]) => (
            <CommandGroup key={group} heading={group}>
              {rows.map((row) => (
                <CommandItem
                  key={row.id}
                  value={[row.title, row.subtitle, row.keywords?.join(" ")].filter(Boolean).join(" ")}
                  onSelect={() => {
                    setOpen(false);
                    navigate(row.href);
                  }}
                >
                  {row.icon && <span className="mr-2 inline-flex items-center">{row.icon}</span>}
                  <div className="flex flex-col">
                    <span>{row.title}</span>
                    {row.subtitle && (
                      <span className="text-xs text-muted-foreground">{row.subtitle}</span>
                    )}
                  </div>
                  <ArrowUpRightIcon className="ml-auto opacity-60" size={16} aria-hidden="true" />
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}

function groupBy<T, K>(arr: T[], key: (t: T) => K): [K, T[]][] {
  const m = new Map<K, T[]>();
  for (const x of arr) {
    const k = key(x);
    const list = m.get(k) ?? [];
    list.push(x);
    m.set(k, list);
  }
  return Array.from(m.entries());
}
