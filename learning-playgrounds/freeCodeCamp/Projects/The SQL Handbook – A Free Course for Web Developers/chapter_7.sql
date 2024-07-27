-- Chapter 7: How to Perform Aggregations in SQL
-- Why use aggregations?
-- Aggregations are used to summarize data in a SQL query.
-- The SQL COUNT() function
-- The COUNT() function is used to count the number of rows in a SQL query.
-- SELECT COUNT(*) FROM table_name;
SELECT
  COUNT(*)
FROM
  products
WHERE
  quantity = 0;

-- The SQL SUM() function
-- The SUM() function is used to sum the values of a column in a SQL query.
-- SELECT SUM(column_name) FROM table_name;
SELECT
  sum(quantity)
FROM
  products;

-- The MAX function
-- The MAX() function is used to find the maximum value of a column in a SQL query.
-- SELECT MAX(column_name) FROM table_name;
SELECT
  MAX(price)
FROM
  products;

-- The MIN function
-- The MIN() function is used to find the minimum value of a column in a SQL query.
-- SELECT MIN(column_name) FROM table_name;
SELECT
  MIN(price)
FROM
  products;

-- The AVG function
-- The AVG() function is used to find the average value of a column in a SQL query.
-- SELECT AVG(column_name) FROM table_name;
SELECT
  AVG(price)
FROM
  products;

-- The SQL HAVING clause
-- The HAVING clause is used to filter the results of an aggregation.
-- SELECT column_name, AGG_FUNC(column_name) FROM table_name GROUP BY column_name HAVING condition;
SELECT
  category,
  SUM(quantity)
FROM
  products
GROUP BY
  category
HAVING
  SUM(quantity) > 1000;

-- The GROUP BY clause
-- The GROUP BY clause is used to group the results of a SQL query by one or more columns.
-- SELECT column_name, AGG_FUNC(column_name) FROM table_name GROUP BY column_name;
SELECT
  category,
  SUM(quantity)
FROM
  products
GROUP BY
  category;