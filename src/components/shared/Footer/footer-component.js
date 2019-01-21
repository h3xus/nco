export default {
    data() {
        return {
            name: "Footer-part"            
        }
    },
    methods: {
        checkHome: function(){
            console.log($router.currentRoute.name);
        }
    },
}