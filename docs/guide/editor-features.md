# Fitur Editor

## Cari & Ganti di semua file

Cari dan ganti teks di seluruh proyek sekaligus. Opsi yang tersedia:

- Huruf besar/kecil
- Kata utuh
- Regex
- Filter ekstensi (misalnya hanya `.pwn`)

Contoh regex untuk mencari semua deklarasi `public`:

```
public\s+(\w+)\(
```

## Node.js & npm

Jalankan script `.js` dan pasang paket JavaScript murni langsung di HP. Cocok buat bikin bot.

```js
console.log('Halo dari PawnStudio!')
```

Paket yang butuh build native (node-gyp) kemungkinan nggak bisa dipasang. Pilih paket JavaScript murni.

## Preview HTML/CSS/JS

Lihat hasil HTML, CSS, dan JavaScript langsung lewat live preview. Ada mode split supaya kode dan hasilnya kelihatan berdampingan.

## Emmet & Format Kode

Di file HTML/CSS, ketik singkatan Emmet lalu expand. Contoh:

```
ul>li*3
```

Tombol **Fmt** merapikan indentasi dan format kode.

## Pengaturan

- Tema editor
- Ukuran font
- Flag compiler tambahan

Contoh flag compiler yang umum dipakai:

| Flag | Fungsi |
| --- | --- |
| `-d3` | Sertakan informasi debug |
| `-;+` | Wajibkan titik koma di akhir statement |
| `-(+` | Wajibkan tanda kurung di pemanggilan fungsi |
