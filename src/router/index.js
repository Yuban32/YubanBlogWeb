import {
    createRouter,
    createWebHashHistory
} from 'vue-router'
// new 转换成工厂函数
const Home = () => import('../views/home.vue')
const Article = () => import('../views/article.vue')
const About = () => import('../views/about.vue')
const Login = () => import('../views/login.vue')
const BlogEdit = () => import('../views/articleEdit.vue')
const ConsoleView = () => import('../views/console.vue')
const AboutEdit = () => import('../views/aboutEdit.vue')
const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
            path: '/',
            component: Home,
            name: 'home'
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/console/add',
            component: BlogEdit,
            meta: {
                requireAuth: true
            }
        },
        {
            path: '/article/:articleId',
            component: Article,
            // props:route =>({params:route.articleId}),
        },
        {
            path: '/article/:articleId/edit',
            component: BlogEdit,
            name: 'ArticleEdit',
            meta: {
                requireAuth: true
            }
        },
        {
            path: '/console',
            component: ConsoleView,
            meta: {
                requireAuth: true
            }
        },
        {
            path:'/about/edit',
            component:AboutEdit,
            meta:{
                requireAuth:true
            }
        }

    ],
})
router.beforeEach((to, from, next) => {
    // 每次跳转到新的页面都会重置Y轴的滚动条位置
    document.documentElement.scrollTop = 0;

    // 路由权限配置
    // 判断目标路由是否有requireAuth 有的话就进行权限判断
    if (to.matched.some(record => record.meta.requireAuth)) { // 判断该路由是否需要登录权限
        const token = sessionStorage.getItem("token")
        if (token) { // 判断当前的token是否存在 ； 登录存入的token
            if (to.path === '/login') {} else {
                next()
            }
        } else {
            next({
                path: '/login'
            })
        }
    } else {
        next()
    }
    // if(from.matched[0].path == )
    // if(from.matched[0].path == '/article/:articleId/edit'){
    //     console.log(2312);
    // }
})

export default router