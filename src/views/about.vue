<template>
    <div id="about-wrap" ref="aboutWrap">
        <div class="about-first-page global-class enter-animate" ref="aboutFirstPage">
            <span>ABOUT</span>
            <div class="mask"></div>
        </div>

        <div class="container">
            <div class="about-content" ref="aboutContent">
                <div class="profile">
                    <div class="pic-wrap">
                        <img src="../assets/images/nav/pic.jpg">
                    </div>
                    <div class="profile-name">
                        <h1>鱼板</h1>
                    </div>
                    <div class="profile-tags">
                        <ul>
                            <li v-for="( item , index ) in tags" :key="index">{{item}}</li>
                        </ul>
                    </div>
                    <div class="profile-desc">
                        
                        <div id="markdown-by" :class="themeClass" v-html="aboutData.content">

                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import 'github-markdown-css'
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
import apiList from '../api/apiList';
import { mapGetters } from 'vuex';
    export default {
        data() {
            return {
                opacity: 0,
                tags: ['双子男', '90后', '中国-广西', '工科男', '逗比', '幽默', '独立'],
                themeClass: '',
                aboutData:{
                    id:'',
                    content:'',
                    created:''
                }
            }
        },
        methods: {
            handlerPageOpacity() {
                let opacityValue = document.documentElement.scrollTop / this.$refs.aboutContent.scrollHeight;
                if (opacityValue > 1) {
                    opacityValue = 1
                }
                this.opacity = opacityValue;

            },
            init(id,content,created){
                this.aboutData.id = id;
                this.aboutData.content = content;
                this.aboutData.created = created;
            },
            getAboutData(){
                this.$axios.get(apiList.ABOUT).then(res=>{
                    let data = res.data.data[0]
                    var md = new MarkdownIt({
                        html: true,
                        linkify: true,
                        typographer: true,
                        highlight: function (str, lang) {
                            if (lang && hljs.getLanguage(lang)) {
                                try {
                                    return '<pre class="hljs"><code>' +
                                        hljs.highlight(lang, str, true).value +
                                        '</code></pre>';
                                } catch (__) {}
                            }

                            return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) +
                                '</code></pre>';
                        }
                    });
                    var result = md.render(data.content)
                    this.init(data.id,result,data.created);

                })
            },
            getThemeStateFn(state) {
                if (state == 'dark') {
                    // 未完成的主题切换方案
                    this.themeClass = 'markdown-body'
                } else if (state == 'white') {
                    this.themeClass = 'vuepress-markdown-body';
                }
            }
        },
        mounted() {
            window.addEventListener('scroll', this.handlerPageOpacity)
            window.addEventListener('resize', this.handlerPageOpacity)
            document.title = '关于 - 鱼板的博客 - 跟你分享最新的知识';
            this.getAboutData();
            this.getThemeStateFn(localStorage.getItem('sliderBarState'));

        },
        computed: {
            ...mapGetters(['getThemeState'])
        },
        watch: {
            getThemeState(newVal) {
                this.getThemeStateFn(newVal)
            }
        },
        beforeUnmount() {
            window.removeEventListener('scroll', this.handlerPageOpacity)
            window.removeEventListener('resize', this.handlerPageOpacity)
        }
    }
</script>

<style scoped>
    /* about-content */
    #markdown-by{
        margin-top: var(--global_margin_top);
        border-radius: var(--global_border_radius);
    }
    .markdown-body{
        padding: 2rem;
    }
    .profile-desc{
        width: 100%;
        margin-top: var(--global_margin_top);
    }
    .profile-desc p{
        margin: 20px 0;
        line-height: 30px;
        color: var(--global_article_color);
    }
    .title-2{
        width: 150px;
        margin: 10px 0;
        display: block;
        color: var(--global_text_color);
        text-align: center;
        position: relative;
        padding:  5px 0;
        letter-spacing: 10px;
        background-size: 100% 50%;
        
    }
    .title-2::before{
        width: 100%;
        height: 50%;
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        z-index: -1;
        border-radius: 10px;
        /* background-color: #D98B2B; */
        background-color: #3379f6;
        box-shadow: 0 2px 20px #3379f6;
    }

    .about-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .pic-wrap {
        width: 200px;
        height: 200px;
        overflow: hidden;
        border-radius: 50%;
        margin-top: 10px;
    }

    .pic-wrap img {
        height: 100%;
    }

    .profile {
        width: 100%;
        padding-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .profile-name {
        margin-top: var(--global_margin_top);

    }

    .profile-name h1 {
        font-family: '宋体';
        color: var(--nav_text_color);
    }


    .profile-tags ul {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        flex-wrap: wrap;
    }

    .profile-tags ul li {
        padding: 4px 7px;
        margin-top: var(--global_margin_top);
        margin-left: 10px;
        background-color: aquamarine;
        border-radius: var(--global_border_radius);
        float: left;
        color: #fff;
        font-weight: 600;
    }

    .profile-tags ul li:first-child {
        background-color: #f0ad4e;
    }

    .profile-tags ul li:nth-child(2) {
        background-color: #23803f;
    }

    .profile-tags ul li:nth-child(3) {
        background-color: #428bca;
    }

    .profile-tags ul li:nth-child(4) {
        background-color: #d9534f;
    }

    .profile-tags ul li:nth-child(5) {
        background-color: #5cb85c;
    }

    .profile-tags ul li:nth-child(6) {
        background-color: #2B308C;
    }

    .profile-tags ul li:nth-child(7) {
        background-color: #73260A;
    }

    #about-wrap {
        height: 100%;
        width: 100%;
        overflow: hidden;
    }

    .about-first-page {
        height: 100vh;
        width: 100vw;
        background-image: url(../assets/images/about/1.jpg);
        background-position: center;
        background-size: cover;
        background-attachment: fixed;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        /* 文字 */
        color: #fff;
        font-size: 80px;
        font-family: 'Trade Gothic W01';
        letter-spacing: 10px;
        font-weight: 700;
        overflow: hidden;
    }

    .mask {
        width: 100vw;
        height: 100vh;
        position: absolute;
        opacity: v-bind(opacity);
        z-index: 1;
        left: 0;
        top: 0;
        background-color: rgb(0, 0, 0);
    }

    .about-first-page span {
        position: relative;
        z-index: 2;
    }
</style>