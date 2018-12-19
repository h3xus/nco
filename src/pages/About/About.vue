<template lang="html">
  <div class="page-body">
    <div class="content register">
       <p>{{ $t("message.about_tab_title") }}</p>
    </div> 
    <div class="container">
      <div class="row">
        <div class="col-xs-6 col-md-4"></div>
        <div class="col-xs-12 col-md-8 boxy">.col-xs-12 .col-md-8</div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-md-8 boxy">.col-xs-12 .col-md-8</div>
        <div class="col-xs-6 col-md-4"></div>
      </div>
    </div>
  </div>
</template>

<script src='./about-page.js'></script>

<style lang="sass" scoped>
.boxy 
  background: #5945F3
  padding: 5px
  border: 2px solid #ccc
  height: 100vh
.section
  margin-top: 0px

.section-description
  width: 100%
  font-size: 17px

.nav-footer
  border-top: 2px solid #eee

.content
  width: 56%
  border: 1px solid transparent
  margin-top: 5%

.page-body
  background-color: #FFFFFF
  padding-top: 0px
  padding-bottom: 0px

.about-content-title
  font-size: 19px
  font-family: notoSans_semibold

</style>
