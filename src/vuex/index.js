import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        token:'',
        userInfo:'',
        error:''
    },
    mutations:{
        // set
        SET_TOKEN:(state,token)=>{
            state.token = token;
            localStorage.setItem('token',token)
        },
        SET_USERINFO:(state,userInfo)=>{
            state.userInfo = userInfo;
            sessionStorage.setItem('userInfo',JSON.stringify(userInfo));
        },
        REMOVE_INFO:(state)=>{
            state.token = '';
            state.userInfo = {};
            localStorage.setItem('token','');
            sessionStorage.setItem('userInfo',JSON.stringify(''));
        },
        SET_ERROR:(state,msg)=>{
            state.error = msg;
        }
    },
    getters:{
        getUser:state=>{
            return state.userInfo
        }
    },
    actions:{

    },
    modules:{

    }
})