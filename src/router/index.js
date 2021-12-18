import {
    createRouter,
    createWebHashHistory
} from 'vue-router'
// new 转换成工厂函数
const Home = () => import('../views/home.vue')
const Article = () => import('../views/article.vue')
const About = () => import('../views/about.vue')
const Login = () => import('../views/login.vue')
const BlogEdit = () => import('../views/blogEdit.vue')
const ConsoleView = () => import('../views/console.vue')
const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
            path: '/',
            component:Home
        },
        {
            path: '/article/:articleId',
            component:Article,
            // props:route =>({params:route.articleId}),
        },
        {
        path:'/about',
        component:About
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/console/add',
            component:BlogEdit
        },
        {
            path:'/article/:id/edit',
            component:BlogEdit
        },
        {
            path:'/console',
            component:ConsoleView
        }
        
    ],
})
router.beforeEach((to,from,next)=>{
    document.documentElement.scrollTop=0
    next()
    
})

export default router