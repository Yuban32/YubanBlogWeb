<template>
    <div id="nav-wrap">
        <div class="bg"></div>
        <input type="checkbox" id="check">
        <label for="check">
            <div class="nav-btn">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </label>

        <div class="menu">
            <div class="nav-left">
                <div class="pic-wrap">
                    <img :src="userInfo.avatar == ''?userInfo.avatar = getImageUrl('pic.jpg'):userInfo.avatar">
                </div>
                <span class="pic-name">{{userInfo.userName}}</span>
            </div>
            <div class="nav-right">
                <ul>
                    <li>
                        <router-link to="/">首页</router-link>
                    </li>
                    <li>
                        <router-link to="/about">关于站长</router-link>
                    </li>
                    <li>
                        <router-link to="/console">Setting</router-link>
                    </li>
                    <li>
                        <ThemeToggle />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {
        mapGetters,
        mapState
    } from 'vuex';
    import apiList from '../api/apiList';
    import ThemeToggle from '../components/ThemeToggle.vue';
    import Comfirm from './Comfirm.vue';
    import Toast from './Toast.vue';
    const getImageUrl = (name) => {
        return new URL(`../../src/assets/images/nav/${name}`,
            import.meta.url).href
    }
</script>
<script>
    export default {
        name: 'navigator',
        data() {
            return {
                userInfo: {
                    userName: '',
                    email: '',
                    avatar: '',
                    id: ''
                }
            }
        },
        methods: {
            init() {
                const uid = JSON.parse(sessionStorage.getItem("userInfo"));
                if (uid == ''||uid == null) {
                    this.userInfo.userName = "请登录";
                } else {
                    this.userInfo.id = uid.id;
                    this.userInfo.userName = uid.username;
                    this.userInfo.email = uid.email;
                    this.userInfo.avatar = uid.avatar;
                }
            }

        },
        mounted() {
            this.init();
        },
        computed: {
            ...mapGetters(['getUser'])
        },
        watch: {
            getUser(newVal) {
                this.init();
            }
        }
    }
</script>

<style scoped>
    #check {
        display: none;
    }

    a {
        text-decoration: none;
        color: var(--nav_text_color);
        transition: color .3s;
    }

    a:hover {
        color: #6733f6;
    }


    .bg {
        width: 100%;
        height: 60px;
        position: absolute;
        top: 0;
        left: 0;
        /* z-index: 1; */
        background-color: var(--theme_nav_bg_color);
    }

    #nav-wrap {
        padding: 5px 20px;
        overflow: hidden;
        line-height: 50px;
        position: sticky;
        top: 0px;
        z-index: 9999;

    }

    .menu {
        height: 50px;
        opacity: 1;
        position: relative;
        transition: all .5s;
        color: var(--nav_text_color);
    }

    .nav-left {
        float: left;
        display: flex;
    }

    .nav-right {
        float: right;
    }

    ul {
        display: flex;
    }

    li {
        float: left;

        line-height: 50px;
    }

    a {
        padding: 0 20px;
    }

    svg {
        height: 50px;
    }

    .pic-wrap {
        border-radius: 50%;
        margin-right: 20px;
        height: 50px;
        overflow: hidden;

    }

    img {
        height: 100%;
    }


    @media screen and (max-width:600px) {
        .bg {
            height: 0px;
        }



        #nav-wrap {
            width: 100%;
            padding: 0;
            line-height: normal;
            /* position: absolute; */

        }

        ul {
            height: 100%;
            /* background: #fff; */
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        li {
            text-align: center;
            margin: 0 auto;

            padding: 0 20px;
        }

        a {
            text-align: center;
            font-size: 20px;
            padding: 0 20px;
            line-height: 35px;
        }

        #check:checked~.menu {
            height: 350px;
            padding: 50px 0 50px 0;
            opacity: 1;
            /* transition: all .5s; */
        }

        #check:checked~label .nav-btn {
            justify-content: center;
            flex-direction: row;
            z-index: 1;
        }

        .nav-btn span {
            position: static;
        }

        .nav-btn span:first-child {
            transform: rotate(0deg);
        }

        .nav-btn span:last-child {
            transform: rotate(0deg);
        }

        .nav-btn span:nth-child(2) {
            opacity: 1;
        }

        .nav-btn {
            width: 50px;
            height: 50px;
            padding: 2px;
            position: fixed;
            top: 50px;
            left: 50px;
            z-index: 1;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            border-radius: var(--global_border_radius);
            background-color: #3379f6;
            box-shadow: 0px 0px 30px rgba(1, 81, 128, 0.75);
        }

        #check:checked~label .nav-btn span {
            position: absolute;
        }

        #check:checked~label .nav-btn span:first-child {
            transform: rotate(45deg);
        }

        #check:checked~label .nav-btn span:last-child {
            transform: rotate(135deg);
        }

        #check:checked~label .nav-btn span:nth-child(2) {
            opacity: 0;
            /* display: none; */
        }

        .nav-btn span {
            width: 40px;
            height: 5px;
            background-color: #fff;
            opacity: 1;
            transition: all .5s;
        }

        .menu {
            height: 0;

            background-color: var(--theme_nav_bg_color);
            color: var(--nav_text_color);
        }

        .nav-left {
            width: 100%;
            height: 150px;
            float: none;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .nav-right {
            width: 100%;
            margin-top: 20px;
            height: 30%;
            float: none;
        }

        .pic-wrap {
            border-radius: 50%;
            height: 100%;
            overflow: hidden;
            margin: 0;

        }

        .pic-name {
            /* transform: translateX(-25%); */
            font-size: 22px;
            margin-top: 20px;
        }
    }
</style>