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

<style lang="scss" scoped>
@import '/contactus-style.scss'
</style>
