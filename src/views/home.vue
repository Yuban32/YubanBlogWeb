<template>
    <div id="home-wrap">
        <div class="home-first-page global-class" ref="homeWrap">
            <scrollImagesVue class="scrollImagesVue" :setScrollImgSrc="swiperImgs" />
            <div class="home-first-page-text">
                <div>
                    <p>WELCOME TO MY BLOG...</p>
                </div>
            </div>
        </div>
        <div class="new-article">
            <h1>最新文章</h1>
        </div>
        {{ isEmtpy }}
        <div class="article-card-items container" v-if="isEmptyShow">
            <ArticleCard v-for="(item, index) in articleData" :key="index" :articleCardObjce='item' />
                <div class="page-btn">
                    <div class="prev" @click="subNum" v-show="(currentPage == 1 ? false : true)">

                        上一页
                    </div>
                    <!-- <div class="num-btn">{{ currentPage }}</div>
                <div class="total-pages" title="总页数">{{ pages }}</div> -->
                    <div class="forward" @click="addNum">

                        下一页
                    </div>
                </div>
        </div>
    </div>
</template>
<script setup>
import ArticleCard from '../components/ArticleCard.vue';
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
            isEmtpy: '',
            isEmptyShow: true
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
        },
        articleData(val) {
            if (val.length == 0) {
                this.isEmpty = '已经没有数据啦~';
                this.isEmptyShow = false;
            }
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
    justify-content: right;
    height: 40px;
    width: 100%;
}

.page-btn>div {
    height: 100%;
    width: calc(50% - 40px);
    /* flex: 1; */
    padding: 5px 20px 5px 20px;
    margin-left: 10px;
    line-height: 40px;
    font-size: 20px;
    color: #fff;
    background: #3379f6;
    box-shadow: 0px 0px 30px rgb(1 81 128 / 35%);
    border-radius: var(--global_border_radius);
    cursor: pointer;
    user-select: none;

}


.page-btn>div:last-child {
    text-align: right;
}

.page-btn .total-pages.total-pages {
    cursor: unset
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