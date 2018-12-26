<template lang="html">
    <div class="container">
      <!-- container 1 -->
      <div class="row">
        <div class="col-xs-12 col-md-8 boxy-white">
          <div class="content">
            <h1>{{ $t("message.projects_tab_title") }}</h1>
            <p>{{ $t("message.projects_tab_subtitle") }}</p>
          </div>
        </div>
        <div class="col-xs-6 col-md-4"></div>
      </div>
      <!-- section 2 -->
      <div class="row">
        <div class="col-xs-12 col-md-9 boxy">
          <ul id="projects">
            <li v-repeat="item in items" >
              <div class="double-column">  
                <div class="left-column">
                  <h2>{{ item.person }}</h2>
                  <p>{{ item.company }}</p> 
                </div>
                <div class="right-column">
                    <!-- {{$t("message.projects_tab_projects")}} -->
                </div>
              </div>    
            </li>
          </ul>         
        </div>
        <div class="col-xs-6 col-md-5"></div>
      </div>
      <!-- section 3 -->
      <div class="row">
        <div class="col-xs-12 col-md-12 boxy-grey ">
          <div class="content">
            <h2> {{ $t("message.about_tab_approach_title") }}</h2> 
            <p> {{ $t("message.about_tab_approach") }}</p>
          </div>            
        </div>
      </div
      <!-- section    -->

    </div>
</template>

<script src='./projects-page.js'></script>

<style lang="sass" scoped>

</style>
