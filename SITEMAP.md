# 🗺️ Dynamisches Sitemap-System

Das Repository verwendet jetzt ein **automatisches Sitemap-System**, das sich selbst aktualisiert, wenn neue Blog-Posts in Contentful hinzugefügt werden.

## 📍 Wie es funktioniert

### Automatische Sitemap-Generierung
- **Datei**: `app/sitemap.js`
- **URL**: `https://www.brandkernel.io/sitemap.xml`
- **Update**: Automatisch bei jedem Build/Deployment

### Was wird automatisch inkludiert:

✅ **Statische Seiten:**
- Homepage (`/`)
- About (`/about`) 
- Blog-Übersicht (`/blog`)
- Manifesto (`/manifesto`)
- Impressum (`/impressum`)

✅ **Dynamische Blog-Posts:**
- Alle veröffentlichten Posts aus Contentful
- Automatisch unter `/posts/[slug]`
- Mit korrektem Datum und Priorität

## 🔄 Aktualisierung

### Automatisch:
- Neue Blog-Posts werden automatisch hinzugefügt
- Bei jedem Vercel-Deployment wird die Sitemap neu generiert
- Kein manueller Eingriff nötig

### Cache:
- 1 Stunde Cache für bessere Performance
- Bei Fehlern: 5 Minuten Cache mit Fallback

## 🛠️ Technische Details

### Dateien:
- `app/sitemap.js` - Next.js 14 Sitemap-Generator
- `app/api/sitemap/route.js` - Alternative API-Route
- `lib/contentful.js` - Contentful-Integration

### Prioritäten:
- Homepage: 1.0 (höchste)
- Blog-Übersicht: 0.9
- About: 0.8
- Manifesto: 0.7
- Blog-Posts: 0.6
- Impressum: 0.3 (niedrigste)

## 📊 Google Search Console

1. **Sitemap URL einreichen**: `https://www.brandkernel.io/sitemap.xml`
2. **Automatische Updates**: Die Sitemap aktualisiert sich selbst
3. **Überwachung**: Prüfen Sie regelmäßig auf Crawling-Fehler

## 🚨 Troubleshooting

Falls die Sitemap nicht funktioniert:

1. **Contentful-Credentials prüfen**:
   ```bash
   # .env.local sollte enthalten:
   CONTENTFUL_SPACE_ID=your_space_id
   CONTENTFUL_ACCESS_TOKEN=your_token
   ```

2. **Fallback-System**: 
   - Bei Fehlern werden nur statische Seiten angezeigt
   - Keine komplette Störung der Sitemap

3. **Debug-Logs**:
   - Vercel-Logs zeigen Sitemap-Generierung an
   - Console-Ausgaben für Debugging verfügbar

## ⚡ Performance

- **Build-Zeit**: Minimaler Overhead
- **Cache**: Intelligentes Caching-System
- **Fehlerbehandlung**: Graceful Degradation

---

**Ergebnis**: Ihre Website hat jetzt eine vollautomatische, Google-optimierte Sitemap! 🎉
