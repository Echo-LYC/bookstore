use bookstore;

SET foreign_key_checks=0;
DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS book;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS orderItem;
DROP TABLE IF EXISTS chartItem;
SET foreign_key_checks=1;

CREATE TABLE user(
	id		       INT PRIMARY KEY AUTO_INCREMENT,
	username	   VARCHAR(20) NOT NULL,
	password	   VARCHAR(20) NOT NULL,
	email          VARCHAR(50) NOT NULL,
	account        DECIMAL(19, 2) UNSIGNED NOT NULL,
    image		   TEXT,
    auth	       ENUM('CUSTOMER', 'ADMINISTRATOR') NOT NULL,
	valid	       BOOL NOT NULL
);

CREATE TABLE book(
	id		       INT PRIMARY KEY AUTO_INCREMENT,
	ISBN           VARCHAR(13) NOT NULL,
	title   	   VARCHAR(50) NOT NULL,
	author		   VARCHAR(50) NOT NULL,
	language       VARCHAR(50),
    publication    VARCHAR(50),
	year           YEAR,
	price          DECIMAL(19, 2) UNSIGNED NOT NULL,
    stock          INT UNSIGNED NOT NULL,
	synopsis       TEXT,
	image          TEXT
);

CREATE TABLE orders(
	id             INT PRIMARY KEY AUTO_INCREMENT,
	userId         INT NOT NULL,
	time           DATETIME DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (userId) REFERENCES user(id) ON DELETE CASCADE
);

CREATE TABLE orderItem(
	id             INT PRIMARY KEY AUTO_INCREMENT,
    orderId        INT NOT NULL,
    bookId         INT NOT NULL,
    num            INT UNSIGNED NOT NULL,
    price		   DECIMAL(19, 2) UNSIGNED NOT NULL,
    FOREIGN KEY (orderId) REFERENCES orders(id) ON DELETE CASCADE,
    FOREIGN KEY (bookId) REFERENCES book(id) ON DELETE CASCADE
);

CREATE TABLE chartItem(
	id             INT PRIMARY KEY AUTO_INCREMENT,
    userId         INT NOT NULL,
    bookId         INT NOT NULL,
    num            INT UNSIGNED NOT NULL,
    FOREIGN KEY (userId) REFERENCES user(id) ON DELETE CASCADE,
    FOREIGN KEY (bookId) REFERENCES book(id) ON DELETE CASCADE
);