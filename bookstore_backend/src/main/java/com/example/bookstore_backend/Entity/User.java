package com.example.bookstore_backend.Entity;

import lombok.*;
import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Data
@Table(name = "user", schema = "bookstore")
public class User {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Basic
    @Column(name = "username", unique = true)
    private String username;

    @Basic
    @Column(name = "password")
    private String password;

    @Basic
    @Column(name = "email")
    private String email;

    @Basic
    @Column(name = "account")
    private BigDecimal account;

    @Basic
    @Column(name = "image")
    private String image;

    @Basic
    @Column(name = "auth")
    private String auth;

    @Basic
    @Column(name = "valid")
    private boolean valid;
}
