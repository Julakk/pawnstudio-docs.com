import { defineConfig } from 'vitepress'

const REPO = 'https://github.com/Julakk/Pawn-Studio'
const BASE = process.env.VITEPRESS_BASE || '/pawnstudio-docs.com/'
const SITE = process.env.VITEPRESS_SITE || 'https://julakk.github.io/pawnstudio-docs.com'
const TITLE = 'PawnStudio'
const DESC = 'IDE mobile untuk coding SA-MP, open.mp, Node.js, dan web langsung dari HP.'

export default defineConfig({
  lang: 'id-ID',
  title: TITLE,
  description: DESC,
  base: BASE,
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: BASE + 'favicon.ico', sizes: 'any' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: BASE + 'favicon-32.png' }],
    ['link', { rel: 'apple-touch-icon', href: BASE + 'apple-touch-icon.png' }],
    ['meta', { name: 'theme-color', content: '#5f7df5' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: TITLE }],
    ['meta', { property: 'og:description', content: DESC }],
    ['meta', { property: 'og:image', content: SITE + '/og-image.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: SITE + '/og-image.png' }]
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Fitur', link: '/features' },
      { text: 'Panduan', link: '/guide/getting-started' },
      { text: 'Referensi', link: '/reference/languages' },
      { text: 'FAQ', link: '/faq' },
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
          { text: 'Tipe File', link: '/reference/file-types' },
          { text: 'Snippet PAWN', link: '/reference/snippets' }
        ]
      },
      {
        text: 'Tutorial',
        items: [
          { text: 'Bikin Bot Node.js', link: '/tutorials/node-bot' },
          { text: 'Bikin Website HTML', link: '/tutorials/html-site' }
        ]
      },
      { text: 'FAQ', link: '/faq' },
      { text: 'Tentang dan Kontribusi', link: '/about' },
      { text: 'Changelog', link: '/changelog' }
    ],
    socialLinks: [{ icon: 'github', link: REPO }],
    search: { provider: 'local' },
    editLink: {
      pattern: 'https://github.com/Julakk/pawnstudio-docs.com/edit/main/docs/:path',
      text: 'Edit halaman ini di GitHub'
    }
  }
})
