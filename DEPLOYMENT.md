# GitHub Pages Deployment Guide

## Konfigurasi yang Telah Dilakukan / Configuration Done

### 1. Vite Configuration
File `vite.config.ts` telah dikonfigurasi untuk GitHub Pages:
- `base: "/"` - Aplikasi akan berjalan di root directory (/)
- `host: "0.0.0.0"` - Diperlukan untuk Replit environment
- `port: 5000` - Port standar untuk Replit

### 2. GitHub Actions Workflow
File `.github/workflows/deploy.yml` telah dibuat untuk deployment otomatis:
- Akan otomatis build dan deploy setiap push ke branch `main`
- Build folder: `dist`
- Menggunakan GitHub Pages official actions

## Cara Deploy ke GitHub Pages

### Langkah 1: Push ke GitHub
```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

### Langkah 2: Aktifkan GitHub Pages
1. Buka repository di GitHub
2. Pergi ke **Settings** → **Pages**
3. Di bagian **Source**, pilih **GitHub Actions**
4. Workflow akan otomatis berjalan

### Langkah 3: Akses Website
Setelah deployment selesai, website akan tersedia di:
- User/Organization page: `https://username.github.io/`
- Project page: `https://username.github.io/repository-name/`

## Catatan Penting / Important Notes

### Jika Menggunakan Project Page (bukan User Page)
Jika repository Anda adalah project page (contoh: `username.github.io/my-project`), ubah `base` di `vite.config.ts`:

```typescript
base: "/my-project/",  // Ganti dengan nama repository Anda
```

### Jika Menggunakan User/Organization Page
Jika repository Anda bernama `username.github.io`, konfigurasi saat ini sudah benar dengan `base: "/"`.

## Build Manual (Opsional)

Untuk build secara manual:
```bash
npm run build
```

File hasil build akan ada di folder `dist/`.

## Preview Build

Untuk melihat preview hasil build:
```bash
npm run preview
```

---

## Configuration Summary

**Vite Config:**
- Base path: `/` (root directory)
- Development server: `http://0.0.0.0:5000`
- Build output: `dist/`

**GitHub Actions:**
- Trigger: Push to `main` branch
- Build command: `npm run build`
- Deploy target: GitHub Pages
