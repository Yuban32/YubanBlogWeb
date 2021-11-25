<script setup>
  import Nav from './components/nav.vue'
  import HomePage from './views/home.vue'
  import Footer from './components/Footer.vue'
</script>

<template>
  <Nav class="sticky" />
  <router-view></router-view>
  <Footer />
</template>

<style>
  body {
    background-color: var(--theme_home_bg_color);
  }

  * {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    padding: 0;
    margin: 0;
    transition: color .3s;
    transition: background-color 0.3s;
    list-style: none;
  }

  #app {}

  .sticky {
    /* sticky定位 */
    position: sticky;
    top: 0;
    z-index: 99;
  }

  /* 版心部分 */
  .container {
    /* width: 75%; */
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
  }
</style>