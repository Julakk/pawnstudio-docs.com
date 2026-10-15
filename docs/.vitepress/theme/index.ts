import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import Stats from './Stats.vue'
import Footer from './Footer.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: () =>
    h(DefaultTheme.Layout, null, {
      'home-hero-after': () => h(Stats),
      'layout-bottom': () => h(Footer)
    })
}
