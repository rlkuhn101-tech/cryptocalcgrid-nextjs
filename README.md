# CryptoCalcGrid — Phase 1 starter

A separate Next.js 15 / React 19 / TypeScript website modeled on the navy-and-cyan visual direction of CapitalRewards.com.

## Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000. For production: `npm run build`.

## Deploy safely

1. Create a **new** GitHub repository named `cryptocalcgrid-nextjs` and upload these project files.
2. In Vercel, create a **new project** from that repository. Do not replace or reconnect the existing CryptoCalcGrid project.
3. Test on the new project's `*.vercel.app` URL.
4. Only after approval, transfer the custom domain from the old project to the new project.

## Scope / limitations

- Three working, instant-update calculators: profit/loss, hypothetical DCA, market cap.
- DCA is a constant-return mathematical model, **not** a historical backtest.
- No live market API or historical benchmark data is connected yet; these are planned subsequent phases.
- SEO metadata, sitemap, responsive layout, and accessible input labels are included.
- No changes have been made to Vercel, GitHub, or the live website.
