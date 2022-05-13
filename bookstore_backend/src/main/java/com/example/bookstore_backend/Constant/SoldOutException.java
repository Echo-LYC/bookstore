package com.example.bookstore_backend.Constant;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.FORBIDDEN, reason = "售罄")
public class SoldOutException extends RuntimeException {
}
