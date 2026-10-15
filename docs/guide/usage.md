---
description: "Cara memakai PawnStudio untuk mengedit dan compile script PAWN di Android."
---

# Cara Pakai

## Struktur folder yang disarankan

```
gamemodes/
  nama.pwn
  nama.amx
pawno/include/
  a_samp.inc
```

## Mengedit

Buka file `.pwn` atau `.inc` dari daftar file, edit, lalu simpan.

## Compile

Pilih file gamemode utama, lalu tekan Compile. Hasil compile (`.amx`) muncul di folder yang sama. Kalau ada error atau warning, lihat panel output.

## Include

Pastikan semua file `.inc` yang dipakai ada di folder include. Kalau tidak ketemu, compile akan gagal. Lihat [Troubleshooting](/guide/troubleshooting).
