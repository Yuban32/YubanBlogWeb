<template>
    <div id="tag-wrap">
        <svg t="1637673169176" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="5506" width="200" height="200">
            <path
                d="M469.333533 968.08a52.986667 52.986667 0 0 1-37.713333-15.62l-416-416A52.986667 52.986667 0 0 1 0.0002 498.746667V138.666667a53.393333 53.393333 0 0 1 53.333333-53.333334h360.08a52.986667 52.986667 0 0 1 37.713334 15.62l416 416a53.4 53.4 0 0 1 0 75.426667l-360.08 360.08a52.986667 52.986667 0 0 1-37.713334 15.62zM53.333533 128a10.666667 10.666667 0 0 0-10.666666 10.666667v360.08a10.573333 10.573333 0 0 0 3.126666 7.54l416 416a10.666667 10.666667 0 0 0 15.08 0l360.08-360.08a10.666667 10.666667 0 0 0 0-15.08l-416-416a10.573333 10.573333 0 0 0-7.54-3.126667z m224 341.333333c-58.813333 0-106.666667-47.853333-106.666666-106.666666s47.853333-106.666667 106.666666-106.666667 106.666667 47.853333 106.666667 106.666667-47.853333 106.666667-106.666667 106.666666z m0-170.666666a64 64 0 1 0 64 64 64.073333 64.073333 0 0 0-64-64z m335.086667 676.42l382.706667-382.706667a53.4 53.4 0 0 0 0-75.426667L569.753533 91.58a21.333333 21.333333 0 0 0-30.173333 30.173333l425.373333 425.373334a10.666667 10.666667 0 0 1 0 15.08l-382.706666 382.706666a21.333333 21.333333 0 0 0 30.173333 30.173334z"
                fill="#3379f6" p-id="5507"></path>
        </svg>
        <ul class="tag-text-wrap">
            <li class="tag-text hover-up" v-for="(item,index) in tagText" :key="index">{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
        tagText:Array
    }
}
</script>

<style scoped>
    #tag-wrap{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .tag-text-wrap{
        /* height: 25px; */
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .tag-text{
        /* height: 25px; */
        padding: 5px 15px;
        font-size: 12px;
        border-radius: var(--global_border_radius);
        line-height: 25px;
        margin-left: 15px;
        color: #fff;
        background-color: #3379f6;
        box-shadow: 0px 0px 30px rgba(1, 81, 128, 0.35);
        cursor: pointer;
        white-space:nowrap;
    }
    svg{
        height: 25px;
    }
</style>