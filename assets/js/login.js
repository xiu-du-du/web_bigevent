/*
 * @Author: xiuxiu
 * @Date: 2021-12-31 11:49:52
 * @LastEditTime: 2022-01-01 00:59:29
 * @FilePath: \大事件\assets\js\login.js
 */
$(function() {
    $('#link_reg').click(function() {
        $('.login-box').hide()
        $('.reg-box').show()
    })
    $('#link_login').click(function() {
        $('.reg-box').hide()
        $('.login-box').show()
    })

    let form = layui.form
    let layer = layui.layer
    form.verify({
        pwd: [/^[\S]{6,12}$/, '密码必须6-12位，且不能出现空格'],
        repwd: function(value) {
            let pwd = $('.reg-box [name=password]').val()
            if (pwd !== value) {
                return '密码不一致！'
            }
        }
    })

    // 注册
    $('#form_reg').on('submit', function(e) {
            e.preventDefault();
            let data = {
                username: $('#form_reg [name=username]').val(),
                password: $('#form_reg [name=password]').val(),
            }
            $.post('/api/reguser', data, function(res) {
                if (res.status !== 0) {
                    return layer.msg(res.message)
                }
                layer.msg('注册成功！')
                $('#link_login').click()
            })
        })
        // 登录
    $('#form_login').submit(function(e) {
        e.preventDefault()
        $.ajax({
            url: '/api/login',
            method: 'post',
            data: $(this).serialize(),
            success: function(res) {
                if (res.status !== 0) {
                    return layer.msg('登录失败！')
                }
                layer.msg('登陆成功')
                localStorage.setItem('token', res.token)
                location.href = '/index.html'
            }
        })
    })
})