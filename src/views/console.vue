<template>
    <div id="console-wrap">
        控制台
        <button @click="blogEdit">发表文章</button>
    </div>
</template>

<script>
export default{
    name:'consoleView',
    data(){
        return{

        }
    },
    methods:{
        blogEdit(){
            this.$router.push('/console/add')
        }
    }
}
</script>
<style scoped>
    #console-wrap{
        margin-top: 60px;
    }
</style>