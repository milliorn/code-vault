-- Chapter 8: SQL Subqueries
-- How to retreive data from multiple tables
SELECT
  id,
  song_name,
  artist_id
FROM
  songs
WHERE
  artist_id IN (
    SELECT
      id
    FROM
      artists
    WHERE
      name = 'The Beatles'
  );

-- Subquery syntax
SELECT
  id,
  song_name,
  artist_id
FROM
  songs
WHERE
  artist_id IN (
    SELECT
      id
    FROM
      artists
    WHERE
      artist_name LIKE 'Rick%'
  );