import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')

// 全局引入主题配色样式文件
import './assets/css/theme.css'
// 引入Vue-router

