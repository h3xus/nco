<template lang="html">
    <div class="container">
      <!-- container 1 -->
      <div class="row">
        <div class="col-6 boxy-white grid-center">
          <div class="content">
            <h1>{{ $t("message.projects_tab_title") }}</h1>
            <p>{{ $t("message.projects_tab_subtitle") }}</p>
          </div>
        </div>
        <div class="col-xs-6 col-md-4"></div>
      </div>
      <!-- section 2 -->
      <div class="row">
        <div class="col-9 boxy contents">
          <ul id="projects">
              <div class="double-column">  
                <div class="left-column">      
                  <div class="avatar"><div></div></div>            
                </div>
                <div class="right-column">
                  <div class="text-content text-center">
                    <p>{{$t("message.projects_tab_project1_claim")}}</p>
                    <p>{{$t("message.projects_tab_project1_testemonial")}}</p>
                    <p>{{$t("message.projects_tab_project1_details")}}</p>
                    <p>{{$t("message.projects_tab_project1_person")}}</p>
                    <p>{{$t("message.projects_tab_project1_company")}}</p>
                  </div>
                </div>
              </div>    
          </ul>  
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
