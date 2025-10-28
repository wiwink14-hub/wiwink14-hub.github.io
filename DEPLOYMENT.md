# GitHub Pages Deployment Guide

## ✅ Konfigurasi yang Telah Selesai / Configuration Completed

Template Anda sudah **100% siap** untuk di-deploy ke **https://wiwink14-hub.github.io/**

### 1. Vite Configuration ✓
File `vite.config.ts` telah dikonfigurasi untuk GitHub Pages:
- ✓ `base: "/"` - Website berjalan di root directory (/)
- ✓ `host: "0.0.0.0"` - Konfigurasi untuk Replit environment
- ✓ `port: 5000` - Port standar untuk Replit

### 2. GitHub Actions Workflow ✓
File `.github/workflows/deploy.yml` sudah dibuat:
- ✓ Auto-deploy setiap push ke branch `main`
- ✓ Build folder: `dist`
- ✓ Menggunakan GitHub Pages official actions

### 3. SPA Routing Support ✓
File pendukung untuk React Router di GitHub Pages:
- ✓ `.nojekyll` - Mencegah GitHub Pages memproses dengan Jekyll
- ✓ `404.html` - Menangani client-side routing
- ✓ `index.html` - Script redirect untuk handle deep links

---

## 🚀 Cara Deploy ke https://wiwink14-hub.github.io/

### Langkah 1: Pastikan Repository Bernama `wiwink14-hub.github.io`
Repository Anda di GitHub **HARUS** bernama **`wiwink14-hub.github.io`** (case-sensitive) agar website muncul di root domain.

### Langkah 2: Push ke GitHub
```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

### Langkah 3: Aktifkan GitHub Pages
1. Buka repository di GitHub: https://github.com/wiwink14-hub/wiwink14-hub.github.io
2. Klik **Settings** (tab pojok kanan atas)
3. Klik **Pages** di menu sebelah kiri
4. Di bagian **Source**, pilih **GitHub Actions**
5. Workflow akan otomatis berjalan dan deploy website Anda

### Langkah 4: Tunggu Deploy Selesai
- Buka tab **Actions** di repository Anda
- Lihat workflow "Deploy to GitHub Pages" sedang berjalan
- Tunggu hingga ada tanda centang hijau (✓)
- Biasanya membutuhkan waktu 2-5 menit

### Langkah 5: Akses Website Anda
Setelah deployment selesai, website Anda akan live di:
**https://wiwink14-hub.github.io/**

---

## 🔧 Testing & Build Manual

### Build Manual
Untuk build dan test secara manual:
```bash
npm run build
```

File hasil build akan ada di folder `dist/`.

### Preview Build Lokal
Untuk melihat preview hasil build:
```bash
npm run preview
```

### Build Test di Replit
Website sudah berjalan di Replit pada port 5000:
```bash
npm run dev
```

---

## 📋 Checklist Deployment

- [x] Vite config dengan `base: "/"`
- [x] GitHub Actions workflow dibuat
- [x] File `.nojekyll` ditambahkan
- [x] File `404.html` untuk SPA routing
- [x] Script redirect di `index.html`
- [ ] Repository bernama `wiwink14-hub.github.io`
- [ ] Push code ke GitHub
- [ ] Aktifkan GitHub Pages di Settings
- [ ] Website live di https://wiwink14-hub.github.io/

---

## ⚠️ Troubleshooting

### Website Tidak Muncul / 404 Error
1. Pastikan repository bernama **`wiwink14-hub.github.io`** (persis seperti ini)
2. Pastikan branch `main` adalah branch default
3. Periksa apakah GitHub Actions sudah diaktifkan di Settings → Pages
4. Lihat log di tab Actions untuk error messages

### Routing Tidak Bekerja
- File `.nojekyll` dan `404.html` sudah ditambahkan ✓
- Pastikan build ulang dengan `npm run build` setelah perubahan
- Clear cache browser (Ctrl+Shift+R atau Cmd+Shift+R)

### Build Gagal di GitHub Actions
- Periksa log di tab Actions
- Pastikan semua dependencies di `package.json` terinstall
- Test build lokal dengan `npm run build`

---

## 📊 Configuration Summary

**Website URL:** https://wiwink14-hub.github.io/

**Vite Config:**
- Base path: `/` (root directory)
- Development server: `http://0.0.0.0:5000`
- Build output: `dist/`

**GitHub Actions:**
- Trigger: Push to `main` branch
- Build command: `npm run build`
- Deploy target: GitHub Pages
- Node version: 20

**Files Added:**
- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `public/.nojekyll` - Disable Jekyll processing
- `public/404.html` - SPA routing support
- Updated `index.html` - Redirect script
