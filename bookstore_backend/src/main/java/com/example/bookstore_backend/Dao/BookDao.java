package com.example.bookstore_backend.Dao;

import com.example.bookstore_backend.Entity.Book;

import java.util.List;

public interface BookDao {
    List<Book> getAll();
    Book get(Integer id);
    void delete(Book book);
    void save(Book book);
}
