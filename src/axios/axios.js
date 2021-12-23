import axios from 'axios';
import apiList from '../api/apiList';
const instance = axios.create({
    timeout: 60 * 1000,
    // baseURL:'http://localhost:8081/'
    baseURL: 'http://api.blog.yuban32.com:8081/'
});

function addHeaders(request) {
    request.headers['Authorization'] = sessionStorage.getItem('token');
}
instance.interceptors.request.use(
    // 前置拦截器
    function (request) {
        // 判断当前请求地址是Login的时候设置请求头为json
        switch (request.url) {
            case apiList.LOGIN:
                request.headers['Content-Type'] = 'application/json';
                break;
            case apiList.BLOG_EDIT:
                addHeaders(request)
                break;
            case apiList.LOGOUT:
                addHeaders(request)
                break;
            case apiList.BLOG_DELETE:
                
                addHeaders(request)
                break;
            case apiList.ABOUT_EDIT:
                
                addHeaders(request)
                break;
        }
        return request;
    },
    function (error) {
        return Promise.reject(error)
    }
);
instance.interceptors.response.use(
    // 后置拦截器
    function (response) {
        let res = response.data;
        if (res.code === 200) {
            return response;
        } else {
            return Promise.reject(response.data.msg)
        }
    }
)
export default instance;