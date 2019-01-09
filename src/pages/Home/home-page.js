import AboutDiagram from './../../components/diagrams/AboutDiagram.vue'
import ExpertiseDiagram from './../../components/diagrams/ExpertiseDiagram.vue'
import RoundButton from './../../components/elements/RoundButton.vue'
import YoutubeVideo from './../../components/elements/YtVideo.vue'

export default {
    components: {
        AboutDiagram,
        RoundButton,
        YoutubeVideo,
        ExpertiseDiagram
    },
    mounted() {
        document.querySelector(".navbar").classList.add("white");
        // document.body.addEventListener('wheel', this.doMagic)
        document.getElementById("scroll-play").addEventListener('wheel', this.doMagic);
    },
    methods: {
        scrollIt: function(destination, duration = 200, easing = 'linear', callback) {

            const easings = {
                linear(t) {
                    return t;
                },
                easeInQuad(t) {
                    return t * t;
                },
                easeOutQuad(t) {
                    return t * (2 - t);
                },
                easeInOutQuad(t) {
                    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
                },
                easeInCubic(t) {
                    return t * t * t;
                },
                easeOutCubic(t) {
                    return (--t) * t * t + 1;
                },
                easeInOutCubic(t) {
                    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
                },
                easeInQuart(t) {
                    return t * t * t * t;
                },
                easeOutQuart(t) {
                    return 1 - (--t) * t * t * t;
                },
                easeInOutQuart(t) {
                    return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
                },
                easeInQuint(t) {
                    return t * t * t * t * t;
                },
                easeOutQuint(t) {
                    return 1 + (--t) * t * t * t * t;
                },
                easeInOutQuint(t) {
                    return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
                }
            };

            const start = window.pageYOffset;
            const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
            const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
            const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
            const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
            const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

            if ('requestAnimationFrame' in window === false) {
                window.scroll(0, destinationOffsetToScroll);
                if (callback) {
                    callback();
                }
                return;
            }
            function scroll() {
                const now = 'now' in window.performance ? performance.now() : new Date().getTime();
                const time = Math.min(1, ((now - startTime) / duration));
                const timeFunction = easings[easing](time);
                window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));
                if (window.pageYOffset === destinationOffsetToScroll) {
                    if (callback) {
                        callback();
                    }
                    return;
                }
                requestAnimationFrame(scroll);
            }
            scroll();
        },
        doMagic: function(e) {
            let tags = ['SECTION']
            if (tags.includes(e.target.nodeName)) {
                let next = e.target.nextElementSibling,
                    prev = e.target.previousElementSibling;
                    console.log(next)
            } else {
                let next = e.target.closest(tags).nextElementSibling,
                    prev = e.target.closest(tags).previousElementSibling;
                    console.log(next)
            }
            if (e.deltaY < 0) {
                e.preventDefault;
                if (tags.includes(prev.nodeName)) {
                    this.scrollIt(prev, 800, 'easeInOutQuad');                    
                    e.target.closest(tags).classList.remove('show');
                    prev.classList.add('show');
                }
            } else if (e.deltaY > 0) {
                e.preventDefault;
                if (tags.includes(next.nodeName)) {
                    this.scrollIt(next,800,'easeInOutQuad');
                    e.target.closest(tags).classList.remove('show');
                    next.classList.add('show');
                }
            } else {
                return false
            }
        }
    }
}