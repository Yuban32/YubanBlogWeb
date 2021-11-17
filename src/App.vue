<script setup>
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

  import Nav from './components/nav.vue'
  import HomePage from './views/home.vue'
</script>

<template>
  <Nav/>
  <HomePage/>
</template>

<style>
:root{
  /* 白色系主题
  导航栏字体颜色是 #338bff;
  导航栏背景颜色是 #f2f2f2;
  home背景颜色是 #fff;
  */
  /* 暗色系主题
  导航栏背景颜色 #242526
  导航栏字体颜色 #f5f6f7
  home背景颜色 #18191a
  */
    --nav_text_color:#338bff;
    --theme_hemo_bg_color:#fff;
    --theme_nav_bg_color:#F2F2F2;
}
  *{
    font-family: Avenir, Helvetica, Arial, sans-serif;
    padding: 0;
    margin: 0;
  }
  #app {

  }
</style>