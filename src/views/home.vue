<template>
    <div id="home-wrap">
        <div class="home-first-page" ref="homeWrap">
            <scrollImagesVue class="scrollImagesVue" :setScrollImgSrc="swiperImgs"/>
            <div class="home-first-page-text">
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
                    "homePage/1.jpg",
                    "homePage/2.jpg",
                    "homePage/3.jpg",
                    "homePage/4.jpg",
                    "homePage/5.jpg",
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
        /* overflow: hidden; */
        transition: all .3s;
    }

    .home-first-page {
        width: 100%;
        height: calc(100vh - 60px);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
        background-color: var(--theme_nav_bg_color);
    }
    .scrollImagesVue{
        position: relative;
    }
    .scrollImagesVue::before{
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 9;
        background-color: rgba(0, 0, 0, 0.541);
    }
    .home-first-page-text{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        z-index: 999;
    }
    .home-first-page-text div {
        overflow: hidden;
    }

    .home-first-page-text div p {
        color: #fff;
        font-size: 26px;
        line-height: 40px;
        font-family: '宋体';
        letter-spacing: 2px;
    }
    .home-first-page-text div:first-child p{
        animation: Textblink linear .4s;

    }
    .home-first-page-text div:nth-child(2) p{
        animation: Textblink linear .4s;
        animation-delay:.2s;

    }
    .home-first-page-text div:nth-child(3) p{
        animation: Textblink linear .3s;
        animation-delay: .4s;

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
    @media screen and(max-width:500px) {
        
    }
</style>