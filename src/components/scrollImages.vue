<template>
    <div class="imagescroll" >
        <!-- 通过tag来指定transition-group渲染成ul元素,如果不指定则默认渲染成span -->
        <!-- 通过v-for渲染出来的元素是不能用transition来包裹的 需要用transition-group -->
        <!-- enter-active-class="animated lightSpeedIn"
        leave-active-class="animated lightSpeedOut" 
        @mouseenter="enter" @mouseleave="leave"
        -->
        <transition-group tag="ul" name="image" 
        >
        <li v-for="(setScrollImgSrc,ind) in setScrollImgSrc" :key="ind" v-show="ind === mark">
            <img :src="require(setScrollImgSrc)">
        </li>
        </transition-group>

    </div>
</template>

<script>
    export default {
        name:'scrollImages',
        
        data:()=>{
            return{
                mark:0,
                time:null
            }
        },methods:{
            
            change(i){
                this.mark = i;
            },
            autoPlay(){
                this.mark++;
                if(this.mark===4){
                    this.mark=0;
                    return;
                }
                
            },
            play(){
                this.time = setInterval(this.autoPlay,2000);
            }
        },
        created(){
            this.play();
            
        },props:{
            setScrollImgSrc:Array
        }
        // 通过props接受父组件传来的图片地址,需要定义一个数组来存放
        
    }
</script>

<style>
/* @import "../assets/css/commoncss/animate.min.css"; */
.image-enter,.image-leave-to{
    opacity: 0;
}
.image-enter-to,.image-leave{
    opacity: 1;
}
.image-enter-active,.image-leave-active{
    transition: all 1s;
}
.imagescroll {
    z-index: 1;
    top: 0px;
    left: 0px;
    position: relative;
    width: 100vw;
    height: 500px;
}


.imagescroll ul{
    width: 100%;
    height: 100%;
}
.imagescroll ul li{
    position: absolute;
    height: 100%;
    width: 100%;
}
.imagescroll ul li  img{
   position: absolute;
    height: 100%;
    width: 100vw;
    left: 0px;
    top: 0px;
    object-fit: cover;
}

</style>