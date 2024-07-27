CREATE TABLE restaurant (
    id INTEGER PRIMARY KEY UNIQUE,
    name VARCHAR(20),
    description VARCHAR(100),
    rating DECIMAL,
    telephone CHAR(10),
    hours VARCHAR(100)
);
CREATE TABLE address (
    id INTEGER PRIMARY KEY,
    street_number VARCHAR(10),
    street_name VARCHAR(20),
    city VARCHAR(20),
    state VARCHAR(15),
    google_map_link VARCHAR(50),
    restaurant_id INTEGER REFERENCES restaurant(id) UNIQUE
);
CREATE TABLE category (
    id VARCHAR(2) PRIMARY KEY,
    name VARCHAR(20),
    description VARCHAR(200)
);
CREATE TABLE dish (
    id INTEGER PRIMARY KEY,
    name VARCHAR(50),
    description VARCHAR(200),
    hot_and_spicy BOOLEAN NOT NULL
);
CREATE TABLE review (
    id INTEGER PRIMARY KEY,
    rating DECIMAL,
    description VARCHAR(100),
    date DATE,
    restaurant_id INTEGER REFERENCES restaurant(id)
);
CREATE TABLE categories_dishes (
    category_id VARCHAR(2) REFERENCES category(id),
    dish_id INTEGER REFERENCES dish(id),
    price DECIMAL,
    PRIMARY KEY (category_id, dish_id)
);
/* 
 *--------------------------------------------
 Insert values for restaurant
 *--------------------------------------------
 */
INSERT INTO restaurant
VALUES (
        1,
        'Bytes of China',
        'Delectable Chinese Cuisine',
        3.9,
        '6175551212',
        'Mon - Fri 9:00 am to 9:00 pm, Weekends 10:00 am to 11:00 pm'
    );
/* 
 *--------------------------------------------
 Insert values for address
 *--------------------------------------------
 */
INSERT INTO address
VALUES (
        1,
        '2020',
        'Busy Street',
        'Chinatown',
        'MA',
        'http://bit.ly/BytesOfChina',
        1
    );
/* 
 *--------------------------------------------
 Insert values for review
 *--------------------------------------------
 */
INSERT INTO review
VALUES (
        1,
        5.0,
        'Would love to host another birthday party at Bytes of China!',
        '05-22-2020',
        1
    );
INSERT INTO review
VALUES (
        2,
        4.5,
        'Other than a small mix-up, I would give it a 5.0!',
        '04-01-2020',
        1
    );
INSERT INTO review
VALUES (
        3,
        3.9,
        'A reasonable place to eat for lunch, if you are in a rush!',
        '03-15-2020',
        1
    );
/* 
 *--------------------------------------------
 Insert values for category
 *--------------------------------------------
 */
INSERT INTO category
VALUES ('C', 'Chicken', null);
INSERT INTO category
VALUES (
        'LS',
        'Luncheon Specials',
        'Served with Hot and Sour Soup or Egg Drop Soup and Fried or Steamed Rice  between 11:00 am and 3:00 pm from Monday to Friday.'
    );
INSERT INTO category
VALUES ('HS', 'House Specials', null);
/* 
 *--------------------------------------------
 Insert values for dish
 *--------------------------------------------
 */
INSERT INTO dish
VALUES (
        1,
        'Chicken with Broccoli',
        'Diced chicken stir-fried with succulent broccoli florets',
        false
    );
INSERT INTO dish
VALUES (
        2,
        'Sweet and Sour Chicken',
        'Marinated chicken with tangy sweet and sour sauce together with pineapples and green peppers',
        false
    );
INSERT INTO dish
VALUES (
        3,
        'Chicken Wings',
        'Finger-licking mouth-watering entree to spice up any lunch or dinner',
        true
    );
INSERT INTO dish
VALUES (
        4,
        'Beef with Garlic Sauce',
        'Sliced beef steak marinated in garlic sauce for that tangy flavor',
        true
    );
INSERT INTO dish
VALUES (
        5,
        'Fresh Mushroom with Snow Peapods and Baby Corns',
        'Colorful entree perfect for vegetarians and mushroom lovers',
        false
    );
INSERT INTO dish
VALUES (
        6,
        'Sesame Chicken',
        'Crispy chunks of chicken flavored with savory sesame sauce',
        false
    );
INSERT INTO dish
VALUES (
        7,
        'Special Minced Chicken',
        'Marinated chicken breast sauteed with colorful vegetables topped with pine nuts and shredded lettuce.',
        false
    );
INSERT INTO dish
VALUES (
        8,
        'Hunan Special Half & Half',
        'Shredded beef in Peking sauce and shredded chicken in garlic sauce',
        true
    );
/*
 *--------------------------------------------
 Insert valus for cross-reference table, categories_dishes
 *--------------------------------------------
 */
INSERT INTO categories_dishes
VALUES ('C', 1, 6.95);
INSERT INTO categories_dishes
VALUES ('C', 3, 6.95);
INSERT INTO categories_dishes
VALUES ('LS', 1, 8.95);
INSERT INTO categories_dishes
VALUES ('LS', 4, 8.95);
INSERT INTO categories_dishes
VALUES ('LS', 5, 8.95);
INSERT INTO categories_dishes
VALUES ('HS', 6, 15.95);
INSERT INTO categories_dishes
VALUES ('HS', 7, 16.95);
INSERT INTO categories_dishes
VALUES ('HS', 8, 17.95);
/*
 Type in a query that displays the restaurant name,
 its address (
 street number
 and name
 )
 and telephone number.Then,
 click SAVE to run the query.
 */
SELECT name,
    telephone,
    street_name,
    street_number
from restaurant,
    address;
/*
 Write a query to get the best rating the restaurant ever received.
 Display the rating as best_rating.Then,
 */
SELECT MAX(rating) as best_rating
FROM review;
/*
 Write a query to display a dish name, its price
 and category sorted by the dish name.
 Your results should have the following header:
 */
SELECT dish.name AS dish_name,
    categories_dishes.price,
    category.name AS category
FROM dish,
    categories_dishes,
    category
WHERE categories_dishes.dish_id = dish.id
    AND categories_dishes.category_id = category.id
ORDER BY dish.name;
/*
 Instead of sorting the results by dish name,
 type in a new query to display the results as follows,
 sorted by category name.
 */
SELECT category.name AS category,
    dish.name AS dish_name,
    categories_dishes.price
FROM category,
    dish,
    categories_dishes
WHERE categories_dishes.dish_id = dish.id
    AND categories_dishes.category_id = category.id
ORDER BY category.name;
/*
 Next,
 type a query in script.sql that displays all the spicy dishes,
 their prices
 and category.The header should look like this:
 */
SELECT dish.name AS spicy_dish_name,
    category.name AS category,
    categories_dishes.price
FROM dish,
    category,
    categories_dishes
WHERE categories_dishes.dish_id = dish.id
    AND categories_dishes.category_id = category.id
    AND hot_and_spicy = true;
/*
 Write a query that displays the dish_id
 and COUNT(dish_id) as dish_count
 from the categories_dishes table.
 When we are displaying dish_id along with an aggregate function such as COUNT(),
 we have to also
 add a
 GROUP BY clause which includes dish_id.
 */
SELECT dish_id,
    COUNT(dish_id) AS dish_count
FROM categories_dishes
GROUP BY 1
ORDER BY 1;
/*
 Write a query that displays the dish_id
 and COUNT(dish_id) as dish_count
 from the categories_dishes table.
 When we are displaying dish_id along with an aggregate function such as COUNT(),
 we have to also
 add a
 GROUP BY clause which includes dish_id.
 */
SELECT dish_id,
    COUNT(dish_id) AS dish_count
FROM categories_dishes
GROUP BY 1
HAVING COUNT(dish_id) > 1
ORDER BY 1;
/*
 Great work ! Try to adjust the previous query to display only the dish(es)
 from the categories_dishes table which appears more than once.We can use the aggregate function,
 COUNT() as a condition.But instead of using the
 WHERE clause,
 we use the
 HAVING clause together with COUNT().
 */
SELECT dish_id,
    COUNT(dish_id) AS dish_count
FROM categories_dishes
GROUP BY 1
HAVING COUNT(dish_id) > 1
ORDER BY 1;
/*
 Excellent ! The previous two queries only give us a dish_id which is not very informative.We should write a better query which tells us exactly the name(s) of the dish that appears more than once in the categories_dishes table.Write a query that incorporates multiple tables that display the dish name as dish_name
 and dish count as dish_count.
 */
SELECT dish.name AS dish_name,
    dish_id,
    COUNT(dish_id) AS dish_count
FROM dish,
    categories_dishes
WHERE dish.id = categories_dishes.dish_id
GROUP BY 1,
    2
ORDER BY 3;
/*
 Our last task is an improvement on Task 11 which was to display the highest rating
 from the review table using an aggregate function,
 MAX(column_name).Since the result returned only one column,
 it is not very informative.
 */
SELECT dish.name AS dish_name,
    dish_id,
    COUNT(dish_id) AS dish_count
FROM dish,
    categories_dishes
WHERE dish.id = categories_dishes.dish_id
GROUP BY 1,
    2
HAVING COUNT(dish_id) > 1
ORDER BY 3;
-- [18]
SELECT rating,
    description
FROM review
WHERE rating = (
        SELECT MAX(rating)
        FROM review
    );