# Secure Chat Proxy Setup (Cloudflare Worker)

This removes API keys from frontend code while keeping your chatbot working.

## 1) Install Wrangler

```bash
npm install -g wrangler
wrangler login
```

## 2) Create Worker project (from this repo root)

```bash
mkdir -p worker && cp proxy/cloudflare-worker.js worker/index.js
cd worker
wrangler init workforce-ai-proxy --yes
```

Then replace generated `src`/entry with `index.js` content from `proxy/cloudflare-worker.js`.

## 3) Add secrets

```bash
wrangler secret put GEMINI_API_KEY
wrangler secret put GROQ_API_KEY
```

## 4) Deploy

```bash
wrangler deploy
```

Copy the deployed URL, e.g.:

`https://workforce-ai-proxy.<subdomain>.workers.dev`

## 5) Connect frontend

Edit `config.js`:

```js
window.WORKFORCE_API_BASE = "https://workforce-ai-proxy.<subdomain>.workers.dev";
```

The frontend will call:

`POST ${WORKFORCE_API_BASE}/chat`

## 6) Important

- Keep `window.WORKFORCE_API_BASE` set in production.
- Frontend direct key mode is disabled by default for safety.
- Rotate any previously exposed keys.
