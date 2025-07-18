# BK Blog

Ein moderner Blog erstellt mit Next.js, React, Contentful und Vercel - basierend auf der offiziellen [Vercel Contentful Integration](https://vercel.com/docs/integrations/cms/contentful).

## 🚀 Features

- ⚡ **Next.js 14** mit App Router
- 🎨 **Tailwind CSS** für Styling
- 📝 **Contentful** als Headless CMS (REST + GraphQL APIs)
- 🖼️ **Optimierte Bilder** mit Next.js Image
- 📱 **Responsive Design**
- 🔄 **Automatische Revalidation** via Webhooks
- 👀 **Preview Mode** für Draft-Inhalte
- 🎯 **SEO-optimiert**
- 🔧 **Content Model Setup-Script**

## 📋 Voraussetzungen

- Node.js 18.17 oder höher
- Contentful Account
- Vercel Account (optional für Deployment)
- Git

## 🛠️ Setup-Anleitung

### **Option 1: Mit Vercel Template (Empfohlen)**

1. **Deploy mit einem Klick:**
   - Nutze das [Vercel Contentful Template](https://vercel.com/templates/next.js/nextjs-blog-preview-mode)
   - Vercel Integration wird automatisch installiert

2. **Oder manuell klonen:**
   ```bash
   pnpm create-next-app --example cms-contentful my-blog
   # oder
   git clone https://github.com/Airmax1986/bk.git
   cd bk
   npm install
   ```

### **Option 2: Manueller Setup**

#### **1. Contentful Space einrichten**

1. **Account erstellen:** [contentful.com](https://contentful.com)
2. **Neuen Space erstellen** (z.B. "BK Blog")
3. **Space ID notieren:** Settings → API Keys → Copy Space ID

#### **2. API Tokens generieren**

**Content Delivery API Token:**
- Settings → API Keys → Add API key
- Für Production-Content

**Content Management API Token:**
- Settings → API Keys → Content management tokens  
- Generate personal token
- ⚠️ **Nicht teilen** - hat Read/Write-Zugriff

#### **3. Environment Variables einrichten**

```bash
# .env.local erstellen
cp .env.local.example .env.local
```

**Erforderliche Variables:**
```env
CONTENTFUL_SPACE_ID=your_space_id_here
CONTENTFUL_ACCESS_TOKEN=your_delivery_token_here
CONTENTFUL_MANAGEMENT_TOKEN=your_management_token_here
```

**Optionale Variables:**
```env
CONTENTFUL_PREVIEW_ACCESS_TOKEN=your_preview_token
CONTENTFUL_PREVIEW_SECRET=your_preview_secret
CONTENTFUL_REVALIDATE_SECRET=your_revalidate_secret
```

#### **4. Content Model erstellen**

**Automatisch mit Setup-Script:**
```bash
# Environment Variables setzen und Setup ausführen
npx cross-env CONTENTFUL_SPACE_ID=YOUR_SPACE_ID CONTENTFUL_MANAGEMENT_TOKEN=XXX npm run setup
```

**Oder manuell in Contentful:**

**Author Content Type:**
- Name (Short text, required)
- Picture (Media)
- Bio (Long text)

**blogPost Content Type:**
- Slug (Short text, required, unique)
- Title (Short text, required) 
- Summary (Long text)
- Header Image (Media)
- Content (Long text)
- Author (Reference to Author)
- Date (Date & time)
- heroImage (Media)
- description (Short text)
- tags (Short text, list)

#### **5. Content hinzufügen**

1. Contentful → Content → Add entry
2. Erstelle Author und blogPost Entries
3. **Publish** für Live-Content

#### **6. Lokal starten**

```bash
npm install
npm run dev
# Öffne http://localhost:3000
```

## 🚀 Vercel Deployment

### **1. Mit Vercel CLI**
```bash
npm i -g vercel
vercel
```

### **2. Mit Git Integration**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_REPO_URL
git push -u origin main
```

Dann in Vercel:
1. **Import Project** von GitHub
2. **Environment Variables hinzufügen:**
   - `CONTENTFUL_SPACE_ID`
   - `CONTENTFUL_ACCESS_TOKEN`
3. **Deploy klicken**

### **3. Webhooks konfigurieren**

**Automatische Builds (Deploy Hook):**
1. Vercel Dashboard → Settings → Git → Deploy Hooks
2. Neuen Hook für Branch "main" erstellen  
3. URL kopieren

**In Contentful:**
1. Settings → Webhooks → Templates → Vercel
2. Deploy Hook URL einfügen

**Content Revalidation:**
1. Contentful → Settings → Webhooks → Add Webhook
2. Name: "Revalidate"  
3. URL: `https://your-domain.vercel.app/api/revalidate`
4. Headers: `Authorization: Bearer your_revalidate_secret`

## 🔧 API-Optionen

### **REST API (Standard)**
```javascript
import { getAllPosts, getPost } from '../lib/contentful'
```

### **GraphQL API (Empfohlen von Vercel)**
```javascript  
import { getAllPostsGraphQL, getPostGraphQL } from '../lib/contentful-graphql'
```

## 📚 Verwendete Technologien

- **Framework:** Next.js 14 mit App Router
- **Styling:** Tailwind CSS + Typography Plugin
- **CMS:** Contentful (REST + GraphQL APIs)
- **Hosting:** Vercel
- **Language:** JavaScript/React

## 🔍 Debug & Testing

**Environment Variables prüfen:**
```bash
# Nur in Development
curl http://localhost:3000/api/debug/env
```

**Contentful Connection testen:**
```bash
# Logs in der Konsole beobachten beim Start
npm run dev
```

## 📖 Nützliche Links

- [Vercel Contentful Integration](https://vercel.com/docs/integrations/cms/contentful)
- [Contentful GraphQL API](https://www.contentful.com/developers/docs/references/graphql/)
- [Next.js App Router](https://nextjs.org/docs/app)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 🐛 Troubleshooting

**Build Errors:**
- Überprüfe Environment Variables in Vercel
- Stelle sicher, dass Content in Contentful published ist
- Validiere Content Model Structure

**API Errors:**
- Check Contentful API Keys in Dashboard
- Validate Space ID
- Review Network tab in Browser DevTools

**Images laden nicht:**
- Kontrolliere `next.config.mjs` Image-Domains
- Vercel Domain in Contentful Media settings

## 📄 Lizenz

MIT License

---

**Erstellt nach der offiziellen Vercel Contentful Integration** 🚀
