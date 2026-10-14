<script setup>
import { ref, onMounted } from 'vue'

const version = ref('v1.15.0')

onMounted(async () => {
  try {
    const r = await fetch('https://api.github.com/repos/Julakk/Pawn-Studio/releases/latest')
    if (r.ok) {
      const d = await r.json()
      if (d.tag_name) version.value = d.tag_name
    }
  } catch (e) {}
})
</script>

<template>
  <div class="stats">
    <div class="stat"><b>{{ version }}</b><span>Versi terbaru</span></div>
    <div class="stat"><b>4</b><span>Platform didukung</span></div>
    <div class="stat"><b>100%</b><span>Bisa offline</span></div>
    <div class="stat"><b>Gratis</b><span>Dipakai</span></div>
  </div>
</template>
