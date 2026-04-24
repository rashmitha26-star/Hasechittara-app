# Hase Chittara — Heritage Art Website

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173

---

## Add Your Images

1. Put your images in `public/images/`
2. Name them: `artwork1.jpg`, `artwork2.jpg` ... `artwork6.jpg`
3. Recommended size: **800 x 1067px**, JPG, under 300KB
4. In `src/data/artworks.js` set: `image: "/images/artwork1.jpg"`

---

## Edit Your Content

**All artwork content** → `src/data/artworks.js`
- Artwork titles, descriptions, artist names, years
- Site name, tagline, mission text
- Filter options (ERAS, REGIONS, MEDIUMS)

**About page extra content** → already inside `src/pages/About.jsx`
- INTRO_ITEMS array
- HISTORY_ITEMS array
- TEAM array

**Explore page** → `src/pages/Explore.jsx`
- REGIONS_DATA array
- TIMELINE array

**Colors & fonts** → `src/styles/global.css`

---

## Enable Contact Form (Formspree — Free)

1. Go to https://formspree.io → create free account
2. Create a new form → copy your Form ID
3. Open `src/components/RequestModal.jsx`
4. Replace: `const FORMSPREE_ID = 'YOUR_FORM_ID'`

Every request will be emailed to you instantly.

---

## Deploy Free (Vercel)

1. Push this folder to GitHub
2. Go to vercel.com → New Project → Import repo
3. Framework: Vite → Deploy
4. Live in 60 seconds!
