<template>
    <div id="about-wrap" ref="aboutWrap">
        <div class="about-first-page global-class enter-animate" ref="aboutFirstPage">
            <span>ABOUT</span>
            <div class="mask"></div>
        </div>

        <div class="container">
            <div class="about-content" ref="aboutContent">
                <div class="profile">
                    <div class="pic-wrap">
                        <img src="../assets/images/nav/pic.jpg">
                    </div>
                    <div class="profile-name">
                        <h1>鱼板</h1>
                    </div>
                    <div class="profile-tags">
                        <ul>
                            <li v-for="( item , index ) in tags" :key="index">{{item}}</li>
                        </ul>
                    </div>
                    <div class="profile-desc">
                        <div class="title-2"><h2>关于我</h2></div>
                        <p>我是樊家威，目前就读于广西科技师范学院-软件工程专业，是一个卑微的前端切图仔...</p>
                        <div class="title-2"><h2>关于本站</h2></div>
                        <p>个人技术所限，目前只有前端，后端正在学，理想的后端技术栈应该是Spring Boot。</p>
                        <p><strong>建站的原因：</strong>其实我一直都在想独立完成自己的一个博客，但学业繁忙一直没有时间去写。
                            下定决心抽空来完成这个博客的一个最重要的原因应该是21年11月中旬，学校举办了一个网页设计大赛，
                            心想着又能参加比赛，又能通过项目来提升自身的编程能力，又能完成自己的小目标，可谓是一举三得。</p>
                        <p>本站基于是<strong>Vue3、Vue-Router、Vitepress</strong>技术栈，100%纯手工打造。</p>
                        <div class="title-2"><h2>关于版权</h2></div>
                        <p>部分文章和素材来自于网络整理再创作，并附有原文链接，若无特殊说明则为原创文章。
                            一些图片来自于<a href="https://picsum.photos/">https://picsum.photos/</a> 等正版免授权图像素材库。
                        </p>
                        <p>本站所有内容均遵循“署名-非商业性使用-相同方式共享 4.0 国际 (CC BY-NC-SA 4.0)”协议，分享或者二次创作请标记出处和署名</p>
                        <p>关于此协议的详细内容请点击下发的链接：<br/><a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh">https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh</a></p>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                opacity: 0,
                tags: ['双子男', '90后', '中国-广西', '工科男', '逗比', '幽默', '独立']
            }
        },
        methods: {
            handlerPageOpacity() {
                let opacityValue = document.documentElement.scrollTop / this.$refs.aboutContent.scrollHeight;
                if (opacityValue > 1) {
                    opacityValue = 1
                }
                this.opacity = opacityValue;

            }
        },
        mounted() {
            window.addEventListener('scroll', this.handlerPageOpacity)
            window.addEventListener('resize', this.handlerPageOpacity)

        },
        beforeUnmount() {
            window.removeEventListener('scroll', this.handlerPageOpacity)
            window.removeEventListener('resize', this.handlerPageOpacity)
        }
    }
</script>

<style scoped>
    /* about-content */
    .profile-desc{
        width: 100%;
        margin-top: var(--global_margin_top);
    }
    .profile-desc p{
        margin: 20px 0;
        line-height: 30px;
        color: var(--global_article_color);
    }
    .title-2{
        width: 150px;
        margin: 10px 0;
        display: block;
        color: var(--global_text_color);
        text-align: center;
        position: relative;
        padding:  5px 0;
        letter-spacing: 10px;
        background-size: 100% 50%;
        
    }
    .title-2::before{
        width: 100%;
        height: 50%;
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        z-index: -1;
        border-radius: 10px;
        /* background-color: #D98B2B; */
        background-color: #3379f6;
        box-shadow: 0 2px 20px #3379f6;
    }

    .about-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .pic-wrap {
        width: 200px;
        height: 200px;
        overflow: hidden;
        border-radius: 50%;
        margin-top: 10px;
    }

    .pic-wrap img {
        height: 100%;
    }

    .profile {
        width: 100%;
        padding-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .profile-name {
        margin-top: var(--global_margin_top);
    }

    .profile-name h1 {
        font-family: '宋体';
    }

    .profile-tags {}

    .profile-tags ul {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        flex-wrap: wrap;
    }

    .profile-tags ul li {
        padding: 4px 7px;
        margin-top: var(--global_margin_top);
        margin-left: 10px;
        background-color: aquamarine;
        border-radius: var(--global_border_radius);
        float: left;
        color: #fff;
        font-weight: 600;
    }

    .profile-tags ul li:first-child {
        background-color: #f0ad4e;
    }

    .profile-tags ul li:nth-child(2) {
        background-color: #151340;
    }

    .profile-tags ul li:nth-child(3) {
        background-color: #428bca;
    }

    .profile-tags ul li:nth-child(4) {
        background-color: #d9534f;
    }

    .profile-tags ul li:nth-child(5) {
        background-color: #5cb85c;
    }

    .profile-tags ul li:nth-child(6) {
        background-color: #2B308C;
    }

    .profile-tags ul li:nth-child(7) {
        background-color: #73260A;
    }

    #about-wrap {
        height: 100%;
        width: 100%;
        overflow: hidden;
    }

    .about-first-page {
        height: 100vh;
        width: 100vw;
        background-image: url(../assets/images/about/1.jpg);
        background-position: center;
        background-size: cover;
        background-attachment: fixed;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        /* 文字 */
        color: #fff;
        font-size: 80px;
        font-family: 'Trade Gothic W01';
        letter-spacing: 10px;
        font-weight: 700;
        overflow: hidden;
    }

    .mask {
        width: 100vw;
        height: 100vh;
        position: absolute;
        opacity: v-bind(opacity);
        z-index: 1;
        left: 0;
        top: 0;
        background-color: rgb(0, 0, 0);
    }

    .about-first-page span {
        position: relative;
        z-index: 2;
    }
</style>