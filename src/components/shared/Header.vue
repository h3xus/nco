<template lang="html">
<div class="header">
  <nav class="navbar">
    <img src="./../../assets/images/logo.png" class="logo" alt="NCON Logo">
    <div class="menu-toggle" id="mobile-menu">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </div>
    <ul class="nav no-search">
      <li class="nav-item">
        <router-link :to="'/' + switchLanguage + '/about'">
          {{ $t("message.about_tab") }}
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="'/' + switchLanguage + '/projects'">
          {{ $t("message.projects_tab") }}
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="'/' + switchLanguage + '/join-us'">
          {{ $t("message.join_us_tab") }}
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="'/' + switchLanguage + '/contact-us'">
          {{ $t("message.contact_us_tab") }}
        </router-link>
      </li>
    </ul>
  </nav>
  <div class="topbox"></div>
</div>
</template>

<script src='./header-component.js'></script>
 
<style lang="sass" >
.topbox 
  height: 70px
  width: 100%
/* NAVIGATION */
.scrolling 
   background: #fff
   z-index: 1
.navbar 
  position: fixed
  display: grid
  grid-template-columns: 1fr 3fr
  align-items: center
  overflow: hidden
  width: 100%
.navbar img 
  height: 25px
  width: auto
  justify-self: start
  margin-left: 48px
.navbar ul 
  list-style: none
  display: grid
  grid-template-columns: repeat(5,3fr)
  justify-self: end
  margin-right: 1em
.nav-item
  text-align: center
.nav-item a 
  color: #000
  font-size: 0.7rem
  font-weight: bolder
  text-decoration: none
  transition: color 0.3s ease-out
  text-transform: uppercase
.nav-item a:hover 
  color: #3498db
/* HAMBURGER MENU & ANIMATION */
.menu-toggle .bar
  width: 25px
  height: 3px
  background-color: #3f3f3f
  margin: 5px auto
  -webkit-transition: all 0.3s ease-in-out
  -o-transition: all 0.3s ease-in-out
  transition: all 0.3s ease-in-out
.menu-toggle 
  justify-self: end
  margin-right: 25px
  display: none
.menu-toggle:hover
  cursor: pointer
#mobile-menu.is-active .bar:nth-child(2)
  opacity: 0
#mobile-menu.is-active .bar:nth-child(1)
  -webkit-transform: translateY(8px) rotate(45deg)
  -ms-transform: translateY(8px) rotate(45deg)
  -o-transform: translateY(8px) rotate(45deg)
  transform: translateY(8px) rotate(45deg)
#mobile-menu.is-active .bar:nth-child(3)
  -webkit-transform: translateY(-8px) rotate(-45deg)
  -ms-transform: translateY(-8px) rotate(-45deg)
  -o-transform: translateY(-8px) rotate(-45deg)
  transform: translateY(-8px) rotate(-45deg)
/* Media Queries */

  /* Mobile Devices - Phones/Tablets */

@media only screen and (max-width: 720px) 
  .features 
    flex-direction: column
    padding: 50px
  /* MOBILE HEADINGS */  
  h1 
    font-size: 1.9rem  
  h2
    font-size: 1rem  
  p 
    font-size: 0.8rem
  /* MOBILE NAVIGATION */
  .navbar ul 
    display: flex
    flex-direction: column
    position: absolute
    justify-content: start
    top: 55px
    background-color: #fff
    width: 100%
    height: 100vh
    transform: translate(-101%)
    text-align: center;
    overflow: hidden  
  .navbar li 
    padding: 15px  
  .navbar li:first-child 
    margin-top: 50px  
  .navbar li a 
    font-size: 1rem
  .menu-toggle, .bar 
    display: block
    cursor: pointer
  .mobile-nav 
    transform: translate(0%)!important;
</style>
