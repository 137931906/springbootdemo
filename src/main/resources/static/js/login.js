//登入
function login() {
    var account = $("#account").val();
    var pwd = $("#pwd").val();
    var vCode = $("#vCode").val();
    $.ajax({
        url: "/Login/getUser",
        type: "post",
        data: "account=" + account + "&pwd=" + pwd + "&vCode=" + vCode,
        datatype: "text",
        beforeSend: function () {
            $("[value='登入']").prop("disabled", "disabled");
            if (account == null || account.length < 5) {
                alert('无此账号');
                return false;
            }
            return true;
        },
        success: function (data) {
            alert(data);
            if (data == "登入成功") {
                location.href ="JSP/FrontDesk.jsp";
            }
        },
        error: function () {
            alert('网络繁忙');
        },
        complete: function () {
            $("[value='登入']").prop("disabled", "false");
        }
    });
}

/**
 * 修改验证码图片
 */
function changeImg() {
    $("#vImg").attr("src", "/Vcode/getCode" + Math.random());
}


//注册
function insert() {
    // debugger
    // alert("进来1411了")
    var account = $("#account").val();
    console.log(account);
    var pwd = $("#pwd").val();
    var confirmPwd = $("#confirmPwd").val();
    var sex = $("#sex").val();
    var education = $("#education").val();
    var profession = $("#profession").val();
    var phone = $("#phone").val();
    var email = $("#email").val();
    $.ajax({
        url: "/regServlet",
        type: "post",
        data: "account=" + account + "&pwd=" + pwd + "&confirmPwd=" + confirmPwd +  "&sex=" + sex + "&education=" + education + "&profession=" + profession + "&phone=" + phone + "&email=" + email +"",
        dataType: "text",
        beforeSend: function () {
            if ($.trim(account) == '' || $.trim(account).length<=0) {
                alert("名字不可为空");
                return false;
            } else if ($.trim(pwd) == '' || $.trim(pwd).length<=0) {
                alert("密码不可为空");
                return false;
            }else if ($("#pwd").val() != $("#confirmPwd").val()) {
                alert("2次密码不相同");
                return false;
            } else if ($("#pwd").val().length < 5) {
                alert("密码最少为五位数");
                return false;
            }  else if ($("#sex").val() == 0) {
                alert("请选择性别");
                return false;
            } else if ($("#education").val() == 0) {
                alert("请选择学历");
                return false;
            } else if ($("#profession").val() == 0) {
                alert("请选择职业");
                return false;
            }else {
                return true;
            }
        },
        success: function (data) {
            debugger
            if (data == "注册成功") {
                alert("注册成功");
                location="JSP/Login.jsp";//刷新页面
            }
        },
    })
}