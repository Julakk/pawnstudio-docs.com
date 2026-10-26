---
description: "Steps to compile your first SA-MP gamemode in PawnStudio into an .amx file."
---

# Compile Your First Gamemode

Steps from opening a project to getting an `.amx` file.

## Preparation

- The project folder contains the gamemode (`.pwn`) and all the includes it uses (`.inc`).
- Standard includes such as `a_samp.inc` must be in the include folder.

## Steps

1. Open the project folder in PawnStudio.
2. Choose the SA-MP version that matches your server (see [SA-MP & open.mp Versions](/en/guide/samp-versions)).
3. Open the main gamemode file, for example `name.pwn`.
4. Tap **Compile**.
5. Read the **Output** panel. If there are errors, fix them and compile again.
6. If it succeeds, `name.amx` appears in the same folder.

## Install on the server

Upload `name.amx` to the server's `gamemodes/` folder, then set it in `server.cfg` without the extension:

```
gamemode0 name 1
```

## Errors vs warnings

- An **error** stops compiling and must be fixed.
- A **warning** doesn't stop compiling, but you should still check it.

If you get an error, see [Troubleshooting](/en/guide/troubleshooting).
