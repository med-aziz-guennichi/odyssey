/* ODYSSEY-FileCopyrightText: 2025-present Aziz */
/* ODYSSEY-License-Identifier: MIT */

import { AuthErrorBoundary } from "@/components/auth/auth-error-boundary";
import type { auth } from "@/lib/auth";
import type { QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";

export const Route = createRootRouteWithContext<{
  auth: typeof auth;
  queryClient: QueryClient;
}>()({
  component: Root,
});

export function Root() {
  return (
    <AuthErrorBoundary>
      <Outlet />
      {/* {import.meta.env.DEV && <TanStackRouterDevtools />} */}
    </AuthErrorBoundary>
  );
}
