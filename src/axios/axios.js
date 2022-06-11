import axios from 'axios';
import apiList from '../api/apiList';
const instance = axios.create({
    timeout: 60 * 1000,
    // baseURL:'http://api.blog.yuban32.com:8081/'
    baseURL: 'http://localhost:8081/'


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
        }

        if (request.url.match(apiList.BLOG_EDIT) != null) {
            addHeaders(request)
        }
        if (request.url.match(apiList.LOGOUT) != null) {
            addHeaders(request)
        }
        if (request.url.match(apiList.ABOUT_EDIT) != null) {
            addHeaders(request)
        }
        if (request.url.match(apiList.ADMIN.BLOG_LIST) != null) {
            addHeaders(request)
        }
        if (request.url.match(apiList.ADMIN.USER_DELETE) != null) {
            addHeaders(request)
        }
        if (request.url.match(apiList.ADMIN.USER_EDIT) != null) {
            addHeaders(request)
        }
        if (request.url.match(apiList.ADMIN.USER_LIST) != null) {
            addHeaders(request)
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