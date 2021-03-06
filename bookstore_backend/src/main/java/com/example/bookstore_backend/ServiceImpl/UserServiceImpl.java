package com.example.bookstore_backend.ServiceImpl;

import com.example.bookstore_backend.Constant.*;
import com.example.bookstore_backend.Dao.UserDao;
import com.example.bookstore_backend.Entity.User;
import com.example.bookstore_backend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserDao userDao;

    @Override
    public List<User> getAll() {
        return userDao.getAll();
    }

    @Override
    public User login(String username, String password) {
        if (!userDao.existsUsername(username)) throw new UsernameNotExistException();
        User user = userDao.getByUsername(username);
        if (!password.equals(user.getPassword())) throw new UsernameAndPasswordNotMatchException();
        if (!user.isValid()) throw new UserProhibitedException();
        return user;
    }

    @Override
    public void register(String username, String password, String email) {
        if (userDao.existsUsername(username)) throw new UsernameAlreadyExistException();
        User user = new User();
        user.setUsername(username);
        user.setPassword(password);
        user.setEmail(email);
        user.setAccount(BigDecimal.ZERO);
        user.setAuth("CUSTOMER");
        user.setValid(true);
        userDao.save(user);
    }

    @Override
    public void prohibit(List<Integer> ids, Boolean valid) {
        for (Integer id : ids) {
            User user = userDao.getById(id);
            if (user == null || user.getAuth().equals("ADMINISTRATOR")) continue;
            user.setValid(valid);
            userDao.save(user);
        }
    }
}
