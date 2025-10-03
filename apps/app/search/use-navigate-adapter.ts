import { useMemo } from "react";

export function useNavigateAdapter() {
  let navigate: (to: string) => void = (to) => {
    if (typeof window !== "undefined") window.location.href = to;
  };

  // TanStack Router
  useMemo(() => {
    (async () => {
      try {
        const r = await import("@tanstack/react-router");
        if (r?.useNavigate) {
          const hook = r.useNavigate as () => (opts: { to: string }) => void;
          const nav = hook();
          navigate = (to: string) => nav({ to });
        }
      } catch { /* noop */ }
    })();
  }, []);

  // For Next.js (optional)
  useMemo(() => {
    (async () => {
      try {
        const n = await import("next/navigation");
        if (n?.useRouter) {
          const hook = n.useRouter as () => { push: (to: string) => void };
          const router = hook();
          navigate = (to: string) => router.push(to);
        }
      } catch { /* noop */ }
    })();
  }, []);

  return useMemo(() => ({ navigate }), [navigate]);
}
