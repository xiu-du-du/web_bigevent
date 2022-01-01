/*
 * @Author: xiuxiu
 * @Date: 2022-01-01 04:35:23
 * @LastEditTime: 2022-01-01 18:03:13
 * @FilePath: \大事件\assets\js\index.js
 */
$(function() {
    // 获取基本信息
    getUserInfo()
    $('#btnLogout').on('click', function() {
        layui.layer.confirm('确定退出?', { icon: 3, title: '提示' }, function(index) {
            //do something
            localStorage.removeItem('token')
            location.href = '/login.html'
            layer.close(index);
        });
    })
})

function getUserInfo() {
    $.ajax({
        method: 'get',
        url: '/my/userinfo',
        // headers: {
        //     Authorization: localStorage.getItem('token') || ''
        // },
        success: function(res) {
            if (res.status !== 0) {
                return layui.layer.msg('获取失败！')
            }
            renderAvatar(res.data)
        },

    })
}

function renderAvatar(user) {
    let name = user.nickname || user.username
    $('#welcome').html('欢迎&nbsp;&nbsp;' + name)
    if (user.user_pic !== null) {
        $('.layui-nav-img').attr('src', user.user_pic)
        $('.text-avatar').hide()
    } else {
        $('.layui-nav-img').hide()
        let first = name[0].toUpperCase()
        console.log(first);
        $('.text-avatar').html(first).show()
    }
}