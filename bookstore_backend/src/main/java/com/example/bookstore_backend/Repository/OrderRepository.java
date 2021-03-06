package com.example.bookstore_backend.Repository;

import com.example.bookstore_backend.Entity.Order;
import com.example.bookstore_backend.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Integer> {
    List<Order> findByUser(User user);
}
