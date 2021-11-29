<template>
    <div id="music-wrap">
        <div class="music">
            <audio ref="audio" :src="getAudioUrl('Goose house - 光るなら.mp3')" controls></audio>
            <div class="music-top">
                <div class="music-left-pic-wrap">
                    <img :src="getImageUrl('music/Goose\ house\ -\ 光るなら.png')" alt="">
                </div>
                <div class="music-right-container-wrap">
                    <div class="controll-bar">
                        <div class="pre">
                            <svg t="1638153510170" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="4986" width="200" height="200">
                                <path
                                    d="M862.208 824.448a63.872 63.872 0 0 1-65.664-3.2l-384-256a64 64 0 0 1-0.064-106.496l384-256A64.021333 64.021333 0 0 1 896 256v512a64.106667 64.106667 0 0 1-33.792 56.448zM320 832H192c-35.392 0-64-28.608-64-64V256c0-35.392 28.608-64 64-64h128c35.392 0 64 28.608 64 64v512c0 35.392-28.608 64-64 64z"
                                    p-id="4987" fill="#ffffff"></path>
                            </svg>
                        </div>
                        <div ref="" class="pause">
                            <svg t="1638153803239" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="7730" width="200" height="200">
                                <path
                                    d="M512 1024A512 512 0 1 1 512 0a512 512 0 0 1 0 1024z m3.008-92.992a416 416 0 1 0 0-832 416 416 0 0 0 0 832zM320 320h128v384H320V320z m256 0h128v384H576V320z"
                                    fill="#ffffff" p-id="7731"></path>
                            </svg>
                        </div>
                        <div ref="play-btn" class="play" @click="play">
                            <svg t="1638153594520" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="6685" width="200" height="200">
                                <path
                                    d="M512 74.666667C270.933333 74.666667 74.666667 270.933333 74.666667 512S270.933333 949.333333 512 949.333333 949.333333 753.066667 949.333333 512 753.066667 74.666667 512 74.666667z m0 810.666666c-204.8 0-373.333333-168.533333-373.333333-373.333333S307.2 138.666667 512 138.666667 885.333333 307.2 885.333333 512 716.8 885.333333 512 885.333333z"
                                    p-id="6686" fill="#ffffff"></path>
                                <path
                                    d="M708.266667 465.066667l-234.666667-134.4c-8.533333-4.266667-17.066667-6.4-25.6-6.4-29.866667 0-53.333333 23.466667-53.333333 53.333333v268.8c0 8.533333 2.133333 19.2 6.4 25.6 10.666667 17.066667 27.733333 27.733333 46.933333 27.733333 8.533333 0 17.066667-2.133333 25.6-6.4l234.666667-134.4c8.533333-4.266667 14.933333-10.666667 19.2-19.2 6.4-12.8 8.533333-27.733333 4.266666-40.533333-2.133333-14.933333-10.666667-25.6-23.466666-34.133333z m-249.6 162.133333V396.8L661.333333 512l-202.666666 115.2z"
                                    p-id="6687" fill="#ffffff"></path>
                            </svg>
                        </div>
                        <div class="next">
                            <svg t="1638153564264" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="5838" width="200" height="200">
                                <path
                                    d="M161.792 824.448A64.106667 64.106667 0 0 1 128 768V256a64.021333 64.021333 0 1 1 99.52-53.248l384 256a64 64 0 0 1-0.064 106.496l-384 256a63.872 63.872 0 0 1-65.664 3.2zM704 832c-35.392 0-64-28.608-64-64V256c0-35.392 28.608-64 64-64h128c35.392 0 64 28.608 64 64v512c0 35.392-28.608 64-64 64h-128z"
                                    fill="#ffffff" p-id="5839"></path>
                            </svg>
                        </div>
                        <div class="music-list-btn">
                            <svg t="1638155029279" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="9231" width="200" height="200">
                                <path
                                    d="M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM912 476H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM912 760H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"
                                    p-id="9232" fill="#ffffff"></path>
                                <path d="M160 228m-56 0a56 56 0 1 0 112 0 56 56 0 1 0-112 0Z" p-id="9233"
                                    fill="#ffffff"></path>
                                <path d="M160 512m-56 0a56 56 0 1 0 112 0 56 56 0 1 0-112 0Z" p-id="9234"
                                    fill="#ffffff"></path>
                                <path d="M160 796m-56 0a56 56 0 1 0 112 0 56 56 0 1 0-112 0Z" p-id="9235"
                                    fill="#ffffff"></path>
                            </svg>
                        </div>
                        <div class="volume">
                            <svg t="1638155425132" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="10101" width="200" height="200">
                                <path
                                    d="M260.256 356.576l204.288-163.968a32 32 0 0 1 52.032 24.96v610.432a32 32 0 0 1-51.968 24.992l-209.92-167.552H96a32 32 0 0 1-32-32v-264.864a32 32 0 0 1 32-32h164.256zM670.784 720.128a32 32 0 0 1-44.832-45.664 214.08 214.08 0 0 0 64.32-153.312 213.92 213.92 0 0 0-55.776-144.448 32 32 0 1 1 47.36-43.04 277.92 277.92 0 0 1 72.416 187.488 278.08 278.08 0 0 1-83.488 198.976zM822.912 858.88a32 32 0 1 1-45.888-44.608A419.008 419.008 0 0 0 896 521.152c0-108.704-41.376-210.848-114.432-288.384a32 32 0 0 1 46.592-43.872c84.16 89.28 131.84 207.04 131.84 332.256 0 127.84-49.76 247.904-137.088 337.728z"
                                    p-id="10102" fill="#ffffff"></path>
                            </svg>
                        </div>
                    </div>
                </div>

            </div>
            <div class="music-bottom">
                <div class="music-info">
                    <span class="title">跟我反广西</span>
                    <span> - </span>
                    <span class="author">蛤蛤</span>
                </div>
                <ul class="musci-list">
                    <li><span class="title">跟我反广西</span>
                        <span> - </span>
                        <span class="author">蛤蛤</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script setup>
    const getImageUrl = (name) => {
        return new URL(`../../src/assets/images/${name}`,
            import.meta.url).href
    }
    const getAudioUrl = (name) => {
        return new URL(`../../src/assets/music/${name}`,
            import.meta.url).href
    }
    const musicbg = getImageUrl('music/Goose\ house\ -\ 光るなら.png')
    
</script>
<script>
    export default{
        name:'music',
        data(){
            return{

            }
        },methods:{
            play(){
                console.log(this.$refs.audio);
                this.$refs.audio.play()
            }
        }
    }
</script>
<style scoped>
    .musci-list {
        width: 100%;
        padding: 5px 0;

        text-align: center;
        background-color: #46494f;
    }
    .music-list li{
        padding: 5px 0;
    }
    .music-list-btn,
    .volume {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .music-list-btn svg,
    .volume svg {
        height: 50%;
    }

    .pause {
        display: none;
    }

    .music-bottom {
        width: 100%;
    }

    .music-info {
        height: 20px;
        width: 100%;
        padding: 5px 0;
        border-bottom: 1px solid #fff;
        text-align: center;
        background-color: #46494f;
    }

    .controll-bar {
        background-color: #292b32;
        height: 50px;
        width: 100%;
        padding: 0 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        overflow: hidden;
    }

    .controll-bar>div {
        margin: 0 5px;
        cursor: pointer;
    }

    #music-wrap {
        width: 100%;
        height: 100vh;
        overflow: hidden;
        /* position: relative;
        top: 60px; */
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .music {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        border-radius: var(--global_border_radius);
        overflow: hidden;
    }

    .music-top {
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .music-left-pic-wrap {
        /* width: 100%; */
        height: 100%;
    }

    img {
        height: 100%;

    }
</style>