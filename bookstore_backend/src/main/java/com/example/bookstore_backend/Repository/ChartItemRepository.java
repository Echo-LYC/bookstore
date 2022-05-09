package com.example.bookstore_backend.Repository;

import com.example.bookstore_backend.Entity.ChartItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChartItemRepository extends JpaRepository<ChartItem, Integer> {
}
