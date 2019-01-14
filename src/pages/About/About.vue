<template lang="html">
    <div class="container">
      <!-- container 1 -->
      <div class="row">
        <div class="col-6 boxy-white grid-center">
          <div class="content">
            <h1>{{ $t("message.about_tab_title") }}</h1>
            <p>{{ $t("message.about_tab_content") }}</p>
          </div>
        </div>
      </div>
      <!-- section 2 -->
      <div class="row">
        <div class="col-10 boxy">
          <div class="double-column">  
              <div class="left-column">
                <h2>{{ $t("message.about_tab_values") }}</h2>
                <p>{{ $t("message.about_tab_claim") }}</p> 
              </div>
              <div class="right-column">
                <ol>
                  <li>
                      <span class="">{{ $t("message.about_tab_point1_title") }}</span>
                      <span class="">{{ $t("message.about_tab_point1") }}</span>
                  </li>
                  <li>
                      <span class="">{{ $t("message.about_tab_point2_title") }}</span>
                      <span class="">{{ $t("message.about_tab_point2") }}</span>
                  </li>
                  <li>
                      <span class="">{{ $t("message.about_tab_point3_title") }}</span>
                      <span class="">{{ $t("message.about_tab_point3") }}</span>
                  </li>
                </ol>
              </div>            
        </div>    
        </div>
        <!-- <div class="col-6 col-md-5"></div> -->
      </div>
      <!-- section 3 -->
      <div class="row">
        <div class="col-10 boxy-grey ">
          <div class="content">
            <h2> {{$t("message.about_tab_approach_title")}}</h2> 
            <p> {{$t("message.about_tab_approach")}}</p>
          </div>            
        </div>
      </div>
      <!-- section 4 -->
      <div class="row">
        <div class="col-12 boxy-white">
            <!-- diagram -->
        </div>
      </div>
    </div>
</template>

<script src='./about-page.js'></script>

<style lang="scss" scoped>
@import '/about-style.scss'
</style>
