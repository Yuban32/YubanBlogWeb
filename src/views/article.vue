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
                    <p class="describe">{{dataHandler.describe}}</p>
                    <img :src="dataHandler.imgSrc">
                    <h2 v-if="dataHandler.subtitle.html" class="article-subtitle-bg">
                        <span>{{dataHandler.subtitle.html}}</span>
                    </h2>
                    <article class="html" v-html="dataHandler.articleText[0].html"></article>
                    <pre v-highlightjs v-for="(item , index ) in dataHandler.codeLine"
                        :key="index"><code v-if="item.html" class="html" v-html="item.html"></code ></pre>
                    <h2 v-if="dataHandler.subtitle.css" class="article-subtitle-bg">
                        <span>{{dataHandler.subtitle.css}}</span>
                    </h2>
                    <article class="css" v-html="dataHandler.articleText[0].css"></article>
                    <pre v-highlightjs v-for="(item , index ) in dataHandler.codeLine"
                        :key="index"><code v-if="item.css" class="css" v-html="item.css"></code></pre>
                    <h2 v-if="dataHandler.subtitle.js" class="article-subtitle-bg">
                        <span>{{dataHandler.subtitle.js}}</span>
                    </h2>
                    <article class="js" v-html="dataHandler.articleText[0].js"></article>
                    <!-- <pre v-highlightjs v-for="(item , index ) in dataHandler.codeLine" :key="index"><code v-if="item.js" class="javascript" v-html="item.js"></code ></pre> -->
                    <!-- v-for里的是三目运算 用Array.isArray()判断数据是不是数组 是的话就循环他 不是就换另外一个来循环 -->
                    <!-- v-html里也是同理 -->
                    <pre v-highlightjs v-for="(item , index ) in 
                    Array.isArray(dataHandler.codeLine[0].js)?dataHandler.codeLine[0].js:dataHandler.codeLine"
                        :key="index"><code v-if="item" class="javascript" 
                    v-html="Array.isArray(dataHandler.codeLine[0].js)?item:item.js"></code ></pre>
                    <h2 v-if="dataHandler.subtitle.end" class="article-subtitle-bg">
                        <span>{{dataHandler.subtitle.end}}</span>
                    </h2>
                    <article class="end" v-html="dataHandler.articleText[0].end"></article>
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
            console.log(this.dataHandler.codeLine);
        },
    }
</script>

<style scoped>
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
        letter-spacing: 1px;
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
        padding-top: 60px;
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
</style>