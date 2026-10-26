---
description: "About PawnStudio, how to report bugs, suggest features, community rules, third-party credits, and the logo media kit."
---

# About & Contributing

## About PawnStudio

PawnStudio is a code editor for Android focused on PAWN scripting, with support for Node.js and HTML/CSS/JavaScript. It's developed by [Julakk](https://github.com/Julakk) and is under active development.

## Report a Bug

The button below opens a GitHub Issue form with a template already filled in. Fill in what you can and submit, so the cause can be found quickly.

<IssueButtons kind="bug" />

The most helpful information:

1. The error text from the **Output** panel (use the **Copy** button).
2. The PawnStudio version you're using.
3. The report from **Settings → Phone Check** (**Copy report** button).
4. The steps that trigger the error.

You can also ask directly on [Discord](https://discord.gg/82hxdZy6Gf).

## Suggest a Feature

Got an idea? Describe the problem you want to solve, not just the feature. That makes it easier to judge which features are most useful.

<IssueButtons kind="feature" />

## Ways to Help Without Code

PawnStudio is free to use but not open source, so Pull Requests aren't accepted. There are plenty of other ways to help:

- **Submit an extension.** Make a snippet, theme, or include pack, then send it via the [Extension Catalog](/en/reference/extensions).
- **Test on different phones and Android versions.** Send a **Phone Check** report if something doesn't work.
- **Tell us if the documentation is wrong.** A typo or a confusing step? Let us know via Issue or Discord.
- **Help answer questions** from other users on Discord.
- **Share the link** to the [Releases page](https://github.com/Julakk/Pawn-Studio/releases) with your friends.

## Community Rules

Applies on Discord and in GitHub Issues.

1. Be polite and respect other users.
2. One problem, one Issue. Check existing Issues before opening a new one.
3. Include the error text and PawnStudio version so the problem can be traced.
4. Don't post tokens, passwords, or personal data (including bot tokens).
5. Don't share or request APK files outside the official Releases page.
6. Check the [FAQ](/en/faq) and [Troubleshooting](/en/guide/troubleshooting) before asking.

## Support Development

- Support via [Saweria](https://saweria.co/bangjulak12).
- Share the Releases page link, not the APK file.

## Credits and Thanks

PawnStudio is built on the work of many people. The main components used:

| Component | Used for | License |
| --- | --- | --- |
| [Monaco Editor](https://github.com/microsoft/monaco-editor) | Code editor | MIT |
| [Emmet](https://github.com/emmetio/emmet) | HTML and CSS abbreviations | MIT |
| [Capacitor](https://github.com/ionic-team/capacitor) | Android app framework | MIT |
| [nodejs-mobile](https://github.com/nodejs-mobile/nodejs-mobile) | Running Node.js on phones | MIT |
| [npm](https://github.com/npm/cli) | Installing JavaScript packages | Artistic License 2.0 |
| [JGit](https://github.com/eclipse-jgit/jgit) | Git inside the app | Eclipse Distribution License v1.0 |
| [JSZip](https://github.com/Stuk/jszip) | Handling ZIP files | MIT |
| [Pawn compiler](https://github.com/pawn-lang/compiler) | Compiling PAWN scripts | Pawn License |
| [omp-stdlib](https://github.com/openmultiplayer/omp-stdlib) | open.mp includes | MPL-2.0 |
| [samp-stdlib](https://github.com/pawn-lang/samp-stdlib) | Standard SA-MP includes | See original repo |

The bundled `a_samp.inc` has been modified: natives specific to 0.3.DL are wrapped in a `SAMP_TARGET_037` condition. The full list is in [THIRD_PARTY_NOTICES](https://github.com/Julakk/Pawn-Studio/blob/main/THIRD_PARTY_NOTICES.md).

Thanks also to everyone who has tried, reported bugs, and supported PawnStudio.

## Media Kit

Official PawnStudio logos and colors, for articles, videos, or thumbnails.

<MediaKit />

Logo usage rules:

- You may use it to mention or link to PawnStudio (articles, videos, reviews, and the like).
- Don't change its colors, shape, or proportions.
- Don't use it in a way that suggests your work is officially from PawnStudio.
- Don't use it for other products or projects.

## License

PawnStudio is free to use but not open source. The code you write with PawnStudio stays yours. More details in the [LICENSE](https://github.com/Julakk/Pawn-Studio/blob/main/LICENSE).
