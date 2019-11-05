DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(50) NULL,
  department_name VARCHAR(50) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity VARCHAR(50) NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("crack rocks", "drogas", 80.00, 36);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("pcp", "drogas", 30.00, 36);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("weed", "drogas", 20.00, 36);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("lsd", "drogas", 5.00, 36);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("molly", "drogas", 20.00, 36);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("moonrocks", "drogas", 30.00, 36);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("speed-ball", "drogas", 80.00, 36);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("crank", "drogas", 50.00, 36);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("bananas", "fruit", 5.00, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("opium", "drogas", 40.00, 36);