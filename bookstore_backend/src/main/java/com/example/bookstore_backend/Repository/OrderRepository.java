package com.example.bookstore_backend.Repository;

import com.example.bookstore_backend.Entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Integer> {
}
