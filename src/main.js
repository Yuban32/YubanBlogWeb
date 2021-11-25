import { createApp } from 'vue'
import App from './App.vue'
// 引入Vue-router 配置文件
import router from './router/index'
// 引入Highlight 代码高亮
import VueHighlightJS from 'vue3-highlightjs'
import 'highlight.js/styles/atom-one-dark.css'

const app = createApp(App)

// 由于main.js只执行一次  所以此方法只能刷新后使用  不能做到试试切换
// var sliderBarState = localStorage.getItem('sliderBarState');
// switch(sliderBarState){
//     case 'white':
//         import('highlight.js/styles/atom-one-dark.css')
//     break
//     case 'dark':
//         import('highlight.js/styles/solarized-light.css')
//     break
//     default:
//         import('highlight.js/styles/atom-one-dark.css')

// }
// console.log(sliderBarState);

// 将Highlight挂载到app上
app.use(VueHighlightJS)
// 将Vue-router挂载到app上
app.use(router)
app.mount('#app')

// 全局引入主题配色样式文件
import './assets/css/theme.css'

// 引入全局样式
import './assets/css/Bus.css'