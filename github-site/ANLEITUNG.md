# 🚀 Forbach & Partners — GitHub Deployment Anleitung

## Übersicht: Was Sie hier haben

```
github-site/
├── index.html            ← Startseite
├── ueber-uns.html        ← Über uns
├── cnc-fraeszentren.html ← CNC-Seite
├── spritzguss.html       ← Spritzguss-Seite
├── laserschneiden.html   ← Laser-Seite
├── robotik.html          ← Robotik-Seite
├── verpackung.html       ← Verpackung-Seite
├── hydraulik.html        ← Hydraulik-Seite
├── blog.html             ← Blog (lädt Posts aus blog-posts.js)
└── blog-posts.js         ← ✏️ NUR DIESE DATEI für Blog-Artikel bearbeiten!
```

---

## Schritt 1 — GitHub Account erstellen

1. Gehen Sie auf **github.com**
2. Klicken Sie oben rechts auf **"Sign up"**
3. E-Mail-Adresse, Benutzername, Passwort eingeben
4. E-Mail bestätigen

---

## Schritt 2 — Repository erstellen

1. Nach dem Login: klicken Sie auf das **"+"** oben rechts → **"New repository"**
2. **Repository name:** `forbachandpartners-website` (oder einfach `website`)
3. **Public** auswählen (wichtig für GitHub Pages!)
4. **"Create repository"** klicken

---

## Schritt 3 — Alle Dateien hochladen

1. Auf der leeren Repository-Seite: klicken Sie auf **"uploading an existing file"**
2. Ziehen Sie alle 10 Dateien aus dem Ordner `github-site/` per Drag & Drop in das Fenster
3. Warten bis alle hochgeladen sind
4. Unten bei **"Commit changes"** klicken

---

## Schritt 4 — GitHub Pages aktivieren

1. Klicken Sie oben auf **"Settings"** (Zahnrad-Icon)
2. Links im Menü: **"Pages"** anklicken
3. Unter **"Branch"**: `main` auswählen → `/ (root)` → **"Save"**
4. Nach 1–2 Minuten erscheint: `Your site is live at https://IHR-NAME.github.io/website/`

> Ihre Seite ist jetzt live! 🎉

---

## Schritt 5 — Eigene Domain verbinden (optional)

Falls Sie `forbachandpartners.com` auch über GitHub Pages hosten wollen:

1. In **Settings → Pages**: unter "Custom domain" Ihre Domain eingeben
2. Bei Ihrem Domain-Anbieter (z.B. IONOS, GoDaddy): folgende DNS-Einträge setzen:
   ```
   A    @    185.199.108.153
   A    @    185.199.109.153
   A    @    185.199.110.153
   A    @    185.199.111.153
   CNAME www  IHR-NAME.github.io
   ```
3. "Enforce HTTPS" aktivieren (erscheint nach ~24h)

---

## ✏️ Blog-Artikel hinzufügen (so einfach wie möglich)

### Auf GitHub.com direkt (kein Programm nötig!)

1. Gehen Sie zu Ihrem Repository auf github.com
2. Klicken Sie auf die Datei **`blog-posts.js`**
3. Klicken Sie auf den **Stift ✏️** (Edit this file)
4. Kopieren Sie die **Vorlage** ganz oben in der Datei
5. Fügen Sie sie direkt nach `const POSTS = [` ein
6. Füllen Sie Ihre Texte aus (nur die Texte in `"..."` und `` `...` `` ändern)
7. Klicken Sie **"Commit changes"** → **"Commit directly to main"** → **"Commit changes"**

**Die Webseite aktualisiert sich automatisch in ca. 1–2 Minuten.**

### Was Sie beim neuen Artikel ausfüllen müssen:

```javascript
{
  id: 7,                          // ← Nächste freie Nummer (6 Artikel vorhanden, also 7)
  featured: false,                // ← true = großes Format (nur für wichtigsten Artikel)
  date: "2026-06-15",             // ← Datum im Format YYYY-MM-DD
  dateFormatted: "15. Juni 2026", // ← Datum wie es angezeigt wird
  readTime: "4 Min.",             // ← Geschätzte Lesezeit
  category: "Fallstudie",         // ← Kategorie (frei wählbar)
  author: "Sascha Forbach",       // ← Autorenname
  title: "Ihr Artikeltitel",
  excerpt: "Kurze Zusammenfassung für die Übersicht (1-2 Sätze).",
  tags: ["Stichwort1", "Stichwort2"],
  content: `
    <p class="detail-lead">Einleitungssatz (wird hervorgehoben).</p>
    <h2>Überschrift</h2>
    <p>Ihr Absatz hier.</p>
  `
}
```

### HTML-Grundelemente für den Artikel-Text:

| Was | Code |
|-----|------|
| Normaler Absatz | `<p>Text</p>` |
| Große Überschrift | `<h2>Überschrift</h2>` |
| Kleine Überschrift | `<h3>Überschrift</h3>` |
| Fetter Text | `<strong>Text</strong>` |
| Aufzählung | `<ul><li>Punkt 1</li><li>Punkt 2</li></ul>` |
| Zitat/Hervorhebung | `<blockquote>Zitat</blockquote>` |
| Info-Box | `<div class="highlight-box">Text</div>` |
| Code/Formel | `<code>Formel</code>` |

---

## 🔍 SEO & KI-Suchmaschinen (Google, ChatGPT, Gemini)

Jeder Blog-Artikel wird automatisch mit strukturierten Daten (JSON-LD Schema.org) versehen. Das bedeutet:

- **Google** indexiert den Artikel und zeigt ihn in Suchergebnissen
- **ChatGPT Search** und **Perplexity** können den Artikel als Quelle zitieren
- **Gemini** kann bei relevanten Fragen auf Ihren Blog verweisen

**Tipp für bessere Auffindbarkeit:**
- Schreiben Sie Artikel-Titel als konkrete Fragen oder Probleme die Kunden haben
- Beispiel gut: *"Hydraulikdruck schwankt bei Spritzgussmaschine — Ursachen"*
- Beispiel weniger gut: *"Hydraulik Update April"*
- Verwenden Sie genaue technische Begriffe als Tags (die werden indexiert)

---

## ❓ Häufige Fragen

**Ich habe einen Fehler gemacht beim Bearbeiten — was jetzt?**
Kein Problem. Auf GitHub können Sie jede Änderung rückgängig machen:
Klicken Sie auf "History" der Datei → wählen Sie eine frühere Version.

**Kann ich Bilder in Artikel einbinden?**
Ja. Laden Sie das Bild zuerst in Ihr Repository hoch, dann in den Artikel:
`<img src="mein-bild.jpg" alt="Beschreibung" style="width:100%; border-radius:10px;">`

**Wie ändere ich etwas auf der Startseite?**
Öffnen Sie `index.html` auf GitHub, klicken Sie ✏️, suchen Sie den Text und ändern Sie ihn.

**Muss ich technisches Wissen haben?**
Für Blog-Artikel: nein. Für Änderungen an den Seiten selbst: minimales HTML-Verständnis hilfreich, aber mit KI-Hilfe (wie diesem Chat) kein Problem.

---

*Erstellt mit Forbach & Partners AI-Toolkit · Mai 2026*
