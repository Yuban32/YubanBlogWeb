import { createApp } from 'vue'
import App from './App.vue'
// 引入Vue-router 配置文件
import router from './router/index'

const app = createApp(App)
// 将Vue-router挂载到app上
app.use(router)
app.mount('#app')

// 全局引入主题配色样式文件
import './assets/css/theme.css'

