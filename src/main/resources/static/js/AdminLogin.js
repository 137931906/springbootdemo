//登入
function login() {
    var account = $("#account").val();
    var pwd = $("#pwd").val();
    var vCode = $("#vCode").val();
    $.ajax({
        url: "/AdminLogin/getUser",
        dataType:"JSON",
        type: "post",
        data:JSON.stringify({account:account,pwd:pwd,vCode:vCode}),
        contentType: 'application/json',
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
            if (data == "222") {
                location.href="/Backstage/getView";
            }
        },
        error: function () {
            alert('333');
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
    $("#vImg").attr("src", "/Vcode/getCode?random1=" + Math.random());
}