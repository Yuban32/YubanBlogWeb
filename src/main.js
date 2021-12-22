import { createApp } from 'vue'
import App from './App.vue'
// import VueAxios from 'vue-axios'
import axios from './axios/axios'
// 引入Vue-router 配置文件
import router from './router/index'
// 引入Highlight 代码高亮
import VueHighlightJS from 'vue3-highlightjs'
import 'vue3-highlightjs/styles/atom-one-dark.css'

import store from './store/store'

// 引入v-md-editor
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github';
import VMdPreview from '@kangc/v-md-editor/lib/preview.js';
// highlightjs
import hljs from 'highlight.js';
VMdPreview.use(githubTheme, {
  Hljs: hljs,
});
import Prism from 'prismjs';

// 拓展markdown-it

VueMarkdownEditor.use(vuepressTheme, {
  Prism,
});


const app = createApp(App)

// 将Highlight挂载到app上
app.use(VueMarkdownEditor)
app.use(VueHighlightJS)
// 将Vue-router挂载到app上
app.use(router)
app.use(store)
app.use(VMdPreview);
app.config.globalProperties.$axios = axios
app.mount('#app')

// 全局引入主题配色样式文件
import './assets/css/theme.css'

// 引入全局样式
import './assets/css/Bus.css'
