# 🛡️ Krunal Patel — Bug Bounty Portfolio

A free, one-page portfolio site built with plain HTML/CSS/JS (no frameworks, no cost) to showcase your bug bounty profile to recruiters.

## ✨ What's inside

| Section | Content |
|---|---|
| Hero | Terminal-style intro with typing effect |
| About | Your story, methodology, KYC-verified trust signals |
| Stats | Real public numbers — Com Olho rank #95 / Top 1%, 96 submissions, 55.7% acceptance, Intigriti 100% valid rate (7 reports) |
| Skills | Disciplines (web appsec, API IDOR/BOLA, SSRF, auth, mobile RE, network) + full toolkit |
| Experience | Timeline — freelance bug bounty (2024–present), I2E Consulting & ISAC internships, M.Sc. NFSU, certifications |
| Highlights | Verified achievements — Com Olho / Intigriti stats, 10+ Hall of Fame credits, Bolt.Earth finding, writeups |
| Contact | Email, phone, location, profile links + writeups |

## 🚀 Publish for FREE on GitHub Pages

1. **Create a GitHub account** (free) at https://github.com if you don't have one.
2. Create a new repository named: `<yourusername>.github.io` (e.g. `krunalpatel070707.github.io` — check the "Public" box).
3. Put the files in it:

   ```bash
   cd ~/portfolio
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<yourusername>/<yourusername>.github.io.git
   git push -u origin main
   ```

4. Done — your site is live at `https://<yourusername>.github.io` within ~1–2 minutes. No hosting bills, ever.

> **Tip:** GitHub Pages needs the files in the repo root. Make sure `index.html` is at the top level (it already is in `~/portfolio`).

## ✏️ How to customize

Open `index.html` in any text editor. Look for `<!-- EDIT: ... -->` comments — everything you need to change is marked:

- **Email / name / tagline** → `index.html` (About + Contact sections)
- **Phone / location** → Contact section (already set from your resume)
- **GitHub link** → Contact section (already set to `kphack07`)
- **Stats numbers** → Stats section (keep them matching your live profiles)
- **Tools** → Skills section chips
- **Profile links** → Contact section includes Com Olho, Intigriti, Bugcrowd (`Kphunt0707`), HackerOne (`kphunt07`), GitHub (`kphack07`), LinkedIn (real), and Medium writeups

Colors, fonts, and layout live in `assets/style.css`. Terminal/scroll effects are in `assets/main.js`.

## 📋 Pre-submit checklist for recruiters

- [ ] Double-check stats against your current profiles (they change over time)

## 📁 Files

```
portfolio/
├── index.html        ← main page (edit content here)
├── assets/
│   ├── style.css     ← all styling
│   └── main.js       ← typing effect + scroll animations
└── README.md         ← this file
```
