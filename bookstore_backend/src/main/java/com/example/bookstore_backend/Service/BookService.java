package com.example.bookstore_backend.Service;


import com.example.bookstore_backend.Entity.Book;

import java.math.BigDecimal;
import java.util.List;

public interface BookService {
    List<Book> getAll();
    Book get(Integer id);
    void delete(Integer id);
    void insert(String ISBN, String title, String author, String language, String publication,
                String year, BigDecimal price, Integer stock, String synopsis, String image);
    void update(Integer id, String ISBN, String title, String author, String language, String publication,
                String year, BigDecimal price, Integer stock, String synopsis, String image);
}
