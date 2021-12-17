<script setup>
  import Nav from './components/nav.vue'
  import HomePage from './views/home.vue'
  import Footer from './components/Footer.vue'
  import Toast from './components/Toast.vue';
</script>

<script>
  export default {
    data() {
      return {
        navOpacity: 0,
        toastMsg:{
          msg:'密码错误',
          ative:true
        }
      }
    },
    methods: {
      handlerNavOpacity() {
        // console.log(document.documentElement.scrollTop / document.querySelector('.global-class').offsetHeight);
        try {
          let element = document.querySelector('.global-class');
          if (element == null) {
            this.navOpacity = 1
            return
            console.log(null);
          } else {
            let value = document.documentElement.scrollTop / element.offsetHeight >= 1 ?
              1 : document.documentElement.scrollTop / element.offsetHeight;
            this.navOpacity = value;

          }
        } catch (error) {
          // console.warn('元素不存在,但不影响运行');
        }
      }
    },
    watch:{
      '$store.state.error':(newVal,olaVal)=>{
        console.log(newVal,oldVal);
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handlerNavOpacity)
      window.addEventListener('resize', this.handlerNavOpacity);
    },
    beforeUnmount() {
      window.removeEventListener('scroll', this.handlerNavOpacity);
      window.removeEventListener('resize', this.handlerNavOpacity);
    }
  }
</script>
<template>
  <div class="app">
    <Toast :msg="toastMsg" />
    <Nav class="sticky" />
    <div id="router-view" ref="router_view">
      <router-view :key="$route.fullPath"></router-view>
    </div>
    <Footer class="footer" />
  </div>
</template>
<style scoped>
  /* 给nav绑定透明度 */
  .sticky :deep(.bg) {
    opacity: v-bind(navOpacity);
  }
</style>
<style>
  @import './assets/css/mediaQuery.css';

  * {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    padding: 0;
    margin: 0;
    transition: color .3s;
    transition: background-color 0.3s;
    list-style: none;
  }

  body {
    background-color: var(--theme_home_bg_color);
    position: relative;
  }

  /* 版心部分 */
  .container {
    max-width: 1200px;
    padding: 0 16px;
    height: 100%;
    margin: 0 auto;
    box-sizing: border-box;
  }

  #router-view {
    position: relative;
    top: -60px;
  }

  .sticky {
    /* sticky定位 */
    /* 给nav添加透明度效果 */
    position: sticky;
    top: 0;
    z-index: 9999;
  }

  @media screen and (max-width:570px) {
    .container {
      padding: 0 10px;
    }
  }
</style>