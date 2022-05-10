package com.example.bookstore_backend.DaoImpl;

import com.example.bookstore_backend.Dao.BookDao;
import com.example.bookstore_backend.Entity.Book;
import com.example.bookstore_backend.Repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BookDaoImpl implements BookDao {
    @Autowired
    private BookRepository bookRepository;

    @Override
    public List<Book> getAll() {
        return bookRepository.findAll();
    }

    @Override
    public Book get(Integer id) {
        return bookRepository.findById(id).orElse(null);
    }

    @Override
    public void delete(Book book) {
        bookRepository.delete(book);
    }

    @Override
    public void save(Book book) {
        bookRepository.save(book);
    }
}
