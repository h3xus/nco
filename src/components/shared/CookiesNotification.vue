<template>
    <div class="cookies-approvment" v-if="cookies">
        <div class="cookie-approvment-content">
            <p>We use cookies to offer you a better experience and to analyze site traffic. By continuing to browse this site, you agree to this use of cookies.</p>
            <p>
            <router-link :to="'/en/privacy-policy'">
            {{ $t("message.privacy_policy") }}
            </router-link>
            </p>
        </div>
        <div class="cookie-buttons">
            <round-button buttonName="Accept" v-on:click="this.approveCookies"></round-button>
            <round-button buttonName="Cancel" v-on:click="this.approveCookies"></round-button>
            <!-- <button v-on:click="approveCookies">Accept</button> -->
        </div>
    </div>
</template>

<script>
import RoundButton from './../elements/RoundButton.vue'

export default {
    data () {
        return {
            approval: 0,
            cookies: 1
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

<style lang="sass" scoped>
.cookies-approvment
    position: fixed
    bottom: 0
    width: 100%
    height: 120px
    background-color: #fff
    color: #000
    border-top: 2px solid #000
    padding: 1em
    .cookie-approvment-content p
        font-size: 10px
    .cookie-approvment-content button
        border-radius: 10px
        
</style>
