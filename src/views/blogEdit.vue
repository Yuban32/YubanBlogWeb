<template>
    <div id="blog-edit-wrap">
        <Comfirm @comfirm-btn="comfirmBtn" ref="comfirm" />
        <Toast ref="toast" />
        <div class="container blog-edit">
            <ArticleTitle class="article-title" :title="pageTitle" />
            <div class="title">
                <span>标题：</span>
                <input type="text" v-model="artileContent.title" id="title=input">
            </div>
            <div class="description">
                <span>摘要：</span>
                <input type="text" v-model="artileContent.description" id="description-input">
            </div>
            <div class="content">
                <span>内容：</span>
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
    export default {
        name: 'blogEdit',
        data() {
            return {
                artileContent: {
                    id:'',
                    title: '',
                    description: '',
                    content: 'null',
                    created:''
                },
                pageTitle: '文章发表页',
                errorMsg: '错误',
                // comfirmBtn:null
            }
        },
        methods: {
            init(id,title,description,content,created){
                this.artileContent.id = id;
                this.artileContent.title = title;
                this.artileContent.description = description;
                this.artileContent.content = content;
                this.artileContent.created = created;
            },
            restButton() {
                this.$refs.comfirm.showToast('错误错误', true);
            },
            comfirmBtn(val) {
                console.log(this.artileContent);
                if (val == 0) {
                    this.init('','','');
                } else if (val == 1) {
                    return
                } else if (val == 2) {
                    let titleLength = this.artileContent.title.length
                    console.log(this.artileContent.title.length);
                    if (this.artileContent.title == '' || this.artileContent.description == '' || this.artileContent
                        .content == '') {
                        this.$refs.toast.showToast('标题、摘要、正文不能为空', 3);
                        return
                    } else {
                        this.$axios.post(apiList.BLOG_EDIT,{
                                id:this.artileContent.id,
                                title:this.artileContent.title,
                                description:this.artileContent.description,
                                content:this.artileContent.content
                        }).then(res=>{
                            console.log(res);
                            this.$refs.toast.showToast(res.data.msg,3)
                        }).catch(err=>{
                            console.dir(err);
                            this.$refs.toast.showToast(err.response.data.message,3);
                        })
                    }
                }
                // return val;
            },
            submit() {
                this.$refs.comfirm.showToast('确认要提交吗？', true, 'submit');
            }
        },
        watch: {
            // comfirmBtn(newVal,oldVal){
            //     console.log(newVal,oldVal);
            //     return newVal;
            // }
        },
        created(){
            try {
                const articleId = this.$route.params.id
                if(articleId==undefined){
                    return
                }
                console.log(articleId);
                this.$axios.get(apiList.BLOG+'/'+articleId).then(res=>{
                    console.log(res);
                    let data = res.data.data
                    this.init(data.id,data.title,data.description,data.content,data.created)
                }).catch(err=>{
                    console.dir(err);
                    this.$refs.toast.showToast(err.response.data.msg,3);
                })
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

    .primary {
        background-color: #3379f6;
    }

    .primary:hover {
        background-color: #005eff;
    }

    .warning {
        background: #e6a23c;
    }

    .warning:hover {
        background: #dd8603;

    }

    button:active {
        opacity: 0.2;
    }

    button {
        width: 282px;
        padding: 10px 15px;
        appearance: none;
        outline: 0;
        border: 0;
        color: #fff;
        border-radius: var(--global_border_radius);
        cursor: pointer;
        font-size: 18px;
        transition-duration: 0.25s;
    }

    input:focus {
        /* width: 300px; */
        outline: #3379f6 2px solid;
        color: var(--nav_text_color);
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
    .title {
        line-height: 50px;
    }

    .blog-edit {
        max-width: 1000px;

    }

    .blog-edit .description,
    .blog-edit .title,
    .blog-edit .content,
    .blog-edit .button-wrap,
    .blog-edit .article-title {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 30px;
        position: relative;
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
        .blog-edit .article-title {
            flex-direction: column;
            align-items: center;
            margin-top: 0;
        }

        .v-md-editor {
            margin-top: 20px;
        }
    }
</style>