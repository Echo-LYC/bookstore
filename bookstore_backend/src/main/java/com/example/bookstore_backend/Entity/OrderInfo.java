package com.example.bookstore_backend.Entity;

import lombok.Data;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.List;

@Data
public class OrderInfo {
    private Integer id;
    private Timestamp time;
    private User user;
    private BigDecimal total;
    private List<OrderItem> orderItems;

    public OrderInfo() {}

    public OrderInfo(Order order) {
        this.id = order.getId();
        this.time = order.getTime();
        this.user = order.getUser();
    }
}
