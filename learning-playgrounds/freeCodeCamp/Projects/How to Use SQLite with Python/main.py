from cs50 import SQL

# https://github.com/cs50/python-cs50/blob/464f237e32bc2f87affd34722a498054dc0d57f6/README.md?plain=1#L43
db = SQL("sqlite:///database.db")

# How to create a database table
db.execute("CREATE TABLE IF NOT EXISTS users (name TEXT, age NUMBER, fav_food STRING)")

# How to write to the database
db.execute("INSERT INTO users (name, age, fav_food) VALUES(?, ?, ?)", "eesa", 14, "pizza")
db.execute("INSERT INTO users (name, age, fav_food) VALUES(?, ?, ?)", "bob", 20, "burgers")

# How to read from the database
people = db.execute("SELECT * FROM users")
print(people) # [{'name': 'eesa', 'age': 14, 'fav_food': 'pizza'}]

# To only select specific values, you can use the DISTINCT statement. 
people = db.execute("SELECT DISTINCT fav_food FROM users")
print(people)

# You can also separate values using commas in a SELECT DISTINCT query
people = db.execute("SELECT DISTINCT age, fav_food FROM users")
print(people)

# What if we wanted to just read the data for Bob, and ignore everyone else? 
# You can do this by using the SQL WHERE Clause:
people = db.execute("SELECT * FROM users WHERE name='bob' AND age=20")
print(people)

# How to update a row in the database
db.execute("UPDATE users SET fav_food='shawarma' WHERE name='eesa'")

# How to delete a row in the database
db.execute("DELETE FROM users WHERE name='bob'") # goodbye bob
people = db.execute("SELECT * FROM users")
print(people) # [{'name': 'eesa', 'age': 14, 'fav_food': 'shawarma'}]

# To delete all the rows in the table, just remove the WHERE clause:
db.execute("DELETE FROM users") 
people = db.execute("SELECT * FROM users")
print(people) # []