package com.example.bookstore_backend.DaoImpl;

import com.example.bookstore_backend.Dao.OrderDao;
import com.example.bookstore_backend.Entity.Order;
import com.example.bookstore_backend.Entity.OrderItem;
import com.example.bookstore_backend.Entity.User;
import com.example.bookstore_backend.Repository.OrderItemRepository;
import com.example.bookstore_backend.Repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class OrderDaoImpl implements OrderDao {
    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private OrderItemRepository orderItemRepository;

    @Override
    public void saveOrder(Order order) {
        orderRepository.save(order);
    }

    @Override
    public void saveOrderItem(OrderItem orderItem) {
        orderItemRepository.save(orderItem);
    }

    @Override
    public List<Order> getOrdersByUser(User user) {
        if (user.getAuth().equals("ADMINISTRATOR")) {
            return orderRepository.findAll();
        }
        return orderRepository.findByUser(user);
    }

    @Override
    public List<OrderItem> getOrderItemByOrder(Order order) {
        return orderItemRepository.findByOrder(order);
    }
}
