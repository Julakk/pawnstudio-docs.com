---
description: "Pertanyaan yang sering diajukan tentang PawnStudio, mulai dari lisensi, HP yang didukung, sampai bot Node.js."
---

# FAQ

### Apakah PawnStudio gratis?

Ya, gratis dipakai. Tapi bukan open source: APK nggak boleh dibagikan ulang, dijual, atau diubah. Kode yang lo tulis tetap milik lo.

### HP apa yang didukung?

Android dengan arsitektur arm64. Buka **Pengaturan → Cek HP** buat ngecek kompatibilitas, termasuk apakah compiler dan Node.js bisa jalan di HP lo.

### Perlu Termux?

Nggak. Compiler PAWN, Node.js, dan npm sudah ada di dalam aplikasi.

### Bisa dipakai tanpa internet?

Bisa. Editor dan compiler jalan offline. Internet cuma dibutuhkan untuk hal seperti Git push/pull dan install paket npm.

### Apa bedanya SA-MP dan open.mp di PawnStudio?

Dua-duanya didukung. Kode yang memakai include open.mp dicompile dengan include open.mp bawaan, sedangkan kode SA-MP klasik tetap seperti biasa. Lihat [Versi SA-MP & open.mp](/guide/samp-versions).

### Kenapa fungsi AddSimpleModel error saat compile?

Fungsi itu khusus 0.3.DL. Kalau versi yang dipilih 0.3.7, fungsi itu dianggap tidak ada. Ganti versi di Pengaturan ke 0.3.DL-R1.

### Include sscanf, YSI, atau zcmd perlu dipasang?

Nggak. Sejak v1.15.0 beberapa include populer sudah bawaan APK. Kalau proyek lo punya versi sendiri, versi proyek yang dipakai.

### Bot Node.js gue mati waktu app ditutup. Kenapa?

Bot seharusnya tetap jalan lewat notifikasi **Node.js berjalan**. Cek **Pengaturan → Cek HP**, pastikan izin notifikasi aktif dan penghematan baterai dimatikan untuk PawnStudio.

### Apakah Python didukung?

Ya, sejak v1.15.1. File `.py` bisa langsung dijalankan di app lewat tombol Run di top bar (Python 3.12 lewat Pyodide, jalan offline). Yang tersedia hanya modul bawaan Python (stdlib). Library pihak ketiga seperti numpy belum bisa dipakai, dan `input()` menerima baris kosong.

### Boleh bagikan APK ke teman?

Jangan bagikan file APK-nya. Bagikan link halaman Releases resmi.

### Gue nemu bug, lapor ke mana?

Lihat [Tentang & Kontribusi](/about).
