-- Chapter 5: Basic SQL Queries
-- How to use the AS Clause in SQL
-- SELECT column_name AS alias_name FROM table_name;
-- AS keyword
SELECT
  employee_id AS id,
  employee_name AS name
FROM
  employees;

-- returns the same result as
SELECT
  employee_id,
  employee_name
FROM
  employees;

-- SQL Functions
-- SQL functions are built-in features within Oracle Database, enhancing SQL statements' functionality.
-- These functions can return a single value based on input and be utilized in select lists, WHERE, HAVING, START WITH, and CONNECT BY clauses.
-- SQL functions support nesting, allowing their use within other SQL functions or expressions that evaluate to Boolean values.
-- Furthermore, they can be employed in the ORDER BY clause to sort query results.
-- IIF function
-- IIF is a conditional function that returns one of two values based on a Boolean expression.
-- IIF(boolean_expression, true_value, false_value)
SELECT
  quantity,
  IIF (quantity < 10, "Order more", "In Stock") AS directive
from
  products;

-- How to Use BETWEEN with WHERE Clause
-- BETWEEN is a comparison operator that returns TRUE if a value is within a range of values, inclusive.
-- BETWEEN can be used in any valid SQL statement - select, insert, update, or delete.
-- BETWEEN can be used with dates, numbers, and text.
-- BETWEEN is inclusive: begin and end values are included in the result.
-- BETWEEN is equivalent to the following expression:
-- value >= begin_value AND value <= end_value
SELECT
  employee_name,
  salary
FROM
  employees
WHERE
  salary BETWEEN 10000 AND 20000;

SELECT
  product_name,
  quantity
FROM
  products
WHERE
  quantity NOT BETWEEN 10 AND 20;

-- How to return distinct values
-- SELECT DISTINCT column_name FROM table_name;
SELECT DISTINCT
  product_name -- column_name to return distinct values from table_name (products)
FROM
  products;

-- Logical Operators
-- AND, OR, NOT
-- AND operator
SELECT
  product_name,
  quantity,
  shipment_status
FROM
  products
WHERE
  shipment_status = 'pending'
  AND quantity BETWEEN 10 AND 20;

-- Equality operators
-- =, !=, <>, <, <=, >, >=
-- OR operator
SELECT
  product_name quantity,
  shipment_status
FROM
  products
WHERE
  products
WHERE
  shipment_status = 'out of stock'
  OR quantity < 10;

-- The IN Operator
-- The IN operator is used to specify multiple values in a WHERE clause, acting as shorthand for multiple OR conditions.
-- Example: SELECT column_name(s) FROM table_name WHERE column_name IN (value1, value2, ...);
SELECT
  product_name,
  shipment_status
FROM
  products
WHERE
  shipment_status IN ('shipped', 'preparing', 'out of stock');

-- is the same as
SELECT
  product_name,
  shipment_status
FROM
  products
WHERE
  shipment_status = 'shipped'
  OR shipment_status = 'preparing'
  OR shipment_status = 'out of stock';

-- The LIKE keyword
-- The LIKE keyword is used to search for a specified pattern in a column.
-- There are two wildcards often used in conjunction with the LIKE operator:
-- % - The percent sign represents zero, one, or multiple characters
-- _ - The underscore represents a single character
-- Example: SELECT column_name(s) FROM table_name WHERE column_name LIKE pattern;
-- % Operator
SELECT
  product_name,
  quantity
FROM
  products
WHERE
  product_name LIKE 'A%';

-- _ Operator
SELECT
  product_name,
  quantity
FROM
  products
WHERE
  product_name LIKE 'A_';

SELECT
  *
FROM
  products
WHERE
  product_name LIKE '__oot';