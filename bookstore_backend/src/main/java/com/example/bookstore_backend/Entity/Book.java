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
    private Integer id;

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
    private Integer stock;

    @Basic
    @Column(name = "synopsis")
    private String synopsis;

    @Basic
    @Column(name = "image")
    private String image;

    public Book() {}

    public Book(String ISBN, String title, String author, String language, String publication, String year,
                BigDecimal price, Integer stock, String synopsis, String image) {
        this.ISBN = ISBN;
        this.title = title;
        this.author = author;
        this.language = language;
        this.publication = publication;
        this.year = year;
        this.price = price;
        this.stock = stock;
        this.synopsis = synopsis;
        this.image = image;
    }
}
