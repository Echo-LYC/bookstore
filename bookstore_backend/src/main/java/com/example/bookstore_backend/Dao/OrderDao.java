package com.example.bookstore_backend.Dao;

import com.example.bookstore_backend.Entity.Order;
import com.example.bookstore_backend.Entity.OrderItem;
import com.example.bookstore_backend.Entity.User;

import java.util.List;

public interface OrderDao {
    void saveOrder(Order order);
    void saveOrderItem(OrderItem orderItem);
    List<Order> getOrdersByUser(User user);
    List<OrderItem> getOrderItemByOrder(Order order);
}
