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

Ya, sejak v1.15.1. File `.py` bisa langsung dijalankan di app lewat tombol Run di top bar. Ada dua mode:

- **Pyodide (Python 3.12)**: script biasa, jalan offline. Hanya modul bawaan Python (stdlib), dan `input()` menerima baris kosong.
- **Python native (3.11)**, sejak v1.17.0: script yang `import discord`, `aiohttp`, atau `requests` otomatis jalan native, jadi bot Discord (`discord.py`) bisa dijalankan dan tetap hidup di latar belakang. Tulis `# ps:native` atau `# ps:web` di file untuk memilih mode sendiri. `input()` belum didukung di mode ini.

Sejak v1.18.0 ada `pip` di dalam app: lihat **Bagaimana cara pasang paket Python (pip)?** di bawah.

### Bagaimana cara pasang paket Python (pip)?

Tekan tombol npm di Explorer, lalu ketik `pip install nama_paket` (contoh: `pip install rich`). Perintah lain: `pip uninstall nama_paket`, `pip list`, dan `pip install -r requirements.txt`. Paket Python murni dari PyPI dan paket native yang punya wheel Android arm64 (Python 3.11) bisa dipasang. Paket yang butuh kompilasi belum bisa. Script yang meng-import paket hasil pip otomatis jalan lewat Python native.

### Boleh bagikan APK ke teman?

Jangan bagikan file APK-nya. Bagikan link halaman Download resmi.

### Gue nemu bug, lapor ke mana?

Lihat [Tentang & Kontribusi](/about).
