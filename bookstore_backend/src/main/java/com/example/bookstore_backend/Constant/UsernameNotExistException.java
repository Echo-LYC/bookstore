package com.example.bookstore_backend.Constant;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.FORBIDDEN, reason = "用户名不存在")
public class UsernameNotExistException extends RuntimeException {
}
