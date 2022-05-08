package com.example.HelloSpring.Repository;

import com.example.HelloSpring.Entity.UserInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserInfoRepository extends JpaRepository<UserInfo, Long> {

    UserInfo findByUserKey(Long userKey);
    UserInfo findByUserId(String userId);
}
