<template>
    <div id="about-edit-wrap">
        <Comfirm @comfirm-btn="comfirmBtn" ref="comfirm" />
        <Toast ref="toast" />
        <div class="container about-edit">
            <ArticleTitle class="article-title" :title="pageTitle" />
            <div class="content">
                <!-- <span>内容：</span> -->
                <v-md-editor class="content-md" v-model="aboutContent.content" height="400px"></v-md-editor>
            </div>
            <div class="button-wrap">
                <button class="primary" @click="submit">提交</button>
                <button class="warning" @click="restButton">重置</button>
            </div>

        </div>
    </div>
</template>


<script setup>
    import ArticleTitle from '../components/ArticleTitle.vue';
    import Comfirm from '../components/Comfirm.vue';
    import Toast from '../components/Toast.vue';
</script>
<script>
    import apiList from '../api/apiList';
    import {
        mapGetters
    } from 'vuex';
    export default {
        name: 'aboutEdit',
        data() {
            return {
                aboutContent: {
                    id: '',
                    content: '',
                    created: '',
                },
                pageTitle: '关于页面编辑',
                errorMsg: '错误',
                themeClass: '',
                // comfirmBtn:null
            }
        },
        methods: {
            init(id, content, created) {
                this.aboutContent.id = id;
                this.aboutContent.content = content;
                this.aboutContent.created = created;
            },
            restButton() {
                this.$refs.comfirm.showToast('错误错误', true);
            },
            comfirmBtn(val) {
                if (val == 0) {
                    this.init('', '', '');
                } else if (val == 1) {
                    return
                } else if (val == 2) {
                    this.$axios.post(apiList.ABOUT_EDIT, {
                        id: this.aboutContent.id,
                        content: this.aboutContent.content,
                    }).then(res => {
                        this.$refs.toast.showToast(res.data.msg, 3)
                        this.$router.push('/about/')
                    }).catch(err => {
                        console.dir(err);
                        this.$refs.toast.showToast(err.response.data.message, 3);
                    })

                }
                // return val;
            },
            submit() {
                if (this.aboutContent
                    .content == '') {
                    this.$refs.toast.showToast('正文不能为空', 3);
                    return
                }
                this.$refs.comfirm.showToast('确认要提交吗？', true, 'submit');
            },
            getThemeStateFn(state) {
                if (state == 'dark') {
                    this.themeClass = 'markdown-body'
                } else if (state == 'white') {
                    this.themeClass = 'vuepress-markdown-body';
                }
            },
        },
        computed: {
            ...mapGetters(['getThemeState'])
        },
        watch: {
            getThemeState: {
                deep: true,
                immediate: true,
                handler(val) {
                    this.getThemeStateFn(val)

                }
            }
        },
        created() {
            this.getThemeStateFn(localStorage.getItem('sliderBarState'));
            try {
                this.$axios.get(apiList.ABOUT).then(res => {
                    let data = res.data.data[0]
                    this.init(data.id,data.content,data.created)
                }).catch(err => {
                    console.dir(err);
                    this.$refs.toast.showToast(err.response.data.msg, 3);
                })
            } catch (error) {
                console.log(error);
            }
            document.title = '关于编辑 - 鱼板的博客 - 跟你分享最新的知识'
        }

    }
</script>

<style scoped>
    #about-edit-wrap {
        width: 100%;
        margin-top: 60px;
        padding-top: 20px;
    }

    #about-edit-wrap .about-edit .button-wrap {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .about-edit .article-title {
        margin-top: 40px;
    }

    .v-md-editor {
        overflow: hidden;
        border-radius: var(--global_border_radius);
        background: var(--theme_nav_bg_color);
        color: var(--global_text_color);
    }

    .v-md-editor :deep(.v-md-textarea-editor textarea),
    .v-md-editor :deep(.vuepress-markdown-body) {
        background: var(--theme_nav_bg_color);
        color: var(--global_text_color);
    }

    input:focus {
        /* width: 300px; */
        outline: #3379f6 2px solid;
        color: var(--nav_text_color);
    }

    input::-webkit-input-placeholder {
        color: var(--global_text_color);
    }

    input::-moz-input-placeholder {
        color: var(--global_text_color);
    }

    input::-o-input-placeholder {
        color: var(--global_text_color);
    }

    input::-ms-input-placeholder {
        color: var(--global_text_color);
    }

    input {
        width: 100%;
        padding: 10px 15px;
        margin: 0 auto 10px auto;
        box-sizing: border-box;
        appearance: none;
        outline: 0;
        border: 1px solid rgba(73, 73, 73, 0.4);
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 3px;
        display: block;
        text-align: center;
        font-size: 18px;
        color: var(--global_text_color);
        transition-duration: 0.25s;
        font-weight: 300;
        transition: all .25s;
        border-radius: var(--global_border_radius);
    }

    input:hover {
        background-color: rgba(255, 255, 255, 0.4);
    }

    .description,
    .title .banner-img {
        line-height: 50px;
    }

    .about-edit {
        max-width: 1000px;
        min-height: 90vh;
    }

    .about-edit .description,
    .about-edit .title,
    .about-edit .content,
    .about-edit .button-wrap,
    .about-edit .article-title,
    .about-edit .banner-img {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 30px;
        position: relative;
    }

    .about-edit .banner-img input {
        /* width: 95%; */
    }

    .about-edit .banner-img span {
        width: 66px;
    }

    .about-edit>div>span {
        display: inline-block;
        width: 60px;
        color: var(--nav_text_color);
    }

    @media screen and (max-width:600px) {
        #about-edit-wrap {
            margin-top: 150px;
            min-height: calc(100vh - 370px);
        }

        .about-edit .description,
        .about-edit .title,
        .about-edit .content,
        .about-edit .submit,
        .about-edit .article-title,
        .about-edit .banner-img {
            flex-direction: column;
            align-items: center;
            margin-top: 0;
        }

        .v-md-editor {
            margin-top: 20px;
        }

        .about-edit .banner-img input {
            width: 100%;
        }
    }
</style>