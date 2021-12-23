<template>
    <div id="home-wrap">
        <div class="home-first-page global-class" ref="homeWrap">
            <scrollImagesVue class="scrollImagesVue" :setScrollImgSrc="swiperImgs" />
            <div class="home-first-page-text">
                <!-- <div>
                    <p>Hello！我是樊家威</p>
                </div>
                <div>
                    <p>欢迎来到我的博客</p>
                </div> -->
                <!-- <div>
                    <p>我会在此跟大家分享一些实用的教程和我在学习中遇到的一些问题</p>
                </div> -->
                <div>
                    <p>WELCOME TO MY BLOG...</p>
                </div>
            </div>
        </div>
        <div class="new-article">
            <h1>最新文章</h1>
        </div>
        <div class="article-card-items container">
            <ArticleCard v-for="(item,index) in articleData" :key="index" :articleCardObjce='item' />
            <!-- <div v-for="item in articleData" :key="item.id"> -->
            <!-- {{item}} -->
            <!-- </div> -->
            <div class="page-btn">
                <div class="prev" @click="subNum">
                    <svg t="1640175737779" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="4285" width="200" height="200">
                        <path
                            d="M268.240896 506.35712C251.91968 528.79872 251.91968 559.20128 268.240896 581.64288L524.240896 933.64288C545.030528 962.22848 585.057216 968.54848 613.643008 947.75936 642.228736 926.9696 648.548736 886.94272 627.759104 858.35712L399.25472 543.8368 627.759104 229.64288C648.548736 201.05728 642.228736 161.0304 613.643008 140.24064 585.057216 119.45152 545.030528 125.77152 524.240896 154.35712L268.240896 506.35712Z"
                            fill="#ffffff" p-id="4286"></path>
                    </svg>
                </div>
                <div class="num-btn">{{currentPage}}</div>
                <div class="forward" @click="addNum"><svg t="1640175772722" class="icon" viewBox="0 0 1024 1024"
                        version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5229" width="200" height="200">
                        <path
                            d="M624.827008 544.0512 396.240896 858.35712C375.451264 886.94272 381.771264 926.9696 410.356992 947.75936 438.942784 968.54848 478.969472 962.22848 499.759104 933.64288L755.759104 581.64288C772.08032 559.20128 772.08032 528.79872 755.759104 506.35712L499.759104 154.35712C478.969472 125.77152 438.942784 119.45152 410.356992 140.24064 381.771264 161.0304 375.451264 201.05728 396.240896 229.64288L624.827008 544.0512Z"
                            fill="#ffffff" p-id="5230"></path>
                    </svg></div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import ArticleCard from '../components/ArticleCard.vue';
    // import articleData from '../utils/articleDataBus';
    import scrollImagesVue from '../components/scrollImages.vue';
    import apiList from '../api/apiList';
</script>
<script>
    export default {
        name: 'home',
        data() {
            return {
                swiperImgs: [
                    "homePage/1.jpg",
                    "homePage/2.jpg",
                    "homePage/3.jpg",
                    "homePage/4.jpg",
                    "homePage/5.jpg",
                ],
                articleData: {},
                currentPage: 1,
                pages: 0,
                pageSize: 5,
            }
        },
        methods: {
            async getArticleData(currentPage) {
                await this.$axios.get(apiList.BLOGS + '?currentPage=' + currentPage).then(res => {
                    let data = res.data.data;
                    this.currentPage = data.current;
                    this.pageSize = data.size;
                    this.pages = data.pages;
                    this.articleData = data.records;
                })
            },
            subPageNum() {
                this.currentPage <= 1 ? this.currentPage = 1 : this.currentPage -= 1;

            },
            addPageNum() {

                this.currentPage >= this.pages ? this.currentPage = this.pages : this.currentPage += 1;
            },
            subNum() {
                this.subPageNum()

            },
            addNum() {
                this.addPageNum()

            },
        },
        watch: {
            currentPage(val) {
                this.getArticleData(val)
            }
        },
        created() {
            document.title = '鱼板的博客 - 跟你分享最新的知识'
            this.getArticleData(1);
        }
    }
</script>

<style scoped>
    .page-btn {
        display: flex;
        justify-content: center;
        height: 40px;
    }

    .page-btn>div {
        height: 100%;
        width: 40px;
        padding: 5px;
        margin-left: 10px;
        line-height: 40px;
        text-align: center;
        font-size: 24px;
        color: #fff;
        background: #3379f6;
        box-shadow: 0px 0px 30px rgb(1 81 128 / 35%);
        border-radius: var(--global_border_radius);
        cursor: pointer;
        user-select: none;
    }

    .page-btn>div:active {
        opacity: .5;
    }

    .page-btn>div svg {
        height: 100%;
    }

    .new-article {
        width: 250px;
        margin: 0 auto;
        padding-top: 20px;
        position: relative;
        text-align: center;
    }

    .new-article::before {
        content: 'New';
        padding: 5px;
        border-radius: var(--global_border_radius);
        position: absolute;
        right: 0;
        color: #fff;
        box-shadow: 0px 0px 30px rgba(1, 81, 128, 0.589);
        background-color: #3379f6;
    }

    .new-article h1 {
        color: #005cfc;
        letter-spacing: 10px;

    }

    .article-card-items {
        padding: 0 1%;
    }

    #home-wrap {
        width: 100%;
        transition: all .3s;
    }

    .home-first-page {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
        background-color: var(--theme_nav_bg_color);
    }

    .scrollImagesVue {
        position: relative;
    }

    .scrollImagesVue::before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 9;
        background-color: rgba(0, 0, 0, 0.541);
    }

    .home-first-page-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 999;
    }

    .home-first-page-text div {
        padding-top: 20px;
        overflow: hidden;
        text-align: center;
    }

    .home-first-page-text :first-child p {
        font-size: 30px;
    }

    .home-first-page-text div p {
        color: #fff;
        font-size: 20px;
        line-height: 40px;
        font-family: 'Centrale Sans Bold';
        letter-spacing: 2px;
        font-weight: 800;
    }

    .home-first-page-text div:first-child p {
        animation: Textblink ease-in-out 1s;

    }

    .home-first-page-text div:nth-child(2) p {
        animation: Textblink ease-in-out 1s;
        animation-delay: .2s;

    }

    .home-first-page-text div:nth-child(3) p {
        animation: Textblink ease-in-out 1s;
        animation-delay: .4s;

    }

    @keyframes Textblink {
        0% {
            opacity: 0;
            transform: translateY(100px);
        }

        50% {
            opacity: .5;
            transform: translateY(-30px);
        }

        100% {
            opacity: 1;
            transform: translateY(0px);
        }
    }

    @media screen and(max-width:500px) {}

    @media screen and (max-width: 600px) {
        .home-first-page {
            height: 100vh;
        }

        .home-first-page-text div p {
            font-size: 20px;
        }
    }
</style>