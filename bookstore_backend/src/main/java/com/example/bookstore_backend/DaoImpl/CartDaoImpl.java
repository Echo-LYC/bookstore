package com.example.bookstore_backend.DaoImpl;

import com.example.bookstore_backend.Dao.CartDao;
import com.example.bookstore_backend.Entity.Book;
import com.example.bookstore_backend.Entity.CartItem;
import com.example.bookstore_backend.Entity.User;
import com.example.bookstore_backend.Repository.CartItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CartDaoImpl implements CartDao {
    @Autowired
    private CartItemRepository cartItemRepository;

    @Override
    public List<CartItem> getByUser(User user) {
        return cartItemRepository.findByUser(user);
    }

    @Override
    public CartItem getByUserAndBook(User user, Book book) {
        return cartItemRepository.findDistinctByUserAndBook(user, book);
    }

    @Override
    public CartItem getById(Integer id) {
        return cartItemRepository.findById(id).orElse(null);
    }

    @Override
    public void delete(CartItem cartItem) {
        cartItemRepository.delete(cartItem);
    }

    @Override
    public void save(CartItem cartItem) {
        cartItemRepository.save(cartItem);
    }
}
