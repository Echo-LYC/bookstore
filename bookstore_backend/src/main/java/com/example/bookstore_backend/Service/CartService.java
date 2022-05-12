package com.example.bookstore_backend.Service;

import com.example.bookstore_backend.Entity.CartItem;

import java.util.List;

public interface CartService {
    List<CartItem> get(Integer userId);
    void add(Integer userId, Integer bookId, Integer num);
    void delete(List<Integer> ids);
}
