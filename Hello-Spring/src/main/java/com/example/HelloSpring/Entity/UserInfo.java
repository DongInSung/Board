package com.example.HelloSpring.Entity;

import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "user_info")
@DynamicInsert // insert 할 때 null 값인 field 제외 => DB에 설정된 default 값으로 설정된 값으로 DB 저장
public class UserInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_key")
    private Long userKey;
    @Column
    private String user_id;
    @Column
    private String user_pw;
    @Column
    private String user_name;
    @Column
    private String user_email;
    @Column(name = "user_joindate")
    private Date user_joinDate;
    @Column
    private int user_grade;

    public UserInfo() {
    }

    public UserInfo(Long userKey, String user_id, String user_pw, String user_name, String user_email, Date user_joinDate, int user_grade) {
        this.userKey = userKey;
        this.user_id = user_id;
        this.user_pw = user_pw;
        this.user_name = user_name;
        this.user_email = user_email;
        this.user_joinDate = user_joinDate;
        this.user_grade = user_grade;
    }

    public Long getUserKey() {
        return userKey;
    }

    public void setUserKey(Long userKey) {
        this.userKey = userKey;
    }

    public String getUser_id() {
        return user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }

    public String getUser_pw() {
        return user_pw;
    }

    public void setUser_pw(String user_pw) {
        this.user_pw = user_pw;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public String getUser_email() {
        return user_email;
    }

    public void setUser_email(String user_email) {
        this.user_email = user_email;
    }

    public Date getUser_joinDate() {
        return user_joinDate;
    }

    public void setUser_joinDate(Date user_joinDate) {
        this.user_joinDate = user_joinDate;
    }

    public int getUser_grade() {
        return user_grade;
    }

    public void setUser_grade(int user_grade) {
        this.user_grade = user_grade;
    }

    @Override
    public String toString() {
        return "UserInfo{" +
                "userKey=" + userKey +
                ", user_id='" + user_id + '\'' +
                ", user_pw='" + user_pw + '\'' +
                ", user_name='" + user_name + '\'' +
                ", user_email='" + user_email + '\'' +
                ", user_joinDate=" + user_joinDate +
                ", user_grade=" + user_grade +
                '}';
    }
}
