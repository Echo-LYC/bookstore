package com.example.bookstore_backend.Controller;

import com.alibaba.fastjson.JSONObject;
import com.example.bookstore_backend.Constant.MissParameterException;
import com.example.bookstore_backend.Constant.NotFoundException;
import com.example.bookstore_backend.Entity.Book;
import com.example.bookstore_backend.Service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class BookController {
    @Autowired
    private BookService bookService;

    @GetMapping("/books")
    public List<Book> getAll() {
        return bookService.getAll();
    }

    @GetMapping("/book/{id}")
    public Book get(@PathVariable Integer id) {
        Book book = bookService.get(id);
        if (book == null) throw new NotFoundException();
        return book;
    }

    @DeleteMapping("/book/{id}")
    public void delete(@PathVariable Integer id) {
        bookService.delete(id);
    }

    @PostMapping("/book")
    public void post(@RequestBody JSONObject request) {
        Integer id = request.getInteger("id");
        String ISBN = request.getString("isbn");
        String title = request.getString("title");
        String author = request.getString("author");
        String language = request.getString("language");
        String publication = request.getString("publication");
        String year = request.getString("year");
        BigDecimal price = new BigDecimal(request.getString("price"));
        Integer stock = request.getInteger("stock");
        String synopsis = request.getString("synopsis");
        String image = request.getString("image");
        if (ISBN == null || title == null || author == null || stock == null) throw new MissParameterException();
        if (id == null) {
            bookService.insert(ISBN, title, author, language, publication, year, price, stock, synopsis, image);
        } else {
            bookService.update(id, ISBN, title, author, language, publication, year, price, stock, synopsis, image);
        }
    }
}
