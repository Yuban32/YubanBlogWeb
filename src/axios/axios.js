import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

let config = {
    withCredentials:true,
    timeout:60*1000,
    baseURL:'http://localhost:8081'
}

const _axios = axios.create(config);
_axios.interceptors.request.use(
    function(request){
        return request;
    },
    function(error){
        return Promise.reject(error)
    }
);
_axios.interceptors.response.use(
    function(response){
        let res = response.data;
        if(res.code === 200){
            return response;
        }else{
            return Promise.reject(response.data.msg)
        }
    }
)