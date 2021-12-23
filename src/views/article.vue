<template>
    <div id="article-wrap">
        <div class="article-title">
            <ArticleTitle class="V-title" :title="articleData.title" />
            <h5 class="date">{{articleData.created}}</h5>
            <Tag v-if="articleData.tag!=null?true:false" :tagText="articleData.tag" />
            <div class="edit-btn" v-if="onwArticle">

                <router-link :to="{name:'ArticleEdit',params:{id:articleData.id}}"><button
                        class="primary">编辑</button></router-link>
            </div>
        </div>
        <div class="banner"></div>
        <div class="container container-wrap" :class="themeClass">
            <div class="article-content-wrap">

                <div id="markdown-by" :class="themeClass" v-html="articleData.content">

                </div>
            </div>
            <div class="article-list">
                <h3>最新文章</h3>
                <ul>
                    <li @click="toNewArticle(item.id)" v-for="(item,index) in articleList" :key="index"
                        :style="{'color':item.id==ativeId?'#3379f6':''}">{{item.title}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
    import ArticleTitle from '../components/ArticleTitle.vue';
    import Tag from '../components/Tag.vue';
    import articleDataBus from '../utils/articleDataBus';
    import hljs from 'highlight.js'
    import {
        mapGetters
    } from 'vuex';
</script>
<script>
    import 'github-markdown-css'
    import apiList from '../api/apiList';
    import MarkdownIt from 'markdown-it'
    export default {
        data() {
            return {
                articleList: [],
                isNoData: false,
                articleData: {
                    id: '',
                    title: '',
                    content: '',
                    created: '',
                    tag: null
                },
                themeClass: '',
                onwArticle: false,
                ativeId:null
            }
        },
        methods: {
            toNewArticle(articleId) {
                this.$router.push(`/article/${articleId}`)
            },
            getStatic(val) {
                return new URL('../../node_modules/markdown-it/')
            },
            getData() {
                const articleId = this.$route.params.articleId;
                this.ativeId = articleId;
                if (articleId == undefined) {
                    return
                }
                this.$axios.get(`${apiList.BLOG}/${articleId}`).then(res => {
                    let data = res.data.data;
                    let tag = data.tag;
                    if (tag == null) {

                    } else {
                        this.articleData.tag = tag.split(',');
                    }
                    this.articleData.id = data.id;
                    this.articleData.title = data.title;
                    this.articleData.created = data.created;
                    document.title = `${data.title} - 鱼板的博客 - 跟你分享最新的知识`
                    // var MarkdownIt = require('markdown-it');
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
                    var result = md.render(data.content);
                    this.articleData.content = result;
                    this.onwArticle = (data.userId === this.$store.getters.getUser.id);
                }).catch(err => {
                    // console.dir(err);
                })
            },
            getArticleList() {
                this.$axios.get(apiList.BLOGS).then(res => {
                    this.articleList = res.data.data.records;
                }).catch(err=>err)
            },
            getThemeStateFn(state) {
                if (state == 'dark') {
                    // 未完成的主题切换方案
                    this.themeClass = 'markdown-body'
                } else if (state == 'white') {
                    this.themeClass = 'vuepress-markdown-body';
                }
            },
        },
        created() {

            // 初始化页面
            this.getData();
            this.getArticleList();
            // 初始化界面的时候从localStorage获取当前主题的状态
            this.getThemeStateFn(localStorage.getItem('sliderBarState'));

        },
        computed: {
            ...mapGetters(['getThemeState'])
        },
        watch: {
            getThemeState(newVal) {
                this.getThemeStateFn(newVal)
            }
        }
    }
</script>

<style scoped>
    .V-title :deep(h1){
        color: #fff;
    }
    .markdown-body {
        padding: 2rem 2.5rem;
    }

    .banner {
        width: 100%;
        height: 350px;
        position: absolute;
        top: 60px;
        background: url(../assets/images/homePage/2.jpg) no-repeat;
        background-size: cover;
        background-position: bottom;
    }

    .date {
        margin-bottom: 10px;
        color: #fff;
    }

    .edit-btn button {
        width: 70px;
        padding: 5px;
        font-size: 16px;
        margin-top: 20px;
    }

    #markdown-by {
        /* background: var(--theme_home_bg_color); */
        padding: 20px 15px;
        margin-top: var(--global_margin_top);
        border-radius: var(--global_border_radius);
    }

    #article-wrap {
        width: 100%;
        min-height: 100vh;
        padding-top: 80px;
        background-color: var(--theme_home_bg_color);
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
    }

    .container-wrap {
        width: 100%;
        display: flex;
        margin-top: 30px;
        border-radius: var(--global_border_radius);
    }

    .article-title {
        width: 100%;
        height: 300px;
        position: relative;
        z-index: 1;
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;


    }

    .article-list {
        text-align: center;
        color: var(--global_text_color);
        display: block;
        flex: 1;
    }

    li {
        margin-top: var(--global_margin_top);
        transition: color .3s;
        cursor: pointer;
    }

    li:hover {
        color: #6733f6;
    }

    .article-content-wrap {
        width: 100%;
        flex: 3;
    }

    .article-content {
        padding-top: 50px;
        text-align: left;
    }

    /* 响应式 */
    @media screen and (max-width: 1000px) {

        /* .container-wrap{
            flex-direction: column;
        } */
        .article-list {
            display: none;
        }
    }

    @media screen and (max-width:650px) {
        code {
            font-size: 8px;
        }
    }
</style>