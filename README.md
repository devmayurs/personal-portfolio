# Mayur Solanki — Portfolio

> A production-grade personal portfolio built with **React 19**, **TypeScript Strict Mode**, **Material UI v6**, and **Vite 6** — following Clean Architecture and Atomic Design principles.

[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![MUI](https://img.shields.io/badge/MUI-6-007FFF?logo=mui)](https://mui.com/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite)](https://vitejs.dev/)

---

## Tech Stack

| Category | Technology |
|---|---|
| **UI Framework** | React 19+ |
| **Language** | TypeScript 5 (Strict Mode) |
| **Component Library** | Material UI v6 |
| **Build Tool** | Vite 6 |
| **Routing** | React Router v6 |
| **Server State** | TanStack Query v5 |
| **Client State** | Redux Toolkit v2 |
| **Forms** | React Hook Form + Zod |
| **3D / Animation** | Three.js |
| **HTTP Client** | Axios |
| **Code Quality** | ESLint + Prettier + Husky + lint-staged |

---

## Architecture

This project follows **Feature-Based Clean Architecture** with **Atomic Design** for the component layer.

```
Data Layer       →  Business Layer   →  Presentation Layer
(data/, services)   (hooks/, store)      (components/, pages/, layouts/)
```

### Key Principles

- **Feature-Based Folder Structure** — features are co-located with their components, hooks, and services
- **Atomic Design** — components organised as Atoms → Molecules → Organisms
- **Lazy-Loaded Routes** — every page is `React.lazy()` wrapped with `<Suspense>` boundaries
- **Redux Store** — manages UI state (active section, theme mode, drawer state)
- **TanStack Query** — handles all async data fetching with caching and background refetch
- **No Cross-Layer Imports** — presentation never imports directly from data layer
- **Path Aliases** — `@/` maps to `src/` for clean imports

---

## Folder Structure

```
personal-portfolio-main/
├── public/                          # Static assets served as-is
│   └── favicon.ico
├── src/
│   ├── app/
│   │   └── App.tsx                  # Root component with all providers
│   ├── assets/                      # Images, fonts, SVGs
│   ├── components/                  # Atomic Design component library
│   │   ├── atoms/                   # Smallest UI primitives (Button, Input, Badge)
│   │   ├── molecules/               # Composed atoms (Card, FormField, NavItem)
│   │   └── organisms/               # Complex sections (Navbar, HeroSection, Footer)
│   ├── constants/                   # App-wide constants (routes, breakpoints, keys)
│   ├── data/                        # Static data (projects list, skills, experience)
│   ├── hooks/                       # Shared custom React hooks
│   ├── layouts/                     # Page layout wrappers (MainLayout, MinimalLayout)
│   ├── pages/                       # Route-level page components (lazy loaded)
│   │   ├── HomePage/
│   │   └── NotFoundPage/
│   ├── routes/                      # React Router config with lazy loading
│   ├── services/                    # API service layer (axios instances, endpoints)
│   ├── store/                       # Redux Toolkit store
│   │   ├── slices/                  # Feature slices (uiSlice, themeSlice)
│   │   ├── hooks.ts                 # Typed useAppDispatch / useAppSelector
│   │   └── index.ts                 # Store configuration
│   ├── theme/                       # MUI theme configuration (light/dark)
│   ├── App.tsx                      # Legacy entry (delegates to app/App.tsx)
│   ├── App.css                      # Global component styles
│   ├── index.css                    # CSS reset and global variables
│   └── main.tsx                     # Vite entry point
├── .eslintrc / eslint.config.js     # ESLint configuration
├── .prettierrc                      # Prettier formatting rules
├── .husky/
│   └── pre-commit                   # Runs lint-staged before every commit
├── .gitignore
├── index.html                       # Vite HTML template
├── package.json
├── tsconfig.json                    # TypeScript project references
├── tsconfig.app.json                # App TypeScript config (strict mode)
├── tsconfig.node.json               # Node/Vite TypeScript config
└── vite.config.ts                   # Vite build config with path aliases
```

---

## Getting Started (Local Development)

### Prerequisites

- **Node.js** 18+ ([download](https://nodejs.org/))
- **Git** ([download](https://git-scm.com/))
- **npm** 9+ (bundled with Node.js)

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/devmayurs/personal-portfolio-main.git
   ```

2. **Navigate into the project**
   ```bash
   cd personal-portfolio-main
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:5173
   ```

---

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start Vite development server with HMR |
| `npm run build` | Production build (outputs to `dist/`) |
| `npm run type-check` | Run TypeScript compiler check (no emit) |
| `npm run lint` | ESLint check across all source files |
| `npm run format` | Prettier format all files in-place |
| `npm run preview` | Preview the production build locally |

---

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **"New Project"** → Import your GitHub repo
4. Set **Framework Preset** to `Vite`
5. Set **Build Command** to `npm run build`
6. Set **Output Directory** to `dist`
7. Click **"Deploy"** ✅

> Vercel auto-detects Vite projects — zero config needed in most cases.

---

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) → **"New site from Git"**
3. Connect GitHub → Select your repo
4. Set **Build command** to `npm run build`
5. Set **Publish directory** to `dist`
6. Click **"Deploy site"** ✅

> Add a `_redirects` file in `public/` with `/* /index.html 200` for SPA routing support.

---

### Deploy to GitHub Pages

1. Update `vite.config.ts` — add the `base` option:
   ```ts
   export default defineConfig({
     base: '/personal-portfolio-main/',
     // ...
   })
   ```
2. Build the project:
   ```bash
   npm run build
   ```
3. Push the `dist/` folder to the `gh-pages` branch:
   ```bash
   npx gh-pages -d dist
   ```

---

## Code Quality Standards

| Standard | Detail |
|---|---|
| **TypeScript** | Strict mode enabled — no implicit `any`, strict null checks |
| **Type Naming** | `T` prefix for types, `I` prefix for interfaces, `E` prefix for enums |
| **Component SRP** | One responsibility per component, hook, and service |
| **Styling** | Dedicated `.style.css` per component, MUI `sx` for dynamic styles |
| **MUI-first** | Always prefer MUI components; avoid raw HTML equivalents |
| **ESLint** | `@typescript-eslint/recommended`, `no-unused-vars`, `no-explicit-any` |
| **Formatting** | Prettier — single quotes, trailing commas, 120 character print width |
| **Pre-commit** | Husky + lint-staged — lints and formats only staged files |

---

## Contact

| Channel | Link |
|---|---|
| 📧 Email | [smayur25491@gmail.com](mailto:smayur25491@gmail.com) |
| 💼 LinkedIn | [mayur-solanki91](https://www.linkedin.com/in/mayur-solanki91) |
| 🐙 GitHub | [devmayurs](https://github.com/devmayurs) |

---

<p align="center">
  Built with ❤️ by <strong>Mayur Solanki</strong>
</p>
