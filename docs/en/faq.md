---
description: "Frequently asked questions about PawnStudio, from licensing and supported phones to Node.js bots."
---

# FAQ

### Is PawnStudio free?

Yes, it's free to use. It's not open source, though: the APK may not be redistributed, sold, or modified. The code you write stays yours.

### Which phones are supported?

Android with arm64 architecture. Open **Settings → Phone Check** to test compatibility, including whether the compiler and Node.js can run on your phone.

### Do I need Termux?

No. The PAWN compiler, Node.js, and npm are all built into the app.

### Can I use it without internet?

Yes. The editor and compiler work offline. Internet is only needed for things like Git push/pull and installing npm packages.

### What's the difference between SA-MP and open.mp in PawnStudio?

Both are supported. Code that uses open.mp includes is compiled with the bundled open.mp includes, while classic SA-MP code works as usual. See [SA-MP & open.mp Versions](/en/guide/samp-versions).

### Why does AddSimpleModel fail to compile?

That function is specific to 0.3.DL. If you selected version 0.3.7, the function is treated as nonexistent. Switch the version in Settings to 0.3.DL-R1.

### Do I need to install sscanf, YSI, or zcmd?

No. Since v1.15.0, several popular includes are bundled in the APK. If your project has its own copy, the project's version is used.

### My Node.js bot stops when I close the app. Why?

The bot should keep running through the **Node.js running** notification. Check **Settings → Phone Check**, make sure notification permission is on and battery saving is off for PawnStudio.

### Is Python supported?

Yes, since v1.15.1. `.py` files can run directly in the app with the Run button in the top bar (Python 3.12 via Pyodide, works offline). Only Python's built-in modules (stdlib) are available. Third-party libraries such as numpy can't be used yet, and `input()` accepts empty lines.

### Can I share the APK with friends?

Please don't share the APK file. Share the link to the official Releases page instead.

### I found a bug. Where do I report it?

See [About & Contributing](/en/about).
