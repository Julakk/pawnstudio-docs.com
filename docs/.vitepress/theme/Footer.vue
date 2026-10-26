<script setup>
import { computed } from 'vue'
import { withBase, useData } from 'vitepress'

const { frontmatter, lang } = useData()

const en = computed(() => lang.value.startsWith('en'))
const p = computed(() => (en.value ? '/en' : ''))

const logoSrc = withBase('/logo.png')
const REPO = 'https://github.com/Julakk/Pawn-Studio'

const T = {
  id: {
    tagline: 'Dibuat dari HP, untuk yang ngoding dari HP.',
    navTitle: 'Navigasi',
    communityTitle: 'Komunitas',
    legalTitle: 'Legal',
    features: 'Fitur',
    download: 'Download',
    guide: 'Panduan',
    faq: 'FAQ',
    changelog: 'Changelog',
    license: 'Lisensi',
    notices: 'Third-Party Notices',
    about: 'Tentang dan Kontribusi',
    disclaimer: 'PawnStudio tidak berafiliasi dengan SA-MP, open.mp, Discord, GitHub, atau Node.js. Semua nama dan merek dagang adalah milik masing-masing pemiliknya.',
    copyright: 'PawnStudio Freeware License. Gratis dipakai, bukan open source.'
  },
  en: {
    tagline: 'Built on a phone, for people who code on phones.',
    navTitle: 'Navigation',
    communityTitle: 'Community',
    legalTitle: 'Legal',
    features: 'Features',
    download: 'Download',
    guide: 'Guide',
    faq: 'FAQ',
    changelog: 'Changelog',
    license: 'License',
    notices: 'Third-Party Notices',
    about: 'About & Contributing',
    disclaimer: 'PawnStudio is not affiliated with SA-MP, open.mp, Discord, GitHub, or Node.js. All names and trademarks belong to their respective owners.',
    copyright: 'PawnStudio Freeware License. Free to use, not open source.'
  }
}
const t = computed(() => (en.value ? T.en : T.id))

const nav = computed(() => [
  { text: t.value.features, link: withBase(p.value + '/features') },
  { text: t.value.download, link: withBase(p.value + '/download') },
  { text: t.value.guide, link: withBase(p.value + '/guide/getting-started') },
  { text: t.value.faq, link: withBase(p.value + '/faq') },
  { text: t.value.changelog, link: withBase(p.value + '/changelog') }
])

const community = [
  {
    text: 'Discord',
    link: 'https://discord.gg/82hxdZy6Gf',
    icon: '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>'
  },
  {
    text: 'GitHub',
    link: REPO,
    icon: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>'
  },
  {
    text: 'Saweria',
    link: 'https://saweria.co/bangjulak12',
    icon: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>'
  }
]

const legal = computed(() => [
  { text: t.value.license, link: REPO + '/blob/main/LICENSE' },
  { text: t.value.notices, link: REPO + '/blob/main/THIRD_PARTY_NOTICES.md' },
  { text: t.value.about, link: withBase(p.value + '/about') }
])
</script>

<template>
  <footer class="site-footer" :class="{ 'has-sidebar': frontmatter.layout !== 'home' }">
    <div class="sf-inner">
      <div class="sf-brand">
        <img class="sf-logo" :src="logoSrc" alt="PawnStudio" /><b>PawnStudio</b>
        <p>{{ t.tagline }}</p>
      </div>

      <div class="sf-col">
        <h4>{{ t.navTitle }}</h4>
        <a v-for="i in nav" :key="i.text" :href="i.link">{{ i.text }}</a>
      </div>

      <div class="sf-col">
        <h4>{{ t.communityTitle }}</h4>
        <a v-for="i in community" :key="i.text" :href="i.link" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" v-html="i.icon"></svg>
          {{ i.text }}
        </a>
      </div>

      <div class="sf-col">
        <h4>{{ t.legalTitle }}</h4>
        <a v-for="i in legal" :key="i.text" :href="i.link">{{ i.text }}</a>
      </div>
    </div>

    <div class="sf-bottom">
      <p>{{ t.disclaimer }}</p>
      <p>{{ t.copyright }} &copy; 2026 Julak Junior</p>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  border-top: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  padding: 40px 24px 24px;
  margin-top: 48px;
}
.sf-inner {
  max-width: 1152px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr;
  gap: 28px;
}
.sf-brand b {
  font-size: 1.15rem;
  color: var(--vp-c-brand-1);
}
.sf-brand p {
  margin: 8px 0 0;
  color: var(--vp-c-text-2);
  font-size: 0.92rem;
  line-height: 1.5;
}
.sf-col h4 {
  margin: 0 0 10px;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--vp-c-text-1);
}
.sf-col a {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 0;
  font-size: 0.92rem;
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: color 0.2s;
}
.sf-col a:hover {
  color: var(--vp-c-brand-1);
}
.sf-col svg {
  width: 16px;
  height: 16px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.sf-bottom {
  max-width: 1152px;
  margin: 28px auto 0;
  padding-top: 18px;
  border-top: 1px solid var(--vp-c-divider);
  text-align: center;
}
.sf-bottom p {
  margin: 0 0 6px;
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
  line-height: 1.5;
}
@media (max-width: 760px) {
  .sf-inner {
    grid-template-columns: 1fr 1fr;
  }
  .sf-brand {
    grid-column: 1 / -1;
  }
}
@media (min-width: 960px) {
  .site-footer.has-sidebar {
    padding-left: calc(var(--vp-sidebar-width) + 24px);
  }
}
@media (min-width: 1440px) {
  .site-footer.has-sidebar {
    padding-left: calc((100vw - 1440px) / 2 + var(--vp-sidebar-width) + 24px);
  }
}
</style>
