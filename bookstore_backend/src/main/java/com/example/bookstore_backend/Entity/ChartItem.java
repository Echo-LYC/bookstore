package com.example.bookstore_backend.Entity;

import lombok.*;
import javax.persistence.*;

@Entity
@Data
@Table(name = "chartItem", schema = "bookstore")
public class ChartItem {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Basic
    @Column(name = "num")
    private Integer num;

    @ManyToOne
    @JoinColumn(name = "bookId", referencedColumnName = "id")
    private Book book;

    @ManyToOne
    @JoinColumn(name = "userId", referencedColumnName = "id")
    private User user;
}
