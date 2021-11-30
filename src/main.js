import { createApp } from 'vue'
import App from './App.vue'
// 引入Vue-router 配置文件
import router from './router/index'
// 引入Highlight 代码高亮
import VueHighlightJS from 'vue3-highlightjs'
import 'vue3-highlightjs/styles/atom-one-dark.css'

const app = createApp(App)

// 将Highlight挂载到app上
app.use(VueHighlightJS)
// 将Vue-router挂载到app上
app.use(router)
app.mount('#app')

// 全局引入主题配色样式文件
import './assets/css/theme.css'

// 引入全局样式
import './assets/css/Bus.css'