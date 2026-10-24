# Elite Habit Tracker

## Put it on your iPhone (one time, ~5 min)
1. github.com → **New repository** → name it `habits` → **Public** → Create.
2. Click **uploading an existing file** → drag in ALL these files → **Commit changes**:
   `index.html`, `sw.js`, `manifest.webmanifest`, `icon-180.png`, `icon-192.png`, `icon-512.png`
3. Repo **Settings → Pages** → Source: **Deploy from a branch** → Branch: **main**, folder **/(root)** → Save.
4. Wait ~1 minute, then open `https://YOUR-USERNAME.github.io/habits/` in **Safari** on your iPhone.
5. Share → **Add to Home Screen** → Add. Open it from the Home Screen from now on.

## Good to know
- Your data lives on the phone, inside the Home Screen app (separate from Safari tabs).
- Keep the same URL forever — the data is tied to it.
- Settings → **Back up now** saves a file to Files/iCloud. Restore from the same screen.
- Works fully offline after the first open.

## Updating later
Upload the new files over the old ones, and change the version line at the top of `sw.js`
(e.g. `eht-1.0.0` → `eht-1.0.1`). The app will show **“A new version is ready → Update”**.
