<template>
    <div id="home-wrap">
        <div class="home-first-page" ref="homeWrap">
            <div class="home-first-page-text">
                <scrollImagesVue :setScrollImgSrc="swiperImgs"/>
                <div>
                    <p>Hello！我是樊家威</p>
                </div>
                <div>
                    <p>欢迎来到我的博客</p>
                </div>
                <div>
                    <p>我会在此跟大家分享一些实用的教程和我在学习中遇到的一些问题</p>
                </div>

            </div>
        </div>
        <div class="article-card-items">
            <ArticleCard v-for="(item,index) in articleData" :key="index" :articleCardObjce='item' />
        </div>
    </div>
</template>
<script setup>
    import ArticleCard from '../components/ArticleCard.vue';
    import articleData from '../utils/articleDataBus';
    import scrollImagesVue from '../components/scrollImages.vue';
</script>
<script>
    export default {
        name: 'home',
        data() {
            return {
                swiperImgs:[
                    "../assets/images/homePage/1.jpg",
                    "../assets/images/homePage/2.jpg",
                    "../assets/images/homePage/3.jpg",
                    "../assets/images/homePage/4.jpg",
                    "../assets/images/homePage/5.jpg",
                ]
            }
        },
        created() {
            console.log(articleData);
        },
        mounted() {

        }
    }
</script>

<style>
    #home-wrap {
        width: 100%;
        color: var(--global_text_color);
        transition: all .3s;
    }

    .home-first-page {
        width: 100%;
        height: calc(100vh - 60px);
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--theme_nav_bg_color);
    }

    .home-first-page-text div {
        overflow: hidden;
    }

    .home-first-page-text div p {
        font-size: 26px;
        animation: Textblink linear .4s;
    }

    @keyframes Textblink {
        0% {
            opacity: 0;
            transform: translateY(20px);
        }

        50% {
            opacity: .5;
            transform: translateY(10px);
        }

        100% {
            opacity: 1;
            transform: translateY(0px);
        }
    }
</style>