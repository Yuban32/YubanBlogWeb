<template>
    <footer>
        Copyright © {{dateTime}} 鱼板（樊家威）Power by Vue.js Vue-Router Vite
        <hr>
        <span>原创不易，转载请注明署名出处，本站部分图片和素材取自互联网，版权归作者所有。</span>
    </footer>
</template>
<style scoped>
    footer {
        width: 100%;
        height: 200px;
        font-size: 16px;
        color: #fff;
        background-color: #2b2b2b;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    hr {
        width: 560px;
        margin: 20px 0;
    }
    span{
        padding-left: 20px;
    }
</style>

<script setup>
    const dateTime = new Date().getFullYear()
</script>