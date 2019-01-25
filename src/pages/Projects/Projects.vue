<template lang="html">
    <div class="container">
      <!-- container 1 -->
      <div class="row">
        <div class="col-6 boxy-white grid-center">
          <div class="content">
            <h1 class="purple-txt">{{ $t("message.projects_tab_title") }}</h1>
            <p>{{ $t("message.projects_tab_subtitle") }}</p>
          </div>
        </div>
        <div class="col-xs-6 col-md-4"></div>
      </div>
      <!-- section 2 -->
      <div class="row">
        <div class="col-9 boxy contents">
          <ul id="projects">
            <project-slider :current="currentSlide" :slider="ShowProjectContent"></project-slider>
          </ul>  
          <div class="pointer-selector">
            <div v-for="(show, index)  in ShowProjectContent" @click="changeSlide(index)" :model="index" :class="{ active: checkCurrentSlide(index)}" class="pointer">{{show.index}}</div>
          </div>

          <div class="alter-contents">
            <p> {{ $t("message.projects_tab_lasttitle") }}</p>
          </div>         
        </div>
      </div>
    </div>
</template>

<script src='./projects-page.js'></script>

<style lang="scss" scoped>
@import './projects-style.scss';
</style>
