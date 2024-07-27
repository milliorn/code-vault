import pandas as pd
# Data for all of the locations of Petal Power is in the file inventory.csv.
# Load the data into a DataFrame called inventory.
file_path = "01 - Petal Power Inventory\inventory.csv"
inventory = pd.read_csv(file_path)

# Inspect the first 10 rows of inventory.
# print(inventory.head(10))

# The first 10 rows represent data from your Staten Island location.
# Select these rows and save them to staten_island.
staten_island = seed_request = inventory.loc[inventory['location']
                                             == 'Staten Island']

# A customer just emailed you asking what products are sold at your Staten Island location.
# Select the column product_description from staten_island and save it to the variable product_request.
product_request = staten_island["product_description"]

# Another customer emails to ask what types of seeds are sold at the Brooklyn location.
# Select all rows where location is equal to Brooklyn and product_type is equal to seeds and
# save them to the variable seed_request.
seed_request = inventory[(inventory.location == "Brooklyn") & (
    inventory.product_type == "seeds")]

# Add a column to inventory called in_stock which is True if quantity is greater than 0 and False if quantity equals 0.
inventory['in_stock'] = inventory.apply(
    lambda row: True if row.quantity > 0 else False, axis=1)

# Create a column called total_value that is equal to price multiplied by quantity.
inventory['total_value'] = inventory.apply(
    lambda row: row.price * row.quantity, axis=1)

# The Marketing department wants a complete description of each product for their catalog.
# The following lambda function combines product_type and product_description into a single string:
# Paste this function into script.py.


def combine_lambda(row): return \
    '{} - {}'.format(row.product_type,
                     row.product_description)


# Using combine_lambda, create a new column in inventory called full_description that has the complete description of each product.
inventory['full_description'] = inventory.apply(
    combine_lambda, axis=1)

print(inventory)
