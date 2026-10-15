---
description: "Pilihan versi SA-MP dan dukungan open.mp di PawnStudio, termasuk fungsi khusus 0.3.DL."
---

# Versi SA-MP & open.mp

Pilihan versi SA-MP ada di **Pengaturan**.

## Versi yang tersedia

| Versi | Catatan |
| --- | --- |
| 0.3.DL-R1 | Bawaan. Mendukung fungsi khusus 0.3.DL |
| 0.3.7-R2-1 | Versi 0.3.7 |
| 0.3.7-R3 | Versi 0.3.7 |

## Fungsi khusus 0.3.DL

Di versi 0.3.7, fungsi berikut dianggap tidak ada, jadi kalau dipakai langsung error saat compile (bukan baru bermasalah di server):

- `AddCharModel`
- `AddSimpleModel`
- `AddSimpleModelTimed`
- `FindModelFileNameFromCRC`
- `FindTextureFileNameFromCRC`
- `RedirectDownload`

Kalau server lo pakai 0.3.7 dan muncul error `undefined symbol` untuk fungsi di atas, itu penyebabnya. Samakan versi di Pengaturan dengan versi server.

## open.mp

Kode yang memakai `open.mp` atau `omp_*` di include akan dicompile dengan include open.mp bawaan aplikasi. Kode SA-MP klasik tidak berubah. Pilihan versi SA-MP tidak berlaku di mode open.mp.
