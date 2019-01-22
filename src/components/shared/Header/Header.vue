<template lang="html">
  <header class="header">
    <router-link :to="'/' + switchLanguage + '/home'">
      <div class="logo"></div>
    </router-link>
    <input class="menu-btn" type="checkbox" id="menu-btn" />
    <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
    <ul class="menu">
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
  </header>
</template>

<script src='./header-component.js'></script>

<style lang="scss">
  @import './header-style.scss'
</style>