# Let’s add in our first item, the Lovely Loveseat that is the store’s namesake.
# Create a variable called lovely_loveseat_description and assign to it the following string:
lovely_loveseat_description = "Lovely Loveseat. Tufted polyester blend on wood. 32 inches high x 40 inches wide x 30 inches deep. Red or white."

# Great, now let’s create a price for the loveseat. Create a variable lovely_loveseat_price and set it equal to 254.00.
lovely_loveseat_price = 254.00

# Let’s extend our inventory with another characteristic piece of furniture!
# Create a variable called stylish_settee_description and assign to it the following string:
stylish_settee_description = "Stylish Settee. Faux leather on birch. 29.50 inches high x 54.75 inches wide x 28 inches deep. Black."

# Now let’s set the price for our Stylish Settee. Create a variable stylish_settee_price and assign it the value of 180.50.
stylish_settee_price = 180.50

# Fantastic, we just need one more item before we’re ready for business.
# Create a new variable called luxurious_lamp_description and assign it the following:
luxurious_lamp_description = "Luxurious Lamp. Glass and iron. 36 inches tall. Brown with cream shade."

# Let’s set the price for this item. Create a variable called luxurious_lamp_price and set it equal to 52.15.
luxurious_lamp_price = 52.15

# Define the variable sales_tax and set it equal to .088. That’s 8.8%.
sales_tax = 0.088

# Our first customer is making their purchase!
# Let’s keep a running tally of their expenses by defining a variable called customer_one_total.
# Since they haven’t purchased anything yet, let’s set that variable equal to 0 for now.
customer_one_total = 0

# We should also keep a list of the descriptions of things they’re purchasing.
# Create a variable called customer_one_itemization and set that equal to the empty string "".
# We’ll tack on the descriptions to this as they make their purchases.
customer_one_itemization = ""

# Our customer has decided they are going to purchase our Lovely Loveseat! Add the price to customer_one_total.
customer_one_total += lovely_loveseat_price

# Let’s start keeping track of the items our customer purchased.
# Add the description of the Lovely Loveseat to customer_one_itemization.
customer_one_itemization += lovely_loveseat_description

# Our customer has also decided to purchase the Luxurious Lamp! Let’s add the price to the customer’s total.
customer_one_total += luxurious_lamp_price

# Let’s keep the itemization up-to-date and add the description of the Luxurious Lamp to our itemization.
customer_one_itemization += " " + luxurious_lamp_description

# They’re ready to check out! Let’s begin by calculating sales tax.
# Create a variable called customer_one_tax and set it equal to customer_one_total times sales_tax.
customer_one_tax = customer_one_total * sales_tax

# Add the sales tax to the customer’s total cost.
customer_one_total += customer_one_tax

# Let’s start printing up their receipt!
# Begin by printing out the heading for their itemization. Print the phrase "Customer One Items:".
# Print customer_one_itemization.
print("Customer One Items: %s" % customer_one_itemization)

# Now add a heading for their total cost: Print out "Customer One Total:"
# Now print out their total! Our first customer now has a receipt for the things they purchased.
print("Customer One Total: {0:.2f}".format(customer_one_total))
