package com.example.bookstore_backend.Controller;

import com.alibaba.fastjson.JSONObject;
import com.example.bookstore_backend.Constant.MissParameterException;
import com.example.bookstore_backend.Entity.CartItem;
import com.example.bookstore_backend.Service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class CartController {
    @Autowired
    private CartService cartService;

    @GetMapping("/cart/{userId}")
    public List<CartItem> get(@PathVariable Integer userId) {
        return cartService.get(userId);
    }

    @PostMapping("/cart/add")
    public void add(@RequestBody JSONObject request) {
        Integer userId = request.getInteger("userid");
        Integer bookId = request.getInteger("bookid");
        Integer num = request.getInteger("num");
        if (userId == null || bookId == null || num == null) throw new MissParameterException();
        cartService.add(userId, bookId, num);
    }

    @PostMapping("/cart/del")
    public void delete(@RequestBody JSONObject request) {
        List<Integer> ids = JSONObject.parseArray(request.getString("cartids"), Integer.class);
        cartService.delete(ids);
    }
}
