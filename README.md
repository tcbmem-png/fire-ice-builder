# Hair Style Preview MVP

Small React + TypeScript prototype for a barbershop or salon hairstyle preview flow. Users upload their photo, generate prompts for their own AI tool, upload the AI results back into the app, and print a simple style brief.

## Run locally

```bash
npm install
npm run dev
```

Open the local Vite URL shown in the terminal.

## Build

```bash
npm run build
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the repo into [Vercel](https://vercel.com/new).
3. Select the `Vite` framework preset if Vercel does not auto-detect it.
4. Build command: `npm run build`
5. Output directory: `dist`
6. No environment variables are required for this MVP.

## Included in this MVP

- One-page React app
- Front photo upload required
- Optional side and reference image uploads
- Prompt generator for ChatGPT and Gemini handoff
- AI result upload gallery
- Final printable style brief using `window.print()`

## Not included yet

- Real AI generation
- Backend or database
- Auth
- PDF export
- Booking integrations
- Admin settings
