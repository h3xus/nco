<template lang="html">
  <div class="container"> 
      <!-- container 1 -->
      <div class="row">
        <div class="col-6 boxy-white grid-center">
          <div class="content">
            <h1>{{ $t("message.contact_tab_title") }}</h1>
            <p>{{ $t("message.contact_tab_paragraph1") }}</p>
            <p>{{ $t("message.contact_tab_paragraph2") }}</p>
          </div>
        </div>
      </div>
      <!-- section 2 -->
        <div class="row">
          <div class="col-8">
            <contact-component class="contents col-6"></contact-component>
        </div>
    </div>
  </div>
</template>

<script src='./contactus-page.js'></script>

<style lang="scss" scoped>
@import '/contactus-style.scss'
</style>
