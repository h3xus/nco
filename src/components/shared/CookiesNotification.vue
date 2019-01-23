<template>
    <div class="cookies-approvment grid-container" v-if="cookies">
            <div>
                <img width="100px" :src="image" alt="">
            </div>  
            <div class="cookie-approvment-content">
                <p>We use cookies to offer you a better experience and to analyze site traffic. By continuing to browse this site, you agree to this use of cookies.</p>
                <p>
                <router-link :to="'/en/privacy-policy'">
                {{ $t("message.privacy_policy") }}
                </router-link>
                </p>
                <div class="cookie-buttons">
                    <round-button classes="indigo" buttonName="Accept" @action="approveCookies"></round-button>
                    <round-button classes="red" buttonName="Cancel" @action="approveCookies"></round-button>
                    <!-- <button v-on:click="approveCookies">Accept</button> -->
                </div>
            </div>                  
    </div>
</template>

<script>
import RoundButton from './../elements/RoundButton.vue'
import cookieSVG from './../../assets/images/cookies-couple-svgrepo-com.svg'
export default {
    data () {
        return {
            approval: 0,
            cookies: 0,
            image: cookieSVG
        }
    },
    created () {
                // this.$cookie.set("keyName", keyValue, "expiring time")                
    },
    mounted () {
    },
    methods: {
        checkForCookies: function () {
            if( localStorage.getItem('NCON-cookies-approve') == 0){
                this.approval = 1;
            }
            // localStorage.setItem('NCON-cookies-approve', 0);
        },
        approveCookies: function() {
             this.cookies = 0;
             localStorage.setItem('NCON-cookies-approve', 0);
        }
    },
    components: {
        RoundButton
    }
}
</script>

<style lang="scss" scoped>
.cookies-approvment {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 120px;
    background-color: #fff;
    color: #000;
    border-top: 1px solid #ccc;
    padding: 1em;
    .cookie-approvment-content {
        p {
            font-size: 10px;
        }
        button {
            border-radius: 10px;
        }
    }
}
.grid-container {
  display: grid;    
  align-content: space-evenly;
  grid-template-columns: 0.2fr 1.8fr 0.5fr;
  grid-template-rows: 1fr;
  grid-column-gap: 1em;;
}
</style>
