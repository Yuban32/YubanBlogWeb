<template>
    <div id="article-wrap">
        <div class="container container-wrap">
            <div class="article-content-wrap">
                <div class="article-title">
                    <ArticleTitle :title="dataHandler.articleTitle!=undefined?dataHandler.articleTitle:isNoData=ture" />
                    <h5 class="date">{{dataHandler.articleDate}}</h5>
                    <Tag :tagText="dataHandler.tagTextArr" />
                </div>
                <article class="article-content">
                    {{dataHandler.describe}}
                    <img :src="dataHandler.imgSrc">
                    <h2 class="article-subtitle-bg">
                        <span>{{dataHandler.subtitle?dataHandler.subtitle:''}}</span>
                    </h2>
                    <!-- {{dataHandler.articleText}}  v-html="dataHandler.codeLine" -->
                    <pre v-highlightjs v-for="(item , index ) in dataHandler.codeLine" :key="index"><code class="javascript" v-html="item"></code></pre>
                    <article v-html="dataHandler.articleText"></article>
                </article>

            </div>

            <div class="article-list">
                <h3>最新文章</h3>
                <ul>
                    <li @click="toNewArticle(item.articleId)" v-for="(item,index) in articleDataBus" :key="index"
                        :style="{'color':item.articleId==id?'#3379f6':''}">{{item.articleTitle}}</li>
                </ul>
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
    export default {
        data() {
            return {
                dataHandler: [],
                id: Number,
                isNoData: false
            }
        },
        methods: {
            toNewArticle(articleID) {
                this.$router.push(`/article/${articleID}`)
            },
            getData() {
                // 通过路由传值方式,传入文章的ID,再和文章数据里的id进行对比,正确则加载相对应的数据
                this.id = Number(this.$route.params.articleID)
                let id = this.$route.params.articleID
                for (let key in articleDataBus) {
                    if (articleDataBus[key].articleId == id) {
                        this.dataHandler.push(articleDataBus[key])
                    }
                }
                this.dataHandler = this.dataHandler[0];
            }
        },
        created() {
            // 初始化页面
            this.getData()
        },
        mounted() {

        },
    }
</script>

<style scoped>
    article {
        color: var(--global_text_color);
    }

    img {

        display: block;
        width: 200px;
        margin: 10px auto;
    }

    .date {
        margin-bottom: 10px;
        color: #3379f6;
    }

    code {
        border-radius: 5px;
        text-align: left;
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
        padding: 0 15px;
    }

    #article-wrap {
        width: 100%;
        height: 100vh;
        padding-top: 50px;
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
        flex: 3;

    }

    .article-content {
        padding: 20px;
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
</style>