import AboutDiagram from './../../components/diagrams/AboutDiagram.vue';
import ExpertiseDiagram from './../../components/diagrams/ExpertiseDiagram.vue';
import ResultsDiagram from './../../components/diagrams/ResultsDiagram.vue';
import RoundButton from './../../components/elements/RoundButton.vue';
import YoutubeVideo from './../../components/elements/YtVideo.vue';

export default {
    name: 'Home',
    data() {
        return {
            options: {
                menu: '#menu',
                fitToSection: true
            },
        }
    },
    components: {
        AboutDiagram,
        RoundButton,
        YoutubeVideo,
        ExpertiseDiagram,
        ResultsDiagram
    },
    mounted() {
        // if (document.querySelector(".section:last-child").classList.contains("fp-completely")) {
        //     console.log("asdd");
        //     document.querySelector(".nav-footer").classList.add("nav-footer-sticky");
        // } else {
        //     document.querySelector(".nav-footer").classList.remove("nav-footer-sticky");
        // }
    }
}
