<template>
    <div id="article-card-wrap">

        <div class="article-card-content-wrap hover-up">
            <div class="content-wrap">
                <div class="article-card-content-left">
                    <!-- 先判断传过来的图片地址存不存在 不存在则启用默认图片地址 -->
                    <img :src="articleCardObjce.image==null?'https://picsum.photos/330/330':articleCardObjce.image">
                </div>

                <div class="article-card-content-right">
                    <div class="article-cared-title">
                        <ArticleTitle class="title" :title="articleCardObjce.title" />
                        <h5 class="date">{{articleCardObjce.created}}</h5>
                    </div>
                    <div class="article-card-content">
                        <!-- <p>{{articleCardObjce.articleText.length>600?articleCardObjce.articleText.slice(0,600)+'....':articleCardObjce.articleText}}</p> -->
                        <p>{{articleCardObjce.description}}</p>
                    </div>
                    <div class="bottom">
                        <!-- <div class="watch-number">
                            <svg t="1637672271796" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="4587" width="200" height="200">
                                <path
                                    d="M511.9988 1023.9972C229.2216 1023.9972 0 794.778 0 511.9988 0 229.2216 229.2216 0 511.9988 0c282.7792 0 511.9988 229.2216 511.9988 511.9988C1023.9972 794.778 794.778 1023.9972 511.9988 1023.9972zM904.804 484.405c0 0-219.922-218.589-395.922-218.589-176.051 0-395.922 218.589-395.922 218.589-13.494 12.674-13.648 33.504 0 45.922 0 0 219.923 218.591 395.922 218.591s395.92-218.591 395.92-218.591c13.343-12.674 13.6-33.35 0.002-45.922l0 0zM510.524 683.39c-96.723 0-175.282-78.455-175.282-175.33 0-96.826 78.456-175.282 175.282-175.282 96.877 0 175.28 78.559 175.28 175.282 0.002 96.773-78.557 175.33-175.28 175.33zM508.472 394.763c-61.472 0-111.347 50.132-111.347 111.706 0 61.573 49.875 111.653 111.347 111.653 61.471 0 111.347-50.08 111.347-111.653 0-61.627-49.876-111.706-111.347-111.706l0 0z"
                                    p-id="4588" fill="#3379f6"></path>
                            </svg>
                            <span>{{articleCardObjce.checkNum}}</span>
                        </div> -->
                        <Tag class="tag" :tagText="tag" />
                        <div class="more-btn hover-up" @click="toArticlePage">
                            阅读全文
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script setup>
    import ArticleTitle from './ArticleTitle.vue';
    import Tag from './Tag.vue';
</script>
<script>
    export default {
        
        data() {
            return {
                tag: []
            }
        },
        methods: {
            toArticlePage() {
                // 路由拼接
                this.$router.push(`/article/${this.articleCardObjce.id}`)
            },

        },
        props: {
            articleCardObjce: Object
        },
        created() {
            if (this.articleCardObjce.tag == null) {
                this.tag = [];
            } else {
                this.tag = this.articleCardObjce.tag.split(',');
            }
        }
    }
</script>
<style scoped>
    #article-card-wrap {
        /* 占位外边距 */
        margin-top: 50px;
        margin-bottom: 50px;
        text-align: center;
    }

    .date {
        margin-bottom: 10px;
        color: #3379f6;
    }

    /* 卡片内容部分 */

    .article-card-content-wrap {
        /* 为了不让子元素溢出 */
        box-sizing: border-box;
        overflow: hidden;
        height: 100%;
        width: 100%;
        /* padding: 50px; */
        border-radius: var(--global_border_radius);
        display: flex;
        position: relative;
        background: var(--article_card_bg_color);
        box-shadow: var(--article_card_box_shadow);

    }

    .content-wrap {
        width: 100%;
        display: flex;
        padding: 16px;
    }

    .article-card-content-left {
        width: 300px;
        overflow: hidden;
        border-radius: var(--global_border_radius);
    }

    .article-card-content-left:hover img {
        transform: scale(1.1);
    }

    .article-card-content-left img {
        height: 100%;
        width: 100%;
        /* object-fit: cover; */
        transition: all .2s;
        border-radius: var(--global_border_radius);
    }

    .article-card-content-right {
        flex: 3;
    }

    .article-card-content {
        line-height: 25px;
        overflow: hidden;
    }

    .article-card-content p {
        width: 100%;
        height: 175px;
        color: var(--global_article_color);
        text-overflow: ellipsis;

    }

    /* 阅读全文按钮 */
    .more-btn {
        width: 120px;
        height: 50px;
        line-height: 50px;
        margin-left: 15px;
        border-radius: var(--global_border_radius);
        background-color: #3379f6;
        box-shadow: 0px 0px 30px rgba(1, 81, 128, 0.35);
        color: #fff;
        font-weight: 900;
        cursor: pointer;
        position: absolute;
        right: 20px;
        bottom: 0px;
    }

    .bottom {
        display: flex;
        padding-left: 50px;
        align-items: center;
        justify-content: space-around;
        position: relative;
    }

    .watch-number {
        display: flex;
        align-items: center;
        color: #3379f6;
        font-size: 30px;
    }

    svg {
        height: 25px;
    }

    /* 响应式 */
    @media screen and (max-width:960px) {

        /* .article-card-content-wrap{
            flex-direction: column;
            justify-content: center;
            align-items: center;
        } */
        .content-wrap {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .more-btn{
            position:static;
        }

    }

    @media screen and (max-width:650px) {
        .bottom {
            flex-direction: column;
            padding: 0;
        }

        .watch-number {
            font-size: 22px;

        }
        .more-btn{
            position:static;
        }
        .more-btn,
        .tag {
            margin: 10px 0px;
            width: 100%;
        }

        .title :deep(h1) {
            font-size: 28px;
        }
    }
</style>