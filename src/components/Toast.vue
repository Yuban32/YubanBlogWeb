
<template>
    <div class="toast-wrap">
        <transition name="toast">
        <div class="toast" v-if="show">{{msg}}</div>
        </transition>
    </div>
</template>

<script>
export default {
    data(){
        return{
            show:false,
            msg:'',
        }
    },methods:{
        showToast(msg,duration){
            let timer = null;
            duration = duration*1000;
            this.msg = msg;
            this.show=true;
            if(timer){
                console.log(timer)

                clearTimeout(timer);
            }
            timer = setTimeout(()=>{
                this.show=false
                this.msg = ''
            
            },duration);
        }
    }
}
</script>

<style scoped>
    .toast{
        position: fixed;
        padding: 20px;
        z-index: 999;
        left: 50%;
        top: 10%;
        transform: translate(-50%,-20%);
        text-align: center;
        font-size: 18px;
        border-radius: 15px;
        border: 1px solid rgb(255, 255, 255);
        background-color: rgb(255, 255, 255);
        /* color: red; */
    }
.toast-enter-active,
.toast-leave-active {
  transition: all 0.5s ease;
}
.toast-enter-active{
    animation: fadein 0.5s;
}
.toast-leave-active{
    animation: fadein 0.5s reverse;
}

    @keyframes fadein{
        from{
            top: 0;
            opacity: 0;
        }to{
            top: 10%;
            opacity: 1;
        }
    }
</style>