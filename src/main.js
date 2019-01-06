import Vue from 'vue'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
Vue.use(VueRouter)
Vue.use(VueI18n)

// i18n
import en_translation from './i18n/en.json' 
// import no_translation from './i18n/no.json' 
// import de_translation from './i18n/de.json' 
// import fr_translation from './i18n/fr.json' 

import App from './App.vue'
import Home from './pages/Home/Home.vue'
import About from './pages/About/About.vue'
import Projects from './pages/Projects/Projects.vue'
import Joinus from './pages/Joinus/Joinus.vue'
import Contactus from './pages/Contactus/Contactus.vue'
import Policy from './pages/Policy.vue'

const messages = {
  en: {
    message: en_translation
  }
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'en', // set locale
  messages // set locale messages
})

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/en/about',
      name: 'en.about',
      component: About
    },
    {
      path: '/en/projects',
      name: 'en.projects',
      component: Projects
    },
    {
      path: '/en/join-us',
      name: 'en.joinus',
      component: Joinus
    },
    {
      path: '/en/contact-us',
      name: 'en.contactus',
      component: Contactus
    },
    {
      path: '/en/privacy-policy',
      name: 'en.privacypolicy',
      component: Policy
    },
    {
      path: '/*',
      redirect: '/'
    }
  ],
  // https://router.vuejs.org/en/advanced/scroll-behavior.html
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

var vm = new Vue({
  el: '#app',
  router,
  i18n,
  render: h => h(App)
})
