<template lang="html">
  <div id="scroll-play">
    <section class="section hero">
      <div class="container"> 
        <h1>{{ $t("message.home_tab_hero_title1") }}<br>{{ $t("message.home_tab_hero_title2") }}</h1>
        <round-button classes="large indigo" buttonName="Read more" @action=""></round-button>
      </div>
    </section>
    <section class="section">
        <div class="container"> 
          <div>
            <h2>{{ $t("message.home_tab_section1_title1") }}</h2>
            <h2>{{ $t("message.home_tab_section1_title2") }}</h2>
            <p>{{ $t("message.home_tab_section1_description") }}</p>
          </div>
          <about-diagram></about-diagram>
      </div>
    </section>
    <section class="section">
      <div class="container"> 
        <div>
          <h2>{{ $t("message.home_tab_section2_title") }}</h2>
        </div>
        <expertise-diagram></expertise-diagram>
      </div>
    </section>
    <section class="section">
      <div class="container"> 
        <div>
          <h2>{{ $t("message.home_tab_section3_title") }}</h2>
          <h3>{{ $t("message.home_tab_section3_description") }}</h3>
        </div>
        <div>
        </div>
      </div>
    </section>
    <section class="section video-section">
        <h2 class="center">{{ $t("message.home_tab_section4_title") }}</h2>
        <div class="grid-wrapper"> 
          <youtube-video></youtube-video>
        </div>
    </section>
  </div>
</template>

<script src='./home-page.js'></script>

<style lang="sass" scoped>
@import './home-style.sass'
</style>
