import {
    createRouter,
    createWebHistory
} from 'vue-router'
// new 转换成工厂函数
const Home = () => import('../views/home.vue')
const Article = () => import('../views/article.vue')
const AritcleList = () => import('../views/articleList.vue')
const About = () => import('../views/about.vue')
const NotFound = () => import('../views/404.vue')
const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            component:Home
        },
        {
            path: '/article/:articleID',
            component:Article
        },
        {path:'/articlelist',
        component:AritcleList
    },
        {
        path:'/about',
        component:About
        },
        {
            path:'/404',
            component:NotFound
        },
        
    ],
})
router.beforeEach((to,from,next)=>{
    document.documentElement.scrollTop=0
    next()
    
})

export default router