/*
 * @Author: xiuxiu
 * @Date: 2022-01-01 00:55:59
 * @LastEditTime: 2022-01-01 18:06:02
 * @FilePath: \大事件\assets\js\baseApi.js
 */
// 每次调用get post ajax都会先调用这个函数
$.ajaxPrefilter(function(options) {
    options.url = 'http://api-breakingnews-web.itheima.net' + options.url

    // 统一设置headers
    if (options.url.indexOf('/my/') !== -1) {
        options.headers = {
            Authorization: localStorage.getItem('token') || ''

        }
    }

    // 
    options.complete = function(res) {
        if (res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败！') {
            localStorage.removeItem('token')
            location.href = '/login.html'
        }
    }

})