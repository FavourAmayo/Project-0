DROP TABLE if EXISTS users;

CREATE TABLE users
(
    user_id INTEGER PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    email VARCHAR (255) NOT NULL,
    password VARCHAR (255) NOT NULL,
    phone VARCHAR (10) NOT NULL
);

INSERT INTO users
    (user_id, name, email, password, phone)
VALUES
    (1, 'Sarah', 'weights@gmail.com', '12345', '0987654321'),
    (2, 'Kyle', 'lifted@gmail.com', '74829', '8002231234'),
    (3, 'Apollo', 'stretched@yahoo.com', '06890', '7889092375'),
    (4, 'Brad', 'plates@yahoo.com', '37845', '8334560987'),
    (6, 'Walter', 'jams@gmail.com', 'fuhad', '8788888888'),
    (41, 'Katie', 'squats@gmail.com', 'q9834', '8888888888');

SELECT *
FROM users
ORDER BY user_id ASC;

CREATE TABLE orders
(
    order_id INTEGER PRIMARY KEY,
    user_id INTEGER /* FOREIGN KEY */,
    order_status VARCHAR
(255) NOT NULL,
    order_date DATE
(255) NOT NULL,
    shipped_date DATE
(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (user_id)
);


INSERT INTO orders
    (order_id, user_id, order_status, order_date, shipped_date)
VALUES
    (90099, 3, 'pending', '2020-05-09', '2020-05-15'),
    (32490, 2, 'processing', '2020-04-20', '2020-04-26'),
    (27348, 4, 'shipped', '2020-02-15', '2020-02-21'),
    (27349, 1, 'shipped', '2020-02-15', '2020-02-21'),
    (43524, 6, 'shipped', '2020-05-20', '2020-05-24');

SELECT *
FROM orders
ORDER BY order_id ASC

CREATE TABLE order_items
(
    item_id INTEGER PRIMARY KEY,
    order_id INTEGER (255) NOT NULL,
    product_id INTEGER (255) NOT NULL,
    quantity INTEGER (255) NOT NULL,
    list_price MONEY (255) NOT NULL,
    name VARCHAR (10) NOT NULL,
    description VARCHAR (10) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders (order_id)
);

INSERT INTO order_items
    (item_id, order_id, product_id, quantity, list_price, name, description)
VALUES
    (234, 27348, 234750, 100, 70, 'Barbell bar', 'stainless steel'),
    (456, 90099, 034759, 500, 5, '2 collars', 'screw on, one inch opening'),
    (296, 32490, 269347, 700, 15, 'Resistance band', 'durable medium size'),
    (268, 27348, 405843, 576, 20, '5 pound dumbbell', 'vinyl weight'),
    (948, 43524, 940375, 1000, 45, 'dumbbells', '45 pound weights');

SELECT *
FROM order_items
ORDER BY item_id ASC

SELECT users.name, orders.order_id, orders.order_status, orders.order_date, orders.shipped_date
FROM users INNER JOIN orders ON users.user_id = orders.user_id;