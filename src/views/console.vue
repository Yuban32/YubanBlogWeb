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
            <ul class="article-list-wrap">
                <li class="article-list" v-for="item in articleData" :key="item.id">
                    <div class="title">
                        <h2>{{item.title}}</h2>
                    </div>
                    <div class="content">
                        <div class="img">
                            <img :src="item.image==null?'https://picsum.photos/330/330':item.image">
                        </div>
                        <dir class="ct">{{item.content}}</dir>
                    </div>
                    <div class="btn">
                        <router-link :to="{name:'ArticleEdit',params:{articleId:item.id}}">
                            <button class="primary">编辑</button>
                        </router-link>
                        
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script></script>
<script>
    import apiList from '../api/apiList'

    export default {
        name: "consoleView",
        data() {
            return {
                articleData: null
            };
        },
        methods: {

            comfirmBtns(val) {
                if (val == 0) {
                    this.$axios.get(apiList.LOGOUT).then(res => {
                        this.$refs.toast.showToast(res.data.msg, 3);
                        this.$store.commit("REMOVE_INFO");
                        this.token = "";
                    }).catch(err => err);
                } else if (val == 1) {
                    return;
                }
            },
            logout() {
                this.$refs.comfirm.showToast("确认要退出登录吗？", true);
            }
        },
        created() {
            this.$axios.get(apiList.BLOGS).then(res => {
                console.log(res);
                this.articleData = res.data.data.records;
            });
        }
    }
</script>
<style scoped>
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

    .article-list-wrap {
        flex: 4;
        width: 100%;
        position: relative;
        padding: 20px 0;
    }

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