package com.example.bookstore_backend.Constant;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.FORBIDDEN, reason = "该用户名已被占用")
public class UsernameAlreadyExistException extends RuntimeException {
}
