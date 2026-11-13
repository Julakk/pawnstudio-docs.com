<script setup>
import { ref, computed } from 'vue'
import { useData } from 'vitepress'
import latest from '../data/latest.json'

const { lang } = useData()
const version = ref(latest.version)

const labels = computed(() =>
  lang.value.startsWith('en')
    ? { version: 'Latest version', platforms: 'Supported platforms', offline: 'Works offline', free: 'Free', freeSub: 'To use' }
    : { version: 'Versi terbaru', platforms: 'Platform didukung', offline: 'Bisa offline', free: 'Gratis', freeSub: 'Dipakai' }
)

</script>

<template>
  <div class="stats">
    <div class="stat"><b>{{ version }}</b><span>{{ labels.version }}</span></div>
    <div class="stat"><b>5</b><span>{{ labels.platforms }}</span></div>
    <div class="stat"><b>100%</b><span>{{ labels.offline }}</span></div>
    <div class="stat"><b>{{ labels.free }}</b><span>{{ labels.freeSub }}</span></div>
  </div>
</template>
