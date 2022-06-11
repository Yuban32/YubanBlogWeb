const apiList = {
    LOGIN:'/login',
    REGISTER:'/register',
    BLOG_EDIT:'/blog/edit',
    BLOGS:'/blogs',
    BLOG:'/blog',
    LOGOUT:'/logout',
    BLOG_DELETE:'/blog/delete',
    ABOUT_EDIT:'/about/edit',
    ABOUT:'/about',
    ADMIN:{
        //user
        USER_LIST:"/admin/user/userlist",
        USER_EDIT:"/user/edit",
        USER_DELETE:"/admin/user/delete/",

        //BLOG
        BLOG_LIST:"/blog/bloglist"
    },
    REQUESTAUTHOR:"/user/getroles?id="
};
export default apiList;