/*
Before we start
having fun with the database,
	familiarize yourself with what we are staring with,
	look at the first 10 rows in each table;
customers,
orders,
and books to get a feel for what is in each.
*/
SELECT *
FROM customers
LIMIT
10;
SELECT *
FROM orders
LIMIT
10;
SELECT *
FROM books
LIMIT
10;
/*
Before you make any changes to a database
and it ’ s tables,
you should know what you are working with.Examine the indexes that already exist on the three tables customers,
books
and orders.There are indexes of note — books_author_idx
and books_title_idx.We will get to their use soon,
but for fun can you guess what we will be using them for ? It also appears that an index is missing,
can you figure out what it is ?
*/
SELECT *
FROM pg_Indexes
WHERE tablename = 'customers';
SELECT *
FROM pg_Indexes
WHERE tablename = 'orders';
SELECT *
FROM pg_Indexes
WHERE tablename = 'books';
/*
Perform an EXPLAIN ANALYZE
when doing the
SELECT function to get the information
WHERE quantity > 18.Take note of how long this
select statement took without an index.
*/
EXPLAIN ANALYZE
SELECT customer_id,
	quantity
FROM orders
WHERE quantity > 18;
/*
Because we know they are only ever interested in orders
where specifically more than 18 books were ordered we can build an index to improve the search time for this specific query.
*/
CREATE INDEX customer_id_quantity_idx ON orders (customer_id, quantity);
/*
Don ’ t forget to always verify that your index is doing what you are trying to accomplish.Write your EXPLAIN ANALYZE query again,
this time
after your new index to compare the before
	and
after of the impact of this query.Can you explain the change ? As more orders are placed,
	would this difference become greater
	or less noticeable ?
*/
EXPLAIN ANALYZE
SELECT customer_id,
	quantity, 
FROM orders
WHERE quantity > 18;
/*
At the start of the project,
you were asked if you could find what index was missing.You may have noticed that the customers table is missing a primary key,
and therefore its accompanying index.Let ’ s create that primary key now.
*/
ALTER TABLE customers
ADD PRIMARY KEY(customer_id);
/*
You might have noticed that
when you got the top 10 records
from the customers table that they weren ’ t in numerical
order by customer_id.This was intentionally done to simulate a system that has experienced updates,
	deletes,
	inserts
from a live system.Use your new primary key to fix this so the system is ordered in the database physically by customer_id.To verify this worked,
	you can query the first 10 rows of the customers table again to see the table organized by the primary key.
*/
EXPLAIN ANALYZE
SELECT *
FROM customers
WHERE customer_id < 100;

CLUSTER customers USING customers_pkey;
/*
Regular searches are done on the combination of customer_id
and book_id on the orders table.
You have determined (through testing) that this would be a good candidate to build a multicolumn index on.Let ’ s build this index !
*/
CREATE INDEX customer_id_book_id_idx ON orders(customer_id, book_id);
/*
Recall the two indexes we investigated at the start of this project.They were built to try
and improve the book overview page that allows users to search for a book by author
or title.However,
these searches are taking longer than you think they should.You already have indexes on the two main search criteria,
author
and title.What
else could you do to improve the runtime (hint, you will be creating an index) ?
*/
DROP INDEX IF EXISTS customer_id_book_id_idx;
/*
You notice the order history page taking longer than you would like for customer experiences.
After some research,
	you notice the largest amount of time is spent calculating the total price the customer spent on each order.Let us
set up a test.Write an EXPLAIN ANALYZE
	when looking for all the information on all orders
where the total price (quantity * price_base) is over 100.
*/
CREATE INDEX customer_id_book_id_quantity_idx ON orders(customer_id, book_id, quantity);
/*
Create an index to speed this query up (recall, total price is quantity * price_base).
*/
CREATE INDEX author_title_idx ON books(author, title);
/*
You know what to do — investigate if your index has helped.Run your EXPLAIN ANALYZE again
after your index is completed
	and compare the planning
	and execution times to see if this will help in this situation.
*/
CREATE INDEX quantity_price_base_idx ON orders
(
(quantity * price_base));

/*
From everything you have learned about indexes,
	what can you do to
add
	or remove more indexes to make the system more efficient ?
*/
EXPLAIN ANALYZE
SELECT *
FROM orders
WHERE (quantity * price_base) > 100;
