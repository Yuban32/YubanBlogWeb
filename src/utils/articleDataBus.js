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
            css: `
 /* CSS */
    :root{
        --nav-text-color:#3379f6;
        --nav-bg-color:#fff;
    }`,
            js: `
//JS
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
            html: `
&lt;!-- HTML --&gt;
&lt;router-view :key="$route.fullPath"/&gt;`,
            css: ``,
            js: ``,
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
        imgSrc: ['https://yubanblog-1254028239.cos.ap-guangzhou.myqcloud.com/article/ES6.jpg'],
        tagTextArr: ['前端', 'ES6', 'JS'],
        articleDate: '2021-11-23',
        checkNum: '114514',
        describe: `Fetch API 提供了一个 JavaScript 接口，用于访问和操纵 HTTP 管道的一些具体部分，
        例如请求和响应。它还提供了一个全局 fetch() 方法，该方法提供了一种简单，合理的方式来跨网络异步获取资源。`,
        codeLine: [{
            html: ``,
            css: ``,
            js: `
//JS
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
        imgSrc: ['https://yubanblog-1254028239.cos.ap-guangzhou.myqcloud.com/article/ES6.jpg'],
        tagTextArr: ['前端', 'ES6', 'JS'],
        articleDate: '2021-11-23',
        checkNum: '114514',
        describe: '数组去重，在面试必问的问题之一...一般HR会要求面试者手写数组去重的方法，虽然说在开发中数组去重几乎都是交给后端去处理，但作为前端的我们数组去重也是要掌握的',
        codeLine: [{
            html: ``,
            css: ``,
            js: `
//JS
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
        imgSrc: ['https://source.unsplash.com/1200x900/epic'],
        tagTextArr: ['前端', 'JS'],
        articleDate: '2021-11-23',
        checkNum: '114514',
        describe: 'JS数组求和的常用方法。',
        codeLine: [{
            html: ``,
            css: ``,
            js: `
//JS
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
        imgSrc: ['https://api.yimian.xyz/img?type=wallpaper'],
        tagTextArr: ['前端', 'JS'],
        articleDate: '2021-11-23',
        checkNum: '114514',
        describe: 'JavaScript常用的排序算法，本文会介绍一些计算机科学中最著名的排序算法。',
        codeLine: [{
            html: ``,
            css: ``,
            js: `
//JS
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
            end: `<a target="_blank" href="https://next.router.vuejs.org/zh/introduction.html">本文参考Vue-router官方文档</a>`
        }],
        imgSrc: ['https://yubanblog-1254028239.cos.ap-guangzhou.myqcloud.com/article/vite_logo.svg'],
        tagTextArr: ['前端', 'vue', 'JS'],
        articleDate: '2021-11-23',
        checkNum: '114514',
        codeLine: [{
            html: ``,
            css: ``,
            js: [`
//JS
//安装vue-router
npm install vue-router@next
            `, `
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
`, `
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
        articleTitle: '前端一些面试题',
        describe: `面试八股文，面试造航母，工作拧螺丝！祝大家都能进大厂！`,
        subtitle: {
            html: ``,
            css: `CSS部分`,
            js: 'JS部分',
            end: 'END'
        },
        articleText: [{
            html: `
            `,
            css: `
            <h3>CSS 中 link 和@import 的区别是：</h3>
            <p>Link 属于 html 标签，而@import 是 CSS 中提供的
            在页面加载的时候，link 会同时被加载，而@import 引用的 CSS 会在页面加载完成后才会加
            载引用的 CSS</p>
            <p>@import 只有在 ie5 以上才可以被识别，而 link 是 html 标签，不存在浏览器兼容性问题
            Link 引入样式的权重大于@import 的引用（@import 是将引用的样式导入到当前的页面中）
            </p>
            <br/>
            <h3>BFC 是什么? </h3>
            <p>BFC（块级格式化上下文），一个创建了新的 BFC 的盒子是独立布局的，盒子内元素的布局不
            会影响盒子外面的元素。在同一个 BFC 中的两个相邻的盒子在垂直方向发生 margin 重叠的
            问题</p>
            <p>BFC 是指浏览器中创建了一个独立的渲染区域，该区域内所有元素的布局不会影响到区域外
            元素的布局，这个渲染区域只对块级元素起作用
            </p>
            <br/>
            <h3>CSS 中可以通过哪些属性定义，使得一个 DOM 元素不显示在浏览器可视范围内？？</h3>
            <p>CSS 中可以通过哪些属性定义，使得一个 DOM 元素不显示在浏览器可视范围内？ </p>
            <br/>
            <h3>超链接访问过后 hover 样式就不出现的问题是什么？如何解决？</h3>
            <p>被点击访问过的超链接样式不在具有 hover 和 active 了,解决方法是改变 CSS
            属性的排列顺序: L-V-H-A（link,visited,hover,active）</p>
            <br/>
            <h3>display 属性有哪些？可以做什么？</h3>
            <p>display:block 行内元素转换为块级元素</p>
            <p>display:block 行内元素转换为块级元素</p>
            <p>display:inline-block 转为内联元素</p>
            <br/>
            <h3>哪些 css 属性可以继承？</h3>
            <p>可继承： font-size font-family color, ul li dl dd dt;</p>
            <p>不可继承 ：border padding margin width height ;</p>
            <br/>
            <h3>css 优先级算法如何计算？</h3>
            <p>!important > id > class > 标签</p>
            <p>!important 比 内联优先级高</p>
            <p>*优先级就近原则，样式定义最近者为准;</p>
            <p>*以最后载入的样式为准;</p>
            <br/>`,
            js: `
            <h3></h3>
            <p></p>
            <br/>
            `,
            end: `关于前端的一些面试题就写到着，后期有空再补充嗷`
        }],
        codeLine: [{
            html: ``,
            css: ``,
            js: `
//JS部分代码示例
//1、javascript 的 typeof 返回哪些数据类型 

object number function boolean underfind string
typeof null;//object
typeof isNaN;//
typeof isNaN(123)
typeof [];//object
Array.isARRAY(); es5
toString.call([]);//”[object Array]”
var arr=[];
arr.constructor;//Array


//2、例举 3 种强制类型转换和 2 种隐式类型转换? 

强制(（)parseInt,parseFloat,Number()）
隐式（==）
1==”1”//true
null==undefined//true


//3、数组方法

pop() push() unshift() shift() 
Push()尾部添加 pop()尾部删除
Unshift()头部添加 shift()头部删除


//4、IE 和标准下有哪些兼容性的写法

var ev = ev || window.event
document.documentElement.clientWidth || document.body.clientWidth
var target = ev.srcElement||ev.target


//5、call 和 apply 的区别

//call 和 apply 相同点：
//都是为了用一个本不属于一个对象的方法，让这个对象去执行
toString.call([],1,2,3)
toString.apply([],[1,2,3])
Object.call(this,obj1,obj2,obj3)
Object.apply(this,arguments)


//6、添加 删除 替换 插入到某个接点的方法

obj.appendChild()
obj.insertBefore() //原生的 js 中不提供 insertAfter();
obj.replaceChild()//替换
obj.removeChild()//删除


//7、编写一个数组去重的方法

var arr=[1,1,3,4,2,4,7];
//=>[1,3,4,2,7]
//一个比较简单的实现就是：
//1、 先创建一个空数组，用来保存最终的结果
//2、 循环原数组中的每个元素
//3、 再对每个元素进行二次循环，判断是否有与之相同的元素，如果没有，将把这个元素放
//到新数组中
//4、 返回这个新数组
function oSort(arr) {
var result ={};
var newArr=[];
for(var i=0;i < arr.length;i++){
if(!result[arr]) {
newArr.push(arr)
result[arr]=1
}
}
return newArr
}


//8、输出今天的日期，以 YYYY-MM-DD 的方式，比如今天是 2014 年 9 月 26 日，则输出 2014-09-26

var d = new Date();
// 获取年，getFullYear()返回 4 位的数字
var year = d.getFullYear();
// 获取月，月份比较特殊，0 是 1 月，11 是 12 月
var month = d.getMonth() + 1;
// 变成两位
month = month < 10 ? '0' + month : month;
// 获取日
var day = d.getDate();
day = day < 10 ? '0' + day : day;
alert(year + '-' + month + '-' + day);


//9、判断一个字符串中出现次数最多的字符，统计这个次数

var str = 'asdfssaaasasasasaa';
var json = {};
for (var i = 0; i < str.length; i++) {
    if(!json[str.charAt(i)]){
    json[str.charAt(i)] = 1;
    }else{
        json[str.charAt(i)]++;
    }
};
var iMax = 0;
var iIndex = '';
    for(var i in json){
        if(json[i] > iMax){
        iMax = json[i];
        iIndex = i;
    }
}
alert('出现次数最多的是:'+iIndex+'出现'+iMax+'次');

`
        }],
        imgSrc: ['https://yubanblog-1254028239.cos.ap-guangzhou.myqcloud.com/article/WEB.jpg'],
        tagTextArr: ['前端', '面试','JS'],
        articleDate: '2021-11-23',
        checkNum: '114514'
    },
    9: {
        articleId: 9,
        articleTitle: 'vue总结---面试开发全靠它了',
        describe: 'vue总结---面试开发全靠它了',
        articleText: [{
            html: ``,
            css: ``,
            js: `
            <h3>请详细说下你对vue生命周期的理解？</h3>
            <p>总共分为8个阶段创建前/后，载入前/后，更新前/后，销毁前/后。</p>
            <p>创建前/后： 在beforeCreate阶段，vue实例的挂载元素el和数据对象data都为undefined，还未初始化。在created阶段，vue实例的数据对象data有了，el为undefined，还未初始化。</p>
            <p>载入前/后：在beforeMount阶段，vue实例的$el和data都初始化了，但还是挂载之前为虚拟的dom节点，data.message还未替换。在mounted阶段，vue实例挂载完成，data.message成功渲染。</p>
            <p>更新前/后：当data变化时，会触发beforeUpdate和updated方法</p>
            <p>销毁前/后：在执行destroy方法后，对data的改变不会再触发周期函数，说明此时vue实例已经解除了事件监听以及和dom的绑定，但是dom结构依然存在</p>
            <br/>
            <h3>为什么vue组件中data必须是一个函数？</h3>
            <p>对象为引用类型，当复用组件时，由于数据对象都指向同一个data对象，当在一个组件中修改data时，其他重用的组件中的data会同时被修改；而使用返回对象的函数，由于每次返回的都是一个新对象（Object的实例），引用地址不同，则不会出现这个问题。</p>
            <br/>
            <h3>vue中v-if和v-show有什么区别？</h3>
            <p>v-if和v-show看起来似乎差不多，当条件不成立时，其所对应的标签元素都不可见，但是这两个选项是有区别的:</p>
            <p>1、v-if在条件切换时，会对标签进行适当的创建和销毁，而v-show则仅在初始化时加载一次，因此v-if的开销相对来说会比v-show大。</p>
            <p>2、v-if是惰性的，只有当条件为真时才会真正渲染标签；如果初始条件不为真，则v-if不会去渲染标签。v-show则无论初始条件是否成立，都会渲染标签，它仅仅做的只是简单的CSS切换。</p>
            <br/>
            <h3>computed和watch的区别</h3>
            <p>计算属性computed：</p>
            <p>支持缓存，只有依赖数据发生改变，才会重新进行计算</p>
            <p>不支持异步，当computed内有异步操作时无效，无法监听数据的变化</p>
            <p>computed 属性值会默认走缓存，计算属性是基于它们的响应式依赖进行缓存的，也就是基于data中声明过或者父组件传递的props中的数据通过计算得到的值</p>
            <p>如果一个属性是由其他属性计算而来的，这个属性依赖其他属性，是一个多对一或者一对一，一般用computed</p>
            <p>如果computed属性属性值是函数，那么默认会走get方法；函数的返回值就是属性的属性值；在computed中的，属性都有一个get和一个set方法，当数据变化时，调用set方法。</p>
            <p>侦听属性watch：</p>
            <p>不支持缓存，数据变，直接会触发相应的操作；</p>
            <p>watch支持异步；</p>
            <p>监听的函数接收两个参数，第一个参数是最新的值；第二个参数是输入之前的值；</p>
            <p>当一个属性发生变化时，需要执行对应的操作；一对多；</p>
            <p>监听数据必须是data中声明过或者父组件传递过来的props中的数据，当数据变化时，触发其他操作，函数有两个参数：</p>
            <p>immediate：组件加载立即触发回调函数执行</p>
            <br/>
            <h3>$nextTick是什么？</h3>
            <p>vue实现响应式并不是数据发生变化后dom立即变化，而是按照一定的策略来进行dom更新。</p>
            <p>nextTick 是在下次 DOM 更新循环结束之后执行延迟回调，在修改数据之后使用</p>
            <p>nextTick，则可以在回调中获取更新后的 DOM</p>
            <br/>
            <h3>v-for key的作用</h3>
            <p>当Vue用 v-for 正在更新已渲染过的元素列表是，它默认用“就地复用”策略。如果数据项的顺序被改变，Vue将不是移动DOM元素来匹配数据项的改变，而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素。</p>
            <p>为了给Vue一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一 key 属性。key属性的类型只能为 string或者number类型。</p>
            <p>key 的特殊属性主要用在Vue的虚拟DOM算法，在新旧nodes对比时辨识VNodes。如果不使用 key，Vue会使用一种最大限度减少动态元素并且尽可能的尝试修复/再利用相同类型元素的算法。使用key，它会基于key的变化重新排列元素顺序，并且会移除 key 不存在的元素。</p>
            <br/>
            <h3>Vue的双向数据绑定原理是什么？</h3>
            <p>vue.js 是采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。主要分为以下几个步骤：</p>
            <p> 1、需要observe的数据对象进行递归遍历，包括子属性对象的属性，都加上setter和getter这样的话，给这个对象的某个值赋值，就会触发setter，那么就能监听到了数据变化</p>
            <p> 2、compile解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图</p>
            <p> 3、Watcher订阅者是Observer和Compile之间通信的桥梁，主要做的事情是:
            ①在自身实例化时往属性订阅器(dep)里面添加自己
            ②自身必须有一个update()方法
            ③待属性变动dep.notice()通知时，能调用自身的update()方法，并触发Compile中绑定的回调，则功成身退。</p>
            <p> 4、MVVM作为数据绑定的入口，整合Observer、Compile和Watcher三者，通过Observer来监听自己的model数据变化，通过Compile来解析编译模板指令，最终利用Watcher搭起Observer和Compile之间的通信桥梁，达到数据变化 -> 视图更新；视图交互变化(input) -> 数据model变更的双向绑定效果。</p>
            <br/>
            <h3></h3>
            <p></p>
            <br/>
            <h3></h3>
            <p></p>
            <br/>
            <h3></h3>
            <p></p>
            <br/>
            <h3></h3>
            <p></p>
            <br/>
            `,
            end: `
            <a href="https://juejin.cn/post/6850037277675454478">本文整理自掘金 史上最强vue总结---面试开发全靠它了</a>
            `
        }],
        subtitle: {
            html: ``,
            css: ``,
            js: 'JS部分',
            end: 'END'
        },
        imgSrc: ['https://yubanblog-1254028239.cos.ap-guangzhou.myqcloud.com/article/vue_logo.svg'],
        tagTextArr: ['前端', 'Vue','JS'],
        articleDate: '2021-11-23',
        checkNum: '114514',
        codeLine: [{
            html: ``,
            css: ``,
            js: `
//组件传值
//父传子
//通过props传递

//父组件： 
< child value = '传递的数据' />

//子组件: 
props['value'] //接收数据,接受之后使用和data中定义数据使用方式一样
//子传父 在父组件中给子组件绑定一个自定义的事件，子组件通过$emit()触发该事件并传值。

//父组件： 
<child @receive = 'receive' />

 //子组件: 
 this.$emit('receive','传递的数据')

 //兄弟组件传值
    //通过中央通信 
 let bus = new Vue()
 //A：
 methods :{ 函数{bus.$emit(‘自定义事件名’，数据)}  //发送
 //B：
 created(){bus.$on(‘A发送过来的自定义事件名’，函数)} //进行数据接收

`
        }],
    }
}