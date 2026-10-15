import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import Stats from './Stats.vue'
import Footer from './Footer.vue'
import LatestRelease from './LatestRelease.vue'
import ExtensionCatalog from './ExtensionCatalog.vue'
import IssueButtons from './IssueButtons.vue'
import MediaKit from './MediaKit.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: () =>
    h(DefaultTheme.Layout, null, {
      'home-hero-after': () => h(Stats),
      'layout-bottom': () => h(Footer)
    }),
  enhanceApp({ app }) {
    app.component('LatestRelease', LatestRelease)
    app.component('ExtensionCatalog', ExtensionCatalog)
    app.component('IssueButtons', IssueButtons)
    app.component('MediaKit', MediaKit)
  }
}
