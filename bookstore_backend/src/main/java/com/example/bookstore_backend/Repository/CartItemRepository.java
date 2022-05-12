package com.example.bookstore_backend.Repository;

import com.example.bookstore_backend.Entity.Book;
import com.example.bookstore_backend.Entity.CartItem;
import com.example.bookstore_backend.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CartItemRepository extends JpaRepository<CartItem, Integer> {
    List<CartItem> findByUser(User user);
    CartItem findDistinctByUserAndBook(User user, Book book);
}
