layui.use(['upload','form'], function(){
    var $ = layui.jquery
    ,upload = layui.upload;
    var form = layui.form;
    //监听提交

    form.on('submit(formDemo)', function(data){
        var inputName= $('input[name="multipartFile"]').val();
        if(inputName==null||inputName==""){
            layer.msg('请选择文件');
            return false;
        }
    });
    //选完文件后不自动上传
    upload.render({
        elem: '#test8'
        ,url: '/fileUpLoad/getFile'//改成您自己的上传接口
        ,auto: false
        ,accept: 'file'
        ,size: 1024//限制文件大小，单位 KB
        ,multiple: true
        ,bindAction: '#test9'
        ,field:"multipartFile"
        ,before:function () {
            this.data={
                titleName:$("#titleName").val(),
                content:$("#content").val(),
                downScore:$("#downScore").val(),
            }
        }
        ,done: function(res){
            if(res[1]=="上传成功"){
                layer.msg('上传成功');
                $("#titleName").val("");
                $("#content").val("");
                $("#downScore").val("");
            }
        }
    });
});