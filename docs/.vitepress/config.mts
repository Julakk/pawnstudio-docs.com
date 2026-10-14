import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'id-ID',
  title: 'PawnStudio',
  description: 'IDE mobile untuk scripting PAWN / SA-MP langsung dari HP.',
  base: process.env.VITEPRESS_BASE || '/pawnstudio-docs.com/',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: 'Panduan', link: '/guide/getting-started' },
      { text: 'Referensi', link: '/reference/file-types' },
      { text: 'Changelog', link: '/changelog' },
      { text: 'Download', link: 'https://github.com/Julakk/PawnStudio/releases/latest' }
    ],
    sidebar: [
      {
        text: 'Panduan',
        items: [
          { text: 'Mulai Cepat', link: '/guide/getting-started' },
          { text: 'Cara Pakai', link: '/guide/usage' },
          { text: 'Troubleshooting', link: '/guide/troubleshooting' }
        ]
      },
      {
        text: 'Referensi',
        items: [{ text: 'Tipe File', link: '/reference/file-types' }]
      },
      { text: 'Changelog', link: '/changelog' }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/Julakk/PawnStudio' }],
    search: { provider: 'local' },
    editLink: {
      pattern: 'https://github.com/Julakk/pawnstudio-docs.com/edit/main/docs/:path',
      text: 'Edit halaman ini di GitHub'
    },
    footer: {
      message: 'Dirilis di bawah lisensi MIT.',
      copyright: 'Copyright © 2026 Julak Junior'
    }
  }
})
