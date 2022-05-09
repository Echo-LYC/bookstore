package com.example.bookstore_backend.Entity;

import lombok.*;
import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Data
@Table(name = "book", schema = "bookstore")
public class Book {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Basic
    @Column(name = "ISBN")
    private String ISBN;

    @Basic
    @Column(name = "title")
    private String title;

    @Basic
    @Column(name = "author")
    private String author;

    @Basic
    @Column(name = "language")
    private String language;

    @Basic
    @Column(name = "publication")
    private String publication;

    @Basic
    @Column(name = "year")
    private String year;

    @Basic
    @Column(name = "price")
    private BigDecimal price;

    @Basic
    @Column(name = "stock")
    private int stock;

    @Basic
    @Column(name = "synopsis")
    private String synopsis;

    @Basic
    @Column(name = "image")
    private String image;

    public Book() {}

    public Book(String ISBN, String title, String author, BigDecimal price, int stock) {
        this.ISBN = ISBN;
        this.title = title;
        this.author = author;
        this.price = price;
        this.stock = stock;
    }
}
