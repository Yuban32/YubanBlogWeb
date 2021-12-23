<template>
    <div id="comfirm-wrap">
        <transition name="comfirm">
            <div id="comfirm" v-if="true">
                <div class="comfirm-title">
                    提示
                </div>
                <div class="comfirm-content">
                    {{msg}}
                </div>
                <div class="comfirm-btn">
                    <button class="primary" @click="handlerConfirm">确认</button><button @click="handlerCancle"
                        class="warning">取消</button>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "yu-dialog",
        data() {
            return {
                msg: '',
                
                state: ''
            }
        },
        props: {
            show:{
                default:false
            }
        },
        methods: {
            comfirmBtn(boolean) {
                // 0 = 确认
                // 1 = 取消
                // 2 = 确认提交
                if (boolean == 0) {
                    // 确认
                    if (this.state == 'submit') {
                        this.$emit('comfirm-btn', 2);
                        this.show = false;
                    } else {
                        this.$emit('comfirm-btn', 0);
                        this.show = false
                    }
                } else if (boolean == 1) {
                    // 取消
                    this.$emit('comfirm-btn', 1);
                    this.show = false
                }
            },
            showToast(msg, show, state) {
                this.msg = msg;
                this.show = show;
                this.state = state
                console.log(this.show);
            },
            handlerClose() {
                this.$emit('close')
            },
            handlerConfirm() {
                this.$emit('confirm')
            },
            handlerCancle() {
                this.$emit('cancle')
            }
        },
        watch:{
            show(val,old){
                console.log(val,old);
            }
        },
        created() {
            this.$nextTick(() => {
                document.body.insertBefore(this.$el, document.body.lastChild)
            })
        },
        beforeDestroy() {
            document.body.removeChild(this.$el)
        },
    }
</script>

<style scoped>
    .comfirm-enter-active,
    .comfirm-leave-active {
        transition: all 0.5s ease;
    }

    .comfirm-enter-active {
        animation: fadein 0.5s;
    }

    .comfirm-leave-active {
        animation: fadein 0.5s reverse;
    }

    @keyframes fadein {
        from {
            top: 0;
            opacity: 0;
        }

        to {
            top: 10%;
            opacity: 1;
        }
    }

    #comfirm {
        min-width: 300px;
        padding: 10px;
        text-align: center;
        background: var(--theme_nav_bg_color);
        border-radius: var(--global_border_radius);
        /* box-shadow: var(--article_card_box_shadow); */
        /* visibility: hidden; */
        border: 1px solid rgb(129, 129, 129);
        position: fixed;
        z-index: 999;
        left: 50%;
        top: 10%;
        transform: translate(-50%, -20%);
    }

    .comfirm-title {
        font-size: 24px;
        color: var(--global_text_color);
    }

    .comfirm-content {
        color: var(--global_article_color);
        padding: 10px 0;
        font-size: 18px;
    }

    .comfirm-btn {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .comfirm-btn button:active {
        opacity: 0.2;
    }

    .comfirm-btn button {
        width: 90px;
        padding: 10px 15px;
        appearance: none;
        outline: 0;
        border: 0;
        color: #fff;
        border-radius: var(--global_border_radius);
        cursor: pointer;
        font-size: 18px;
        margin-left: 10px;
        transition-duration: 0.25s;
    }

    @media screen and (max-width:600px) {
        .comfirm-btn button {
            font-size: 14px;
            width: 70px;
            padding: 5px 10px;
        }
    }
</style>