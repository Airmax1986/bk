# 🚨 WICHTIG: Vercel Environment Variables Setup

## Schritt-für-Schritt Anleitung

### 1. Vercel Dashboard öffnen
- Gehe zu: https://vercel.com/dashboard
- Wähle dein "bk" Projekt

### 2. Environment Variables hinzufügen
- Klicke auf **Settings** 
- Wähle **Environment Variables**
- Füge folgende Variables hinzu:

```
CONTENTFUL_SPACE_ID = [dein_space_id_aus_contentful]
CONTENTFUL_ACCESS_TOKEN = [dein_access_token_aus_contentful]
```

### 3. Contentful Werte finden

**Space ID:**
- Contentful Dashboard → Settings → API Keys
- Kopiere die "Space ID"

**Access Token:**
- Gleiche Seite → "Content Delivery API - access token"  
- Kopiere den Token

### 4. Erneut deployen
Nach dem Setzen der Environment Variables:
- Vercel Dashboard → Deployments → "Redeploy"
- Oder neuen Commit pushen

### 5. Build sollte erfolgreich sein
Der Fehler "Expected parameter accessToken" sollte verschwinden.

---

**Aktueller Status:** 
❌ Environment Variables fehlen in Vercel
✅ Code ist bereit und funktioniert mit korrekten Credentials
