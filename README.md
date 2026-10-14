# pawnstudio-docs

Website dan dokumentasi resmi untuk [PawnStudio](https://github.com/Julakk/Pawn-Studio).

Dibangun dengan [VitePress](https://vitepress.dev). Repo ini dipisah dari repo aplikasi supaya website punya siklus rilis sendiri.

## Menjalankan di lokal

Butuh Node.js 18 atau lebih baru.

```bash
npm install
npm run dev       # server development
npm run build     # build ke docs/.vitepress/dist
npm run preview   # lihat hasil build
```

## Struktur

```
docs/
├── .vitepress/config.mts   # navigasi, sidebar, tema
├── index.md                # landing page
├── guide/                  # panduan instalasi dan penggunaan
├── reference/              # referensi file dan compiler
└── changelog.md            # ringkasan rilis
```

## Deploy

Workflow `.github/workflows/deploy.yml` mem-build dan men-deploy ke GitHub Pages setiap push ke `main`. Aktifkan dulu di repo: Settings → Pages → Source: GitHub Actions.

Base path default adalah `/pawnstudio-docs.com/` (sesuai nama repo). Kalau pakai domain sendiri atau Cloudflare Pages, build dengan `VITEPRESS_BASE=/`:

```bash
VITEPRESS_BASE=/ npm run build
```

## Berkontribusi

Edit file Markdown di folder `docs/`. Tiap halaman punya tautan "Edit halaman ini di GitHub".

## Lisensi

Kode website ini dirilis di bawah MIT (lihat `LICENSE`).
