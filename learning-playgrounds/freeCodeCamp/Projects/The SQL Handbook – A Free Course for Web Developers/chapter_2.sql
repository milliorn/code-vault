-- Chapter 2: SQL Tables
-- A database most often contains one or more tables. Each table is identified by a name (e.g. "Customers" or "Orders"). Tables contain records (rows) with data.
-- How to use the CREATE TABLE statement
-- The CREATE TABLE statement is used to create a new table in a database.
--
-- Syntax
-- CREATE TABLE table_name (
--   column1 datatype,
--   column2 datatype,
--   column3 datatype,
--   ....
-- );
--
-- Example
-- CREATE TABLE users (
--   id int,
--   name varchar(255),
--   email varchar(255)
-- );
CREATE TABLE
  employees (
    id INTEGER,
    name TEXT,
    age INTEGER,
    is_manager BOOLEAN,
    salary INTEGER
  );

-- How to Alter Tables
-- The ALTER TABLE statement is used to add, delete, or modify columns in an existing table.
--
-- Syntax
-- ALTER TABLE table_name
-- ADD column_name datatype;
--
ALTER TABLE employees
RENAME TO contractors;

ALTER TABLE contractors
RENAME COLUMN salary TO invoice;

ALTER TABLE contractors
ADD COLUMN job_title TEXT;

ALTER TABLE contractors
DROP COLUMN is_manager;

-- Intro to Migrations
--
-- Example of a bad migration
-- If a backend server periodically runs a query like SELECT * FROM people, and we execute a database migration that alters the table name from people to users without updating the code, the application will break. It will try to grab data from a table that no longer exists.
-- A simple solution to this problem would be to deploy new code that uses a new query:
SELECT
  *
FROM
  users;

-- SQLite Data Types
-- SQLite uses a more general dynamic type system. In SQLite, the datatype of a value is associated with the value itself, not with its container.
-- SQLite supports the following types of values:
-- NULL
-- INTEGER
-- REAL
-- TEXT
-- BLOB
CREATE TABLE
  employees (
    id INTEGER,
    name TEXT,
    age INTEGER,
    is_manager BOOLEAN,
    salary INTEGER
  );

-- Boolean values
-- SQLite does not have a separate Boolean storage class. Instead, Boolean values are stored as integers 0 (false) and 1 (true).