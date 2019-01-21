<template>
  <div id="app">
    <header-component></header-component>
    <transition v-cloak :name="transitionName">
      <router-view></router-view>
    </transition>
    <footer-component></footer-component>
    <cookies-notification></cookies-notification>
  </div>
</template>

<script>
import HeaderComponent from './components/shared/Header/Header.vue'
import FooterComponent from './components/shared/Footer/Footer.vue'
import ContactComponent from './components/forms/Contact.vue'
import CookiesNotification from './components/shared/CookiesNotification.vue'
import RoundButton from './components/elements/RoundButton.vue'
import MaterialTextarea from './components/elements/Textarea.vue'
import YoutubeVideo from './components/elements/YtVideo.vue'
import AboutDiagram from './components/diagrams/AboutDiagram.vue'
import ExpertiseDiagram from './components/diagrams/ExpertiseDiagram.vue'

export default {
  data () {
    return {
      name: 'NconApp',
      transitionName: 'slide-left'
    }
  },
  beforeRouteUpdate (to, from, next) {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    next()
  },
  components: {
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    CookiesNotification,    
    RoundButton,
    MaterialTextarea,
    AboutDiagram,
    ExpertiseDiagram
  }
}
</script>

<style lang="scss">
@import './app-general-style.scss';
@import './app-responsive-style.scss';
</style>
