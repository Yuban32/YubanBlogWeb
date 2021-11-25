<template>
    <div id="article-wrap">
        <div class="container container-wrap">
            <div class="article-content-wrap">
                <div class="article-title">
                    <ArticleTitle :title="'Vue3+vite的主题切换功能'" />
                    <h5 class="date">{{dataHandler.articleDate}}</h5>
                    <Tag :tagText="dataHandler.tagTextArr" />
                </div>
                <article class="article-content">
                    {{dataHandler.describe}}
                    <h2 class="article-subtitle-bg">
                        <span>{{dataHandler.subtitle?dataHandler.subtitle:''}}</span></h2>

                    <pre v-highlightjs><code class="javascript" v-html="dataHandler.codeLine"></code></pre>
                </article>

            </div>
            <div class="article-list">
                <h3>最新文章</h3>
                <ul>
                    <li>最新文章1</li>
                    <li>最新文章1</li>
                    <li>最新文章1</li>
                    <li>最新文章1</li>
                    <li>最新文章1</li>
                    <li>最新文章1</li>
                    <li>最新文章1</li>
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
                dataHandler:[]
            }
        },
        created() {
            let id = this.$route.params.articleID
            for (let key in articleDataBus) {
                if (articleDataBus[key].articleId == id) {
                    this.dataHandler.push(articleDataBus[key])
                }
            }
            this.dataHandler = this.dataHandler[0];
            console.log(this.dataHandler);
        }
    }
</script>

<style>
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
        background-color: var(--theme_home_bg_color);
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .container-wrap {
        display: flex;
        border: 1px solid red;
    }

    .article-title {
        text-align: center;
        color: var(--global_text_color);

    }

    .article-list {
        display: block;
        flex: 1;
    }

    .article-content-wrap {
        flex: 6;

    }

    .article-content {
        padding: 20px;
        text-align: center;
        color: var(--blobal_article_color);
    }
</style>