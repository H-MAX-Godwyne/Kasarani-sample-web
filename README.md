# Kasarani College of Medical and Health Science: Website

Static multi-page website (hash-routed pages: Home, About, Courses, Admissions, Campuses, Apply).

## Structure
- index.html: page markup for all pages
- css/styles.css: design system and layout (maroon, navy and gold, dark-mode aware)
- js/main.js: intake calendar, course list, mobile menu, WhatsApp application form, page routing
- assets/: college logo

## Run locally
Open index.html in a browser, or run `python3 -m http.server` in this folder and visit http://localhost:8000.

## Deploy
Upload the whole folder to any static host (Vercel, Netlify, GitHub Pages, cPanel). No build step or secrets needed.

## Edit content
- Courses: the `courses` array at the top of js/main.js
- WhatsApp number: search for 254705975458 in index.html and js/main.js
- Contact details and campus text: index.html
- Colours: CSS variables at the top of css/styles.css

## Still to confirm with the college
Nairobi campus address, fees, entry requirements, course levels per campus, photos, official accreditation details.
