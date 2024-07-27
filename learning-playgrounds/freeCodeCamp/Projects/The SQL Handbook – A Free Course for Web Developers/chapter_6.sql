-- Chapter 6: How to Structure Return Data in SQL
-- The LIMIT keyword
-- The LIMIT keyword is used to limit the number of results returned in a SQL query.
-- SELECT column_name(s) FROM table_name LIMIT number;
-- SELECT
--   product_name,
--   quantity
-- FROM
--   products
-- LIMIT 5;
--
SELECT
  *
FROM
  products
WHERE
  product_name LIKE '%berry%'
LIMIT
  50;

-- The SQL ORDER BY keyword
-- The ORDER BY keyword is used to sort the results of a SQL query in ascending or descending order.
-- SELECT column_name(s) FROM table_name ORDER BY column_name(s) ASC|DESC;
-- SELECT
--   product_name,
--   quantity
-- FROM
--   products
-- ORDER BY
--   quantity DESC;
--
SELECT
  name,
  price,
  quantity
FROM
  products
ORDER BY
  price;

SELECT
  name,
  price,
  quantity
FROM
  products
ORDER BY
  price DESC;

-- The SQL GROUP BY keyword
-- The GROUP BY keyword is used to group the results of a SQL query by one or more columns.
-- SELECT column_name(s) FROM table_name GROUP BY column_name(s);
-- SELECT
--   product_name,
--   SUM(quantity)
-- FROM
--   products
-- GROUP BY
--   product_name;
--  
SELECT
  product_name,
  SUM(quantity)
FROM
  products
GROUP BY
  product_name
ORDER BY
  SUM(quantity) DESC;

-- Order By and Limit
--
SELECT
  product_name,
  SUM(quantity)
FROM
  products
GROUP BY
  product_name
ORDER BY
  SUM(quantity) DESC
LIMIT
  5;