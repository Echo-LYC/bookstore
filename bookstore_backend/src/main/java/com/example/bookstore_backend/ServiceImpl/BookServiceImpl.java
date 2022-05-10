package com.example.bookstore_backend.ServiceImpl;

import com.example.bookstore_backend.Constant.NotFoundException;
import com.example.bookstore_backend.Dao.BookDao;
import com.example.bookstore_backend.Entity.Book;
import com.example.bookstore_backend.Service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
public class BookServiceImpl implements BookService {
    @Autowired
    private BookDao bookDao;

    @Override
    public List<Book> getAll() {
        return bookDao.getAll();
    }

    @Override
    public Book get(Integer id) {
        return bookDao.get(id);
    }

    @Override
    public void delete(Integer id) {
        Book book = bookDao.get(id);
        if (book != null) bookDao.delete(book);
    }

    @Override
    public void insert(String ISBN, String title, String author, String language, String publication,
                       String year, BigDecimal price, Integer stock, String synopsis, String image) {
        Book book = new Book(ISBN, title, author, language, publication, year, price, stock, synopsis, image);
        bookDao.save(book);
    }

    @Override
    public void update(Integer id, String ISBN, String title, String author, String language, String publication,
                       String year, BigDecimal price, Integer stock, String synopsis, String image) {
        Book book = bookDao.get(id);
        if (book == null) throw new NotFoundException();
        book.setISBN(ISBN);
        book.setTitle(title);
        book.setAuthor(author);
        book.setLanguage(language);
        book.setPublication(publication);
        book.setYear(year);
        book.setPrice(price);
        book.setStock(stock);
        book.setSynopsis(synopsis);
        book.setImage(image);
        bookDao.save(book);
    }
}
