<template>
    <div id="home-wrap">
        <div class="home-first-page">
            <div class="home-first-page-text">
                <div>Hello！我是樊家威</div>
                <p>欢迎来到我的博客</p>
                <p>我会在此跟大家分享一些实用的教程和我在学习中遇到的一些问题</p>
            </div>
        <ThemeToggle/>
        </div>
    </div>
</template>

<script setup>
    import ThemeToggle from '../components/theme_toggle.vue';

</script>

<style>
    #home-wrap {
        width: 100%;
    }

    .home-first-page {
        width: 100%;
        height: calc(100vh - 60px);
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--theme_hemo_bg_color);
    }

</style>