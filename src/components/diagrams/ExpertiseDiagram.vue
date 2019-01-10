<template>
          <div class="icon-box">
            <div class="icon-1 icon">
              <div class="icon-img">
                <img src="./../../assets/images/diagrams/expertise/pr.png" alt="icon">
              </div>
              <span>{{ $t("message.about_tab_icon1") }}</span></div>
            <div class="icon-2 icon">
              <div class="icon-img">
                <img src="./../../assets/images/diagrams/expertise/logistic.png" alt="icon">
              </div>
              <span>{{ $t("message.about_tab_icon2") }}</span></div>
            <div class="icon-3 icon">
              <div class="icon-img">
                <img src="./../../assets/images/diagrams/expertise/food.png" alt="icon">
              </div>
              <span>{{ $t("message.about_tab_icon3") }}</span></div>
            <div class="icon-4 icon">
              <div class="icon-img">
                <img src="./../../assets/images/diagrams/expertise/logistic_2.png" alt="icon">
              </div>
              <span>{{ $t("message.about_tab_icon4") }}</span></div>
            <div class="icon-5 icon">
              <div class="icon-img">
                <img src="./../../assets/images/diagrams/expertise/trade.png" alt="icon">
              </div>
              <span>{{ $t("message.about_tab_icon5") }}</span></div>
          </div>  
</template>

<script>
export default {
  name: "ExpertiseDiagram"
}
</script>


<style lang="scss" scoped>
.icon{
    transition: transform .2s ease-in;
  &:hover {
    transform: scale(1.2);
    // .icon-img img{
    // }
  }
}
</style>
