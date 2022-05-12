package com.example.bookstore_backend.Dao;

import com.example.bookstore_backend.Entity.Book;
import com.example.bookstore_backend.Entity.CartItem;
import com.example.bookstore_backend.Entity.User;

import java.util.List;

public interface CartDao {
    List<CartItem> getByUser(User user);
    CartItem getByUserAndBook(User user, Book book);
    CartItem getById(Integer id);
    void delete(CartItem cartItem);
    void save(CartItem cartItem);
}
