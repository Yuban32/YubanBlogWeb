<template>
    <div id="blog-edit-wrap">
        <v-md-editor v-model="value" height="400px"></v-md-editor>
    </div>
</template>

<script>
export default{
    name:'blogEdit',
    data(){
        return{
            value:'2'
        }
    },
    
}
</script>

<style scoped>
    #blog-edit-wrap{
        margin-top: 60px;
    }
</style>