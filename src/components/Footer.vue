<template>
    <footer>
        <div class="footer-wrap">
            <div class="copyright-wrap">
                <span>Copyright © {{dateTime}} 鱼板（樊家威）</span><span>Power by Vue.js Vue-Router Vite</span>
            </div>
            <hr>
            <div class="license-wrap">
                <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议"
                        style="border-width:0"
                        src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png" /></a>本站采用<a rel="license"
                    href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议进行许可。</a>
            </div>
        </div>
    </footer>
</template>
<style scoped>
    footer {
        width: 100%;
        height: 200px;
        overflow: hidden;
        text-align: center;
        font-size: 16px;
        color: #fff;
        background-color: #2b2b2b;
        user-select: none;
    }

    .footer-wrap {
        width: 98%;
        height: 100%;
        padding: 0 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    hr {
        max-width: 560px;
        width: 60%;
        margin: 5px 0;
    }

    .copyright-wrap {
        height: 110px;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .copyright-wrap span {
        padding-left: 20px;
        padding-top: 5px;
    }

    a {
        text-decoration: none;
        color: #fff;
    }

    .license-wrap {
        flex: 1;
        padding-bottom: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>

<script setup>
    const dateTime = new Date().getFullYear()
</script>