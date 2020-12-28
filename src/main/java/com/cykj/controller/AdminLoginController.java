package com.cykj.controller;


import com.cykj.entity.AdminUser;
import com.cykj.service.AdminLoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Controller
@RequestMapping(value = "/AdminLogin")
public class AdminLoginController {

    @Autowired
    private AdminLoginService adminLoginService;

    //返回页面
    @RequestMapping(value = "/AdminLogin")
    public String getView() {
        return "AdminLogin";
    }

    @RequestMapping(value = "/getUser")
    @ResponseBody
    public String getUser(HttpServletRequest httpServletRequest, @RequestBody @Validated AdminUser adminUser, BindingResult br) {
//        user.setPwd(MD5Utils.md5(user.getPwd()));//转化密码加密
        //获取校验的结果
        if (br.hasErrors()){
            List<ObjectError> errors = br.getAllErrors();
            for (ObjectError error : errors){
                System.out.println(error);
            }
        }
        AdminUser adminUser1 = null;
        adminUser1 = adminLoginService.loginCheck(adminUser);
        String vCode = (String) httpServletRequest.getSession().getAttribute("vCode");
        String vCode2 = adminUser.getvCode();
        if (vCode.equalsIgnoreCase(vCode2)) {
            if (adminUser1 != null) {
                httpServletRequest.getSession().setAttribute("adminUser",adminUser1);
                return "222";
            } else {
                return "333";
            }
        } else {
            return "adminUser1";
        }

    }
}
