# MW_Apps Website

Landing Page für MW_Apps – gehostet auf GitHub Pages.
**Live:** https://mannywo.github.io/

---

## Wichtig: Das Repo existiert bereits!

Das Repo `MannyWo/MannyWo.github.io` ist aktiv und GitHub Pages läuft.
Du lädst die neuen Dateien aus diesem Ordner einfach in das bestehende Repo hoch –
die alte `index.html` wird ersetzt, alles andere (insb. `terminkompass/` und `app-ads.txt`) bleibt.

---

## Deployment: Neue Dateien hochladen

### Option A – Per GitHub-Webinterface (einfachste Methode)

1. Gehe zu https://github.com/MannyWo/MannyWo.github.io
2. Klick **Add file → Upload files**
3. Ziehe den gesamten Inhalt dieses `mw-apps-website/` Ordners rein (nicht den Ordner selbst!)
4. Commit-Nachricht: `Launch new MW_Apps website`
5. Klick **Commit changes**

GitHub Pages aktualisiert sich automatisch nach ~1-2 Minuten.

### Option B – Per Git (Terminal)

```bash
# Klone das bestehende Repo
git clone https://github.com/MannyWo/MannyWo.github.io.git
cd MannyWo.github.io

# Kopiere die neuen Dateien rein (überschreibt index.html, fügt neue Ordner hinzu)
cp -r /pfad/zu/mw-apps-website/* .

# Pushen
git add .
git commit -m "Launch new MW_Apps website"
git push origin main
```

### Welche Dateien kommen neu rein

| Neu/Update | Datei/Ordner | Hinweis |
|------------|-------------|---------|
| 🔄 Update | `index.html` | Neue Startseite (ersetzt alte) |
| ✅ Neu | `assets/` | Icons, Screenshots, Logos |
| ✅ Neu | `impressum/index.html` | Pflicht §5 TMG |
| ✅ Neu | `datenschutz/index.html` | Website-Datenschutz |
| ✅ Neu | `terminkompass/index.html` | TK Landing Page (ersetzt Platzhalter) |
| ✅ Neu | `jobtrace/` | Placeholder |
| ✅ Neu | `chromaflow/` | Placeholder |
| ⚠️ Behalten | `terminkompass/datenschutz.html` | App-Datenschutz bleibt! |
| ⚠️ Behalten | `terminkompass/support.html` | App-Support bleibt! |
| ⚠️ Behalten | `app-ads.txt` | AdMob-Verifizierung bleibt! |

---

## Strato-Domain einbinden (optional, empfohlen)

So ist nur deine Domain sichtbar – kein `mannywo.github.io` in der URL.

### 1. CNAME-Datei im Repo anlegen

Erstelle eine Datei namens `CNAME` (keine Endung) mit:
```
www.DEINE-DOMAIN.de
```

### 2. DNS bei Strato einstellen

Im Strato-Kundenbereich → DNS-Verwaltung:

| Typ   | Name | Wert                      |
|-------|------|---------------------------|
| CNAME | www  | mannywo.github.io         |
| A     | @    | 185.199.108.153           |
| A     | @    | 185.199.109.153           |
| A     | @    | 185.199.110.153           |
| A     | @    | 185.199.111.153           |

### 3. In GitHub Settings eintragen

Repo → Settings → Pages → Custom domain → `www.DEINE-DOMAIN.de`
Haken bei **Enforce HTTPS** setzen.

---

## GoatCounter Analytics aktivieren

1. Konto anlegen: https://www.goatcounter.com/ (kostenlos)
2. Account-Namen wählen, z.B. `mwapps`
3. In `index.html` ganz unten den auskommentierten Block einkommentieren
   und `[DEIN-ACCOUNT]` durch deinen GoatCounter-Namen ersetzen

Dashboard: https://mwapps.goatcounter.com
Trackt automatisch: Seitenaufrufe, App Store Klicks (iOS vs. Android getrennt)

---

## Noch auszufüllen

| Datei | Was fehlt |
|-------|-----------|
| `impressum/index.html` | `[STRAßE UND HAUSNUMMER]` und `[PLZ ORT]` |

---

## Account-Infos

- GitHub: https://github.com/MannyWo
- Live-URL: https://mannywo.github.io/
- App-Datenschutz TK: https://mannywo.github.io/terminkompass/datenschutz.html
