---
description: "Cara memakai Git langsung dari HP di PawnStudio, termasuk commit, push, dan pull."
---

# Pakai Git dari HP

PawnStudio punya Git bawaan, jadi lo nggak perlu Termux.

## Yang bisa dilakukan

- Lihat status file, cabang, dan riwayat commit
- Atur akun dan inisialisasi repo
- Commit file yang dipilih
- Atur remote, lalu push dan pull dengan token GitHub

## Persiapan

GitHub nggak menerima password biasa untuk push lewat HTTPS. Buat **Personal Access Token** di GitHub (Settings → Developer settings → Personal access tokens), lalu pakai token itu di PawnStudio.

## Alur harian

1. **Pull** dulu supaya proyek sinkron.
2. Edit kode seperti biasa.
3. Cek status, lalu **centang file** yang mau di-commit. Hanya file yang dicentang yang masuk commit.
4. Commit dengan pesan yang jelas.
5. **Push** ke GitHub.

## Tips

- Push dan Pull punya batas waktu 60 detik. Kalau koneksi macet, prosesnya berhenti sendiri dan app nggak menggantung. Coba lagi saat sinyal lebih baik.
- Jangan commit token atau password ke repo.
