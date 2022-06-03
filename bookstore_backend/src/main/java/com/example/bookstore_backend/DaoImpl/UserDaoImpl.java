package com.example.bookstore_backend.DaoImpl;

import com.example.bookstore_backend.Dao.UserDao;
import com.example.bookstore_backend.Entity.User;
import com.example.bookstore_backend.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserDaoImpl implements UserDao {
    @Autowired
    private UserRepository userRepository;

    @Override
    public boolean existsUsername(String username) {
        return userRepository.existsByUsername(username);
    }

    @Override
    public User getByUsername(String username) {
        return userRepository.findDistinctByUsername(username);
    }

    @Override
    public User getById(Integer id) {
        return userRepository.findById(id).orElse(null);
    }

    @Override
    public void save(User user) {
        userRepository.save(user);
    }

    @Override
    public List<User> getAll() {
        return userRepository.findAll();
    }
}
