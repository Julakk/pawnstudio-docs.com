---
description: "PawnStudio editor features, from find and replace, Node.js and npm, and HTML preview to compiler settings."
---

# Editor Features

## Find & Replace across all files

Search and replace text across the whole project at once. Available options:

- Match case
- Whole word
- Regex
- Extension filter (for example only `.pwn`)

Example regex to find all `public` declarations:

```
public\s+(\w+)\(
```

## Node.js & npm

Run `.js` scripts and install pure JavaScript packages right on your phone. Great for building bots.

```js
console.log('Hello from PawnStudio!')
```

npm is built into the app. Tap the **npm** button in the Explorer header and type a command, for example `install discord.js`. Scripts keep running in the background through the **Node.js running** notification (with a Stop button), so your bot doesn't die when the app is closed. The runtime is Node.js 18.

## HTML/CSS/JS Preview

See the result of your HTML, CSS, and JavaScript through live preview. There's a split mode so your code and the result sit side by side.

## Emmet & Code Formatting

In HTML/CSS files, type an Emmet abbreviation, then expand it. Example:

```
ul>li*3
```

The **Fmt** button tidies up indentation and code formatting.

## Settings

- Editor theme
- Font size
- Extra compiler flags

Commonly used compiler flags:

| Flag | Purpose |
| --- | --- |
| `-d3` | Include debug information |
| `-;+` | Require semicolons at the end of statements |
| `-(+` | Require parentheses in function calls |
