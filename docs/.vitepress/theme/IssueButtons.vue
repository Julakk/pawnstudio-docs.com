<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

const props = defineProps({ kind: { type: String, default: 'bug' } })
const { lang } = useData()
const en = computed(() => lang.value.startsWith('en'))

const templates = {
  id: {
    bug: {
      text: 'Laporkan Bug',
      title: 'Bug: ',
      label: 'bug',
      body: [
        '**Versi PawnStudio:**',
        '',
        '**Versi Android dan tipe HP:**',
        '',
        '**Langkah mereproduksi:**',
        '1. ',
        '2. ',
        '',
        '**Yang diharapkan:**',
        '',
        '**Yang terjadi:**',
        '',
        '**Teks error dari panel Output:**',
        '(tempel di sini)',
        '',
        '**Laporan Cek HP:**',
        '(Pengaturan > Cek HP > Salin laporan)'
      ].join('\n')
    },
    fitur: {
      text: 'Usul Fitur',
      title: 'Fitur: ',
      label: 'enhancement',
      body: [
        '**Masalah yang mau dipecahkan:**',
        '',
        '**Ide solusi:**',
        '',
        '**Seberapa sering lo butuh ini:**',
        '',
        '**Catatan tambahan:**'
      ].join('\n')
    }
  },
  en: {
    bug: {
      text: 'Report a Bug',
      title: 'Bug: ',
      label: 'bug',
      body: [
        '**PawnStudio version:**',
        '',
        '**Android version and phone model:**',
        '',
        '**Steps to reproduce:**',
        '1. ',
        '2. ',
        '',
        '**Expected behavior:**',
        '',
        '**Actual behavior:**',
        '',
        '**Error text from the Output panel:**',
        '(paste here)',
        '',
        '**Phone Check report:**',
        '(Settings > Phone Check > Copy report)'
      ].join('\n')
    },
    fitur: {
      text: 'Suggest a Feature',
      title: 'Feature: ',
      label: 'enhancement',
      body: [
        '**Problem you want to solve:**',
        '',
        '**Idea for a solution:**',
        '',
        '**How often do you need this:**',
        '',
        '**Additional notes:**'
      ].join('\n')
    }
  }
}

const t = computed(() => {
  const set = en.value ? templates.en : templates.id
  const key = props.kind === 'feature' ? 'fitur' : props.kind
  return set[key] || set.bug
})
const href = computed(
  () =>
    'https://github.com/Julakk/Pawn-Studio/issues/new?title=' +
    encodeURIComponent(t.value.title) +
    '&body=' +
    encodeURIComponent(t.value.body) +
    '&labels=' +
    t.value.label
)
</script>

<template>
  <a class="btn-issue" :href="href" target="_blank" rel="noopener">{{ t.text }}</a>
</template>

<style scoped>
.btn-issue {
  display: inline-block;
  background: var(--vp-c-brand-3);
  color: #fff;
  padding: 9px 22px;
  border-radius: 999px;
  font-weight: 600;
  text-decoration: none;
  margin: 6px 0;
}
.btn-issue:hover {
  background: var(--vp-c-brand-2);
  color: #fff;
  text-decoration: none;
}
</style>
