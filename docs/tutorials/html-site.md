---
description: "Tutorial bikin website HTML, CSS, dan JavaScript dari HP dengan live preview PawnStudio."
---

# Bikin Website HTML dari HP

Bikin halaman web sederhana dan lihat hasilnya langsung.

## Langkah

1. Buat folder proyek dengan tiga file: `index.html`, `style.css`, dan `script.js`.
2. Isi `index.html` seperti contoh di bawah.
3. Buka `index.html`, lalu ketuk tombol **Preview** (ikon mata) atau tombol play.
4. Pilih mode **Split** supaya editor di atas dan preview di bawah.

## Contoh

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Halaman Pertama</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Halo dari HP!</h1>
  <ul>
    <li>Satu</li>
    <li>Dua</li>
    <li>Tiga</li>
  </ul>
  <script src="script.js"></script>
</body>
</html>
```

`style.css` dan `script.js` yang di-link otomatis ikut digabung ke preview, dan isi editor yang belum disimpan juga ikut terpakai.

## Live preview

Preview berubah otomatis sekitar 0,7 detik setelah lo berhenti mengetik, jadi nggak perlu simpan dulu.

## Tips cepat

- Ketik `ul>li*3` lalu expand dengan Emmet buat bikin daftar otomatis.
- Tekan **Fmt** buat merapikan kode.
