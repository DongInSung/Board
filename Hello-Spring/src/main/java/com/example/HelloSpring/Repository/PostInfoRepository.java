package com.example.HelloSpring.Repository;

import com.example.HelloSpring.Entity.PostInfo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostInfoRepository extends JpaRepository<PostInfo, Long> {
    PostInfo findByPostKey(Long postKey);
    List<PostInfo> findAll();
}
