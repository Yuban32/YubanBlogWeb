<template>
    <div id="user-setting-wrap">
        <Comfirm @comfirm-btn="comfirmBtns" ref="comfirm" />
        <Toast ref="toast" />
        <div class="container bg">
            <div class="user-setting" ref="settingContent">
                <div class="profile">
                    <div class="pic-wrap">
                        <img :src="userInfo.avatar">
                    </div>
                    <div class="profile-name">
                        <h2>用户名：{{userInfo.userName}}</h2>
                        <h2>邮箱：{{userInfo.email}}</h2>
                    </div>
                    <div class="edit-user">
                        <input type="text" id="username" placeholder="请输入修改的用户名">
                        <input type="email" id="email" placeholder="请输入修改的邮箱地址">
                        <!-- <input type="file" id="avatar"> -->
                        <button type="submit" id="edit-btn">修改</button>
                        <button class="warning" type="submit" id="logout-btn" @click="logout">Sing Out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import Comfirm from '../components/Comfirm.vue';
    import Toast from '../components/Toast.vue';

</script>
<script>
    import 'github-markdown-css'
    import apiList from '../api/apiList';
    import {
        mapGetters
    } from 'vuex';
    export default {
        data() {
            return {
                opacity: 0,
                themeClass: '',
                userInfo: {
                    userName: '',
                    email: '',
                    avatar: '',
                    id: ''
                }
            }
        },
        methods: {
            logout() {
                this.$refs.comfirm.showToast("确认要退出登录吗？", true);
            },
            comfirmBtns(val) {
                if (val == 0) {
                    this.$axios.get(apiList.LOGOUT).then(res => {
                        this.$refs.toast.showToast(res.data.msg, 3);
                        this.$store.commit("REMOVE_INFO");
                        this.token = null;
                        setTimeout(()=>{
                        this.$router.push('/')
                        })
                    }).catch(err => err);
                } else if (val == 1) {
                    return;
                }
            },
            handlerPageOpacity() {
                let opacityValue = document.documentElement.scrollTop / this.$refs.settingContent.scrollHeight;
                if (opacityValue > 1) {
                    opacityValue = 1
                }
                this.opacity = opacityValue;

            },
            init(id, content, created) {
                this.aboutData.id = id;
                this.aboutData.content = content;
                this.aboutData.created = created;
            },
            getThemeStateFn(state) {
                if (state == 'dark') {
                    // 未完成的主题切换方案
                    this.themeClass = 'markdown-body'
                } else if (state == 'white') {
                    this.themeClass = 'vuepress-markdown-body';
                }
            },
            getUserInfo() {
                const uid = JSON.parse(sessionStorage.getItem("userInfo"));
                this.userInfo.id = uid.id;
                this.userInfo.userName = uid.username;
                this.userInfo.email = uid.email;
                this.userInfo.avatar = uid.avatar;
            }
        },
        mounted() {
            window.addEventListener('scroll', this.handlerPageOpacity)
            window.addEventListener('resize', this.handlerPageOpacity)
            this.getUserInfo()
            document.title = '用户设置 - 鱼板的博客 - 跟你分享最新的知识';
            this.getThemeStateFn(localStorage.getItem('sliderBarState'));

        },
        computed: {
            ...mapGetters(['getThemeState'])
        },
        watch: {
            getThemeState(newVal) {
                this.getThemeStateFn(newVal)
            }
        },
        beforeUnmount() {
            window.removeEventListener('scroll', this.handlerPageOpacity)
            window.removeEventListener('resize', this.handlerPageOpacity)
        }
    }
</script>

<style scoped>
    /* user-setting */

    .edit-user {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    input:focus {
        width: 300px;
        color: var(--nav_text_color);
    }

    button:hover {

        background-color: #005eff;
    }

    button:active {
        opacity: 0.2;
    }

    button {
        width: 282px;
        margin-top: 20px;
        margin-left: 0;
        appearance: none;
        outline: 0;
        background-color: #3379f6;
        border: 0;
        padding: 10px 15px;
        color: #fff;
        border-radius: var(--global_border_radius);
        cursor: pointer;
        font-size: 18px;
        transition-duration: 0.25s;
    }

    input {
        appearance: none;
        outline: 0;
        border: 1px solid rgba(73, 73, 73, 0.4);
        background-color: rgba(255, 255, 255, 0.2);
        width: 250px;
        border-radius: 3px;
        padding: 10px 15px;
        margin: 0 auto 10px auto;
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

    #user-setting-wrap {
        background-color: var(--theme_home_bg_color);
    }

    .user-setting {
        margin-top: 60px;
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .pic-wrap {
        width: 200px;
        height: 200px;
        overflow: hidden;
        border-radius: 50%;
        margin-top: 10px;
    }

    .pic-wrap img {
        height: 100%;
    }

    .profile {
        width: 100%;
        /* height: 100vh; */
        padding: 250px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        /* justify-content: center; */
        background-color: var(--theme_nav_bg_color);
        border-radius: var(--global_border_radius);

    }

    .profile-name {
        margin-top: var(--global_margin_top);

    }

    .profile-name h1,
    h2 {
        font-family: '宋体';
        color: var(--nav_text_color);
        padding: 20px 0;
    }

    #user-setting-wrap {
        min-height: 100vh;
        height: auto;
        width: 100%;
        overflow: hidden;
    }
</style>