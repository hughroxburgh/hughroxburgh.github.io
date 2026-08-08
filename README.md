# Your researcher website

A plain HTML/CSS/JS site — no build step, nothing to install. Three files: `index.html`, `styles.css`, `script.js`.

## 1. Edit the content

Open `index.html` in any text editor and replace the placeholder text:

- Your name, title, and institution (top of the sidebar and the `<title>` tag)
- The hero line and sub-line
- About, Research, Publications, CV, and Contact sections
- Email address and social links (`mailto:you@example.com`, GitHub, Scholar, ORCID, etc.)
- Add or remove publication entries by copying/deleting a `<li class="pub">...</li>` block
- Add or remove CV rows the same way, inside `.timeline-list`

Colors and fonts live at the top of `styles.css` under `:root` if you want to adjust the palette later.

## 2. Put it on GitHub Pages

1. Create a new repository on GitHub named exactly `YOUR-USERNAME.github.io` (replace with your actual GitHub username — this exact naming is what makes GitHub serve it as a personal site).
2. Upload `index.html`, `styles.css`, and `script.js` to the repository (drag-and-drop via "Add file → Upload files" on github.com works fine, or use git from your terminal — see below).
3. Go to the repo's **Settings → Pages**.
4. Under "Build and deployment", set **Source** to "Deploy from a branch", branch `main`, folder `/root`. Save.
5. Wait a minute or two, then visit `https://YOUR-USERNAME.github.io`.

### Using git from the terminal instead of the upload button

```bash
git init
git add index.html styles.css script.js README.md
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
git push -u origin main
```

## 3. Optional next steps

- Add a CV PDF to the repo (e.g. `cv.pdf`) and point the "Download full CV" link at it.
- Add a custom domain later via Settings → Pages → Custom domain, if you get one.
- Add an `og:image` / social preview meta tag once you have a headshot or banner you like.

No framework, no npm, no build process — editing the HTML and pushing to GitHub is the entire workflow.
