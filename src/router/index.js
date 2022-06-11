import {
    createRouter,
    createWebHashHistory
} from 'vue-router'
import axios from 'axios'
import apiList from '../api/apiList'
import store from '../store/store'
// new 转换成工厂函数
const Home = () => import('../views/home.vue')
const Article = () => import('../views/article.vue')
const About = () => import('../views/about.vue')
const Login = () => import('../views/login.vue')
const BlogEdit = () => import('../views/articleEdit.vue')
const ConsoleView = () => import('../views/console.vue')
const AboutEdit = () => import('../views/aboutEdit.vue')
const UserSetting = () =>import('../views/userSetting.vue')
const UserManager = () =>import('../views/userManager.vue')
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
                requireLogin: true
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
                requireLogin: true
            }
        },
        {
            path: '/console',
            component: ConsoleView,
            meta: {
                requireLogin: true,
                requireAuthor: true
            }
        },
        {
            path: '/about/edit',
            component: AboutEdit,
            meta: {
                requireLogin: true
            }
        },
        {
            path: '/setting',
            component:UserSetting,
            meta:{
                requireLogin:true
            }
        },
        {
            path:'/console/userManager',
            component:UserManager,
            meta:{
                requireLogin: true,
                requireAuthor: true
            }
        }

    ],
})
router.beforeEach((to, from, next) => {
    // 每次跳转到新的页面都会重置Y轴的滚动条位置
    document.documentElement.scrollTop = 0;

    // 路由权限配置
    // 判断目标路由是否有requireLogin 有的话就进行权限判断

    if (to.matched.some(record => record.meta.requireLogin)) { // 判断该路由是否需要登录权限
        const token = sessionStorage.getItem("token");
        const uid = JSON.parse(sessionStorage.getItem("userInfo"));
        if (!token) { // 判断当前的token是否存在 ； 登录存入的token
            next({
                path: '/login'
            })
        }else{
            if (to.matched.some(record => record.meta.requireAuthor)) {
                axios.get('http://localhost:8081'+apiList.REQUESTAUTHOR+'1').then(res=>{
                    if(res.data.data.roles == 'admin' && res.data.data.uid == uid.id){
                        next();
                    }else{
                        next({
                            path:'/setting'
                        })
                    }
    
                }).catch(err=>{
                    console.dir(err);
                })
            }else{
                next();
            }
        }
        //

    } else {
        next()
    }
})

export default router