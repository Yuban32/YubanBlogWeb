<template>
    <div id="article-wrap">
        <div class="article-title">
            <h1>Vue3+vite的主题切换功能</h1>
        </div>
        <div class="article-content-wrap">
            <div class="article-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae blanditiis, eligendi velit minima autem
                nulla reprehenderit dignissimos, veritatis unde aut, aliquid eaque quia. Quae dolores iste ducimus optio
                quisquam itaque saepe ex impedit repudiandae numquam! Repellat quaerat at sapiente eveniet culpa
                officiis esse, animi obcaecati quia architecto possimus laborum, maiores aspernatur, atque reprehenderit
                dicta nostrum. Deleniti eaque quis illo cupiditate dolores inventore labore nesciunt sequi nisi!
            </div>
            <div class="article-list">

            </div>
        </div>
    </div>
</template>

<style>
    #article-wrap {
        width: 100%;
        height: 100vh;
        background-color: var(--theme_home_bg_color);
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .article-title {
        color: var(--global_text_color)
    }
    .article-content{
        color:var(--blobal_article_color);
    }
</style>