layui.use('table', function(){
    var table = layui.table;
    table.render({
        elem: '#MyScore'
        ,url:'/MyScore/selectTable'
        ,cols: [[
            {field:'openTime',  title: '发生时间'}
            ,{field:'name',title: '发生用户',templet:function (data) {
                        return data.user.name;
                }}
            ,{field:'changeScore', title: '增加/扣除',templet:  function (data) {
                        if (data.socerCount<data.surplusScore) {
                            return '-'+data.changeScore;
                        } else {
                            return '+'+data.changeScore;
                        }
                    }}
            ,{field:'surplusScore',  title: '积分数'}
        ]]
        ,page: true
    });
});
//查询当前积分
$(document).ready(function () {
$.ajax({
    url: '/MyScore/nowScore',
    data:"",
    type:"post",
    dataType:"text",
    success:function (data) {
        $("#nowScore").val(JSON.parse(data));
    }
})
});