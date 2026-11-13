## [1.18.0] - 2026-11-13

### Ditambahkan

- pip di dalam app. Tombol npm di Explorer sekarang juga menerima `pip install nama_paket`, `pip uninstall`, `pip list`, dan `pip install -r requirements.txt`. Paket dipasang ke folder privat app dan langsung bisa di-import.
- Yang bisa dipasang: paket Python murni dari PyPI dan paket native yang punya wheel Android arm64 (Python 3.11) di repo Chaquopy. Paket yang butuh kompilasi tidak didukung.
- Script yang meng-import paket hasil pip otomatis jalan lewat Python native.

### Diubah

- Versi aplikasi naik ke 1.18.0 (versionCode 58). `packaging` ikut dibundel buat resolver pip.

## [1.17.0] - 2026-11-13

### Ditambahkan

- Python native di dalam APK (Chaquopy, Python 3.11). Script yang `import discord`, `aiohttp`, atau `requests` sekarang jalan native, jadi bot Discord (`discord.py`) bisa dijalankan langsung dari app. Kode Python lain tetap jalan lewat Pyodide seperti biasa.
- `discord.py`, `aiohttp`, `requests`, dan `certifi` ikut dibundel di APK.
- Script Python native jalan di proses terpisah (`:py`) lewat foreground service, dengan notifikasi dan tombol Stop. Stop mematikan prosesnya, jadi bot yang nge-block tetap berhenti.
- Output live di panel Output, log tersimpan, dan UI tersambung lagi ke proses yang masih jalan setelah app dibuka ulang.
- Paksa mode manual dengan komentar `# ps:native` atau `# ps:web` di file Python.
- Contoh bot Discord di `docs/examples/discord_bot.py`.

### Diubah

- Versi aplikasi naik ke 1.17.0 (versionCode 57). Ukuran APK bertambah karena runtime Python ikut dibundel.
- Workflow build memasang Python 3.11 (dipakai Chaquopy waktu build).
