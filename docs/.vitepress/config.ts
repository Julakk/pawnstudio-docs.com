import { defineConfig } from 'vitepress'
import latest from './data/latest.json'

const REPO = 'https://github.com/Julakk/Pawn-Studio'
const BASE = process.env.VITEPRESS_BASE || '/'
const SITE = process.env.VITEPRESS_SITE || 'https://pawnstudio-docs-com.vercel.app'
const TITLE = 'PawnStudio'
const DESC_ID = 'IDE mobile untuk coding SA-MP, open.mp, Node.js, dan web langsung dari HP.'
const DESC_EN = 'Mobile IDE for coding SA-MP, open.mp, Node.js, and web projects right from your phone.'

// Teks navigasi per bahasa
const TXT = {
  id: {
    features: 'Fitur',
    guide: 'Panduan',
    reference: 'Referensi',
    faq: 'FAQ',
    changelog: 'Changelog',
    download: 'Download',
    quick: 'Mulai Cepat',
    usage: 'Cara Pakai',
    firstCompile: 'Compile Pertama',
    versions: 'Versi SA-MP & open.mp',
    git: 'Pakai Git',
    editor: 'Fitur Editor',
    trouble: 'Troubleshooting',
    langs: 'Bahasa & Platform',
    fileTypes: 'Tipe File',
    snippets: 'Snippet PAWN',
    extensions: 'Katalog Ekstensi',
    tutorials: 'Tutorial',
    nodeBot: 'Bikin Bot Node.js',
    htmlSite: 'Bikin Website HTML',
    about: 'Tentang dan Kontribusi'
  },
  en: {
    features: 'Features',
    guide: 'Guide',
    reference: 'Reference',
    faq: 'FAQ',
    changelog: 'Changelog',
    download: 'Download',
    quick: 'Quick Start',
    usage: 'How to Use',
    firstCompile: 'First Compile',
    versions: 'SA-MP & open.mp Versions',
    git: 'Using Git',
    editor: 'Editor Features',
    trouble: 'Troubleshooting',
    langs: 'Languages & Platforms',
    fileTypes: 'File Types',
    snippets: 'PAWN Snippets',
    extensions: 'Extension Catalog',
    tutorials: 'Tutorials',
    nodeBot: 'Build a Node.js Bot',
    htmlSite: 'Build an HTML Website',
    about: 'About & Contributing'
  }
}

function navFor(p: string, t: typeof TXT.id) {
  return [
    { text: t.features, link: `${p}/features` },
    { text: t.guide, link: `${p}/guide/getting-started` },
    { text: t.reference, link: `${p}/reference/languages` },
    { text: t.faq, link: `${p}/faq` },
    { text: t.changelog, link: `${p}/changelog` },
    { text: t.download, link: `${p}/download` }
  ]
}

function sidebarFor(p: string, t: typeof TXT.id) {
  return [
    { text: t.features, link: `${p}/features` },
    { text: t.download, link: `${p}/download` },
    {
      text: t.guide,
      items: [
        { text: t.quick, link: `${p}/guide/getting-started` },
        { text: t.usage, link: `${p}/guide/usage` },
        { text: t.firstCompile, link: `${p}/guide/first-compile` },
        { text: t.versions, link: `${p}/guide/samp-versions` },
        { text: t.git, link: `${p}/guide/git` },
        { text: t.editor, link: `${p}/guide/editor-features` },
        { text: t.trouble, link: `${p}/guide/troubleshooting` }
      ]
    },
    {
      text: t.reference,
      items: [
        { text: t.langs, link: `${p}/reference/languages` },
        { text: t.fileTypes, link: `${p}/reference/file-types` },
        { text: t.snippets, link: `${p}/reference/snippets` },
        { text: t.extensions, link: `${p}/reference/extensions` }
      ]
    },
    {
      text: t.tutorials,
      items: [
        { text: t.nodeBot, link: `${p}/tutorials/node-bot` },
        { text: t.htmlSite, link: `${p}/tutorials/html-site` }
      ]
    },
    { text: t.faq, link: `${p}/faq` },
    { text: t.about, link: `${p}/about` },
    { text: t.changelog, link: `${p}/changelog` }
  ]
}

export default defineConfig({
  title: TITLE,
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
    ['meta', { property: 'og:image', content: SITE + '/og-image.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: SITE + '/og-image.png' }]
  ],
  transformHead({ pageData }) {
    const rel = pageData.relativePath
    const isEn = rel === 'en' || rel.startsWith('en/')
    const isHome = rel === 'index.md' || rel === 'en/index.md'
    const path = rel.replace(/index\.md$/, '').replace(/\.md$/, '')
    const url = SITE + '/' + path
    // halaman padanan di bahasa lain, untuk hreflang
    const idPath = isEn ? path.replace(/^en\/?/, '') : path
    const enPath = isEn ? path : 'en/' + path
    const title = isHome
      ? TITLE + (isEn ? ' | Mobile IDE for PAWN, SA-MP, and open.mp' : ' | IDE Mobile untuk PAWN, SA-MP, dan open.mp')
      : pageData.title
        ? pageData.title + ' | ' + TITLE
        : TITLE
    const desc = pageData.frontmatter.description || (isEn ? DESC_EN : DESC_ID)

    const head: any[] = [
      ['link', { rel: 'canonical', href: url }],
      ['link', { rel: 'alternate', hreflang: 'id', href: SITE + '/' + idPath }],
      ['link', { rel: 'alternate', hreflang: 'en', href: SITE + '/' + enPath }],
      ['link', { rel: 'alternate', hreflang: 'x-default', href: SITE + '/' + idPath }],
      ['meta', { property: 'og:locale', content: isEn ? 'en_US' : 'id_ID' }],
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
          description: isEn ? DESC_EN : DESC_ID,
          inLanguage: isEn ? 'en' : 'id',
          applicationCategory: 'DeveloperApplication',
          operatingSystem: 'Android',
          softwareVersion: String(latest.version).replace(/^v/, ''),
          url: SITE + '/' + (isEn ? 'en/' : ''),
          image: SITE + '/og-image.png',
          author: { '@type': 'Person', name: 'Julak Junior' },
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'IDR' }
        })
      ])
    }
    return head
  },
  locales: {
    root: {
      label: 'Bahasa Indonesia',
      lang: 'id-ID',
      description: DESC_ID,
      themeConfig: {
        nav: navFor('', TXT.id),
        sidebar: sidebarFor('', TXT.id),
        editLink: {
          pattern: 'https://github.com/Julakk/pawnstudio-docs.com/edit/main/docs/:path',
          text: 'Edit halaman ini di GitHub'
        },
        lastUpdated: { text: 'Terakhir diperbarui' },
        outline: { label: 'Di halaman ini' },
        docFooter: { prev: 'Sebelumnya', next: 'Berikutnya' },
        returnToTopLabel: 'Kembali ke atas',
        sidebarMenuLabel: 'Menu',
        darkModeSwitchLabel: 'Tampilan',
        lightModeSwitchTitle: 'Ganti ke mode terang',
        darkModeSwitchTitle: 'Ganti ke mode gelap',
        langMenuLabel: 'Ganti bahasa',
        skipToContentLabel: 'Lewati ke konten'
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: DESC_EN,
      themeConfig: {
        nav: navFor('/en', TXT.en),
        sidebar: sidebarFor('/en', TXT.en),
        editLink: {
          pattern: 'https://github.com/Julakk/pawnstudio-docs.com/edit/main/docs/:path',
          text: 'Edit this page on GitHub'
        }
      }
    }
  },
  themeConfig: {
    logo: '/logo.png',
    socialLinks: [
      { icon: 'github', link: REPO, ariaLabel: 'GitHub' },
      { icon: 'discord', link: 'https://discord.gg/82hxdZy6Gf', ariaLabel: 'Discord' },
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Saweria</title><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        },
        link: 'https://saweria.co/bangjulak12',
        ariaLabel: 'Saweria'
      }
    ],
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: 'Cari', buttonAriaLabel: 'Cari' },
              modal: {
                displayDetails: 'Tampilkan detail',
                resetButtonTitle: 'Hapus pencarian',
                backButtonTitle: 'Tutup pencarian',
                noResultsText: 'Tidak ada hasil untuk',
                footer: {
                  selectText: 'untuk memilih',
                  selectKeyAriaLabel: 'enter',
                  navigateText: 'untuk berpindah',
                  navigateUpKeyAriaLabel: 'panah atas',
                  navigateDownKeyAriaLabel: 'panah bawah',
                  closeText: 'untuk menutup',
                  closeKeyAriaLabel: 'escape'
                }
              }
            }
          }
        }
      }
    }
  }
})
