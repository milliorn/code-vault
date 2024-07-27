/*
 countries
 Column      Type	Notes
 id	        INTEGER	Primary Key
 name	    TEXT
 continent	TEXT

 population_years
 Column	    Type	Notes
 id	INTEGER	Primary Key
 population  NUMBER	(in millions)
 year	    NUMBER
 country_id	INTEGER	Foreign Key
 */

-- How many entries in the database are from Africa?
SELECT COUNT(*)
FROM countries
WHERE continent = 'Africa';

-- What was the total population of Oceania in 2005?
SELECT SUM(year = '2005')
FROM countries
    INNER JOIN population_years ON countries.id = population_years.country_id
WHERE continent = 'Oceania';

-- What is the average population of countries in South America in 2003?
SELECT AVG(year = '2003')
FROM countries
    JOIN population_years ON countries.id = population_years.country_id
WHERE continent = 'Oceania';

-- What country had the smallest population in 2007?
SELECT *
FROM population_years
ORDER BY population LIMIT 1;

-- What is the average population of Poland during the time period covered by this dataset?


-- How many countries have the word "The" in their name?
SELECT COUNT
(*) FROM countries WHERE name LIKE '%The%';

-- What was the total population of each continent in 2010?