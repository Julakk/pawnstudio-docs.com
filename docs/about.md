---
description: "Tentang PawnStudio, cara melaporkan bug, usul fitur, aturan komunitas, kredit pihak ketiga, dan media kit logo."
---

# Tentang & Kontribusi

## Tentang PawnStudio

PawnStudio adalah code editor untuk Android yang fokus ke scripting PAWN, dengan dukungan Node.js dan HTML/CSS/JavaScript. Dikembangkan oleh [Julakk](https://github.com/Julakk) dan masih dalam pengembangan aktif.

## Lapor Bug

Tombol di bawah membuka form Issue di GitHub yang sudah berisi template. Isi sebisanya lalu kirim, biar penyebabnya cepat ketemu.

<IssueButtons kind="bug" />

Info yang paling membantu:

1. Teks error dari panel **Output** (pakai tombol **Salin**).
2. Versi PawnStudio yang dipakai.
3. Laporan dari **Pengaturan → Cek HP** (tombol **Salin laporan**).
4. Langkah yang bikin error muncul.

Bisa juga tanya langsung di [Discord](https://discord.gg/82hxdZy6Gf).

## Usul Fitur

Punya ide? Ceritakan masalah yang mau dipecahkan, bukan cuma fiturnya. Itu bikin gampang menilai fitur mana yang paling berguna.

<IssueButtons kind="fitur" />

## Cara Membantu Tanpa Kode

PawnStudio gratis dipakai tapi bukan open source, jadi nggak menerima Pull Request. Tapi ada banyak cara lain buat bantu:

- **Kirim ekstensi.** Bikin snippet, tema, atau paket include, lalu kirim lewat [Katalog Ekstensi](/reference/extensions).
- **Tes di HP dan versi Android yang berbeda.** Kirim laporan **Cek HP** kalau ada yang nggak jalan.
- **Kasih tahu kalau dokumentasi salah.** Typo atau langkah yang membingungkan? Kabari lewat Issue atau Discord.
- **Bantu jawab pertanyaan** pengguna lain di Discord.
- **Bagikan link** [halaman Releases](https://github.com/Julakk/Pawn-Studio/releases) ke teman lo.

## Aturan Komunitas

Berlaku di Discord dan di Issue GitHub.

1. Sopan dan hormati sesama pengguna.
2. Satu masalah, satu Issue. Cek Issue yang sudah ada sebelum bikin baru.
3. Sertakan teks error dan versi PawnStudio, biar masalahnya bisa dilacak.
4. Jangan posting token, password, atau data pribadi (termasuk token bot).
5. Jangan bagikan atau minta file APK di luar halaman Releases resmi.
6. Cek [FAQ](/faq) dan [Troubleshooting](/guide/troubleshooting) dulu sebelum bertanya.

## Dukung Pengembangan

- Dukung lewat [Saweria](https://saweria.co/bangjulak12).
- Bagikan link halaman Releases, bukan file APK-nya.

## Kredit dan Terima Kasih

PawnStudio dibangun di atas karya banyak orang. Komponen utama yang dipakai:

| Komponen | Dipakai untuk | Lisensi |
| --- | --- | --- |
| [Monaco Editor](https://github.com/microsoft/monaco-editor) | Editor kode | MIT |
| [Emmet](https://github.com/emmetio/emmet) | Singkatan HTML dan CSS | MIT |
| [Capacitor](https://github.com/ionic-team/capacitor) | Kerangka aplikasi Android | MIT |
| [nodejs-mobile](https://github.com/nodejs-mobile/nodejs-mobile) | Menjalankan Node.js di HP | MIT |
| [npm](https://github.com/npm/cli) | Memasang paket JavaScript | Artistic License 2.0 |
| [JGit](https://github.com/eclipse-jgit/jgit) | Git di dalam aplikasi | Eclipse Distribution License v1.0 |
| [JSZip](https://github.com/Stuk/jszip) | Menangani file ZIP | MIT |
| [Pawn compiler](https://github.com/pawn-lang/compiler) | Compile script PAWN | Lisensi Pawn |
| [omp-stdlib](https://github.com/openmultiplayer/omp-stdlib) | Include open.mp | MPL-2.0 |
| [samp-stdlib](https://github.com/pawn-lang/samp-stdlib) | Include SA-MP standar | Lihat repo asal |

`a_samp.inc` yang dibundel sudah dimodifikasi: native khusus 0.3.DL dibungkus kondisi `SAMP_TARGET_037`. Daftar lengkap ada di [THIRD_PARTY_NOTICES](https://github.com/Julakk/Pawn-Studio/blob/main/THIRD_PARTY_NOTICES.md).

Terima kasih juga buat semua yang sudah mencoba, melaporkan bug, dan mendukung PawnStudio.

## Media Kit

Logo dan warna resmi PawnStudio, buat artikel, video, atau thumbnail.

<MediaKit />

Aturan pemakaian logo:

- Boleh dipakai untuk menyebut atau menautkan PawnStudio (artikel, video, ulasan, dan semacamnya).
- Jangan ubah warna, bentuk, atau proporsinya.
- Jangan dipakai dengan cara yang seolah-olah karya lo resmi dari PawnStudio.
- Jangan dipakai untuk produk atau proyek lain.

## Lisensi

PawnStudio gratis dipakai tapi bukan open source. Kode yang lo tulis dengan PawnStudio tetap milik lo. Selengkapnya di [LICENSE](https://github.com/Julakk/Pawn-Studio/blob/main/LICENSE).
