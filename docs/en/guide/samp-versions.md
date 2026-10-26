---
description: "SA-MP version choices and open.mp support in PawnStudio, including 0.3.DL-specific functions."
---

# SA-MP & open.mp Versions

The SA-MP version option is in **Settings**.

## Available versions

| Version | Notes |
| --- | --- |
| 0.3.DL-R1 | Default. Supports 0.3.DL-specific functions |
| 0.3.7-R2-1 | Version 0.3.7 |
| 0.3.7-R3 | Version 0.3.7 |

## 0.3.DL-specific functions

In version 0.3.7, the following functions are treated as nonexistent, so using them causes an error at compile time (not just a problem on the server):

- `AddCharModel`
- `AddSimpleModel`
- `AddSimpleModelTimed`
- `FindModelFileNameFromCRC`
- `FindTextureFileNameFromCRC`
- `RedirectDownload`

If your server uses 0.3.7 and you get an `undefined symbol` error for the functions above, that's the cause. Match the version in Settings to your server's version.

## open.mp

Code that uses `open.mp` or `omp_*` in its includes is compiled with the open.mp includes bundled in the app. Classic SA-MP code is unchanged. The SA-MP version option doesn't apply in open.mp mode.
