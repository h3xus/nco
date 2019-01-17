<template lang="html">
  <full-page ref="fullpage" :options="options" id="fullpage">
    <div class="section hero">
      <div class="container"> 
        <h1>{{ $t("message.home_tab_hero_title1") }}<br>{{ $t("message.home_tab_hero_title2") }}</h1>
        <!-- <button class="next" @click="">Next</button> -->
        <round-button classes="large indigo secbtn" buttonName="Read more" @action="$refs.fullpage.api.moveSectionDown()"></round-button>
      </div>
    </div>
    <div class="section">
        <div class="container"> 
          <div>
            <h2>{{ $t("message.home_tab_section1_title1") }}</h2>
            <h2>{{ $t("message.home_tab_section1_title2") }}</h2>
            <h5>{{ $t("message.home_tab_section1_description") }}</h5>
          </div>
          <about-diagram></about-diagram>
          <round-button classes="large indigo secbtn center" buttonName="Read more" @action="$refs.fullpage.api.moveSectionDown()"></round-button>
      </div>
    </div>
    <div class="section">
      <div class="container"> 
        <div>
          <h2>{{ $t("message.home_tab_section2_title") }}</h2>
        </div>
        <expertise-diagram></expertise-diagram>
        <round-button classes="large indigo secbtn center" buttonName="Read more" @action="$refs.fullpage.api.moveSectionDown()"></round-button>
      </div>
    </div>
    <div class="section results">
      <div class="container"> 
        <div class="double-column">
          <div>
            <h2>{{ $t("message.home_tab_section3_title") }}</h2>
            <round-button classes="large indigo secbtn center" buttonName="Read more" @action="$refs.fullpage.api.moveSectionDown()"></round-button>
          </div>
          <div>
            <h3>{{ $t("message.home_tab_section3_description") }}</h3>
            <results-diagram></results-diagram>
          </div>
        </div>
      </div>
    </div>
    <div class="section video-section">
        <div class="container"> 
        <h2 class="center">{{ $t("message.home_tab_section4_title") }}</h2>
          <youtube-video></youtube-video>
        </div>
    </div>
    <div class="section fp-auto-height footer" id="section-last" data-anchor="footer" style="height:300px">      
        <footer-part style="height:300px">
        </footer-part>
    </div>
  </full-page>
</template>

<script src='./home-page.js'></script>

<style lang="scss" scoped>
@import '/home-style.scss'
</style>
