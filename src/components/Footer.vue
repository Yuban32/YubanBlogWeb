<template>
    <footer>
        <div>
            <span>Copyright © {{dateTime}} 鱼板（樊家威）</span><span>Power by Vue.js Vue-Router Vite</span>
        <hr>
        <span>原创不易，转载请注明署名出处，本站部分图片和素材取自互联网，版权归作者所有。</span>
        </div>
    </footer>
</template>
<style scoped>
    footer {
        width: 100%;
        height: 200px;
        overflow: hidden;
        text-align: center;
        font-size: 16px;
        color: #fff;
        background-color: #2b2b2b;
    }
    div{
        width: 98%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    hr {
        max-width: 560px;
        width: 60%;
        margin: 20px 0;
    }
    span{
        padding-left: 20px;
        padding-top: 10px;
    }
</style>

<script setup>
    const dateTime = new Date().getFullYear()
</script>