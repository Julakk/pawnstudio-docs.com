---
description: "Tutorial: build an HTML, CSS, and JavaScript website from your phone with PawnStudio live preview."
---

# Build an HTML Website from Your Phone

Build a simple web page and see the result instantly.

## Steps

1. Create a project folder with three files: `index.html`, `style.css`, and `script.js`.
2. Fill in `index.html` like the example below.
3. Open `index.html`, then tap the **Preview** button (eye icon) or the play button.
4. Choose **Split** mode so the editor is on top and the preview is below.

## Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>First Page</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Hello from my phone!</h1>
  <ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </ul>
  <script src="script.js"></script>
</body>
</html>
```

The linked `style.css` and `script.js` are automatically merged into the preview, and unsaved editor content is used too.

## Live preview

The preview updates automatically about 0.7 seconds after you stop typing, so you don't need to save first.

## Quick tips

- Type `ul>li*3`, then expand it with Emmet to generate a list automatically.
- Tap **Fmt** to tidy up your code.
