<template>
    <div id="toast-wrap" v-show="msg.ative">
        <transition-group tag="div" name="toast" key="1">
            {{msg.msg}}
        账号密码错误
        </transition-group>
    </div>
</template>
<style>
    #toast-wrap {
        width: 200px;
        /* height: 100px; */
        padding: 10px;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        font-weight: 600;
        letter-spacing: 2px;
        border-radius: var(--global_border_radius);
        color: red;
        background: var(--article_card_bg_color);
        box-shadow: var(--article_card_box_shadow);

    }
    .toast-enter-from,
    .toast-leave-to {
        opacity: 0;
    }
    .toast-enter-to,
    .toast-leave-from {
        opacity: 1;

    }
    .toast-enter-active,
    .toast-leave-active {
        transition: all 1s;
    }
</style>
<script>
    export default {
        name: "toast",
        props: {
            'msg': {
            default: {
                msg: '',
                ative: false

            },

        }
        }
    }
</script>