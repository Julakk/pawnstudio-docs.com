# Troubleshooting

Salin teks error dari panel Output, lalu cocokkan dengan tabel di bawah.

## Error compile umum

| Pesan | Arti | Solusi |
| --- | --- | --- |
| `fatal error 100: cannot read from file` | File include nggak ketemu | Cek nama file `.inc` dan pastikan ada di folder include |
| `error 017: undefined symbol` | Fungsi atau variabel belum didefinisikan | Cek ejaan, urutan deklarasi, dan include yang dibutuhkan |
| `error 021: symbol already defined` | Nama didefinisikan dua kali | Hapus definisi ganda, atau cek include yang kebaca dua kali |
| `error 001: expected token` | Ada tanda baca yang kurang | Cek titik koma, kurung, atau kurung kurawal di baris itu dan sebelumnya |
| `error 035: argument type mismatch` | Tipe argumen salah | Cocokkan argumen dengan deklarasi fungsi |
| `error 029: invalid expression` | Ekspresi nggak valid | Cek operator dan tanda kurung |
| `error 013: no entry point` | Nggak ada fungsi entry point | Pastikan ada `main()` atau callback `public` yang dibutuhkan |
| `warning 204: symbol is assigned a value that is never used` | Variabel nggak dipakai | Aman diabaikan, atau hapus variabelnya |
| `warning 213: tag mismatch` | Tag tipe nggak cocok | Cek tipe nilai yang dikirim ke fungsi |

## error 021 di a_samp.inc

Kalau error 021 muncul di `a_samp.inc` untuk fungsi seperti `print` atau `printf`, biasanya ada include lain yang juga mendefinisikan fungsi itu, atau ada salinan `a_samp.inc` ganda di folder yang kebaca. Hapus salinan ganda dan pastikan hanya satu include yang mendefinisikannya.

## APK tidak bisa di-install

Aktifkan izin install dari sumber tidak dikenal, dan pastikan file APK tidak rusak saat didownload. PawnStudio butuh perangkat Android arm64.

## Masih bermasalah?

Tanya di [Discord](https://discord.gg/82hxdZy6Gf) atau buka [Issue](https://github.com/Julakk/Pawn-Studio/issues) di GitHub, dan sertakan teks error dari panel Output.
