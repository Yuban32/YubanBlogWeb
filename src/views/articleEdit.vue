<template>
    <div id="blog-edit-wrap">
        <Comfirm @comfirm-btn="comfirmBtn" ref="comfirm" />
        <Toast ref="toast" />
        <div class="container blog-edit">
            <ArticleTitle class="article-title" :title="pageTitle" />
            <div class="title">
                <!-- <span>标题：</span> -->
                <input type="text" v-model="artileContent.title" id="title=input" placeholder="请输入文章标题">
            </div>
            <div class="description">
                <!-- <span>摘要：</span> -->
                <input type="text" v-model="artileContent.description" id="description-input" placeholder="请输入文章摘要">
            </div>
            <div class="banner-img">
                <!-- <span>预览图：</span> -->
                <input type="text" v-model="artileContent.image" style="margin-right:5px;" id="banner-input" placeholder="请输入预览图片地址以http://开头">
                <input type="text" v-model="artileContent.tag" style="margin-left:5px;" id="tag-input" placeholder="请输入文章标签以英文 , 分割 最多支持3个标签">
            </div>
            <div class="content">
                <!-- <span>内容：</span> -->
                <v-md-editor class="content-md" v-model="artileContent.content" height="400px"></v-md-editor>
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
import { mapGetters } from 'vuex';
    export default {
        name: 'blogEdit',
        data() {
            return {
                artileContent: {
                    id: '',
                    title: '',
                    description: '',
                    content: '',
                    created: '',
                    image: '',
                    tag:''
                },
                pageTitle: '文章发表页',
                errorMsg: '错误',
                themeClass: '',
                // comfirmBtn:null
            }
        },
        methods: {
            init(id, title, description, content, created,image,tag) {
                this.artileContent.id = id;
                this.artileContent.title = title;
                this.artileContent.description = description;
                this.artileContent.content = content;
                this.artileContent.created = created;
                this.artileContent.image = image;
                this.artileContent.tag = tag;
            },
            restButton() {
                this.$refs.comfirm.showToast('确定要重置吗？', true);
            },
            comfirmBtn(val) {
                if (val == 0) {
                    this.init('', '', '');
                } else if (val == 1) {
                    return
                } else if (val == 2) {
                    this.$axios.post(apiList.BLOG_EDIT, {
                        id: this.artileContent.id,
                        title: this.artileContent.title,
                        description: this.artileContent.description,
                        content: this.artileContent.content,
                        image:this.artileContent.image,
                        tag:this.artileContent.tag
                    }).then(res => {
                        this.$refs.toast.showToast(res.data.msg, 3)
                        if(this.artileContent.id==''){
                            this.$router.push('/console')
                        }else{
                            this.$router.push('/article/'+this.artileContent.id)
                        }
                    }).catch(err => {
                        console.dir(err);
                        this.$refs.toast.showToast(err.response.data.message, 3);
                    })

                }
                // return val;
            },
            submit() {
                var path = /[\u4e00-\u9fa5]/g;
                if (this.artileContent.title == '' || this.artileContent.description == '' || this.artileContent
                    .content == ''|| this.artileContent
                    .tag == '') {
                        this.$refs.toast.showToast('标题、摘要、正文、标签不能为空', 3);
                    return
                }
                if (path.test(this.artileContent.image)) {
                    this.$refs.toast.showToast('预览图片框不能有中文', 3);
                    return
                }
                this.$refs.comfirm.showToast('确认要提交吗？', true, 'submit');
            },
            getThemeStateFn(state) {
                if (state == 'dark') {
                    // 未完成的主题切换方案
                    this.themeClass = 'markdown-body'
                } else if (state == 'white') {
                    this.themeClass = 'vuepress-markdown-body';
                }
            },
        },
        computed:{
            ...mapGetters(['getThemeState'])
        },
        watch: {
            // getThemeState(newVal) {
                //     this.getThemeStateFn(newVal)
            // }
            getThemeState: {
                deep:true,
                immediate:true,
                handler(val){
                this.getThemeStateFn(val)

                }
            }
        },
        created() {
            this.getThemeStateFn(localStorage.getItem('sliderBarState'));
            try {
                const articleId = this.$route.params.articleId
                if (articleId) {
                    this.$axios.get(apiList.BLOG + '/' + articleId).then(res => {
                        this.pageTitle = '文章编辑页'
                        let data = res.data.data
                        this.init(data.id, data.title, data.description, data.content, data.created,data.image)
                    }).catch(err => {
                        this.$refs.toast.showToast(err.response.data.msg, 3);
                    })
                }
            } catch (error) {
                console.log(error);
            }
        }

    }
</script>

<style scoped>
    #blog-edit-wrap {
        width: 100%;
        margin-top: 60px;
        padding-top: 20px;
    }

    #blog-edit-wrap .blog-edit .button-wrap {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .blog-edit .article-title {
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
    input::-webkit-input-placeholder{
        color: var(--global_text_color);
    }
    input::-moz-input-placeholder{
        color: var(--global_text_color);
    }
    input::-o-input-placeholder{
        color: var(--global_text_color);
    }
    input::-ms-input-placeholder{
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

    .blog-edit {
        max-width: 1000px;

    }

    .blog-edit .description,
    .blog-edit .title,
    .blog-edit .content,
    .blog-edit .button-wrap,
    .blog-edit .article-title,
    .blog-edit .banner-img {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 30px;
        position: relative;
    }

    .blog-edit .banner-img input {
        /* width: 95%; */
    }

    .blog-edit .banner-img span {
        width: 66px;
    }

    .blog-edit>div>span {
        display: inline-block;
        width: 60px;
        color: var(--nav_text_color);
    }

    @media screen and (max-width:600px) {
        #blog-edit-wrap {
            margin-top: 150px;
            min-height: calc(100vh - 370px);
        }

        .blog-edit .description,
        .blog-edit .title,
        .blog-edit .content,
        .blog-edit .submit,
        .blog-edit .article-title,
        .blog-edit .banner-img {
            flex-direction: column;
            align-items: center;
            margin-top: 0;
        }

        .v-md-editor {
            margin-top: 20px;
        }

        .blog-edit .banner-img input {
            width: 100%;
        }
    }
</style>