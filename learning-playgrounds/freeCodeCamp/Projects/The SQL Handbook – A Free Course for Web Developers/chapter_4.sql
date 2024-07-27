-- Chapter 4: CRUD Operations in SQL
-- What is CRUD?
-- CRUD stands for Create, Read, Update, and Delete. These are the four basic functions of persistent storage. In SQL, CRUD operations are INSERT, SELECT, UPDATE, and DELETE statements.
-- HTTP and CRUD
-- CRUD operations are the basis of HTTP. HTTP is the protocol used to transfer data over the web. HTTP has four methods that map to CRUD operations: GET, POST, PUT, and DELETE.
-- GET is used to read data from a server.
-- POST is used to create new data on a server.
-- PUT is used to update existing data on a server.
-- DELETE is used to delete existing data on a server.
-- CRUD in SQL
-- SQL Insert Statement
-- The INSERT statement is used to create new data in a table. The INSERT statement has two parts: the table name and the data to be inserted.
-- INSERT INTO
--   table_name (column_1, column_2, column_3)
-- VALUES
--   (value_1, value_2, value_3);
INSERT INTO
  employees (id, name, title)
VALUES
  (1, 'Allan', 'Engineer');

-- Manual Entry
-- The INSERT statement can be used to manually enter data into a table. The data to be inserted is specified in the VALUES clause.
-- SQL Injection
-- SQL injection is a security vulnerability that allows an attacker to alter the logic of a SQL query. SQL injection is possible when user input is directly used in a SQL query without sanitization.
-- SQL Injection Example
-- The following code is vulnerable to SQL injection because the user input is directly used in the SQL query.
-- sqlQuery := fmt.Sprintf(`
-- INSERT INTO users(name, age, country_code)
-- VALUES ('%s', %v, %s);
-- `, user.Name, user.Age, user.CountryCode)
-- SQL Injection Prevention
-- The following code is not vulnerable to SQL injection because the user input is sanitized before being used in the SQL query.
-- sqlQuery := `
-- INSERT INTO users(name, age, country_code)
-- VALUES ($1, $2, $3);
-- `
-- _, err := db.Exec(sqlQuery, user.Name, user.Age, user.CountryCode)
-- Count
-- The COUNT function returns the number of rows in a table.
SELECT
  COUNT(*)
FROM
  employees;

-- WHERE clause
-- The WHERE clause is used to filter rows in a table. The WHERE clause is used in SELECT, UPDATE, and DELETE statements.
SELECT
  name
FROM
  users
WHERE
  age > 30;

-- Finding NULL values
-- The IS NULL operator is used to find NULL values in a table.
SELECT
  name
FROM
  users
WHERE
  country_code IS NULL;

-- Delete
-- The DELETE statement is used to delete rows from a table.
DELETE FROM users
WHERE
  age > 30;

-- The danger of deleting data
-- The DELETE statement deletes data from a table. The DELETE statement is dangerous because it is not possible to undo a DELETE statement.
-- SQL Update Statement
-- The UPDATE statement is used to update existing data in a table.
UPDATE employees
SET
  job_title = 'Backend Engineer',
  salary = 150000
WHERE
  id = 251;

-- Object-Relational Mapping (ORMs)
-- Object-relational mapping (ORM) is a programming technique that maps data from a relational database to an object-oriented programming language.
-- ORM Example
-- The following code is an example of an ORM. The ORM maps data from a relational database to an object-oriented programming language.
-- type User struct {
--     ID int
--     Name string
--     IsAdmin bool
-- }
-- Example: Using an ORM
-- user := User{
--     ID: 10,
--     Name: "Lane",
--     IsAdmin: false,
-- }
-- // generates a SQL statement and runs it,
-- // creating a new record in the users table
-- db.Create(user)
-- Example: Using straight SQL
-- user := User{
--     ID: 10,
--     Name: "Lane",
--     IsAdmin: false,
-- }
-- db.Exec("INSERT INTO users (id, name, is_admin) VALUES (?, ?, ?);",
--     user.ID, user.Name, user.IsAdmin)
-- Should you use an ORM?
-- ORMs are useful for quickly building applications. ORMs are not useful for building high-performance applications.