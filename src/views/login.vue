<template>
    <div id="login-wrap">
        <div class="login">
            <div class="login-info">
                <div><span>用户名：</span><input type="text" id="username"></div>
                <div><span>密码：</span><input type="password" id="password"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    #login-wrap {
        margin-top: 60px;
        height: calc(100vh - 60px);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .login {
        /* width: 60%; */
        width: 700px;
        height: 500px;
        border: 1px solid blueviolet;
        display: flex;
        justify-content: center;
        align-items: left;
        flex-direction: column;
        position: relative;
        background: linear-gradient(225deg, rgba(162,162,162,0.3) 0%, rgba(0,0,0,1) 100%);
        color:#fff;
    }
    .login-info{
        width: 300px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .login::before {
        display: block;
        width: 700px;
        height: 500px;
        position: absolute;
        top: 0;
        left: 0;
        content: '';
        z-index: -1;
        /* transform: scaleX(-1); */
        background: url(https://picsum.photos/id/1015/700/700) no-repeat;


    }

    .login span {
        display: inline-block;
        width: 65px;
        text-align: right;
    }
</style>