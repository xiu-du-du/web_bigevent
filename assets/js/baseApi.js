/*
 * @Author: xiuxiu
 * @Date: 2022-01-01 00:55:59
 * @LastEditTime: 2022-01-01 00:58:25
 * @FilePath: \大事件\assets\js\baseApi.js
 */
// 每次调用get post ajax都会先调用这个函数
$.ajaxPrefilter(function(options) {
    options.url = 'http://api-breakingnews-web.itheima.net' + options.url
    console.log(options.url);
})