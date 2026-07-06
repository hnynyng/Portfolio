# Portfolio — Hon Yen Yang
Link: https://portfolio-phi-weld-96.vercel.app/
Personal portfolio site. Single page, dark/light themed, built with Next.js.

## Stack

- Next.js (App Router, static output) + TypeScript
- Tailwind CSS v4 with a custom CSS-variable theme system
- No animation libraries — all motion is hand-rolled CSS (first-load choreography, scroll reveals, view-transition theme switch)

## Themes

| | Base | Accent |
|---|---|---|
| Dark (default) | Charcoal `#12161A` | Electric Cobalt `#3B82F6` |
| Light | Chalk `#F9F9FB` | Persimmon `#E65F2B` |

## Develop

```bash
npm install
npm run dev
```

## Deploy

Hosted on Vercel — push to `main` and it ships.
