---
description: "Tutorial bikin bot Discord Node.js langsung dari HP memakai PawnStudio."
---

# Bikin Bot Node.js dari HP

Bikin bot Discord sederhana langsung di PawnStudio, tanpa Termux.

## Langkah

1. Buat folder proyek baru, misalnya `bot-pertama`.
2. Ketuk tombol **npm** di header Explorer, lalu jalankan `init`.
3. Jalankan `install discord.js`. Paket masuk ke `node_modules` di folder proyek.
4. Buat file `index.js` dengan isi di bawah.
5. Tekan **Run**. Tombolnya berubah jadi **Stop** saat script jalan.

## Contoh bot

```js
const { Client, GatewayIntentBits } = require('discord.js')

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
})

client.once('ready', () => {
  console.log('Login sebagai ' + client.user.tag)
})

client.on('messageCreate', (msg) => {
  if (msg.content === '!ping') msg.reply('Pong!')
})

client.login('TOKEN_BOT_LO')
```

Ganti `TOKEN_BOT_LO` dengan token dari Discord Developer Portal. Aktifkan juga **Message Content Intent** di portal itu.

## Bot tetap jalan di latar belakang

Bot nggak mati waktu app ditutup atau layar mati. Notifikasi **Node.js berjalan** muncul dengan tombol Stop. Kalau bot sering mati sendiri, buka **Pengaturan → Cek HP** dan pastikan izin notifikasi aktif dan penghematan baterai dimatikan untuk PawnStudio.

::: warning
Jangan commit token bot ke GitHub. Kalau token bocor, reset di Developer Portal.
:::
