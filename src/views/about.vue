<template>
    <div id="about-wrap" ref="aboutWrap">
        <div class="about-first-page">
            ABOUT
        </div>
        <div class="mask"></div>
        <div class="test">
            asdasdasd
        </div>
    </div>
</template>

<script>

export default{
    data(){
        return{

        }
    },
    methods:{
        handleScroll(){
            console.dir(this.$refs.aboutWrap);
            
        }
    },
    mounted(){
        window.addEventListener('scroll',e=>{
            // console.log(e);
            this.handleScroll()
            
        })
    }
}

</script>

<style>
    #about-wrap{
        overflow: hidden;
    }
    .about-first-page{
        height: 100vh;
        width: 100vw;
        background-image: url(../assets/images/about/1.jpg);
        background-position: center;
        background-size: cover;
        background-attachment: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        /* 文字 */
        color: #fff;
        font-size: 100px;
        font-family: 'Trade Gothic W01';
        letter-spacing: 10px;
        font-weight: 700;
    }
    .mask{
        width: 100vw;
        height: 100vh;
        position: absolute;
        left: 0;
        top: 0;
        background-color: rgba(0, 0, 0, 0.363);
    }
    .test{
        height: 100vh;

    }
</style>