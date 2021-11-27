<template>
    <div id="theme-toggle-wrap">
        <div class="theme-white">
            <svg t="1637120763622" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="8874" width="200" height="200">
                <path
                    d="M505.34 221.87c-9.91 0-17.93-8.04-17.93-17.95V96.25c0-9.91 8.02-17.94 17.93-17.94 9.93 0 17.95 8.03 17.95 17.94v107.67c0 9.91-8.02 17.95-17.95 17.95zM505.34 939.67s0.02 0 0 0c-9.88 0-17.93-8.03-17.93-17.94V814.06c0-9.91 8.04-17.95 17.95-17.95s17.93 8.04 17.93 17.95v107.67c0 9.91-8.02 17.94-17.95 17.94z"
                    fill="#F6BB42" p-id="8875"></path>
                <path
                    d="M302.32 305.96c-7.02 7.01-18.37 7.01-25.37 0l-76.15-76.14c-6.99-7-6.99-18.36 0-25.37 7.02-7.02 18.37-7.02 25.39 0l76.13 76.13c7.02 7.01 7.02 18.38 0 25.38zM809.9 813.52c-7.02 7.02-18.38 7.02-25.39 0l-76.13-76.13c-7.02-7.01-7.02-18.38 0-25.38 7.02-7.01 18.37-7.01 25.39 0l76.13 76.14c6.99 7 6.99 18.36 0 25.37z"
                    fill="#FFCE54" p-id="8876"></path>
                <path
                    d="M218.23 508.99c0 9.91-8.04 17.94-17.95 17.94H92.61c-9.91 0-17.93-8.03-17.95-17.94 0-9.91 8.04-17.94 17.95-17.94h107.67c9.91 0 17.95 8.02 17.95 17.94zM936.02 508.99c0 9.91-8.02 17.94-17.93 17.94H810.42c-9.91 0-17.95-8.03-17.95-17.94 0-9.91 8.04-17.94 17.95-17.94h107.67c9.91 0 17.93 8.02 17.93 17.94z"
                    fill="#F6BB42" p-id="8877"></path>
                <path
                    d="M302.32 712.01c7.02 7 7.02 18.37 0 25.38l-76.13 76.13c-7.02 7.02-18.37 7.02-25.39 0-6.99-7.01-6.99-18.36 0-25.37l76.15-76.14c7-7.01 18.36-7.01 25.37 0zM809.9 204.44c0 0.01 0 0 0 0 6.99 7.02 6.99 18.38 0 25.38l-76.15 76.14c-6.99 7.01-18.35 7.01-25.37 0-7.02-7-7.02-18.37 0-25.38l76.13-76.14c7.01-7 18.37-7 25.39 0z"
                    fill="#FFCE54" p-id="8878"></path>
                <path
                    d="M505.34 742.27c-128.62 0-233.27-104.65-233.27-233.28S376.72 275.7 505.34 275.7c128.65 0 233.29 104.65 233.29 233.28S633.98 742.27 505.34 742.27z"
                    fill="#FFCE54" p-id="8879"></path>
                <path
                    d="M505.34 257.75c-138.74 0-251.22 112.48-251.22 251.24S366.6 760.22 505.34 760.22c138.77 0 251.25-112.48 251.25-251.23S644.1 257.75 505.34 257.75z m152.27 403.5c-40.66 40.68-94.74 63.08-152.28 63.08-57.52 0-111.59-22.4-152.25-63.08C312.42 620.59 290 566.5 290 508.99s22.42-111.6 63.09-152.26c40.66-40.68 94.74-63.08 152.25-63.08 57.54 0 111.61 22.4 152.28 63.08 40.67 40.66 63.06 94.75 63.06 152.26s-22.4 111.6-63.07 152.26z"
                    fill="#F6BB42" p-id="8880"></path>
            </svg>
        </div>
        <div class="toggle-slider" @click="toggle"></div>
        <div class="theme-dark">
            <svg t="1637120743889" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="7887" width="200" height="200">
                <path
                    d="M466.2784 386.048c-41.9328-115.2-35.0208-236.288 10.0864-340.5312A462.4896 462.4896 0 0 0 397.6704 66.56C158.5152 153.6 35.2256 418.048 122.2656 657.2032s351.488 362.4448 590.592 275.4048c123.9552-45.1072 216.7296-137.8816 265.3184-250.0608-215.8592 37.7856-434.3296-83.3536-511.8976-296.4992z"
                    fill="#FFB612" p-id="7888"></path>
            </svg>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                right: '0px',

                state: 'white',

            }
        },
        methods: {
            toggle() {
                const root = document.documentElement;
                if (this.state == 'white') {
                    // dark
                    var dark = {
                        navTextColor: '#f5f6f7',
                        themeHomeBgColor: '#18191a',
                        themeNavBgColor: '#242526',
                        globalTextColor: '#f5f6f7',
                        globalArticleColor:'#d3d8d1',
                        articleCardBoxShadow:'20px 20px 60px #141414,-20px -20px 60px #383a3a',
                        articleCardBgColor:'linear-gradient(352deg, rgba(30,30,30,1) 0%, rgba(46,46,46,1) 45%, rgba(71,71,71,1) 100%)'
                    }
                    this.state = 'dark'
                    this.right = '50px';
                    root.style.setProperty('--nav_text_color', dark.navTextColor)
                    root.style.setProperty('--theme_home_bg_color', dark.themeHomeBgColor)
                    root.style.setProperty('--theme_nav_bg_color', dark.themeNavBgColor)
                    root.style.setProperty('--global_text_color', dark.globalTextColor)
                    root.style.setProperty('--global_article_color', dark.globalArticleColor)
                    root.style.setProperty('--article_card_box_shadow',dark.articleCardBoxShadow)
                    root.style.setProperty('--article_card_bg_color',dark.articleCardBgColor)
                    localStorage.setItem('theme', JSON.stringify(dark))
                    localStorage.setItem('sliderBarState', 'dark')
                    localStorage.setItem('sliderBar', this.right)
                } else if (this.state == 'dark') {
                    // white
                    var white = {
                        navTextColor: '#3379f6',
                        themeHomeBgColor: '#f2f2f2',
                        themeNavBgColor: '#fff',
                        globalTextColor: '#000',
                        globalArticleColor:'#7b787b',
                        articleCardBoxShadow:'20px 20px 60px #aebcd8,-20px -20px 60px #fff',
                        articleCardBgColor:'#fff'
                    }
                    this.right = '0px';
                    this.state = 'white'
                    root.style.setProperty('--nav_text_color', white.navTextColor)
                    root.style.setProperty('--theme_home_bg_color', white.themeHomeBgColor)
                    root.style.setProperty('--theme_nav_bg_color', white.themeNavBgColor)
                    root.style.setProperty('--global_text_color', white.globalTextColor)
                    root.style.setProperty('--global_article_color', white.globalArticleColor)
                    root.style.setProperty('--article_card_box_shadow',white.articleCardBoxShadow)
                    root.style.setProperty('--article_card_bg_color',white.articleCardBgColor)
                    localStorage.setItem('theme', JSON.stringify(white))
                    localStorage.setItem('sliderBarState', 'white')
                    localStorage.setItem('sliderBar', this.right)
                }
            }
        },
        created() {
            let that = this;
            // 初始值
            let theme = {
                navTextColor: '#3379f6',
                themeHomeBgColor: '#f2f2f2',
                themeNavBgColor: '#fff',
                globalTextColor: '#000',
                globalArticleColor:'#222222',
                articleCardBoxShadow:'20px 20px 60px #aebcd8,-20px -20px 60px #fff',
                articleCardBgColor:'#fff'
            }
            const root = document.documentElement;
            if (localStorage.getItem('theme') != null) {
                let themes = JSON.parse(localStorage.getItem('theme'))
                that.right = localStorage.getItem('sliderBar')
                root.style.setProperty('--nav_text_color', themes.navTextColor)
                root.style.setProperty('--theme_home_bg_color', themes.themeHomeBgColor)
                root.style.setProperty('--theme_nav_bg_color', themes.themeNavBgColor)
                root.style.setProperty('--global_text_color', themes.globalTextColor)
                root.style.setProperty('--global_article_color', themes.globalArticleColor)
                root.style.setProperty('--article_card_box_shadow',themes.articleCardBoxShadow)
                root.style.setProperty('--article_card_bg_color',themes.articleCardBgColor)

                // console.log(themes,localStorage.getItem('sliderBar'));
            } else {
                localStorage.setItem('sliderBarState', that.state)
                localStorage.setItem('sliderBar', that.right)
                localStorage.setItem('theme', JSON.stringify(theme))
                // console.log(themes,localStorage.getItem('sliderBar'));

            }
        }

    }
</script>

<style>
    #theme-toggle-wrap {
        width: 90px;
        min-width: 90px;
        height: 40px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: relative;
        background-color: #181616;
        /* background-color: v-bind(navTextColor); */
        border: 5px solid #4d4d4d;
        border-radius: 50px;
    }

    .theme-white {
        height: 50px;
        position: absolute;
        left: 0;
    }

    .theme-dark {
        height: 50px;
        position: absolute;
        right: 0;
    }

    .toggle-slider {
        width: 40px;
        height: 40px;
        position: absolute;
        right: v-bind(right);
        z-index: 99;
        border-radius: 50%;
        background: #fafafa;
        transition: all .2s;
        cursor: pointer;
    }

    .toggle-slider:hover {
        box-shadow: 0px 0px 20px #338bff;
    }

    svg {
        width: 40px;
        height: 50px;
    }
</style>