<script setup>
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

  import Nav from './components/nav.vue'
  import HomePage from './views/home.vue'
</script>

<template>
  <Nav class="sticky"/>
  <router-view></router-view>
</template>

<style>
  body{
    background-color: var(--theme_home_bg_color);
  }
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
  .sticky{
    /* sticky定位 */
    position: sticky;
    top: 0;
    z-index: 99;
  }
  /* 版心部分 */
  .container{
    width: 75%;
    height: 100%;
    margin: 0 auto;
    /* 占位边框,完成开发后需要删除或者注释掉 */
    /* border: 1px solid blue; */
  }
</style>