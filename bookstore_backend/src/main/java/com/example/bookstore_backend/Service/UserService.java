package com.example.bookstore_backend.Service;

import com.example.bookstore_backend.Entity.User;

import java.util.List;

public interface UserService {
    List<User> getAll();
    User login(String username, String password);
    void register(String username, String password, String email);
    void prohibit(List<Integer> ids, Boolean valid);
}
