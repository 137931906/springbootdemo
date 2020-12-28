package com.cykj.service.Impl;

import com.cykj.entity.AdminUser;
import com.cykj.mapper.AdminUserMapper;
import com.cykj.service.AdminLoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminLoginServiceImpl implements AdminLoginService {

    @Autowired(required = false)
    private AdminUserMapper adminUserMapper;
    @Override
    public AdminUser loginCheck(AdminUser adminUser) {
        AdminUser adminUsers = adminUserMapper.selectUser(adminUser);
        return adminUsers;
    }
}
