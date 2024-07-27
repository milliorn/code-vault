-- Chapter 3: Constraints
-- Constraints are the rules enforced on data columns on a table. These are used to limit the type of data that can go into a table. This ensures the accuracy and reliability of the data in the database.
-- Constraints can either be column level or table level. Column level constraints are applied only to one column whereas table level constraints are applied to the whole table.
-- The following constraints are commonly used in SQL:
-- NOT NULL Constraint
-- UNIQUE Constraint
-- PRIMARY Key
-- FOREIGN Key
-- CHECK Constraint
-- DEFAULT Constraint
-- NOT NULL constraint
-- The NOT NULL constraint enforces a column to NOT accept NULL values.
-- This enforces a field to always contain a value, which means that you cannot insert a new record, or update a record without adding a value to this field.
CREATE TABLE
  users (
    id INTEGER PRIMARY KEY,
    name TEXT UNIQUE,
    email TEXT NOT NULL
  );

-- Primary Key Constraints
-- The PRIMARY KEY constraint uniquely identifies each record in a table.
-- Primary keys must contain UNIQUE values, and cannot contain NULL values.
-- A table can have only ONE primary key; and in the table, this primary key can consist of single or multiple columns (fields).
-- Your primary key will almost always be the "id" column
-- Foreign Key Constraints
-- A FOREIGN KEY is a key used to link two tables together.
-- A FOREIGN KEY is a field (or collection of fields) in one table that refers to the PRIMARY KEY in another table.
-- The table containing the foreign key is called the child table, and the table containing the candidate key is called the referenced or parent table.
-- The FOREIGN KEY constraint is used to prevent actions that would destroy links between tables.
-- The FOREIGN KEY constraint also prevents invalid data from being inserted into the foreign key column, because it has to be one of the values contained in the table it points to.
-- The FOREIGN KEY constraint uniquely identifies each record in a table.
-- Creating a Foreign Key in SQLite
-- In SQLite, a foreign key constraint is not enforced until you define a foreign key relationship.
-- You can define a foreign key when you create a new table, or you can use ALTER TABLE command to create a foreign key after the original table is created.
CREAT TABLE departments (
  id INTEGER PRIMARY KEY,
  department_name TEXT NOT NULL
);

CREATE TABLE
  employees (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    department_id INTEGER,
    Constraint fk_departments FOREIGN KEY (department_id) REFERENCES departments (id)
  );

-- Schema
-- A database schema is the skeleton structure that represents the logical view of the entire database. It defines how the data is organized and how the relations among them are associated. It formulates all the constraints that are to be applied on the data.
-- A database schema defines its entities and the relationship among them. It contains a descriptive detail of the database, which can be depicted by means of schema diagrams. It's stored in the data dictionary in SQL Server.
-- A database schema can be divided broadly into two categories −
-- Physical Database Schema − This schema pertains to the actual storage of data and its form of storage like files, indices, etc.
-- Logical Database Schema − This schema defines all the logical constraints that need to be applied on the data stored. It defines tables, views, and integrity constraints.
-- There is no perfect way to architect a database schema
-- The best way to architect a database schema is to think about the queries that will be run against your database