
import {createStore } from 'vuex';

const store = createStore({
    state:{
        token:'',
        userInfo:JSON.parse(sessionStorage.getItem('userInfo')),
        error:'',
        themeState:''
    },
    mutations:{
        // set
        SET_TOKEN:(state,token)=>{
            state.token = token;
            sessionStorage.setItem('token',token)
        },
        SET_USERINFO:(state,userInfo)=>{
            state.userInfo = userInfo;
            sessionStorage.setItem('userInfo',JSON.stringify(userInfo));
        },
        REMOVE_INFO:(state)=>{
            state.token = '';
            state.userInfo = {};
            sessionStorage.setItem('token','');
            sessionStorage.setItem('userInfo',JSON.stringify(''));
        },
        SET_ERROR:(state,msg)=>{
            state.error = msg;
        },
        SET_THEME_STATE:(state,themeState)=>{
            state.themeState = themeState
        }
    },
    getters:{
        getUser:state=>{
            return state.userInfo;
        },
        getToken:state=>{
            return sessionStorage.getItem('token');
        },
        getError:state =>{
            return state.error;
        },
        getThemeState:state=>{
            return localStorage.getItem('sliderBarState');
        }
    },
    actions:{
        SetError({commit},msg){
            commit('SET_ERROR',msg);
        }
    },
    modules:{

    }
})

export default store