-- Chapter 1: Introduction
-- What is a Database?
-- A database is a collection of information that is organized so that it can be easily accessed, managed and updated.
-- What is a SQL Select Statement?
-- A SQL Select Statement is used to retrieve data from a database.
-- The result is stored in a result table, called the result-set.
Select
  id
from
  users;

-- How to select a single field
Select
  id
from
  users;

-- How to select multiple fields
Select
  id,
  name
from
  users;

-- How to select all fields
Select
  *
from
  users;