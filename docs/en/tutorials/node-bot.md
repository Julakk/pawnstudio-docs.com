---
description: "Tutorial: build a Node.js Discord bot right from your phone using PawnStudio."
---

# Build a Node.js Bot from Your Phone

Build a simple Discord bot right inside PawnStudio, no Termux needed.

## Steps

1. Create a new project folder, for example `first-bot`.
2. Tap the **npm** button in the Explorer header, then run `init`.
3. Run `install discord.js`. The package goes into `node_modules` in your project folder.
4. Create an `index.js` file with the content below.
5. Tap **Run**. The button turns into **Stop** while the script is running.

## Example bot

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
  console.log('Logged in as ' + client.user.tag)
})

client.on('messageCreate', (msg) => {
  if (msg.content === '!ping') msg.reply('Pong!')
})

client.login('YOUR_BOT_TOKEN')
```

Replace `YOUR_BOT_TOKEN` with the token from the Discord Developer Portal. Also enable **Message Content Intent** in that portal.

## Keep the bot running in the background

The bot doesn't die when the app is closed or the screen turns off. The **Node.js running** notification appears with a Stop button. If your bot keeps dying, open **Settings → Phone Check** and make sure notification permission is on and battery saving is off for PawnStudio.

::: warning
Never commit your bot token to GitHub. If the token leaks, reset it in the Developer Portal.
:::
