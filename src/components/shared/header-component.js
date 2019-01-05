export default {
  data () {
    return {
      scrollPosition: null,
      currentComponent: '',
      switchLanguage: 'en'
    }
  },
  // 為了加上 header 陰影花了快一小時 囧
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.updateScroll)
  },
  methods: {
    changeLanguage(lang) {
      this.switchLanguage = lang
      // https://kazupon.github.io/vue-i18n/en/sfc.html
      this.$i18n.locale = lang
      this.currentComponent = this.$route.path.split("/")[2]      
    },
    updateScroll() {
      this.scrollPosition = window.scrollY
      // console.log(this.scrollPosition)
      if (this.scrollPosition > 100) {
        document.querySelector(".navbar").classList.add("scrolling")
      } else {
        document.querySelector(".navbar").classList.remove("scrolling")
      }
    }
  }
}