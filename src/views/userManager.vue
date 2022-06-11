<template>
    <div id="user-list-wrap">
        <Comfirm @comfirm-btn="comfirmBtns" ref="comfirm" />
        <Toast ref="toast" />
        <div class="container bg">
            <ul>
                <li><span class="order clear">序号</span>
                    <span class="pic">头像</span>
                    <span class="uid">UID</span>
                    <span class="username">用户名</span>
                    <span class="email">邮箱</span>
                    <span class="created">注册日期</span>
                    <span class="admin">权限</span>
                </li>
                <li v-for="(item, index) in userList" :key="item.id">
                    <span class="order">{{index+1}}</span>
                    <span class="pic"><img :src="item.avatar"></span>
                    <span class="uid">{{item.id}}</span>
                    <span class="username">{{item.username}}</span>
                    <span class="email">{{item.email}}</span>
                    <span class="created">{{item.created}}</span>
                    <span class="admin">{{item.admin==1?"admin":"user"}}</span>
                    <div class="btn-wrap">
                        <button class="primary">编辑</button>
                        <button class="warning" @click="del(item.id)">删除</button></div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
    import Toast from '../components/Toast.vue';
    import Comfirm from '../components/Comfirm.vue';
    import apiList from '../api/apiList';
</script>
<script>
    export default {

        name: "userManager",
        data() {
            return {
                userList: Array,
                deletedId:null,
            }
        },
        methods: {
            del(id){
                this.deletedId = id;
                this.$refs.comfirm.showToast("确定删除用户吗?",true,'submit')

            },
            getUserList() {
                this.$axios.get(apiList.ADMIN.USER_LIST).then(res => {
                    this.userList = res.data.data.records
                }).catch(err => {
                    console.dir(err)
                })
            },
            comfirmBtns(val) {
                if(val ==2){
                    this.$axios({
                        method:"DELETE",
                        url:apiList.ADMIN.USER_DELETE+this.deletedId
                    }).then(res=>{
                        this.$refs.toast.showToast(res.data.msg,3);
                        this.getUserList();
                    }).catch(err=>{
                        console.dir(err);
                    })
                }
            },

        },
        mounted() {
            this.getUserList()
        }
    }
</script>

<style scoped>
    #user-list-wrap {
        margin-top: 90px;
        height: 100vh;
        background-color: var(--theme_home_bg_color);
    }

/* edit-user */

.edit-user{
    height: 300px;
    width: 350px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
    input {
        appearance: none;
        outline: 0;
        border: 1px solid rgba(73, 73, 73, 0.4);
        background-color: rgba(255, 255, 255, 0.2);
        width: 250px;
        border-radius: 3px;
        padding: 10px 15px;
        margin: 0 auto 10px auto;
        display: block;
        text-align: center;
        font-size: 18px;
        color: var(--global_text_color);
        transition-duration: 0.25s;
        font-weight: 300;
        transition: all .25s;
        border-radius: var(--global_border_radius);
    }

    input:hover {
        background-color: rgba(255, 255, 255, 0.4);
    }
    
    input:focus {
        width: 300px;
        color: var(--nav_text_color);
    }

/* user-list */
    .btn-wrap {
        width: 0;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all .3s;
    }

    button {
        height: 50px;
    }

    .bg {
        border-radius: var(--global_border_radius);
        background-color: var(--theme_nav_bg_color);
    }

    .admin {
        width: 100px;
    }

    .uid {
        width: 100px;
    }

    .pic {
        width: 100px;
    }

    .username {
        width: 100px;
    }

    .email {
        width: 200px;
    }

    .created {
        width: 200px;
    }

    .order {
        width: 100px;
        border-left: 3px solid var(--nav_text_color);
    }

    .clear {
        border: 0;
    }

    li {
        height: 100px;
        margin-bottom: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        transition: all .3s;


    }
    li:hover .btn-wrap {
        width: 185px;
    }
    span {
        padding: 0 10px;
        height: 100%;
        line-height: 100px;
        text-align: center;
        display: inline-block;

    }

    img {
        height: 100%;
    }

</style>