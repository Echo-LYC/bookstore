package com.example.bookstore_backend.Controller;

import com.alibaba.fastjson.JSONObject;
import com.example.bookstore_backend.Constant.MissParameterException;
import com.example.bookstore_backend.Entity.User;
import com.example.bookstore_backend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public User login(@RequestBody JSONObject request) {
        String username = request.getString("username");
        String password = request.getString("password");
        if (username == null || password == null) throw new MissParameterException();
        return userService.login(username, password);
    }

    @PostMapping("/register")
    public void register(@RequestBody JSONObject request) {
        String username = request.getString("username");
        String password = request.getString("password");
        String email = request.getString("email");
        if (username == null || password == null || email == null) throw new MissParameterException();
        userService.register(username, password, email);
    }
}
