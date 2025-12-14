# FSD Project Template

A production-ready **React + TypeScript + Vite** project template built with [Feature-Sliced Design](https://feature-sliced.design/) architecture.

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **React Router DOM** - Client-side routing
- **ESLint** - Code linting

## Project Structure

```
src/
├── app/                    # Application layer
│   ├── providers/          # App providers (router, store, theme...)
│   ├── guards/             # Route guards (auth, permissions...)
│   ├── ui/                 # App-level UI (header, error boundary...)
│   ├── styles/             # Global styles
│   ├── routes.tsx          # Route definitions
│   ├── App.tsx             # Root component
│   └── main.tsx            # Entry point
│
├── pages/                  # Pages layer
│   ├── home/
│   │   ├── ui/
│   │   └── index.ts
│   └── login/
│       ├── ui/
│       └── index.ts
│
├── widgets/                # Widgets layer
│   └── header/
│       ├── ui/
│       └── index.ts
│
├── features/               # Features layer
│   └── auth/
│       ├── ui/
│       ├── model/
│       ├── api/
│       └── index.ts
│
├── entities/               # Entities layer
│   └── user/
│       ├── ui/
│       ├── model/
│       ├── api/
│       └── index.ts
│
└── shared/                 # Shared layer
    ├── ui/                 # Reusable UI components
    ├── lib/                # Utility functions
    ├── hooks/              # Custom hooks
    ├── types/              # TypeScript types
    ├── api/                # API client
    ├── config/             # App configuration
    └── index.ts
```

## FSD Layers

| Layer      | Description                                                              |
| ---------- | ------------------------------------------------------------------------ |
| `app`      | Application initialization: providers, routing, global styles, guards    |
| `pages`    | Full pages composed from widgets, features, and entities                 |
| `widgets`  | Complex UI blocks combining multiple features/entities (Header, Sidebar) |
| `features` | User interactions and business logic (auth, cart, comments)              |
| `entities` | Business domain entities (user, product, order)                          |
| `shared`   | Reusable infrastructure: UI kit, libs, hooks, types, API client          |

## Slice Structure (Segments)

Each slice in `pages`, `widgets`, `features`, `entities` follows this structure:

```
slice-name/
├── ui/          # React components
├── model/       # Business logic, state, types
├── api/         # API requests
├── lib/         # Slice-specific utilities
└── index.ts     # Public API (barrel export)
```

## Import Rules

Layers can only import from layers **below** them:

```
app → pages → widgets → features → entities → shared
```

| Layer      | Can Import From                            |
| ---------- | ------------------------------------------ |
| `app`      | pages, widgets, features, entities, shared |
| `pages`    | widgets, features, entities, shared        |
| `widgets`  | features, entities, shared                 |
| `features` | entities, shared                           |
| `entities` | shared                                     |
| `shared`   | external packages only                     |

## Path Aliases

Configured aliases for clean imports:

```typescript
import { Button } from "@/shared/ui";
import { LoginForm } from "@/features/auth";
import { UserCard } from "@/entities/user";
import { HomePage } from "@/pages/home";
```

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Run linting
pnpm lint
```

## Best Practices

1. **Public API**: Only export what's needed via `index.ts`
2. **Isolation**: Slices should not import from sibling slices
3. **Composition**: Build complex UIs by composing smaller pieces
4. **Single Responsibility**: Each slice handles one specific domain/feature

## Learn More

- [Feature-Sliced Design](https://feature-sliced.design/) - Official documentation
- [FSD Examples](https://github.com/feature-sliced/examples) - Example projects

## License

MIT
