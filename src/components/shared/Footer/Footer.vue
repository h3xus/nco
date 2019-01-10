<template lang="html">
  <div class="nav-footer">
    <div class="nav-footer-content">
      <div class="left-footer">
        <a href="https://www.facebook.com"><i class="icon facebook"></i></a>
        <a href="https://www.linkedin.com"><i class="icon linkedin"></i></a><br/>
        <span><i class="icon phone"></i><span>+47 969 78 805</span></span>
        <a href="mailto:contact@ncon.biz"><i class="icon mail"></i><span>contact@ncon.biz</span></a>
      </div>
      <div class="logo-footer">
        <img src="./../../../assets/images/footer/footer-logo.png" class="logo" alt="NCON Logo">
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

<style lang="scss" scoped>
@import './footer-style.scss'
</style>
