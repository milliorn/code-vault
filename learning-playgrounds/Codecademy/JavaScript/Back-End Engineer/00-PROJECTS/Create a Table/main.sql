CREATE TABLE friends (id INTEGER, names TEXT, birthday DATE);
INSERT INTO friends (id, name, birthday)
VALUES (1, 'Ororo Munroe', '1940-5-30');
SELECT *
FROM friends;
INSERT INTO friends (id, name, birthday)
VALUES (2, 'Cody', ' 1941 -5 -30 '),
    (3, ' Melissa ', '1942-5-30');
UPDATE friends
SET name = 'Storm'
WHERE id = 1;
ALTER TABLE friends
ADD COLUMN email TEXT;
UPDATE friends
SET email = 'storm@codecademy.com'
WHERE id = 1;
UPDATE friends
SET email = 'codyMelissa@codecademy.com'
WHERE id = 2;
DELETE from friends WHERE id=1;
SELECT * from friends;
