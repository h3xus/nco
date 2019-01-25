import ProjectSlider from './../../components/slider/ProjectsSlider.vue';
import Content from './../projects.json';

export default {
  data() {
      return {
          currentSlide: 0,
          ShowProjectContent: Content
      };
  },
  methods: {
      changeSlide: function(index){
        this.currentSlide = index;
        console.log(this.currentSlide);
      },
      checkCurrentSlide: function (index) {
           if (index == this.currentSlide) {
             return true;
           }
      }
  },
  components: {
    ProjectSlider
  }
}