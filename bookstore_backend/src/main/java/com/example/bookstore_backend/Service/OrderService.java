package com.example.bookstore_backend.Service;

import com.alibaba.fastjson.JSONObject;
import com.example.bookstore_backend.Entity.OrderInfo;

import java.util.List;

public interface OrderService {
    JSONObject orderFromCart(Integer userId, List<Integer> cartIds);
    List<OrderInfo> get(Integer userId);
}
