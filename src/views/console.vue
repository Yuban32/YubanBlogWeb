<template>
    <div id="console-wrap">
        <Comfirm @comfirm-btn="comfirmBtns" ref="comfirm" />
        <Toast ref="toast" />
        <div class="container console">
            <div class="left-menu">
                <div class="add">
                    <router-link to="/console/add">发布文章</router-link>
                </div>
                <div class="logout">

                    <a href="javascript:void(0)" @click="logout">退出登录</a>
                </div>
            </div>
            <div class="content-wrap">
                <ul class="article-list-wrap">
                    <li class="article-list" v-for="item in articleData" :key="item.id">
                        <div class="title">
                            <h2>{{item.title}}</h2>
                        </div>
                        <div class="content">
                            <div class="img">
                                <img :src="item.image==null?'https://picsum.photos/330/330':item.image">
                            </div>
                            <div class="ct">{{item.content}}</div>
                        </div>
                        <div class="btn">
                            <router-link :to="{name:'ArticleEdit',params:{articleId:item.id}}">
                                <button class="primary">编辑</button>
                            </router-link>
                                <button class="warning" @click="del">删除</button>
                        </div>
                    </li>
                </ul>
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
    </div>
</template>
<script setup>
    import Toast from '../components/Toast.vue';
    import Comfirm from '../components/Comfirm.vue';
    import apiList from '../api/apiList'
</script>
<script>
    export default {
        name: "consoleView",
        data() {
            return {
                articleData: null,
                currentPage: 1,
                pages: 0,
                pageSize: 5,
            };
        },
        methods: {

            comfirmBtns(val) {
                if (val == 0) {
                    this.$axios.get(apiList.LOGOUT).then(res => {
                        this.$refs.toast.showToast(res.data.msg, 3);
                        this.$store.commit("REMOVE_INFO");
                        this.token = null;
                        this.$router.push('/')
                    }).catch(err => err);
                } else if (val == 1) {
                    return;
                }
            },
            logout() {
                console.log(this.$refs);
                this.$refs.comfirm.showToast("确认要退出登录吗？", true);
            },
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
            del(){
                this.$refs.comfirm.showToast('确认要删除文章吗？',true)
            }
        },
        watch: {
            currentPage(val) {
                this.getArticleData(val)
            }
        },
        created() {
            this.getArticleData(1)
        }
    }
</script>
<style scoped>
    .page-btn {
        display: flex;
        justify-content: center;
        height: 40px;
        margin-top: 20px;
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

    .content-wrap {
        flex: 4;
        width: 100%;
        position: relative;
        padding: 20px 0;
    }

    a {
        text-decoration: none;
        color: var(--nav_text_color);
        transition: color .3s;
    }

    a:hover {
        color: #6733f6;
    }

    #console-wrap {
        width: 100%;
        margin-top: 60px;
    }

    .console {
        display: flex;

    }

    h2 {
        color: var(--nav_text_color);
        padding: 10px 0;
    }

    .left-menu {
        width: 100%;
        height: 100%;
        padding-top: 50px;
        text-align: center;
        display: flex;
        flex: 1;
        flex-direction: column;
    }

    .article-list-wrap::before {
        content: '';
        display: block;
        width: 5px;
        top: 30px;
        height: 100%;
        position: absolute;
        border-radius: 10px;
        background-color: #cfcfcf;

    }

    .left-menu>div {
        padding: 20px 10px;
    }

    .article-list-wrap {}

    .article-list {
        border-bottom: dashed darkgray 1px;
        padding: 20px 20px;
    }

    .content {
        display: flex;
        align-items: center;
        color: var(--global_article_color);
    }

    .content .ct {
        padding-left: 10px;
    }

    .content .img {
        width: 150px;
        height: 150px;
        border-radius: var(--global_border_radius);
        overflow: hidden;
    }

    .content .img img {
        width: 100%;
        height: 100%;
    }

    .btn {
        display: flex;
        justify-content: right;
    }
</style>