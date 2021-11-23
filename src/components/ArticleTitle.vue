<template>
    <div id="article-title-wrap">
        <h1>{{title}}</h1>
    </div>
</template>

<script setup>
    defineProps({
        title:String
    })
</script>

<style>
    #article-title-wrap{
        margin-bottom: 10px;
        /* color: var(--nav_text_color); */
    }
</style>