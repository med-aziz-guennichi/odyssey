![License](https://img.shields.io/github/license/med-aziz-guennichi/odyssey)
![Stars](https://img.shields.io/github/stars/med-aziz-guennichi/odyssey?style=social)
![Contributors](https://img.shields.io/github/contributors/med-aziz-guennichi/odyssey)

# Odyssey

Odyssey is a **modern school management platform** designed to cover the entire education lifecycle — from crèche and primary school to high school and university.

It provides institutions with everything they need to manage students, teachers, staff, and administration, while also integrating a **custom email system (Gmail-style)** and **secure authentication platform**.

Built with a cutting-edge full-stack architecture, Odyssey ensures **speed, scalability, and global performance** so schools and universities can focus on education, not infrastructure.

---

## What You Get

- **Complete School Management**: Admissions, classes, grading, attendance, schedules, and administration.
- **Custom Email Platform**: Gmail-like email system for staff and student communication.
- **Custom Authentication**: Secure, institution-specific login system with modern auth workflows.
- **Performance by Default**: Powered by Bun runtime for lightning-fast development and builds.
- **Type-Safe by Design**: TypeScript + tRPC provide end-to-end type safety across backend and frontend.
- **Modern React Stack**: React 19, TanStack Router, and Tailwind v4 streamline UI development.
- **Edge-Native Deployment**: Cloudflare Workers ensure global availability and sub-100ms response times.
- **Database Ready**: Drizzle ORM with Neon PostgreSQL for scalable, multi-tenant institutions.
- **Developer Experience**: Pre-configured ESLint, Prettier, and VSCode settings for smooth collaboration.

---

## Perfect For

- **Schools & Universities**: Manage everything from small classes to multi-faculty institutions.
- **EdTech Startups**: Build scalable education products faster without reinventing the basics.
- **Multi-Tenant SaaS**: Support multiple schools with isolated databases, email, and auth.
- **Teams**: Monorepo structure allows dev teams to collaborate on shared code and modules.

---

## Technology Stack

**Core Runtime & Platform**

- [Bun](https://bun.sh/) — Lightning-fast JavaScript runtime
- [Cloudflare Workers](https://workers.cloudflare.com/) — Edge computing platform

### Frontend & UI

- [React 19](https://react.dev/) — Latest React features
- [TanStack Router](https://tanstack.com/router) — Type-safe routing with data loading
- [Tailwind CSS v4](https://tailwindcss.com/) — Utility-first styling
- [shadcn/ui](https://ui.shadcn.com/) — Accessible UI components
- [Jotai](https://jotai.org/) — Atomic state management
- [Astro](https://astro.build/) — Marketing site generator

### Backend & API

- [Hono](https://hono.dev/) — Fast web framework for the edge
- [tRPC](https://trpc.io/) — End-to-end type-safe APIs
- [Better Auth](https://www.better-auth.com/) — Secure authentication system

### Database & ORM

- [Drizzle ORM](https://orm.drizzle.team/) — TypeScript ORM
- [Neon PostgreSQL](https://neon.tech/) — Serverless PostgreSQL database

### Development Tools

- [Vite](https://vitejs.dev/) — Frontend build tool
- [Vitest](https://vitest.dev/) — Unit testing
- [TypeScript](https://www.typescriptlang.org/) — Static typing
- [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) — Code formatting & linting

---

## Monorepo Architecture

- [`apps/app/`](./apps/app) — Main React 19 school management app
- [`apps/web/`](./apps/web) — Marketing website (Astro)
- [`apps/api/`](./apps/api) — API server (Hono + tRPC)
- [`apps/email/`](./apps/email) — Custom Gmail-style email templates & UI
- [`packages/core/`](./packages/core) — Shared logic, types, and utilities
- [`packages/ui/`](./packages/ui) — Reusable UI components
- [`packages/ws-protocol/`](./packages/ws-protocol) — WebSocket messaging layer
- [`db/`](./db) — Database schema, migrations, and seeds
- [`docs/`](./docs) — VitePress documentation site
- [`infra/`](./infra) — Terraform infra configs
- [`scripts/`](./scripts) — Dev/build automation

---

## Quick Start

```bash
# Clone the repo
git clone https://github.com/med-aziz-guennichi/odyssey.git
cd odyssey

# Install dependencies
bun install

# Start development
bun dev

## Contributing

We welcome contributions!
Check the [Contributing Guide](.github/CONTRIBUTING.md) and browse [open issues](https://github.com/med-aziz-guennichi/odyssey/issues).

---

## License

MIT © 2025–present Aziz ([medazizguennichi@gmail.com](mailto:medazizguennichi@gmail.com)) and contributors.
See the [LICENSE](./LICENSE) file for details.
```
