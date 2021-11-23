<template>
    <div id="home-wrap">
        <div class="home-first-page">
            <div class="home-first-page-text">
                <div>Hello！我是樊家威</div>
                <p>欢迎来到我的博客</p>
                <p>我会在此跟大家分享一些实用的教程和我在学习中遇到的一些问题</p>

            </div>
        </div>
        <router-link to="/article">文章</router-link>
        <ArticleCard :articleCardObjce='articleData.Vue3ViteArticle'/>
        <ArticleCard :articleCardObjce='articleData.Vue3ViteArticle'/>
        <ArticleCard :articleCardObjce='articleData.Vue3ViteArticle'/>
        <ArticleCard :articleCardObjce='articleData.Vue3ViteArticle'/>
    </div>
</template>
<script setup>
    import ArticleCard from '../components/ArticleCard.vue';
    import articleData from '../utils/articleDataBus';
</script>
<script>
    export default {
        name: 'home',
        data() {
            return {
            }
        },
    }
</script>

<style>
    #home-wrap {
        width: 100%;
        color: var(--global_text_color);
    }

    .home-first-page {
        width: 100%;
        height: calc(100vh - 60px);
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--theme_nav_bg_color);
    }
</style>