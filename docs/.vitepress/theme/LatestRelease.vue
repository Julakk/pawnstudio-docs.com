<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import latest from '../data/latest.json'

const { lang } = useData()
const list = computed(() =>
  (lang.value.startsWith('en') && latest.highlights_en && latest.highlights_en.length
    ? latest.highlights_en
    : latest.highlights) || []
)

const icons = [
  '<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>',
  '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>',
  '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>'
]
</script>

<template>
  <div class="platform-grid">
    <div v-for="(h, i) in list" :key="i" class="platform">
      <div class="ico"><svg viewBox="0 0 24 24" v-html="icons[i % icons.length]"></svg></div>
      <h3>{{ h.title }}</h3>
      <p>{{ h.text }}</p>
      <span class="badge ver">{{ latest.version }}</span>
    </div>
  </div>
</template>
