package com.example.bookstore_backend.ServiceImpl;

import com.alibaba.fastjson.JSONObject;
import com.example.bookstore_backend.Constant.NotFoundException;
import com.example.bookstore_backend.Constant.NotSufficientAccountException;
import com.example.bookstore_backend.Constant.SoldOutException;
import com.example.bookstore_backend.Dao.BookDao;
import com.example.bookstore_backend.Dao.CartDao;
import com.example.bookstore_backend.Dao.OrderDao;
import com.example.bookstore_backend.Dao.UserDao;
import com.example.bookstore_backend.Entity.*;
import com.example.bookstore_backend.Service.CartService;
import com.example.bookstore_backend.Service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {
    @Autowired
    private UserDao userDao;

    @Autowired
    private BookDao bookDao;

    @Autowired
    private CartDao cartDao;

    @Autowired
    private CartService cartService;

    @Autowired
    private OrderDao orderDao;

    @Override
    public JSONObject orderFromCart(Integer userId, List<Integer> cartIds) {
        User user = userDao.getById(userId);
        if (user == null) throw new NotFoundException();

        List<CartItem> soldOutCartItems = new ArrayList<>();
        List<Integer> toOrderCartIds = new ArrayList<>();
        List<OrderItem> orderItems = new ArrayList<>();
        BigDecimal total = BigDecimal.ZERO;
        for (Integer cartId : cartIds) {
            CartItem cartItem = cartDao.getById(cartId);
            if (cartItem == null || !cartItem.getUser().getId().equals(userId)) continue;
            if (cartItem.getBook().getStock() < cartItem.getNum()) {
                soldOutCartItems.add(cartItem);
            } else {
                toOrderCartIds.add(cartId);
                OrderItem orderItem = new OrderItem(cartItem);
                total = total.add(orderItem.getPrice().multiply(new BigDecimal(orderItem.getNum())));
                orderItems.add(orderItem);
            }
        }

        if (total.compareTo(user.getAccount()) > 0) {
            throw new NotSufficientAccountException();
        }

        if (orderItems.isEmpty()) {
            throw new SoldOutException();
        }

        user.setAccount(user.getAccount().subtract(total));
        userDao.save(user);
        Order order = new Order();
        order.setUser(user);
        orderDao.saveOrder(order);
        for (OrderItem orderItem: orderItems) {
            Book book = orderItem.getBook();
            book.setStock(book.getStock() - orderItem.getNum());
            bookDao.save(book);
            orderItem.setOrder(order);
            orderDao.saveOrderItem(orderItem);
        }
        cartService.delete(toOrderCartIds);
        JSONObject response = new JSONObject();
        response.put("total", total);
        response.put("order", order);
        response.put("orderitems", orderItems);
        response.put("soldout", soldOutCartItems);
        return response;
    }

    @Override
    public List<OrderInfo> get(Integer userId) {
        User user = userDao.getById(userId);
        if (user == null) throw new NotFoundException();
        List<Order> orders = orderDao.getOrdersByUser(user);
        List<OrderInfo> orderInfos = new ArrayList<>();
        for (Order order : orders) {
            OrderInfo orderInfo = new OrderInfo(order);
            List<OrderItem> orderItems = orderDao.getOrderItemByOrder(order);
            orderInfo.setOrderItems(orderItems);
            BigDecimal total = BigDecimal.ZERO;
            for (OrderItem orderItem : orderItems) {
                total = total.add(orderItem.getPrice().multiply(new BigDecimal(orderItem.getNum())));
            }
            orderInfo.setTotal(total);
            orderInfos.add(orderInfo);
        }
        return orderInfos;
    }
}
