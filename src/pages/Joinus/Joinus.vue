<template lang="html">
<div class="container">
      <!-- container 1 -->
      <div class="row">
        <div class="col-6 boxy-white">
          <div class="content">
            <div class="alter-content">
              <p> lorem ipsum </p>
            </div>
          </div>
        </div>
      </div>
</div>
</template>

<script src='./joinus-page.js'></script>

<style lang="sass" scoped>
.content
  position: relative
  width: 50vw
  background: #8354f0
  margin-top: 5%
  margin-bottom: 10%
  min-height: 400px
  color: #fff
  padding: 4vw 2vw
  p
    color: #fff
.alter-content
  position: absolute
  left: 4%
  top: 80%
  width: 56vw
  // border: 1px solid red
  margin-top: 5%
  background: #ccc
</style>
