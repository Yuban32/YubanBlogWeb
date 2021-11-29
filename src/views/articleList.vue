<template>
    <div id="article-list-wrap" class="global-class">
        <div class="article-list-left">
            <ul class="timeline">
                <li v-for="( item , index ) in articleDataBus" :key="index">{{item.articleDate}}</li>
            </ul>
        </div>
        <div class="article-list-right"></div>

    </div>
</template>
<script setup>
    import articleDataBus from '../utils/articleDataBus';
</script>
<script>
    export default {
        name: 'articleList',
        data() {
            return {

            }
        },
        methods: {

        },
        created() {

        }
    }
</script>

<style scoped>
    .timeline {
        margin: 50px 0 30px 120px;
        padding-left: 30px;
        border-left: 8px solid #eee9dc;
    }
</style>