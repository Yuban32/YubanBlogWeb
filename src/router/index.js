import {
    createRouter,
    createWebHashHistory
} from 'vue-router'
// new 转换成工厂函数
const Home = () => import('../views/home.vue')
const Article = () => import('../views/article.vue')
const About = () => import('../views/about.vue')
const Login = () => import('../views/login.vue')
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
        {
            path:'/login',
            component:Login
        }
        
    ],
})
router.beforeEach((to,from,next)=>{
    document.documentElement.scrollTop=0
    next()
    
})

export default router