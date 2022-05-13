package com.example.bookstore_backend.Repository;

import com.example.bookstore_backend.Entity.Order;
import com.example.bookstore_backend.Entity.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderItemRepository extends JpaRepository<OrderItem, Integer> {
    List<OrderItem> findByOrder(Order order);
}
