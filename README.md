# bookkeepingforgrowth-site

Marketing site for Momentum—Bookkeeping For Growth, LLC.

## Local dev
1. npm install
2. npm run dev
3. open http://localhost:5173

## Build (this is what Netlify runs)
npm run build

## Netlify settings
- Build command: npm run build
- Publish directory: dist

## Custom domain
After first deploy, in Netlify:
Site settings → Domain management → Add custom domain → bookkeepingforgrowth.net
Then copy the DNS records Netlify gives you into your domain registrar.
