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
                    <img src="../assets/images/nav/pic.jpg">
                </div>
                <span class="pic-name">鱼板</span>
            </div>
            <div class="nav-right">
                <ul>
                    <router-link tag="li" to="/">首页</router-link>
                    <router-link tag="li" to="/about">关于我</router-link>
                    <li><a href="javascript:void(0)">Music</a></li>
                    <li>
                        <ThemeToggle />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
    import ThemeToggle from '../components/ThemeToggle.vue';
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

        #check:checked~.menu {
            height: 0px;
            padding: 0;
            opacity: 0;
            /* transition: all .5s; */
        }

        #check:checked~label .nav-btn {
            justify-content: space-around;
            flex-direction: column;
            z-index: 1;
        }

        #check:checked~label .nav-btn span {
            position: static;
        }

        #check:checked~label .nav-btn span:first-child {
            transform: rotate(0deg);
        }

        #check:checked~label .nav-btn span:last-child {
            transform: rotate(0deg);
        }

        #check:checked~label .nav-btn span:nth-child(2) {
            opacity: 1;
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
            /* transform: translateX(-5%); */
            padding: 0 20px;
        }

        a {
            text-align: center;
            margin: 0 auto;
            /* transform: translateX(-5%); */
            padding: 0 20px;
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
            flex-direction: row;
            justify-content: center;
            align-items: center;
            border-radius: var(--global_border_radius);
            background-color: #3379f6;
            box-shadow: 0px 0px 30px rgba(1, 81, 128, 0.75);
        }

        .nav-btn span {
            position: absolute;
        }

        .nav-btn span:first-child {
            transform: rotate(45deg);
        }

        .nav-btn span:last-child {
            transform: rotate(135deg);
        }

        .nav-btn span:nth-child(2) {
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
            height: 400px;
            padding: 50px 0 0 0;
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
            height: 50%;
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