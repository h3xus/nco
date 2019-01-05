<template lang="html">
  <div class="page-body">
    <div class="content register">
      <div class="content-title rgb-57-57-57">{{ $t("message.contact_tab_title") }}</div>
      <contact-component></contact-component>
    </div>
  </div>
</template>

<script src='./contactus-page.js'></script>

<style lang="sass" scoped>
.section
  margin-top: 0px

.section-description
  width: 100%
  font-size: 17px

.nav-footer
  border-top: 2px solid #eee

.content
  width: 56%
  border: 1px solid transparent
  margin-top: 5%

.page-body
  background-color: #FFFFFF
  padding-top: 0px
  padding-bottom: 0px

.about-content-title
  font-size: 19px
  font-family: notoSans_semibold

  &.nutrition
    color: #3FB0E5
  &.dietary-sensitivities
    color: #679C41
  &.fitness
    color: #A11D52

.about-content-layouts
  display: flex
  margin-bottom: 6%

  .about-content-layout
    width: 50%
    display: flex
    flex-wrap: wrap

    .about-content-layout-card
      display: flex
      justify-content: space-between
      align-items: center
      width: 100%
      margin: 4% 0px

      .about-content-text
        // width: 83%
        flex: 1 1 auto
        padding-left: 2%

        p:nth-child(10n+1)
          font-size: 16px
          font-family: notoSans_bold

        p:nth-child(10n+2)
          font-size: 14px
          font-family: notoSans_light
          width: 90%

      .about-content-img
        display: flex
        width: 60px
        min-width: 60px
        height: 60px
        border-radius: 50%
        justify-content: center
        align-items: center
        border: 1px solid transparent

        // Nutrition Part
        &.vit-a
          background-color: #9bb433
        &.vit-b2
          background-color: #908980
        &.vit-c
          background-color: #8CABB2
        &.vit-d
          background-color: #78BDE2
        &.vit-e
          background-color: #939A72
        &.folic-acid
          background-color: #BCA772
        &.iron
          background-color: #755B5C
        &.calcium
          background-color: #684BA3

        // Dietary Sensitivities
        &.alcohol
          background-color: #BC9FAD
        &.salt
          background-color: #B9BAE6
        &.carbohydrate
          background-color: #83674B
        &.super-taster
          background-color: #936060
        &.fat
          background-color: #908070
        &.sweet-tooth
          background-color: #94A1A8

        // Fitness
        &.aerobic
          background-color: #FFEC4A
        &.metabolic
          background-color: #BFB1A9
        &.body
          background-color: #9FA393
        &.obesity
          background-color: #A88A8A
        &.weight-loss
          background-color: #E6F5BD
        &.recovery
          background-color: #A4AAB4
        &.bloodflow
          background-color: #BF928C
        &.endurance
          background-color: #BFB1A9
        &.oxygen
          background-color: #CEB7A5
        &.power
          background-color: #8BC1BD

        img
          width: 40px

// 加上框線，debug 用途
.section.about-fitlife
  margin-top: 5%
//   *
//     border: 1px solid #333


// Tablet version on Desktop
@media (min-width: 768px) and (max-width: 1024px)
  .content
    width: 75%

// Mobile version on Desktop
@media (max-width: 767px)
  .content
    width: 100%
    margin-top: 10%

  .section-title
    width: 100%

  .about-content-layouts
    display: block

    .about-content-layout
      width: 100%

</style>
