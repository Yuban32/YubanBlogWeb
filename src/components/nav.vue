<template>
    <div id="nav-wrap">
        <div class="nav-left">
            <div class="pic-wrap">
                <img src="../assets/images/nav/pic.jpg">
            </div>
            <span class="pic-name">家威</span>
        </div>
        <div class="nav-right">
            <ul>
                <li>
                    首页</li>
                <li>
                    学习</li>
                <li>
                    文章</li>
                <li>
                    小工具</li>
                <li>
                    关于我
                </li>
                <ThemeToggle />
                <li></li>
            </ul>
        </div>
    </div>
</template>

<script setup>
    import ThemeToggle from '../components/theme_toggle.vue';
</script>

<style>
    #nav-wrap {
        padding: 5px 20px;
        height: 50px;
        line-height: 50px;
        background-color: var(--theme_nav_bg_color);
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
        padding: 0 20px;
        line-height: 50px;
        list-style: none;
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
        /* padding: 0 10px; */
    }
</style>