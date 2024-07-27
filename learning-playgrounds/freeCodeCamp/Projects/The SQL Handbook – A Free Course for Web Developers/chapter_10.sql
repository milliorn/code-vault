-- Chapter 10: How to Join Tables in SQL
-- INNER JOIN
-- SELECT
--   songs.song_name,
--   artists.artist_name
-- FROM
--   songs
-- INNER JOIN artists ON songs.artist_id = artists.id;
--
-- The ON clause
SELECT
  *
FROM
  employees
  INNER JOIN departments ON employees.department_id = departments.id;

-- Namespacing on Tables
SELECT
  students.name,
  courses.name
FROM
  students
  INNER JOIN courses ON students.course_id = courses.id;

-- LEFT JOIN
SELECT
  e.name,
  d.name
FROM
  employees e
  LEFT JOIN departments d ON e.department_id = d.id;

-- RIGHT JOIN
SELECT
  e.name,
  d.name
FROM
  employees e
  RIGHT JOIN departments d ON e.department_id = d.id;

-- FULL JOIN
SELECT
  e.name,
  d.name
FROM
  employees e
  FULL JOIN departments d ON e.department_id = d.id;