<template>
    <div id="login-wrap">
        <Toast ref="toast" />
        <div class="login-register-wrap">

            <div class="login">
                <div class="login-register-header">
                    <div class="login-btn hover-up"><span @click="registerMode = false">Sign In</span></div>
                    <div class="register-btn hover-up"><span @click="registerMode = true">Sign Up</span></div>
                </div>
                <div class="login-info" :class="{loginMode : registerMode}">
                    <input type="text" id="username" placeholder="请输入账号" v-model="username"
                        :class="{ opacityAnimation: !registerMode }">
                    <input type="email" id="email" placeholder="电子邮箱" v-model="email" v-show="registerMode"
                        :class="{ opacityAnimation: registerMode }">
                    <input type="password" id="password" placeholder="请输入密码" v-model="password"
                        :class="{ opacityAnimation: !registerMode }">
                    <input type="password" id="cpassword" placeholder="请重复输入密码" v-model="c_password"
                        v-show="registerMode" :class="{ opacityAnimation: registerMode }">
                    <button type="submit" id="login-button" @click="submit" v-show="!registerMode"
                        :class="{ opacityAnimation: !registerMode }">Sign In</button>
                    <button type="submit" id="login-button" @click="submit" v-show="registerMode"
                        :class="{ opacityAnimation: registerMode }">Sign Up</button>
                </div>

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
                c_password: "",
                email: "",
                msg: {},
                registerMode: false
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
                var emailPath = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
                if (this.username == '') {
                    this.$refs.toast.showToast("账号不能为空", 3);
                    return
                }
                if (path.test(this.username)) {
                    this.$refs.toast.showToast("账号密码不能有中文！", 3);
                }
                if (this.registerMode) {
                    if (this.password == '' && this.c_password == '') {
                        this.$refs.toast.showToast("请输入密码", 3);
                    } else if (this.c_password != this.password) {
                        this.$refs.toast.showToast("重复输入密码不匹配", 3);

                    } else if (this.email != '') {
                        if (!emailPath.test(this.email)) {
                            this.$refs.toast.showToast("请输入正确的邮箱格式", 3);
                        } else {
                            //注册逻辑
                            var raw = {
                                "username": this.username,
                                "password": this.password,
                                "email": this.email
                            };
                            this.$axios.post(apiList.REGISTER, raw).then(res => {
                                this.$refs.toast.showToast(res.data.data, 3);
                            }).catch(err => {
                                this.$refs.toast.showToast(err, 3);
                            })
                        }
                    }
                } else {
                    // 序列化
                    var raw = JSON.stringify({
                        "username": this.username,
                        "password": this.password
                    });
                    //登录逻辑
                    this.$axios.post(apiList.LOGIN, raw).then(res => {
                        const jwt = res.headers['authorization'];
                        const userInfo = res.data.data;
                        this.$store.commit('SET_TOKEN', jwt);
                        this.$store.commit('SET_USERINFO', userInfo);
                        this.$refs.toast.showToast('登录成功，3秒后跳转', 3);
                        setTimeout(() => {
                            this.$router.push({
                                path: '/console'
                            });
                        }, 3000);
                    }).catch(err => {
                        // console.dir(err);
                        this.$refs.toast.showToast(err, 3);
                    })
                }

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
        },
        created() {
            document.title = '登录 - 鱼板的博客 - 跟你分享最新的知识'
        }
    }
</script>
<style scoped>
    .login-register-header {
        display: flex;
        justify-content: center;
        align-items: center;
        user-select: none;
    }

    .login-register-header>div {
        flex: 1;
        height: 45px;
        line-height: 45px;
        padding: 0 10px;
    }

    .login-register-header>div span {
        color: var(--nav_text_color);
        font-size: 26px;
        cursor: pointer;
        transition: color .3s;
    }

    .login-register-header>div span:hover {

        color: #005eff;
    }

    .login-btn {
        text-align: right;
    }

    .register-btn {
        text-align: left;
    }

    button:hover {

        background-color: #005eff;
    }

    button:active {
        opacity: 0.2;
    }

    button {
        width: 282px;
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
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        /* background: linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%); */
        /* background: url(https://picsum.photos/id/1015/700/700) no-repeat; */
        /* background-size: cover; */

    }

    .login {
        /* width: 60%; */
        width: 500px;
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
        /* box-shadow: var(--article_card_box_shadow); */
        /* background: hsla(0, 0%, 100%, 0.6); */
        z-index: 1;

    }

    .login h1 {
        color: var(--nav_text_color);
    }

    .login-info {
        height: 150px;
        margin-top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        transition: all .3s;
    }

    /* #login-wrap::before {
        display: block;
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        content: '';
        z-index: -1;
        transform: scaleX(-1);
        filter: blur(10px);
        background: url(https://picsum.photos/id/1015/700/700) no-repeat;
        background-size: cover;

    } */

    .opacityAnimation {
        animation: opacitys 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
        transform: translate3d(0, 0, 0);
        backface-visibility: hidden;
        perspective: 1000px;
    }

    .loginMode {
        height: 253px;
    }

    @keyframes opacitys {
        to {
            opacity: 1;
        }

        from {
            opacity: 0;
        }
    }
</style>