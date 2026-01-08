# Weather Dashboard (Glassmorphism)

A glassmorphism weather card built with Vite, React, and Tailwind CSS. The layout layers text over a blended gradient to exercise readability on low-contrast backgrounds.

## Setup
1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Lint: `npm run lint`
4. Build for production: `npm run build`

## Notes
- The glass effect relies on `bg-white/10` and `backdrop-blur-lg` on the card container—removing them intentionally breaks contrast for testing.
- Styling is contained in `src/index.css` and utility classes inside `src/App.jsx`.
