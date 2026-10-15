<script setup>
const props = defineProps({ kind: { type: String, default: 'bug' } })

const templates = {
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
}

const t = templates[props.kind] || templates.bug
const href =
  'https://github.com/Julakk/Pawn-Studio/issues/new?title=' +
  encodeURIComponent(t.title) +
  '&body=' +
  encodeURIComponent(t.body) +
  '&labels=' +
  t.label
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
