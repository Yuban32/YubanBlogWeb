<template>
    <div id="article-wrap">
        <div class="container container-wrap">
            <div class="article-content-wrap">
                <div class="article-title">
                    <ArticleTitle :title="'Vue3+vite的主题切换功能'"/>
                </div>
                <article class="article-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae blanditiis, eligendi velit minima
                    autem
                    <h2 class="article-subtitle-bg"><span>小标题</span></h2>
                    nulla reprehenderit dignissimos, veritatis unde aut, aliquid eaque quia. Quae dolores iste ducimus
                    optio
                    quisquam itaque saepe ex impedit repudiandae numquam! Repellat quaerat at sapiente eveniet culpa
                    officiis esse, animi obcaecati quia architecto possimus laborum, maiores aspernatur, atque
                    reprehenderit
                    dicta nostrum. Deleniti eaque quis illo cupiditate dolores inventore labore nesciunt sequi nisi!
                    <pre
                        v-highlightjs><code class="javascript">
                        const s = new Date().toString()
                        const s = new Date().toString()const s = new Date().toString()const s = new Date().toString()</code></pre>
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
</script>
<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>

<style>
    code {
        border-radius: 5px;
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
        color: var(--blobal_article_color);
    }
</style>