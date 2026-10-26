<script setup>
import { computed } from 'vue'
import { withBase, useData } from 'vitepress'

const { lang } = useData()
const en = computed(() => lang.value.startsWith('en'))

const files = computed(() =>
  en.value
    ? [
        { name: 'Logo', desc: 'Transparent PNG, 512 x 512', file: '/logo.png' },
        { name: 'Small icon', desc: 'Transparent PNG, 192 x 192', file: '/icon-192.png' },
        { name: 'Preview image', desc: 'PNG, 1200 x 630', file: '/og-image.png' }
      ]
    : [
        { name: 'Logo', desc: 'PNG transparan, 512 x 512', file: '/logo.png' },
        { name: 'Ikon kecil', desc: 'PNG transparan, 192 x 192', file: '/icon-192.png' },
        { name: 'Gambar preview', desc: 'PNG, 1200 x 630', file: '/og-image.png' }
      ]
)

const colors = computed(() => [
  { name: en.value ? 'Purple' : 'Ungu', hex: '#AF45F6' },
  { name: en.value ? 'Blue' : 'Biru', hex: '#265DEB' },
  { name: en.value ? 'Pawn purple' : 'Ungu pion', hex: '#7E35E3' },
  { name: en.value ? 'White' : 'Putih', hex: '#FAFAFC' },
  { name: en.value ? 'Black' : 'Hitam', hex: '#040407' },
  { name: en.value ? 'Website accent' : 'Aksen website', hex: '#5F7DF5' }
])

const altDark = computed(() => (en.value ? 'PawnStudio logo on a dark background' : 'Logo PawnStudio di background gelap'))
const altLight = computed(() => (en.value ? 'PawnStudio logo on a light background' : 'Logo PawnStudio di background terang'))
</script>

<template>
  <div class="mk">
    <div class="mk-preview">
      <div class="mk-box dark"><img :src="withBase('/logo.png')" :alt="altDark" /></div>
      <div class="mk-box light"><img :src="withBase('/logo.png')" :alt="altLight" /></div>
    </div>

    <div class="mk-files">
      <a v-for="f in files" :key="f.file" :href="withBase(f.file)" download>
        <b>{{ f.name }}</b>
        <span>{{ f.desc }}</span>
      </a>
    </div>

    <div class="mk-colors">
      <div v-for="c in colors" :key="c.hex" class="mk-color">
        <i :style="{ background: c.hex }"></i>
        <b>{{ c.name }}</b>
        <code>{{ c.hex }}</code>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mk {
  margin-top: 16px;
}
.mk-preview {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.mk-box {
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  padding: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.mk-box.dark {
  background: #1b1b1f;
}
.mk-box.light {
  background: #f6f6f7;
}
.mk-box img {
  width: 96px;
  height: 96px;
  margin: 0;
}
.mk-files {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
  margin-top: 14px;
}
.mk-files a {
  display: flex;
  flex-direction: column;
  gap: 4px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 14px 16px;
  text-decoration: none;
  transition: border-color 0.2s;
}
.mk-files a:hover {
  border-color: var(--vp-c-brand-1);
  text-decoration: none;
}
.mk-files b {
  color: var(--vp-c-text-1);
}
.mk-files span {
  color: var(--vp-c-text-2);
  font-size: 0.85rem;
}
.mk-colors {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 12px;
  margin-top: 14px;
}
.mk-color {
  display: flex;
  flex-direction: column;
  gap: 4px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 12px;
}
.mk-color i {
  display: block;
  height: 36px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
}
.mk-color b {
  font-size: 0.9rem;
}
.mk-color code {
  font-size: 0.8rem;
}
@media (max-width: 480px) {
  .mk-preview {
    grid-template-columns: 1fr;
  }
}
</style>
