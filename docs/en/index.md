---
layout: home

hero:
  image:
    src: /logo.png
    alt: PawnStudio
  name: PawnStudio
  text: Code from your phone, no laptop needed
  tagline: Mobile IDE for SA-MP, open.mp, Node.js, and web. Write, edit, and compile right on Android.
  actions:
    - theme: brand
      text: Download APK
      link: https://github.com/Julakk/Pawn-Studio
    - theme: alt
      text: Quick Start
      link: /en/guide/getting-started

features:
  - icon: '<svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>'
    title: Code Editor
    details: Edit .pwn, .inc, .js, .html, and .css files right on Android.
  - icon: '<svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>'
    title: Compile on Your Phone
    details: Compile PAWN gamemodes into .amx from inside the app.
  - icon: '<svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>'
    title: Lightweight
    details: Built for phones, with no complicated setup.
  - icon: '<svg viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>'
    title: Multi-Language
    details: One app for PAWN, JavaScript, Node.js, and web.
  - icon: '<svg viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>'
    title: Mobile First
    details: The interface and controls are designed for touch screens.
  - icon: '<svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>'
    title: Free to Use
    details: Free to use. The code you write stays yours.
---

## Supported

<p class="sub">Languages and platforms you can use in PawnStudio.</p>

<div class="platform-grid center">
<div class="platform"><div class="ico"><svg viewBox="0 0 24 24"><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><line x1="15" y1="13" x2="15.01" y2="13"/><line x1="18" y1="11" x2="18.01" y2="11"/><rect x="2" y="6" width="20" height="12" rx="2"/></svg></div><h3>SA-MP</h3><p>PAWN gamemodes and filterscripts for SA-MP servers.</p><span class="badge ok">Available</span></div>
<div class="platform"><div class="ico"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div><h3>open.mp</h3><p>PAWN scripting for open.mp servers.</p><span class="badge ok">Available</span></div>
<div class="platform"><div class="ico"><svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg></div><h3>Node.js</h3><p>Write JavaScript scripts for bots and backends.</p><span class="badge ok">Available</span></div>
<div class="platform"><div class="ico"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg></div><h3>HTML, CSS, JavaScript</h3><p>Build websites and web pages right from your phone.</p><span class="badge ok">Available</span></div>
<div class="platform"><div class="ico"><svg viewBox="0 0 24 24"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg></div><h3>Python</h3><p>Run Python scripts right on your phone, offline via Pyodide.</p><span class="badge ok">Available</span></div>
</div>

## Latest

<p class="sub">What's new in the latest release.</p>

<LatestRelease />

<div class="more">

[See all changes](/en/changelog)

</div>

## Built-in Includes

<p class="sub">Already bundled in the APK, no manual install needed. Your project's own includes still take priority.</p>

<div class="chips">
<span class="chip">sscanf2</span>
<span class="chip">YSI</span>
<span class="chip">streamer</span>
<span class="chip">a_mysql</span>
<span class="chip">zcmd</span>
<span class="chip">I-ZCMD</span>
<span class="chip">Pawn.CMD</span>
<span class="chip">Pawn.RakNet</span>
<span class="chip">crashdetect</span>
<span class="chip">amx_assembly</span>
<span class="chip">weapon-config</span>
</div>

## How It Works

<p class="sub">Three steps from install to running.</p>

<div class="steps">
<div class="step"><div class="num">1</div><h3>Install</h3><p>Download the APK from GitHub and install it on your phone.</p></div>
<div class="step"><div class="num">2</div><h3>Open a Project</h3><p>Pick your project folder, then open the file you want to edit.</p></div>
<div class="step"><div class="num">3</div><h3>Code & Compile</h3><p>Edit your code, tap Compile, and the result is ready to use.</p></div>
</div>

## Common Questions

<div class="faq">
<details><summary>Is PawnStudio free?</summary><p>Yes, it's free to use. It's not open source, though, and the code you write stays yours.</p></details>
<details><summary>Do I need Termux?</summary><p>No. The PAWN compiler, Node.js, and npm are all built into the app.</p></details>
<details><summary>Which phones are supported?</summary><p>Android with arm64 architecture. Check via Settings, then the Phone Check button.</p></details>
</div>

<div class="more">

[See the full FAQ](/en/faq)

</div>

## Community & Support

<p class="sub">Have a question, found a bug, or want to support development? Start here.</p>

<div class="platform-grid">
<div class="platform"><div class="ico"><svg viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg></div><h3>Discord</h3><p>Ask questions, report bugs, and chat with other users.</p><a href="https://discord.gg/82hxdZy6Gf">Join Discord</a></div>
<div class="platform"><div class="ico"><svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></div><h3>Saweria</h3><p>Support PawnStudio's development so it keeps getting updates.</p><a href="https://saweria.co/bangjulak12">Support via Saweria</a></div>
<div class="platform"><div class="ico"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div><h3>Report a Problem</h3><p>Open an Issue on GitHub and include the error text from the Output panel.</p><a href="https://github.com/Julakk/Pawn-Studio/issues">Open Issue</a></div>
</div>

<div class="cta">
<h3>Ready to code from your phone?</h3>
<p>Download PawnStudio and start your first project.</p>
<a class="btn" href="/en/download">Download</a>
<a class="btn alt" href="/en/features">See All Features</a>
</div>
