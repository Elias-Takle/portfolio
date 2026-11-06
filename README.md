# Portfolio

React (Vite) front end with an Express contact endpoint that runs as a Netlify Function.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # serve the build locally
```
The contact form needs the Netlify function. To test it locally: `npx netlify-cli dev` (uses a `.env` copied from `.env.example`).

## Edit your content
Everything personal is in `src/data.js`. Replace each `[PLACEHOLDER]` (email, GitHub, LinkedIn, name, projects). Until a link is real it renders as a disabled placeholder. Add a project by copying one object into the `projects` array. Put your CV at `public/cv/cv.pdf` and images in `public/images/`.

## Deploy to Netlify (primary)
1. Push the repo to GitHub, then in Netlify choose Add new site > Import from Git. `netlify.toml` already sets the build command, `dist` and the functions folder.
2. Add the SMTP variables from `.env.example` under Site settings > Environment variables. (For Gmail, use an app password.)
3. Redeploy. The form posts to `/.netlify/functions/contact`.

## Deploy to GitHub Pages (optional)
1. Repo Settings > Pages > Source: GitHub Actions. Pushes to `main` run `.github/workflows/deploy-pages.yml`.
2. GitHub Pages cannot run Express, so the form must call your Netlify function. Add a repository secret `VITE_API_URL` with the full function URL, and set `ALLOWED_ORIGINS=https://USERNAME.github.io` in Netlify.

## Using Django for the contact form instead
Add a Django view that accepts the same JSON (`name, email, subject, message`), validates it, and calls `send_mail` with `django-cors-headers` allowing your site's origin. Then set `VITE_API_URL` to that endpoint. The front end needs no other change.
