import { defineConfig } from 'vitepress'

const REPO = 'https://github.com/Julakk/Pawn-Studio'

export default defineConfig({
  lang: 'id-ID',
  title: 'PawnStudio',
  description: 'IDE mobile untuk coding SA-MP, open.mp, Node.js, dan web langsung dari HP.',
  base: process.env.VITEPRESS_BASE || '/pawnstudio-docs.com/',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: 'Fitur', link: '/features' },
      { text: 'Panduan', link: '/guide/getting-started' },
      { text: 'Referensi', link: '/reference/languages' },
      { text: 'Changelog', link: '/changelog' },
      { text: 'Download', link: '/download' }
    ],
    sidebar: [
      { text: 'Fitur', link: '/features' },
      { text: 'Download', link: '/download' },
      {
        text: 'Panduan',
        items: [
          { text: 'Mulai Cepat', link: '/guide/getting-started' },
          { text: 'Cara Pakai', link: '/guide/usage' },
          { text: 'Compile Pertama', link: '/guide/first-compile' },
          { text: 'Versi SA-MP & open.mp', link: '/guide/samp-versions' },
          { text: 'Pakai Git', link: '/guide/git' },
          { text: 'Fitur Editor', link: '/guide/editor-features' },
          { text: 'Troubleshooting', link: '/guide/troubleshooting' }
        ]
      },
      {
        text: 'Referensi',
        items: [
          { text: 'Bahasa & Platform', link: '/reference/languages' },
          { text: 'Tipe File', link: '/reference/file-types' }
        ]
      },
      { text: 'Changelog', link: '/changelog' }
    ],
    socialLinks: [{ icon: 'github', link: REPO }],
    search: { provider: 'local' },
    editLink: {
      pattern: 'https://github.com/Julakk/pawnstudio-docs.com/edit/main/docs/:path',
      text: 'Edit halaman ini di GitHub'
    },
    footer: {
      message: 'PawnStudio Freeware License. Gratis dipakai, bukan open source.',
      copyright: 'Copyright © 2026 Julak Junior'
    }
  }
})
