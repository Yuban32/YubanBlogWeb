export default {
    1: {
        articleId: 1,
        articleText: [{
            html: ``,
            css: `
            <p>首先我们先来了解一下CSS新的特性</p>
            <p>var()函数和:root伪类选择器还有CSS变量</p>
            <p>var() 用于插入自定义的属性值，支持版本：CSS3</p>
            <p>下面是代码示例</p>`,
            js: `因为其他的方法CSS不会重载，所以就直接通过document.documentElement来直接修改CSS样式了。`,
            end: `只是提供了一个核心的部分，CSS等其他样式美化还得大伙儿做嗷~`
        }],
        articleTitle: 'Vue3+vite的主题切换功能',
        imgSrc: ['https://yubanblog-1254028239.cos.ap-guangzhou.myqcloud.com/article/vue_logo.svg'],
        tagTextArr: ['前端', 'Vue', 'JS'],
        articleDate: '2021-11-23',
        checkNum: '114514',
        describe: '这个是一个基于Vue3的全局主题切换功能，利用CSS的变量功能来做为全局变量,利用CSS3的全局变量来做的',
        codeLine: [{
            html: ``,
            css: ` /* CSS */
    :root{
        --nav-text-color:#3379f6;
        --nav-bg-color:#fff;
    }`,
            js: `//JS
    data(){
        return{
            white:{
                navTextColor:'#3379f6',
                navBgColor:'#fff'
            },
            state:'white'
        }
    },
    methods:{
        const root = document.documentElement;
        if(this.state=='white'){
            //dark
            var dark = {
                navTextColor:'#f5f6f7',
                navBgColor:'#242526'
            }
            this.state = 'dark';
            root.style.setProperty('--nav-text-color',dark.navTextColor);
            root.style.setProperty('--nav-bg-color',dark.navBgColor);
        }else if(this.state == 'dark'){
            this.state = 'white';
            root.style.setProperty('--nav-text-color',this.white.navTextColor);
            root.style.setProperty('--nav-bg-color',this.white.navBgColor);
        }
    },
    //把数据保存到本地localStorage
    created(){
        //如果本地没有存储样式的话 就设定初始值
        const root = document.documentElement;
        if(localStorage.getItem('theme')!=null){
            let themes = JSON.parse(localStorage.getItem('theme'));
            root.style.setProperty('--nav-text-color',this.white.navTextColor);
            root.style.setProperty('--nav-bg-color',this.white.navBgColor);
        }else{
            localStorage.setItem('theme',JSON.stringify(this.white))
        }
    }
            `
        }],
        subtitle: {
            html: '',
            css: 'CSS部分',
            js: 'JS部分',
            end: 'END'
        }
    },
    2: {
        articleId: 2,
        articleText: [{
            html: `<p>在写本项目的时候遇到一个问题，就是路由跳转到当前组件后数据不发生更新，
            实测是路由有缓存功能，解决办法就是在路由出口<router-view />加上 :key="$route.fullPath"</p>
            <p>通过绑定一个fullPath，可以识别当前页面路由的完整地址，当地址发生改变(包括参数改变)则重新渲染页面(例如动态路由参数的变化)</p>`,
            css: ``,
            js: ``,
            end: ``
        }],
        articleTitle: 'Vue路由不刷新问题',
        imgSrc: ['https://yubanblog-1254028239.cos.ap-guangzhou.myqcloud.com/article/vue_logo.svg'],
        tagTextArr: ['前端', 'Vue', 'JS'],
        articleDate: '2021-11-23',
        checkNum: '114514',
        describe: `在写本项目的时候遇到一个问题，就是路由跳转到当前组件后数据不发生更新，
        实测是路由有缓存功能，解决办法就是在路由出口<router-view />加上 :key="$route.fullPath"`,
        codeLine: [{
            html: `&lt;!-- HTML --&gt;
&lt;router-view :key="$route.fullPath"/&gt;`,
            css:``,
            js: ``
        }],
        subtitle: {
            html: 'HTML部分',
            css: '',
            js: '',
            end: 'END'
        }
    },
    3: {
        articleId: 3,
        articleText: [{
            html: ``,
            css: ``,
            js: `<p>在以前原生的网络请求是用XMLHttpRequest来实现的，但ES6新增了Fetch这个方法，Fetch基于Promise的一个新一代的网络请求API</p>
            <p>Fetch不会发送跨域Cookie</p>
            <p>fetch(url) Fetch第一个参数接收一个url请求地址，默认请求方式是GET。</p>
            <p>第一次返回的是一个Promise对象，并不是我们想要的东西，所以我们需要把返回的数据通过.json()方式转换成我们想要的东西</p>
            <p>下面介绍GET和POST的使用方法</p>
            `,
            end: `
            <a target="_blank" href="https://www.ruanyifeng.com/blog/2020/12/fetch-tutorial.html">本文参考阮一峰的Fetch API 教程</a>
            `
        }],
        articleTitle: 'Fetch使用方法',
        imgSrc: ['https://yubanblog-1254028239.cos.ap-guangzhou.myqcloud.com/article/vue_logo.svg'],
        tagTextArr: ['前端', 'ES6', 'JS'],
        articleDate: '2021-11-23',
        checkNum: '114514',
        describe: `Fetch API 提供了一个 JavaScript 接口，用于访问和操纵 HTTP 管道的一些具体部分，
        例如请求和响应。它还提供了一个全局 fetch() 方法，该方法提供了一种简单，合理的方式来跨网络异步获取资源。`,
        codeLine: [{
            html: ``,
            css: ``,
            js: `//JS
//默认GET请求
fetch('https://baidu.com/')
.then(res=>res.json())
.then(res=>{
    console.log(res);
}).catch(err){
    throw err;
}
//POST请求
fetch('http://test.com/api/submit',{
    method:'POST'
}).then(res=>res.json()).then(res=>{
    console.log(res);
}).catch(err){
    throw err;
}
//完整的Fetch配置
fetch(url,{
    method:'POST', //or GET
    headers:{
        "Content-Type": "text/plain;charset=UTF-8"
      },
      body: undefined,
      referrer: "about:client",
      referrerPolicy: "no-referrer-when-downgrade",
      mode: "cors", 
      credentials: "same-origin",
      cache: "default",
      redirect: "follow",
      integrity: "",
      keepalive: false,
      signal: undefined
})
            `
        }],
        subtitle: {
            html: ``,
            css: ``,
            js: `JS部分`,
            end: 'END'
        }
    },
    4: {
        articleId: 4,
        articleText: [{
            html: ``,
            css: ``,
            js: `<p>1、利用ES6的 Set去重</p>
            <p>2、利用for循环嵌套，然后用splice去重</p>
            <p>3、利用indexOf去重</p>
            <p>4、利用include去重</p>
            <p>5、利用hasOwnProperty去重</p>
            `,
            end: `
            <a target="_blank" href="https://segmentfault.com/a/1190000016418021?utm_source=tag-newest">本文参考JavaScript数组去重（12种方法，史上最全）</a>
            `
        }],
        articleTitle: '常用的几个数组去重',
        imgSrc: ['https://yubanblog-1254028239.cos.ap-guangzhou.myqcloud.com/article/vue_logo.svg'],
        tagTextArr: ['前端', 'ES6', 'JS'],
        articleDate: '2021-11-23',
        checkNum: '114514',
        describe: '数组去重，在面试必问的问题之一...一般HR会要求面试者手写数组去重的方法，虽然说在开发中数组去重几乎都是交给后端去处理，但作为前端的我们数组去重也是要掌握的',
        codeLine: [{
            html: ``,
            css: ``,
            js: `//JS
//利用ES6 Set去重
function unique(arr){
    return Array.from(new Set(arr))
}

//利用for循环嵌套，然后用splice去重
function unique(arr){
    for(var i = 0; i < arr.length; i++){
        for(var j=i+1; j < arr.length; j++){
            if(arr[i]==arr[j]){
                arr.splice(j,1);
                j--;
            }
        }
    }
    return arr
}

//利用indexOf去重
function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    var array = [];
    for (var i = 0; i < arr.length; i++) {
        if (array .indexOf(arr[i]) === -1) {
            array .push(arr[i])
        }
    }
    return array;
}

//利用include去重
function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    var array =[];
    for(var i = 0; i < arr.length; i++) {
            if( !array.includes( arr[i]) ) {//includes 检测数组是否有某个值
                    array.push(arr[i]);
              }
    }
    return array
}

//利用hasOwnProperty
function unique(arr) {
    var obj = {};
    return arr.filter(function(item, index, arr){
        return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
    })
}
            `
        }],
        subtitle: {
            html: ``,
            css: ``,
            js: 'JS部分',
            end: 'END'
        }
    },
    5: {
        articleId: 5,
        articleText: [{
            html: ``,
            css: ``,
            js: `
            <p>1、for循环</p>
            <p>2、forEach循环</p>
            <p>3、reduce</p>
            <p>4、eval</p>
            `,
            end: ``
        }],
        articleTitle: 'JavaScript数组求和的常用方法',
        imgSrc: ['https://yubanblog-1254028239.cos.ap-guangzhou.myqcloud.com/article/vue_logo.svg'],
        tagTextArr: ['前端', 'JS'],
        articleDate: '2021-11-23',
        checkNum: '114514',
        describe: 'JS数组求和的常用方法。',
        codeLine: [{
            html: ``,
            css: ``,
            js: `//JS
//for循环
function sum(arr) {
    var temp = 0;
    for (var i = 0;i < arr.length;i++) {
      temp += arr[i];
    }
    return temp;
}

//forEach循环
function sum(arr){
    var temp = 0
    arr.forEach(val=>{
        temp += val;
    })
    return temp;
}

//reduce
function sum(arr) {
    return arr.reduce((acr, cur)=>{
      return acr + cur;
    });
}

//eval
function sum(arr) {
    return eval( arr.join("+"));
}
            `
        }],
        subtitle: {
            html: ``,
            css: ``,
            js: 'JS部分',
            end: 'END'
        }
    },
    6: {
        articleTitle: 'JavaScript排序算法',
        articleId: 6,
        articleText: [{
            html: ``,
            css: ``,
            js: `
            <p>1、冒泡排序</p>
            <p>2、选择排序</p>
            <p>3、插入排序</p>
            `,
            end: ``
        }],
        imgSrc: ['https://yubanblog-1254028239.cos.ap-guangzhou.myqcloud.com/article/vue_logo.svg'],
        tagTextArr: ['前端', 'JS'],
        articleDate: '2021-11-23',
        checkNum: '114514',
        describe: 'JavaScript常用的排序算法，本文会介绍一些计算机科学中最著名的排序算法。',
        codeLine: [{
            html: ``,
            css: ``,
            js: `//JS
//冒泡排序
function bubbleSort(array){
    for (let i = array.length;i > 0; i--){
        for (let j=0; j < i;j++){
            if (array[j] > array[j+1]){
                var temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}
//选择排序
function selectionSort(array){
    for(var i = 0;i < arr.length - 1; i++){
     var maxone = i;
     for(var j = i; j < arr.length;j++){
      if(arr[j] < arr[maxone]){
       maxone = j;
       var temp = arr[i];
       arr[i] = arr[maxone];
       arr[maxone] = temp;
      }
     }
    }
    return arr;
   }
//插入排序
function insertionSort(array){
    let length = arr.length;
  for(let i = 1; i < length; i++) {
    let temp = arr[i];
    let j = i;
    for(; j > 0; j--) {
      if(temp >= arr[j-1]) {
        break;
      }
      arr[j] = arr[j-1];
    }
    arr[j] = temp;
  }
  return arr;
}
            `
        }],
        subtitle: {
            html: ``,
            css: ``,
            js: 'JS部分',
            end: 'END'
        }
    },
    7: {
        articleId: 7,
        articleTitle: 'Vite引入Vue-touter4',
        describe: 'Vite引入Vue-touter4',
        articleText: [{
            html: ``,
            css: ``,
            js: `
            <p>1、安装Vue-touter</p>
            <p>2、首先新建一个router文件夹，然后再文件夹里新建一个index.js文件</p>
            <p>3、在main.js注册index.js文件</p>
            `,
            end:`<a target="_blank" href="https://next.router.vuejs.org/zh/introduction.html">本文参考Vue-router官方文档</a>`
        }],
        imgSrc: ['https://yubanblog-1254028239.cos.ap-guangzhou.myqcloud.com/article/vue_logo.svg'],
        tagTextArr: ['前端','vue', 'JS'],
        articleDate: '2021-11-23',
        checkNum: '114514',
        codeLine: [{
            html: ``,
            css: ``,
            js: [`//JS
//安装vue-router
npm install vue-router@next
            `,`
//index.js文件
import {            
    createRouter
    createWebHistory
} from 'vue-router'     //导入vue-router

//new 转换成工厂函数
//
const Home = () => import('../views/home.vue')
const About = () => import('../views/aoubt.vue)
const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            component:Home
        },
        {
            path:'/about',
            component:About
        }
    ]
})
// 暴露router
export default router
`,`
//main.js文件
//导入index.js文件
import router from './router/index'
//将导入进来的index.js挂载到vue上
app.use(router)
`]
        }],
        subtitle: {
            html: ``,
            css: ``,
            js: 'JS部分',
            end: 'END'
        }
    },
    8: {
        articleId: 8,
        articleTitle: 'JavaScript数组求和的常用方法',
        describe: 'JS数组求和的常用方法。',
        articleText: [{
            html: ``,
            css: ``,
            js: `
            <p>1、for循环</p>
            <p>2、forEach循环</p>
            <p>3、reduce</p>
            <p>4、eval</p>
            `,
            end: ``
        }],
        imgSrc: ['https://yubanblog-1254028239.cos.ap-guangzhou.myqcloud.com/article/vue_logo.svg'],
        tagTextArr: ['前端', 'JS'],
        articleDate: '2021-11-23',
        checkNum: '114514',
        codeLine: [{
            html: ``,
            css: ``,
            js: `//JS
//for循环
function sum(arr) {
    var temp = 0;
    for (var i = 0;i < arr.length;i++) {
      temp += arr[i];
    }
    return temp;
}

//forEach循环
function sum(arr){
    var temp = 0
    arr.forEach(val=>{
        temp += val;
    })
    return temp;
}

//reduce
function sum(arr) {
    return arr.reduce((acr, cur)=>{
      return acr + cur;
    });
}

//eval
function sum(arr) {
    return eval( arr.join("+"));
}
            `
        }],
        subtitle: {
            html: ``,
            css: ``,
            js: 'JS部分',
            end: 'END'
        }
    },
    9: {
        articleId: 9,
        articleText: [{
            html: ``,
            css: ``,
            js: `
            <p>1、for循环</p>
            <p>2、forEach循环</p>
            <p>3、reduce</p>
            <p>4、eval</p>
            `,
            end: ``
        }],
        articleTitle: 'JavaScript数组求和的常用方法',
        imgSrc: ['https://yubanblog-1254028239.cos.ap-guangzhou.myqcloud.com/article/vue_logo.svg'],
        tagTextArr: ['前端', 'JS'],
        articleDate: '2021-11-23',
        checkNum: '114514',
        describe: 'JS数组求和的常用方法。',
        codeLine: [{
            html: ``,
            css: ``,
            js: `//JS
//for循环
function sum(arr) {
    var temp = 0;
    for (var i = 0;i < arr.length;i++) {
      temp += arr[i];
    }
    return temp;
}

//forEach循环
function sum(arr){
    var temp = 0
    arr.forEach(val=>{
        temp += val;
    })
    return temp;
}

//reduce
function sum(arr) {
    return arr.reduce((acr, cur)=>{
      return acr + cur;
    });
}

//eval
function sum(arr) {
    return eval( arr.join("+"));
}
            `
        }],
        subtitle: {
            html: ``,
            css: ``,
            js: 'JS部分',
            end: 'END'
        }
    },
    10: {
        articleId: 10,
        articleText: [{
            html: ``,
            css: ``,
            js: `
            <p>1、for循环</p>
            <p>2、forEach循环</p>
            <p>3、reduce</p>
            <p>4、eval</p>
            `,
            end: ``
        }],
        articleTitle: 'JavaScript数组求和的常用方法',
        imgSrc: ['https://yubanblog-1254028239.cos.ap-guangzhou.myqcloud.com/article/vue_logo.svg'],
        tagTextArr: ['前端', 'JS'],
        articleDate: '2021-11-23',
        checkNum: '114514',
        describe: 'JS数组求和的常用方法。',
        codeLine: [{
            html: ``,
            css: ``,
            js: `//JS
//for循环
function sum(arr) {
    var temp = 0;
    for (var i = 0;i < arr.length;i++) {
      temp += arr[i];
    }
    return temp;
}

//forEach循环
function sum(arr){
    var temp = 0
    arr.forEach(val=>{
        temp += val;
    })
    return temp;
}

//reduce
function sum(arr) {
    return arr.reduce((acr, cur)=>{
      return acr + cur;
    });
}

//eval
function sum(arr) {
    return eval( arr.join("+"));
}
            `
        }],
        subtitle: {
            html: ``,
            css: ``,
            js: 'JS部分',
            end: 'END'
        }
    }
}