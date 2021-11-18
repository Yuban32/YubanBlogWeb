import { createRouter, createWebHistory } from 'vue-router'
// new 转换成工厂函数
const router = createRouter({
   history: createWebHistory(),
   routes: [
       {path:'/',component:()=>import('../views/home.vue')},
       { path: '/article', component: () => import('../views/article.vue') },
   ]
})

export default router