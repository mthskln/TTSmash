# Tafeltennis Scorebord

Dit is een kant-en-klaar React-project. Volg de stappen hieronder in volgorde —
het duurt in totaal misschien 15-20 minuten en je hoeft niks te installeren
op je computer als je de webinterface van GitHub gebruikt.

## Stap 1 — De code op GitHub zetten

1. Ga naar [github.com](https://github.com) en log in met je account.
2. Klik rechtsboven op het **+**-icoon → **"New repository"**.
3. Geef als naam bijvoorbeeld `tafeltennis-scorebord` in.
4. Laat "Public" aangevinkt staan (nodig voor de gratis laag van Vercel/Netlify).
5. Vink **niets** aan bij "Initialize this repository with" (geen README, geen
   .gitignore) — die heb je al in dit project.
6. Klik **"Create repository"**.
7. Je krijgt nu een lege repository-pagina te zien met een paar knoppen.
   Klik op **"uploading an existing file"** (die link staat er middenin).
8. Pak de map die je van mij hebt gekregen uit (unzip), open de map, en
   **sleep alle bestanden en mappen** (dus `src/`, `public/`, `package.json`,
   `index.html`, enz. — niet de omliggende map zelf, maar de inhoud ervan)
   naar het upload-vak op de GitHub-pagina.
9. Scrol naar beneden, laat het bericht staan zoals het is, en klik
   **"Commit changes"**.

Je code staat nu op GitHub.

## Stap 2 — Hosten via Vercel (gratis)

1. Ga naar [vercel.com](https://vercel.com) en klik **"Sign up"**.
2. Kies **"Continue with GitHub"** — dan koppelt hij meteen aan je
   GitHub-account, geen apart wachtwoord nodig.
3. Na inloggen klik je op **"Add New..." → "Project"**.
4. Vercel laat nu je GitHub-repositories zien. Zoek
   `tafeltennis-scorebord` en klik **"Import"**.
5. Vercel herkent automatisch dat het een Vite-project is (Framework Preset:
   "Vite"). Je hoeft niets aan te passen.
6. Klik **"Deploy"** en wacht ongeveer 1 minuut.
7. Je krijgt een live link, iets als
   `https://tafeltennis-scorebord-xxxx.vercel.app` — dat is je app, live op
   het internet.

Elke keer dat je later iets aanpast en opnieuw naar GitHub upload, bouwt
Vercel de site automatisch opnieuw. Je hoeft daar niets voor te doen.

## Stap 3 — Installeren op je Android-telefoon

1. Open de Vercel-link op je telefoon **in Chrome** (niet in een andere
   browser-app of in-app browser zoals Instagram/WhatsApp — dat werkt niet
   voor installatie).
2. Tik rechtsboven op de drie puntjes (⋮).
3. Tik op **"App installeren"** (soms heet dit "Toevoegen aan startscherm").
4. Bevestig. Je krijgt nu een echt app-icoon op je startscherm, die volledig
   schermvullend opent (geen browserbalk) en ook offline werkt zodra hij één
   keer geladen is.

## Later iets aanpassen?

- Kleine tekstuele aanpassingen: open het bestand rechtstreeks op GitHub
  (klik erop, dan op het potloodje rechtsboven om te bewerken), en commit.
  Vercel bouwt daarna automatisch opnieuw.
- Grotere aanpassingen: kom terug naar deze chat, ik pas de code aan, en jij
  hoeft alleen de gewijzigde bestanden opnieuw te uploaden op GitHub (of ik
  geef je het complete project opnieuw).

## Lokaal testen (optioneel, alleen als je dat wilt)

Als je ooit Node.js op je computer installeert en het project lokaal wilt
draaien:

```bash
npm install
npm run dev
```

Dan opent het op `http://localhost:5173`.
