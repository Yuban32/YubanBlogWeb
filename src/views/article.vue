<template>
    <div id="article-wrap">
        <div class="container container-wrap">
            <div class="article-content-wrap">
                <div class="article-title">
                    <ArticleTitle :title="articleData.title" />
                    <h5 class="date">{{articleData.created}}</h5>
                    <!-- <Tag :tagText="dataHandler.tagTextArr" /> -->
                    <div class="edit-btn">
                        
                        <router-link :to="{name:'ArticleEdit',params:{id:this.articleData.id}}"><button class="primary">编辑</button></router-link>
                    </div>
                </div>
                <div id="markdown-by" class="markdown-body" v-html="articleData.content">

                </div>
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
    import hljs from 'vue3-highlightjs'
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
            },getStatic(val){
                return new URL('../../node_modules/markdown-it/')
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
                    document.title = `${data.title} - 鱼板的博客 - 跟你分享最新的知识`
                    // var MarkdownIt = require('markdown-it');
                    var md = new MarkdownIt();
                    console.log(md);
                    md()({
                        hightlight:function(str,lang){
                            if(lang && hljs.getLanguage(lang)){
                                try{
                                return hljs.hightlight(lang,str).value;
                            }catch(__){}
                            }
                        return '';
                        }
                    })
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
        }
    }
</script>

<style scoped>
    .date {
        margin-bottom: 10px;
        color: #3379f6;
    }
.edit-btn button{
    width: 70px;
    padding: 5px;
    font-size: 16px;
}
#markdown-by{
    /* background: var(--theme_home_bg_color); */
        padding: 20px 15px;
        margin-top: var(--global_margin_top);
    border-radius: var(--global_border_radius);
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
    @media screen and ( max-width:650px ){
        code {
        font-size: 8px;
    }
    }
</style>