<script setup>
import data from '../data/extensions.json'

const props = defineProps({ list: { type: String, default: 'community' } })
const items = data[props.list] || []

const label = { snippet: 'Snippet', tema: 'Tema', include: 'Paket Include' }
const icon = {
  snippet: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
  tema: '<circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 0 0 20z"/>',
  include: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>'
}
</script>

<template>
  <div v-if="items.length" class="platform-grid">
    <div v-for="x in items" :key="x.name" class="platform">
      <div class="ico"><svg viewBox="0 0 24 24" v-html="icon[x.type] || icon.snippet"></svg></div>
      <h3>{{ x.name }}</h3>
      <p>{{ x.description }}</p>
      <p v-if="x.author" class="ext-meta">oleh {{ x.author }}</p>
      <span class="badge ver">{{ label[x.type] || x.type }}</span>
      <a v-if="x.repo" :href="'https://github.com/' + x.repo" target="_blank" rel="noopener">{{ x.repo }}</a>
    </div>
  </div>
  <div v-else class="platform empty">
    <h3>Belum ada ekstensi komunitas</h3>
    <p>Jadi yang pertama! Bikin ekstensi lo dan kirim lewat cara di bagian bawah halaman ini.</p>
  </div>
</template>
