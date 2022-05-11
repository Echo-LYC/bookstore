package com.example.bookstore_backend.Service;

import com.example.bookstore_backend.Entity.User;

public interface UserService {
    User login(String username, String password);
    void register(String username, String password, String email);
}
