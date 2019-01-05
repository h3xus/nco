<template lang="html">
  <div class="nav-footer">
    <div class="nav-footer-content">
      <div class="left-footer">
        <a href="https://www.facebook.com"><i class="icon facebook">F</i></a>
        <a href="https://www.linkedin.com"><i class="icon linkedin">L</i></a><br/>
        <span><i class="phone">Telefon</i>+47 969 78 805</span>
        <a href="mailto:contact@ncon.biz"><i class="mail"></i>contact@ncon.biz</a>
      </div>
      <div class="logo-footer">
        <img src="./../../assets/images/footer-logo.png" class="logo" alt="NCON Logo">
      </div>
      <div class="right-footer">
        <router-link :to="'/en/privacy-policy'">
            {{ $t("message.privacy_policy") }}
            </router-link>
        <span>NCON Natalia </span>
      </div>
      
    </div>
  </div>
</template>

<script src='./footer-component.js'></script>

<style lang="sass">
.nav-footer
  background: #ACACAC
  width: 100%
  height: 90px
  color: #FFF
  span, a
    font-size: 10px;
    color: #FFF  
  .nav-footer-content
    display: grid
    padding-top: 10px
    grid-template-columns: 1fr auto 1fr
    align-items: center
    overflow: hidden
    width: 80%
    margin-left: 10%
    margin-right: 10%
    .left-footer
      width: auto
      justify-self: start
      margin-left: 40px
    .logo-footer img
      width: 100px
    .right-footer
      width: auto
      justify-self: end
      margin-right: 40px
    .icon
      width: 18px
      height: 18px
    .facebook
      // background-image: url('./../../assets/images/fb.png')
    .linkedin
      // background: url('../../../assets/images/in.png')
</style>
