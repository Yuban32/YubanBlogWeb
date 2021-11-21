<script setup>
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

  import Nav from './components/nav.vue'
  import HomePage from './views/home.vue'
</script>

<template>
  <Nav/>
  <router-view></router-view>
</template>

<style>

  *{
    font-family: Avenir, Helvetica, Arial, sans-serif;
    padding: 0;
    margin: 0;
    transition: color .3s;
    transition: background-color 0.3s;
    list-style: none;
  }
  #app {
    
  }
  /* 版心部分 */
  .container{
    width: 75%;
    margin: 0 auto;
  }
</style>