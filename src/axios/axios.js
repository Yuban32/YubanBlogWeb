
import axios from 'axios';
import apiList from '../api/apiList';
const instance = axios.create({
    timeout:60*1000,
    baseURL:'http://localhost:8081/'
    // baseURL:'http://api.blog.yuban32.com:8081/'
});
instance.interceptors.request.use(
    // 前置拦截器
    function(request){
        // 判断当前请求地址是Login的时候设置请求头为json
        switch(request.url){
            case apiList.LOGIN:
                request.headers['Content-Type'] = 'application/json';
                break;
            case apiList.BLOG_EDIT:
                request.headers['Authorization'] = sessionStorage.getItem('token');
                break;
            case apiList.LOGOUT:
                request.headers['Authorization'] = sessionStorage.getItem('token');
                break;

        }
        return request;
    },
    function(error){
        return Promise.reject(error)
    }
);
instance.interceptors.response.use(
    // 后置拦截器
    function(response){
        let res = response.data;
        if(res.code === 200){
            return response;
        }else{
            return Promise.reject(response.data.msg)
        }
    }
)
export default instance;