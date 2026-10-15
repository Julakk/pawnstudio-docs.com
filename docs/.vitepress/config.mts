import { defineConfig } from 'vitepress'
import latest from './data/latest.json'

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
  sitemap: { hostname: SITE + '/' },
  head: [
    ['link', { rel: 'icon', href: BASE + 'favicon.ico', sizes: 'any' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: BASE + 'favicon-32.png' }],
    ['link', { rel: 'apple-touch-icon', href: BASE + 'apple-touch-icon.png' }],
    ['meta', { name: 'theme-color', content: '#5f7df5' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: TITLE }],
    ['meta', { property: 'og:locale', content: 'id_ID' }],
    ['meta', { property: 'og:image', content: SITE + '/og-image.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: SITE + '/og-image.png' }]
  ],
  transformHead({ pageData }) {
    const isHome = pageData.relativePath === 'index.md'
    const path = pageData.relativePath.replace(/index\.md$/, '').replace(/\.md$/, '')
    const url = SITE + '/' + path
    const title = isHome
      ? TITLE + ' | IDE Mobile untuk PAWN, SA-MP, dan open.mp'
      : pageData.title
        ? pageData.title + ' | ' + TITLE
        : TITLE
    const desc = pageData.frontmatter.description || DESC

    const head: any[] = [
      ['link', { rel: 'canonical', href: url }],
      ['meta', { property: 'og:url', content: url }],
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: desc }],
      ['meta', { name: 'twitter:title', content: title }],
      ['meta', { name: 'twitter:description', content: desc }]
    ]

    if (isHome) {
      head.push([
        'script',
        { type: 'application/ld+json' },
        JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: TITLE,
          description: DESC,
          applicationCategory: 'DeveloperApplication',
          operatingSystem: 'Android',
          softwareVersion: String(latest.version).replace(/^v/, ''),
          url: SITE + '/',
          image: SITE + '/og-image.png',
          author: { '@type': 'Person', name: 'Julak Junior' },
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'IDR' }
        })
      ])
    }
    return head
  },
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
          { text: 'Snippet PAWN', link: '/reference/snippets' },
          { text: 'Katalog Ekstensi', link: '/reference/extensions' }
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
