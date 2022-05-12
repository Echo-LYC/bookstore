package com.example.bookstore_backend.Entity;

import lombok.*;
import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Data
@Table(name = "orderitem", schema = "bookstore")
public class OrderItem {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Basic
    @Column(name = "num")
    private Integer num;

    @Basic
    @Column(name = "price")
    private BigDecimal price;

    @ManyToOne
    @JoinColumn(name = "bookid", referencedColumnName = "id")
    private Book book;

    @ManyToOne
    @JoinColumn(name = "orderid", referencedColumnName = "id")
    private Order order;
}
