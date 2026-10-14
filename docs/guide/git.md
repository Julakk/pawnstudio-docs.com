# Pakai Git dari HP

PawnStudio punya fitur Git bawaan: status, commit, push, dan pull, semua langsung dari HP.

## Persiapan

- Folder proyek sudah berupa repo Git dan remote-nya sudah di-set.
- Akun GitHub nggak menerima password biasa untuk push lewat HTTPS. Pakai **Personal Access Token** (buat di GitHub: Settings → Developer settings → Personal access tokens).

## Alur harian

1. **Pull** dulu supaya proyek lo sinkron dengan versi terbaru.
2. Edit kode seperti biasa.
3. Cek **Status** buat lihat file apa saja yang berubah.
4. **Commit** dengan pesan yang jelas, misalnya `fix: sistem login`.
5. **Push** ke GitHub.

## Tips

- Commit kecil dan sering lebih aman daripada satu commit raksasa.
- Kalau pull bikin konflik, buka file yang konflik, pilih versi yang benar, hapus penanda konflik, lalu commit.
- Jangan commit token atau password ke repo.
