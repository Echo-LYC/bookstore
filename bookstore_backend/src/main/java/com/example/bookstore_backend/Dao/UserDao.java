package com.example.bookstore_backend.Dao;

import com.example.bookstore_backend.Entity.User;

public interface UserDao {
    boolean existsUsername(String username);
    User getByUsername(String username);
    void save(User user);
}
