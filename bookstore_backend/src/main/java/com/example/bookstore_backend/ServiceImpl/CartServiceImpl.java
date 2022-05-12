package com.example.bookstore_backend.ServiceImpl;

import com.example.bookstore_backend.Constant.NotFoundException;
import com.example.bookstore_backend.Dao.BookDao;
import com.example.bookstore_backend.Dao.CartDao;
import com.example.bookstore_backend.Dao.UserDao;
import com.example.bookstore_backend.Entity.Book;
import com.example.bookstore_backend.Entity.CartItem;
import com.example.bookstore_backend.Entity.User;
import com.example.bookstore_backend.Service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartServiceImpl implements CartService {
    @Autowired
    private UserDao userDao;

    @Autowired
    private BookDao bookDao;

    @Autowired
    private CartDao cartDao;

    @Override
    public List<CartItem> get(Integer userId) {
        User user = userDao.getById(userId);
        if (user == null) throw new NotFoundException();
        return cartDao.getByUser(user);
    }

    @Override
    public void add(Integer userId, Integer bookId, Integer num) {
        User user = userDao.getById(userId);
        Book book = bookDao.get(bookId);
        if (user == null || book == null) throw new NotFoundException();
        CartItem cartItem = cartDao.getByUserAndBook(user, book);
        if (cartItem == null) {
            cartItem = new CartItem();
            cartItem.setBook(book);
            cartItem.setUser(user);
            cartItem.setNum(num);
        } else {
            cartItem.setNum(cartItem.getNum() + num);
        }
        cartDao.save(cartItem);
    }

    @Override
    public void delete(List<Integer> ids) {
        for (Integer id : ids) {
            CartItem cartItem = cartDao.getById(id);
            if (cartItem != null) cartDao.delete(cartItem);
        }
    }
}
