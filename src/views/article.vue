<template>
    <div id="article-wrap">
        <div class="container container-wrap">
            <div class="article-content-wrap">
                <div class="article-title">
                    <ArticleTitle :title="articleData.title" />
                    <h5 class="date">{{articleData.created}}</h5>
                    <!-- <Tag :tagText="dataHandler.tagTextArr" /> -->
                </div>
                <article class="markdown-body" v-html="articleData.content">

                </article>
            </div>
            <div class="article-list">
                <h3>最新文章</h3>
                <!-- <ul>
                    <li @click="toNewArticle(item.articleId)" v-for="(item,index) in articleDataBus" :key="index"
                        :style="{'color':item.articleId==id?'#3379f6':''}">{{item.articleTitle}}</li>
                </ul> -->
            </div>
        </div>
    </div>
</template>

<script setup>
    import ArticleTitle from '../components/ArticleTitle.vue';
    import Tag from '../components/Tag.vue';
    import articleDataBus from '../utils/articleDataBus';
</script>
<script>
import 'github-markdown-css'
import apiList from '../api/apiList';
import MarkdownIt from 'markdown-it'
    export default {
        data() {
            return {
                dataHandler: [],
                id: Number,
                isNoData: false,
                articleData:{
                    id:'',
                    title:'',
                    content:'',
                    created:''
                }
            }
        },
        methods: {
            toNewArticle(articleID) {
                this.$router.push(`/article/${articleID}`)
            },
            getData(){
                const articleId = this.$route.params.articleId;
                console.log(articleId);
                if(articleId==undefined){
                    return
                }
                this.$axios.get(`${apiList.BLOG}/${articleId}`).then(res=>{
                    let data = res.data.data;
                    this.articleData.id = data.id;
                    this.articleData.title = data.title;
                    this.articleData.created = data.created;

                    // var MarkdownIt = require('markdown-it');
                    var md = new MarkdownIt()
                    var result = md.render(data.content);
                    this.articleData.content = result;
                    
                    console.log(data);
                }).catch(err=>{
                    console.dir(err);
                })
            }
        },
        created() {

            // 初始化页面
            this.getData()
            document.title = `${this.dataHandler.articleTitle} - 鱼板的博客 - 跟你分享最新的知识`
        },
    }
</script>

<style scoped>
article :deep(a){
    color: #3379f6;
}
article :deep(h3){
    color: #3379f6;
}
.describe{
    text-align: center;
    margin-bottom: 20px;
}
.end{
    text-align: center;
}
pre{
    margin-top: 20px;
}
    article {
        color: var(--global_text_color);
    }

    img {

        display: block;
        width: 50%;
        margin: 10px auto;
    }

    .date {
        margin-bottom: 10px;
        color: #3379f6;
    }

    code {
        border-radius: 5px;
        text-align: left;
        letter-spacing: 1px;
        padding-top: 0;
        padding-bottom: 0;
    }

    .article-subtitle-bg {
        position: relative;
        text-align: center;
        z-index: 1;
    }

    .article-subtitle-bg::after {
        content: '';
        width: 95%;
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        margin: 0 auto;
        border-top: 2px solid #3498DB;
    }

    .article-subtitle-bg span {
        background: var(--theme_home_bg_color);
        color: #3379f6;
        padding: 0 15px;
    }

    #article-wrap {
        width: 100%;
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
    }

    .article-title {
        text-align: center;

    }

    .article-list {
        text-align: center;
        color: var(--global_text_color);
        display: block;
        flex: 1;
    }

    li {
        margin-top: 20px;
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
    @media screen and ( max-width:650px ){
        code {
        font-size: 8px;
    }
    }
</style>