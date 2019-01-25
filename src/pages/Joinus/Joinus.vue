<template lang="html">
  <div class="container">
      <!-- container 1 -->
      <div class="row">
        <div class="col-6 boxy-white grid-center">
          <div class="content">
            <h1 class="purple-txt">{{ $t("message.joinus_tab_title") }}</h1>
            <p>{{ $t("message.joinus_tab_paragraph1") }}</p>
            <p>{{ $t("message.joinus_tab_paragraph2") }}</p>
          </div>
        </div>
      </div>
      <!-- section 2 -->
      <div class="row">
        <div class="col-12 main">
            <div class="row">
              <div class="col-6">
                <h4>{{ $t("message.joinus_tab_extratitle") }}</h4>
                <p>{{ $t("message.joinus_tab_paragraph") }}</p>
              </div>
              <div class="col-6 contents">
                <div class="alter-contents">
                  <contact-component class="wide"></contact-component>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script src='./joinus-page.js'></script>

<style lang="scss" scoped>
@import '/joinus-style.scss';
</style>
