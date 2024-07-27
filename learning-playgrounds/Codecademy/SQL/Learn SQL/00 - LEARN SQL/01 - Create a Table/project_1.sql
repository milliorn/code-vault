/*Create a table named friends with three columns: 

id that stores INTEGER
name that stores TEXT
birthday that stores DATE*/
CREATE TABLE friends ( id INTEGER, name TEXT, birthday DATE);

/*Beneath your current code, add Jane Doe to friends.Her birthday is May 30th, 1990.*/
INSERT INTO friends ( id, name, birthday) VALUES ( 1, 'Jane Doe', '1990-05-30');

/*Let’s make sure that Jane has been added to the database: SELECT * FROM friends;*/

/*Add two of your friends to the table.  Insert an id, name, and birthday for each of them.*/
INSERT INTO friends ( id, name, birthday) VALUES ( 2, 'Philip', '1980-05-30');

INSERT INTO friends ( id, name, birthday) VALUES ( 3, 'Scott', '1970-05-30');

/*Jane Doe just got married! Her new last name is “Smith”.Update her record in friends.*/
UPDATE friends SET name = 'Jane Smith' WHERE id = 1;

/*Add a new column named email.*/
ALTER TABLE friends ADD email TEXT;

/*Update the email address for everyone in your table.*/
UPDATE friends SET email = 'jane@codecademy.com' WHERE id = 1;
UPDATE friends SET email = 'philip@a.com' WHERE id = 2;
UPDATE friends SET email = 'scott@a.com' WHERE id = 3;

/*Wait, Jane Smith is not a real person.  Remove her from friends.*/
DELETE FROM friends WHERE id = 1;

/*Great job! Let’s take a look at the result one last time:*/
SELECT * FROM friends;