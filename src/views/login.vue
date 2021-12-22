<template>
    <div id="login-wrap">
        <Toast ref="toast" />
        <div class="login">
            <h1>后台登录</h1>
            <div class="login-info">
                <input type="text" id="username" placeholder="请输入账号" v-model="username">
                <input type="password" id="password" placeholder="请输入密码" v-model="password">
                <button type="submit" id="login-button" @click="submit">Login</button>
            </div>
        </div>
    </div>
</template>
<script>
    import Toast from "../components/Toast.vue";
    import apiList from '../api/apiList'
    export default {
        name: "login",
        data() {
            return {
                username: "",
                password: "",
                msg: {}
            };
        },
        methods: {
            removeSpaces(str) {
                // 去除空格
                var strs = str.replace(/[^\S\n\r\t]/g, "");
                return strs;
            },
            removeChinese(str) {
                var strs = str.replace(/[\u4e00-\u9fa5]/g, "");
                return strs;
            },
            submit() {
                // 判断中文  /[\u4e00-\u9fa5]/g; 不知道为什么VSOCDE把这串自动转义了
                
                var path = /[\u4e00-\u9fa5]/g;
                // 序列化
                var raw = JSON.stringify({
                    "username": this.username,
                    "password": this.password
                });
                if(this.username==''){
                    this.$refs.toast.showToast("账号不能为空", 3);
                    return
                }
                if (path.test(this.username)) {
                    this.$refs.toast.showToast("账号密码不能有中文！", 3);
                }
                this.$axios.post(apiList.LOGIN, raw).then(res => {
                    const jwt = res.headers['authorization'];
                    const userInfo = res.data.data;
                    this.$store.commit('SET_TOKEN', jwt);
                    this.$store.commit('SET_USERINFO', userInfo);
                    this.$refs.toast.showToast('登录成功，3秒后跳转', 3);
                    setTimeout(() => {
                        this.$router.push({
                            path:'/console'
                        });
                    }, 3000);
                }).catch(err => {
                    // console.dir(err);
                    this.$refs.toast.showToast(err, 3);
                })
            }
        },
        watch: {
            username(newVal) {
                this.username = this.removeSpaces(newVal);
            },
            password(newVal) {
                this.password = this.removeSpaces(newVal);
            },

        },
        components: {
            Toast
        },created(){
            console.log(this);
        }
    }
</script>
<style scoped>
    button:hover {

        background-color: #005eff;
    }

    button:active {
        opacity: 0.2;
    }

    button {
        appearance: none;
        outline: 0;
        background-color: #3379f6;
        border: 0;
        padding: 10px 15px;
        color: #fff;
        border-radius: var(--global_border_radius);
        width: 282px;
        cursor: pointer;
        font-size: 18px;
        transition-duration: 0.25s;
    }

    input:focus {
        width: 300px;
        color: var(--nav_text_color);
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

    #login-wrap {
        margin-top: 60px;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        /* background: linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%); */

    }

    .login {
        /* width: 60%; */
        width: 700px;
        height: 500px;
        display: flex;
        justify-content: center;
        align-items: left;
        flex-direction: column;
        position: relative;
        text-align: center;
        color: var(--global_text_color);
        border-radius: var(--global_border_radius);
        background: var(--article_card_bg_color);
        box-shadow: var(--article_card_box_shadow);

    }

    .login h1 {
        color: var(--nav_text_color);
    }

    .login-info {
        height: 190px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .login::before {
        display: block;
        width: 700px;
        height: 500px;
        position: absolute;
        top: 0;
        left: 0;
        content: '';
        z-index: -1;
        /* transform: scaleX(-1); */
        filter: blur(1px);
        /* background: url(https://picsum.photos/id/1015/700/700) no-repeat; */


    }
</style>