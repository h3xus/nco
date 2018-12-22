<template lang="html">
    <div class="container">
      <!-- container 1 -->
      <div class="row">
        <div class="col-xs-12 col-md-8 boxy-white boxy-half_height">
          <div class="content">
            <h1>{{ $t("message.about_tab_title") }}</h1>
            <p>{{ $t("message.about_tab_content") }}</p>
          </div>
        </div>
        <div class="col-xs-6 col-md-4"></div>
      </div>
      <!-- section 2 -->
      <div class="row">
        <div class="col-xs-12 col-md-9 boxy boxy-half_height">
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
        <div class="col-xs-12 col-md-12 boxy-white ">
        </div>
      </div>
    </div>
</template>

<script src='./about-page.js'></script>

<style lang="sass" scoped>
.boxy 
  background: #5945F3
  padding: 5px
  border: 2px solid #ccc
  height: 100vh
  color: #fff
.boxy h2, .boxy p, .boxy span
  color: #fff
.boxy-white
  /* background: #fff */
  padding: 5px
  height: 80vh
.boxy-half_height
  /* height: 70vh */
.double-column
  display: grid
  grid-template-columns: auto auto
  grid-template-rows: auto
.double-column .left-column
  padding: 15%
  justify-self: start
.double-column .left-column p
  font-size: 14px
.double-column .right-column
  padding: 15%
  justify-self: end
.double-column .right-column ol li
  margin-bottom: 30%
.double-column .right-column ol li span:nth-child(1)
  font-size: 24px 
  font-weigth: 700
.double-column .right-column ol li span:nth-child(2)
  margin-top: 20px
  font-size: 8px
  float: left
ol
  list-style: none
  counter-reset: my-awesome-counter
ol li 
  position: relative
  counter-increment: my-awesome-counter
ol li::before 
  position: absolute
  left: -20px
  bottom: 5px
  content: "0" counter(my-awesome-counter) ". "
  color: white
  font-size: 10px
</style>
