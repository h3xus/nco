<template lang="html">
<div class="header">
  <nav class="navbar">
    <router-link :to="'/' + switchLanguage + '/'">          
      <!-- <img src="./../../assets/images/logo.png" class="logo" alt="NCON Logo"> -->
      <div class="logo"></div>
    </router-link>
    {{name}}
    <div class="menu-toggle" id="mobile-menu">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </div>
    <ul class="nav no-search">
      <li class="nav-item">
        <router-link :to="'/' + switchLanguage + '/home'">
          {{ $t("message.home") }}
        </router-link>
      </li>
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
</div>
</template>

<script src='./header-component.js'></script>
 
<style lang="scss">
@import './header-style.scss'
</style>
