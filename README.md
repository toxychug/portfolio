# Portfolio

A React + Vite portfolio site with a "systems console" theme — terminal-style
hero, resource-meter skills, and a process-list style project table (built to
link straight to FlowCRM-Lite).

## Edit your content

Everything personal (name, bio, skills, projects, timeline, contact links)
lives in one file:

```
src/data/profile.js
```

Open it and replace the placeholders (email, LinkedIn URL, project #2, your
university name in the timeline, etc). No other file needs to change for
basic edits.

## Run locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Deploy to GitHub Pages (same setup as FlowCRM-Lite)

1. Push this project to a new GitHub repo, e.g. `github.com/toxychug/portfolio`.
2. Install deps if you haven't: `npm install`.
3. Run:
   ```bash
   npm run deploy
   ```
   This builds the site and pushes the `dist/` folder to a `gh-pages` branch
   using the `gh-pages` package (already configured in `package.json`).
4. In the repo settings on GitHub → **Pages**, set the source branch to
   `gh-pages` (root). Your site will be live at:
   `https://<your-username>.github.io/<repo-name>/`

The Vite config already uses a relative `base: './'`, so it works whether it's
served from the root of your GitHub Pages user site or from a project
subpath — no extra config needed.

## Project structure

```
src/
  data/profile.js       ← your content (edit this)
  components/
    Nav.jsx              nav bar with status dot + section links
    Hero.jsx              typed terminal intro
    About.jsx              bio
    Skills.jsx              skills as resource meters
    Projects.jsx             projects as a process list (click a RUNNING
                              row to open it — FlowCRM-Lite is wired up)
    Timeline.jsx              education/experience as a git log
    Contact.jsx                contact links as open "ports"
```
