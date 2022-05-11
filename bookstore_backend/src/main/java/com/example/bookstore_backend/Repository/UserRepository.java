package com.example.bookstore_backend.Repository;

import com.example.bookstore_backend.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
    User findDistinctByUsername(String username);
    boolean existsByUsername(String username);
}
