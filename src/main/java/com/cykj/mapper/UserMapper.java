package com.cykj.mapper;

import com.cykj.entity.User;
import com.cykj.entity.UserKey;
import com.cykj.entity.UserWithBLOBs;

public interface UserMapper {
    int deleteByPrimaryKey(UserKey key);

    int insert(UserWithBLOBs record);

    int insertSelective(UserWithBLOBs record);

    UserWithBLOBs selectByPrimaryKey(UserKey key);

    int updateByPrimaryKeySelective(UserWithBLOBs record);

    int updateByPrimaryKeyWithBLOBs(UserWithBLOBs record);

    int updateByPrimaryKey(User record);
}