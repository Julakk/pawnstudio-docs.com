import { writeFileSync, mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const here = dirname(fileURLToPath(import.meta.url))
const OUT_MD = resolve(here, '../docs/changelog.md')
const OUT_MD_EN = resolve(here, '../docs/en/changelog.md')
const OUT_JSON = resolve(here, '../docs/.vitepress/data/latest.json')
const SRC = 'https://raw.githubusercontent.com/Julakk/Pawn-Studio/main/CHANGELOG.md'
const BULAN = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des']
const JUDUL = {
  added: 'Ditambahkan',
  ditambahkan: 'Ditambahkan',
  changed: 'Diubah',
  diubah: 'Diubah',
  fixed: 'Diperbaiki',
  diperbaiki: 'Diperbaiki',
  removed: 'Dihapus',
  dihapus: 'Dihapus',
  'known issues': 'Masalah yang diketahui',
  catatan: 'Catatan'
}

// escape < > dan {{ di luar inline code supaya VitePress/Vue nggak error
const esc = (line) =>
  line
    .split(/(`[^`]*`)/)
    .map((p, i) =>
      i % 2
        ? p
        : p
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/\{\{/g, '&#123;&#123;')
            .replace(/\}\}/g, '&#125;&#125;')
    )
    .join('')

const clean = (s) =>
  s
    .replace(/^-\s+/, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[`*]/g, '')
    .trim()
const cut = (s, n) => (s.length <= n ? s : s.slice(0, n).replace(/\s+\S*$/, '') + '…')
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1)

async function main() {
  const res = await fetch(SRC)
  if (!res.ok) throw new Error('HTTP ' + res.status)
  const lines = (await res.text()).split('\n')

  const versions = []
  let cur = null
  let fence = false
  for (const line of lines) {
    if (/^```/.test(line)) fence = !fence
    const m = fence ? null : line.match(/^## \[([^\]]+)\](?: - (\d{4})-(\d{2})-(\d{2}))?/)
    if (m) {
      cur = {
        ver: m[1].replace(/^v/i, ''),
        date: m[2] ? `${+m[4]} ${BULAN[+m[3] - 1]} ${m[2]}` : '',
        lines: []
      }
      versions.push(cur)
    } else if (cur) {
      cur.lines.push(line)
    }
  }
  const rilis = versions.filter((v) => v.ver.toLowerCase() !== 'unreleased')
  if (!rilis.length) throw new Error('Tidak ada versi ditemukan')

  const headId =
    '---\ndescription: "Riwayat perubahan PawnStudio per versi, diambil otomatis dari repo resmi."\n---\n\n# Changelog\n\n' +
    'Daftar ini diperbarui otomatis dari [CHANGELOG.md](https://github.com/Julakk/Pawn-Studio/blob/main/CHANGELOG.md). ' +
    'Paket APK ada di [halaman Releases](https://github.com/Julakk/Pawn-Studio/releases).\n\n'
  const headEn =
    '---\ndescription: "PawnStudio release history by version, pulled automatically from the official repository."\n---\n\n# Changelog\n\n' +
    '::: info\nThis list is updated automatically from the official [CHANGELOG.md](https://github.com/Julakk/Pawn-Studio/blob/main/CHANGELOG.md). ' +
    'The release notes themselves are written in Indonesian. APK packages are on the [Releases page](https://github.com/Julakk/Pawn-Studio/releases).\n:::\n\n'
  let md = ''

  for (const v of rilis) {
    md += `## v${v.ver}${v.date ? ' (' + v.date + ')' : ''}\n\n`
    let f = false
    for (const raw of v.lines) {
      if (/^```/.test(raw)) {
        f = !f
        md += raw + '\n'
        continue
      }
      if (f) {
        md += raw + '\n'
        continue
      }
      const h = raw.match(/^### (.+)$/)
      md += h ? `### ${JUDUL[h[1].trim().toLowerCase()] || esc(h[1])}\n` : esc(raw) + '\n'
    }
    md = md.replace(/\n{3,}/g, '\n\n')
  }

  // highlight rilis terbaru untuk halaman depan
  const latest = rilis[0]
  const sections = []
  let sec = null
  for (const raw of latest.lines) {
    const h = raw.match(/^### (.+)$/)
    if (h) {
      sec = { title: JUDUL[h[1].trim().toLowerCase()] || h[1], bullets: [] }
      sections.push(sec)
    } else if (sec && /^- /.test(raw)) {
      sec.bullets.push(raw)
    }
  }
  const pool = (sections.find((s) => s.title === 'Ditambahkan') || sections[0] || { bullets: [] }).bullets
  const highlights = pool
    .map(clean)
    .filter((b) => b.length > 20 && !/^Dokumentasi/i.test(b))
    .slice(0, 3)
    .map((b) => {
      const i = b.indexOf(':')
      if (i > 0 && i <= 60) {
        return {
          title: b.slice(0, i).replace(/\s*\([^)]*\)/g, '').trim(),
          text: cut(cap(b.slice(i + 1).trim()), 120)
        }
      }
      return { title: cut(b.split(/[.,(]/)[0].trim(), 36), text: cut(b, 120) }
    })

  mkdirSync(dirname(OUT_JSON), { recursive: true })
  const EN = {
    Ditambahkan: 'Added',
    Diubah: 'Changed',
    Diperbaiki: 'Fixed',
    Dihapus: 'Removed',
    'Masalah yang diketahui': 'Known issues',
    Catatan: 'Notes'
  }
  const mdEn = md.replace(/^### (.+)$/gm, (m0, h) => '### ' + (EN[h.trim()] || h))
  mkdirSync(dirname(OUT_MD_EN), { recursive: true })
  writeFileSync(OUT_MD, headId + md)
  writeFileSync(OUT_MD_EN, headEn + mdEn)
  writeFileSync(OUT_JSON, JSON.stringify({ version: 'v' + latest.ver, date: latest.date, highlights }, null, 2) + '\n')
  console.log(`OK: ${rilis.length} versi, terbaru v${latest.ver}`)
}

main().catch((e) => {
  console.warn('Gagal ambil changelog, pakai file yang sudah ada:', e.message)
})
