package com.example.bookstore_backend.Controller;

import com.alibaba.fastjson.JSONObject;
import com.example.bookstore_backend.Entity.CartItem;
import com.example.bookstore_backend.Entity.OrderInfo;
import com.example.bookstore_backend.Service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class OrderController {
    @Autowired
    private OrderService orderService;

    @GetMapping("/order/{userId}")
    public List<OrderInfo> get(@PathVariable Integer userId) {
        return orderService.get(userId);
    }

    @PostMapping("/order")
    public JSONObject orderFromCart(@RequestBody JSONObject request) {
        Integer userId = request.getInteger("userid");
        List<Integer> cartIds = JSONObject.parseArray(request.getString("cartids"), Integer.class);
        return orderService.orderFromCart(userId, cartIds);
    }
}
