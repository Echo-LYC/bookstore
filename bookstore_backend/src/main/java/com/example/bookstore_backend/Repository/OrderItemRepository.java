package com.example.bookstore_backend.Repository;

import com.example.bookstore_backend.Entity.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItemRepository extends JpaRepository<OrderItem, Integer> {
}
