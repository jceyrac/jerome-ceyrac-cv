# Jérôme Ceyrac — CV Website

A personal CV website built on the **Internet Computer Protocol (ICP)**, with a Motoko backend storing content on-chain and a React/Tailwind frontend. Originally generated with [Caffeine.ai](https://caffeine.ai) and then customised locally in VS Code.

Live at: **[jeromeceyrac.com](https://jeromeceyrac.com)**  
Hosted at: **[jerome-ceyrac-cv-4do.caffeine.xyz](https://jerome-ceyrac-cv-4do.caffeine.xyz)**

---

## How this was built — step by step

This workflow may be useful to anyone who wants to generate a site with Caffeine, customise it locally, and deploy it back to ICP.

### Step 1 — Generate the initial project with Caffeine

1. Go to [caffeine.ai](https://caffeine.ai) and describe your CV site in the chat
2. Caffeine generates a full-stack ICP project (Motoko backend + React frontend) and hosts a draft version
3. Once happy with the draft, use the **Publish to GitHub** feature to export the source code to a GitHub repository

### Step 2 — Clone the repo and run locally

```bash
git clone https://github.com/jceyrac/jerome-ceyrac-cv
cd jerome-ceyrac-cv
```

The project has no `dfx.json` — Caffeine uses its own `icp-cli` toolchain. To run the frontend locally without the full ICP stack, use a **mock backend**:

1. Add `"dev": "vite"` to the scripts in `src/frontend/package.json`
2. Create `src/frontend/src/mocks/backend.ts` with a `mockBackend` object implementing the `backendInterface` — copy the content strings from `src/backend/main.mo`
3. Create `src/frontend/.env.local`:
   ```
   VITE_USE_MOCK=true
   ```
4. Run the dev server:
   ```bash
   cd src/frontend
   pnpm install
   pnpm dev
   ```
5. Open `http://localhost:5173` — hot reload works on every save

### Step 3 — Customise in VS Code

With the dev server running, edit any file in `src/frontend/src/` and the browser updates instantly. Key files:

- `src/frontend/src/components/` — individual section components
- `src/frontend/src/utils/markdown.tsx` — custom markdown renderer
- `src/frontend/src/mocks/backend.ts` — CV content (used in local dev)
- `src/backend/main.mo` — CV content (used in production on ICP)

> **Important:** keep `main.mo` and `mocks/backend.ts` in sync — `main.mo` is what gets deployed on-chain.

### Step 4 — Commit and push to GitHub

From the **project root** (not `src/frontend`):

```bash
cd ../..
git add .
git commit -m "your message"
git push
```

### Step 5 — Reimport to Caffeine and deploy Live

1. Export your repo as a ZIP from GitHub (Code → Download ZIP)
2. In Caffeine, create a new project and import the ZIP
3. Use the **Make Live** feature to deploy to ICP — Caffeine handles cycles and canister management for free

Your site will be live at a `*.caffeine.xyz` URL.

### Step 6 — Point your custom domain with Cloudflare (optional)

Caffeine only supports domains purchased through their platform. To use an existing domain, set up a redirect via Cloudflare:

1. Create a free account at [cloudflare.com](https://cloudflare.com) and add your domain
2. Cloudflare will import your existing DNS records automatically — verify them carefully (especially subdomains, MX, SPF, DKIM)
3. Update your nameservers at your registrar to the two Cloudflare nameservers provided
4. In Cloudflare DNS, add a proxied dummy A record for the root domain:
   ```
   Type: A  |  Name: @  |  IPv4: 192.0.2.1  |  Proxy: ON
   ```
   And a proxied CNAME for www:
   ```
   Type: CNAME  |  Name: www  |  Target: yourdomain.com  |  Proxy: ON
   ```
5. Go to **Rules → Redirect Rules** and create a rule:
   - Expression: `(http.host eq "yourdomain.com") or (http.host eq "www.yourdomain.com")`
   - Redirect type: Static
   - Target URL: `https://your-project.caffeine.xyz`
   - Status code: 301

DNS propagation takes 1–24 hours. After that, `yourdomain.com` redirects to your Caffeine-hosted ICP site.

---

## Project structure

```
├── src/
│   ├── backend/
│   │   ├── main.mo          # Motoko canister — stores all CV content on-chain
│   │   └── canister.yaml
│   └── frontend/
│       ├── src/
│       │   ├── components/  # React section components
│       │   ├── mocks/       # Local mock backend (dev only)
│       │   ├── utils/       # Markdown renderer
│       │   └── App.tsx
│       ├── .env.local        # VITE_USE_MOCK=true (not committed)
│       └── package.json
├── icp.yaml
└── README.md
```

---

## Tech stack

- **Backend:** [Motoko](https://internetcomputer.org/docs/current/motoko/main/motoko) on [Internet Computer Protocol](https://internetcomputer.org)
- **Frontend:** React 19 + TypeScript + Vite + Tailwind CSS
- **UI components:** shadcn/ui + Radix UI
- **Hosting:** [Caffeine.ai](https://caffeine.ai)
- **DNS / redirect:** [Cloudflare](https://cloudflare.com) (free plan)
