---
description: "How to use PawnStudio to edit and compile PAWN scripts on Android."
---

# How to Use

## Recommended folder structure

```
gamemodes/
  name.pwn
  name.amx
pawno/include/
  a_samp.inc
```

## Editing

Open a `.pwn` or `.inc` file from the file list, edit it, then save.

## Compile

Select your main gamemode file, then tap Compile. The compiled result (`.amx`) appears in the same folder. If there are errors or warnings, check the output panel.

## Includes

Make sure every `.inc` file you use is in the include folder. If one isn't found, compiling will fail. See [Troubleshooting](/en/guide/troubleshooting).
