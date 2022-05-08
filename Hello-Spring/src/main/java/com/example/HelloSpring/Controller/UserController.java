package com.example.HelloSpring.Controller;

import com.example.HelloSpring.Entity.UserInfo;
import com.example.HelloSpring.Repository.UserInfoRepository;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {

    @Autowired
    UserInfoRepository userInfoRepository;

    @PostMapping("/user/new")
    public void singUp(@RequestBody(required = true) HashMap<String, String> user) {
        

    }

    @PostMapping("/user")
    public void login(@RequestBody(required = true) HashMap<String, String> user) {

        String id = user.get("id");
        String password = user.get("password");

        UserInfo u1 = userInfoRepository.findByUserId(id);
        if(u1.getUser_pw().equals(password)){
            System.out.println(u1);
        }

    }
}

