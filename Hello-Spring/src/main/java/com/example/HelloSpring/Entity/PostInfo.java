package com.example.HelloSpring.Entity;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table (name = "post_info")
@DynamicInsert
public class PostInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column (name = "post_key")
    private Long postKey;
    @Column
    private String post_title;
    @Column
    private String post_content;
    @Column
    private Long post_view;
    @Column (name = "post_makedate")
    private Date post_makeDate;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn (name ="user_key")
    private UserInfo postWriter;

    public PostInfo() {
    }

    public PostInfo(Long postKey, String post_title, String post_content, Long post_view, Date post_makeDate, UserInfo postWriter) {
        this.postKey = postKey;
        this.post_title = post_title;
        this.post_content = post_content;
        this.post_view = post_view;
        this.post_makeDate = post_makeDate;
        this.postWriter = postWriter;
    }

    public Long getPostKey() {
        return postKey;
    }

    public void setPostKey(Long postKey) {
        this.postKey = postKey;
    }

    public String getPost_title() {
        return post_title;
    }

    public void setPost_title(String post_title) {
        this.post_title = post_title;
    }

    public String getPost_content() {
        return post_content;
    }

    public void setPost_content(String post_content) {
        this.post_content = post_content;
    }

    public Long getPost_view() {
        return post_view;
    }

    public void setPost_view(Long post_view) {
        this.post_view = post_view;
    }

    public Date getPost_makeDate() {
        return post_makeDate;
    }

    public void setPost_makeDate(Date post_makeDate) {
        this.post_makeDate = post_makeDate;
    }

    public UserInfo getPostWriter() {
        return postWriter;
    }

    public void setPostWriter(UserInfo postWriter) {
        this.postWriter = postWriter;
    }

    @Override
    public String toString() {
        return "PostInfo{" +
                "postKey=" + postKey +
                ", post_title='" + post_title + '\'' +
                ", post_content='" + post_content + '\'' +
                ", post_view=" + post_view +
                ", post_makeDate=" + post_makeDate +
                ", postWriter=" + postWriter +
                '}';
    }
}
