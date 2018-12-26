<template lang="html">
    <div class="container">
      <!-- container 1 -->
      <div class="row">
        <div class="col-xs-12 col-md-8 boxy-white">
          <div class="content">
            <h1>{{ $t("message.about_tab_title") }}</h1>
            <p>{{ $t("message.about_tab_content") }}</p>
          </div>
        </div>
        <div class="col-xs-6 col-md-4"></div>
      </div>
      <!-- section 2 -->
      <div class="row">
        <div class="col-xs-12 col-md-9 boxy">
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
        <div class="col-xs-6 col-md-5"></div>
      </div>
      <!-- section 3 -->
      <div class="row">
        <div class="col-xs-12 col-md-12 boxy-grey ">
          <div class="content">
            <h2> {{$t("message.about_tab_approach_title")}}</h2> 
            <p> {{$t("message.about_tab_approach")}}</p>
          </div>            
        </div>
      </div>
      <!-- section 4 -->
      <div class="row">
        <div class="col-xs-12 col-md-12 boxy-white">
          <div class="icon-box">
            <div class="icon-1 icon">
              <div class="icon-img">
                <img src="./../../assets/images/icon-1.jpg" alt="icon">
              </div>
              <span>{{ $t("message.about_tab_icon1") }}</span></div>
            <div class="icon-2 icon">
              <div class="icon-img">
                <img src="./../../assets/images/icon-2.jpg" alt="icon">
              </div>
              <span>{{ $t("message.about_tab_icon2") }}</span></div>
            <div class="icon-3 icon">
              <div class="icon-img">
                <img src="./../../assets/images/icon-3.jpg" alt="icon">
              </div>
              <span>{{ $t("message.about_tab_icon3") }}</span></div>
            <div class="icon-4 icon">
              <div class="icon-img">
                <img src="./../../assets/images/icon-4.jpg" alt="icon">
              </div>
              <span>{{ $t("message.about_tab_icon4") }}</span></div>
            <div class="icon-5 icon">
              <div class="icon-img">
                <img src="./../../assets/images/icon-5.jpg" alt="icon">
              </div>
              <span>{{ $t("message.about_tab_icon5") }}</span></div>
          </div>  
        </div>
      </div>
    </div>
</template>

<script src='./about-page.js'></script>

<style lang="sass" scoped>

</style>
