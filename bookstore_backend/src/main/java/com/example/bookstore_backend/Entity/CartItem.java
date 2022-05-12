package com.example.bookstore_backend.Entity;

import lombok.*;
import javax.persistence.*;

@Entity
@Data
@Table(name = "cartitem", schema = "bookstore")
public class CartItem {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Basic
    @Column(name = "num")
    private Integer num;

    @ManyToOne
    @JoinColumn(name = "bookid", referencedColumnName = "id")
    private Book book;

    @ManyToOne
    @JoinColumn(name = "userid", referencedColumnName = "id")
    private User user;
}
