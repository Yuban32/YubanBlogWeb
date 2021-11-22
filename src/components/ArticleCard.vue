<template>
    <div id="article-card-wrap">
        <div class="container">
            <div class="article-card-content-wrap">
                <div class="article-cared-title">
                    <ArticleTitle :title="'Vue3+vite的主题切换功能'" />
                    <h5 class="date">2021-11-22</h5>
                </div>
                <div class="article-card-content">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore praesentium est voluptates, esse
                    omnis molestias dicta labore aperiam accusantium iusto sequi iste corrupti, quaerat, harum nesciunt
                    unde alias ipsum architecto?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore praesentium est voluptates, esse
                    omnis molestias dicta labore aperiam accusantium iusto sequi iste corrupti, quaerat, harum nesciunt
                    unde alias ipsum architecto?
                </div>
                <div class="more-btn">
                    阅读全文
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import ArticleTitle from './ArticleTitle.vue';

</script>
<style>
    #article-card-wrap{
        /* 占位外边距 */
        margin-bottom: 500px;
        height: 400px;
        /* border: 1px solid red; */
        text-align: center;
    }
    /* 卡片内容部分 */
    .article-card-content-wrap{
        /* 为了不让子元素溢出 */
        box-sizing: border-box;
        height: 100%;
        padding: 50px;
        border-radius: 10px;
        /* border: 1px solid red; */
        position:relative;
        background-color:#fff;
        box-shadow: var(--article_card_box_shadow);
    }
    /* 阅读全文按钮 */
    .more-btn{
        width: 120px;
        height: 50px;
        line-height: 50px;
        border-radius: 10px;
        background-color:#3498DB;
        box-shadow: 0px 0px 30px rgba(1, 81, 128, 0.35);
        color:#fff;
        font-weight: 900;
        cursor: pointer;
        position: absolute;
        right: 50px;
        bottom: 50px;
    }
</style>