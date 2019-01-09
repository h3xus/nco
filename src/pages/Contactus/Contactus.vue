<template lang="html">
  <div class="container"> 
        <div class="row">
          <div class="col-8">
            <div class="content">
              <div class="content-title rgb-57-57-57">{{ $t("message.contact_tab_title") }}</div>
              <contact-component class="alter-content"></contact-component>
            </div>
        </div>
    </div>
  </div>
</template>

<script src='./contactus-page.js'></script>

<style lang="sass" scoped>
.content
  position: relative
  width: 50vw
  background: #5A46F3
  margin-top: 5%
  margin-bottom: 10%
  min-height: 300px
  color: #fff
  padding: 4vw 2vw
  p
    color: #fff
.alter-content
  position: absolute
  left: 40%
  top: 10%
  width: 30vw
  height: 50vh
  // border: 1px solid red
  margin-top: 5%
  padding: 1vw
  background: #ccc
</style>
