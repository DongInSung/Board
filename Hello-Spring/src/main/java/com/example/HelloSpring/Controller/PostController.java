package com.example.HelloSpring.Controller;

import com.example.HelloSpring.Entity.PostInfo;
import com.example.HelloSpring.Repository.PostInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class PostController {

    @Autowired
    PostInfoRepository postInfoRepository;


    @PostMapping(value = "/board", consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE})
    public void boardImageTest(@RequestPart(required = true) HashMap<String, String> userData,
                               @RequestPart(required = false) MultipartFile image1,
                               @RequestPart(required = false) MultipartFile image2,
                               @RequestPart(required = false) MultipartFile image3) {

        System.out.println(userData);
        System.out.println(image1);
        System.out.println(image2);
        System.out.println(image3);
    }

    @PostMapping(value = "/board/{number}")
    public PostInfo getBoard(@PathVariable("number") Long boardKey) {
        return postInfoRepository.findByPostKey(boardKey);
    }

}
