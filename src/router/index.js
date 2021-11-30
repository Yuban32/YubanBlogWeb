import {
    createRouter,
    createWebHashHistory
} from 'vue-router'
// new 转换成工厂函数
const Home = () => import('../views/home.vue')
const Article = () => import('../views/article.vue')
const About = () => import('../views/about.vue')
const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
            path: '/',
            component:Home
        },
        {
            path: '/article',
            component:Article,
            props:route =>({query:route.articleId})
        },
        {
        path:'/about',
        component:About
        },
        
    ],
})
router.beforeEach((to,from,next)=>{
    document.documentElement.scrollTop=0
    next()
    
})

export default router