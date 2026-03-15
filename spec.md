# Jerome Ceyrac CV

## Current State
Fresh project. No existing code.

## Requested Changes (Diff)

### Add
- Motoko backend canister (dfx 0.31+ compatible) with all fields as `transient var` strings with default CV content
- Public query functions: getHero, getAbout, getExperience, getSkills, getCertifications, getEducation, getProjects, getContact
- Public shared update functions for each section with empty string guard using Debug.trap
- dfx.json configured for Motoko backend + Vite frontend asset canister
- Vite + React + TypeScript + Tailwind frontend
- Frontend uses dfx-generated declarations from `src/declarations/backend/`
- Canister ID injected via `dfx generate` + `vite.config.ts` environment variable
- Single-page CV layout: Hero, About, Experience (timeline), Skills, Certifications, Education, Projects, Contact
- Dark/light mode toggle
- Responsive design inspired by jeromeceyrac.com
- Profile picture (pixel-art) displayed in hero
- All real CV data from Jérôme Ceyrac pre-loaded as default values in backend

### Modify
- N/A (new project)

### Remove
- N/A

## Implementation Plan
1. Write dfx.json with backend (Motoko) + frontend (asset canister) canisters
2. Write Motoko actor with transient var fields + query/update functions
3. Write package.json, vite.config.ts, tsconfig, tailwind config for frontend
4. Write React frontend that imports generated declarations, fetches all sections on mount, renders full CV
5. Write canister_ids.json placeholder and env setup scripts
6. Ensure `dfx deploy` works without manual fixes
