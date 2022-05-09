package com.example.bookstore_backend.Entity;

import lombok.*;
import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Data
@Table(name = "orderItem", schema = "bookstore")
public class OrderItem {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Basic
    @Column(name = "num")
    private int num;

    @Basic
    @Column(name = "price")
    private BigDecimal price;

    @ManyToOne
    @JoinColumn(name = "bookId", referencedColumnName = "id")
    private Book book;

    @ManyToOne
    @JoinColumn(name = "orderId", referencedColumnName = "id")
    private Order order;
}