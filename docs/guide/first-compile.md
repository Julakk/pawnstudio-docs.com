---
description: "Langkah compile gamemode SA-MP pertama di PawnStudio sampai jadi file .amx."
---

# Compile Gamemode Pertama

Langkah dari buka proyek sampai dapat file `.amx`.

## Persiapan

- Folder proyek berisi gamemode (`.pwn`) dan semua include yang dipakai (`.inc`).
- Include standar seperti `a_samp.inc` harus ada di folder include.

## Langkah

1. Buka folder proyek di PawnStudio.
2. Pilih versi SA-MP yang sesuai dengan server lo (lihat [Versi SA-MP & open.mp](/guide/samp-versions)).
3. Buka file gamemode utama, misalnya `nama.pwn`.
4. Tekan **Compile**.
5. Baca panel **Output**. Kalau ada error, perbaiki lalu compile ulang.
6. Kalau berhasil, file `nama.amx` muncul di folder yang sama.

## Pasang ke server

Upload `nama.amx` ke folder `gamemodes/` di server, lalu set di `server.cfg` tanpa ekstensi:

```
gamemode0 nama 1
```

## Error vs warning

- **Error** menghentikan compile, harus diperbaiki.
- **Warning** nggak menghentikan compile, tapi sebaiknya tetap dicek.

Kalau ada error, lihat [Troubleshooting](/guide/troubleshooting).
