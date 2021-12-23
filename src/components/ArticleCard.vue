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
                        <p>{{articleCardObjce.description}}</p>
                    </div>
                    <div class="bottom">
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