# Troubleshooting

## Cannot read from file / include tidak ketemu

File `.inc` yang di-`#include` tidak ada di folder include. Cek nama file dan lokasinya.

## error 021: symbol already defined

Fungsi atau variabel didefinisikan dua kali. Biasanya karena include yang sama kebaca dua kali atau ada fungsi dengan nama yang sama. Cari definisi ganda dan hapus salah satunya.

## APK tidak bisa di-install

Aktifkan izin install dari sumber tidak dikenal, dan pastikan file APK tidak rusak saat didownload.

## Masih bermasalah?

Buat issue di [repo PawnStudio](https://github.com/Julakk/PawnStudio/issues) lengkap dengan pesan error-nya.
