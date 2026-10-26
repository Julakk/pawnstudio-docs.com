---
description: "Common PAWN compile errors in PawnStudio, with their causes and solutions."
---

# Troubleshooting

Copy the error text from the Output panel, then match it against the table below.

## Common compile errors

| Message | Meaning | Solution |
| --- | --- | --- |
| `fatal error 100: cannot read from file` | The include file wasn't found | Check the `.inc` file name and make sure it's in the include folder |
| `error 017: undefined symbol` | A function or variable isn't defined yet | Check spelling, declaration order, and the required includes |
| `error 021: symbol already defined` | A name is defined twice | Remove the duplicate definition, or check for an include being read twice |
| `error 001: expected token` | A punctuation mark is missing | Check semicolons, parentheses, or braces on that line and the ones before it |
| `error 035: argument type mismatch` | Wrong argument type | Match the arguments to the function declaration |
| `error 029: invalid expression` | The expression isn't valid | Check operators and parentheses |
| `error 013: no entry point` | There's no entry point function | Make sure `main()` or the required `public` callback exists |
| `warning 204: symbol is assigned a value that is never used` | An unused variable | Safe to ignore, or remove the variable |
| `warning 213: tag mismatch` | Type tags don't match | Check the type of the value passed to the function |

## error 021 in a_samp.inc

If error 021 appears in `a_samp.inc` for functions like `print` or `printf`, usually another include also defines that function, or there's a duplicate copy of `a_samp.inc` in a folder being read. Remove the duplicate copy and make sure only one include defines it.

## The APK can't be installed

Enable installs from unknown sources, and make sure the APK file wasn't corrupted during download. PawnStudio needs an Android arm64 device.

## Still stuck?

Ask on [Discord](https://discord.gg/82hxdZy6Gf) or open an [Issue](https://github.com/Julakk/Pawn-Studio/issues) on GitHub, and include the error text from the Output panel.
