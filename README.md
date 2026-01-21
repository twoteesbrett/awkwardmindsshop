# Awkward Minds Shop — Liquorice Allsort Boxes (Vite + React)

A Vite + React + TypeScript marketing site for **Awkward Minds**: 3D-printed liquorice allsort–inspired **storage boxes** and **tissue box covers**.  
Includes interactive **3D GLB previews**, a short **timelapse video**, product cards, and links to order via **Facebook Marketplace**.

---

## What’s in here

- **Sticky “glass” navbar** (CSS-driven blur/translucency)
- **Hero** with an interactive “Lift the lid!” button that swaps between closed/open GLB models
- Product sections:
  - **Storage Boxes**: renders a grid of GLB previews plus size/price cards from `PRODUCTS`
  - **Tissue Box Covers**: closed + exploded GLB previews plus a price card
- **How it’s made** section with an embedded MP4 timelapse (`/timelapse.mp4`)
- **About the Maker** section with a circular avatar (`/avatar.jpg`)
- Footer with **Font Awesome** social icons (Facebook / Instagram)

---

## Tech stack

- **Vite 7** + React 19 + TypeScript
- **React Bootstrap** + Bootstrap 5
- **3D**: Three.js via `@react-three/fiber` + `@react-three/drei` (used inside `GlbViewer`)
- **Icons**: Font Awesome React

---

## Requirements

- **Node.js 18+** recommended (20+ also fine)
- npm (or your preferred package manager)

---

## Getting started

Install dependencies:

```bash
npm install

### Run the app locally
Starts the Vite development server with hot reload.
npm run dev

The app will be available at the local URL shown in the terminal
(typically http://localhost:5173).

### Build for production
Type-checks the project and builds an optimized production bundle.
npm run build

### Preview the production build
Serves the production build locally for testing.
npm run preview

### Lint the project
Runs ESLint across the codebase.
npm run lint

## License

### Code

The source code in this repository is licensed under the **MIT License**.

You are free to:
- Use
- Copy
- Modify
- Merge
- Publish
- Distribute
- Sublicense
- Sell copies of the software

See the full license text in [`LICENSE`](./LICENSE).

---

### Assets (3D models, images, video)

All **non-code assets** are **not** covered by the MIT License.

This includes, but is not limited to:
- 3D models (`/public/models/*.glb`)
- Images (e.g. `/public/avatar.jpg`)
- Videos (e.g. `/public/timelapse.mp4`)
- Any other media or design assets

**All rights reserved.**  
These assets may not be copied, modified, redistributed, or used for commercial or non-commercial purposes without explicit permission from the author.

© Awkward Minds
