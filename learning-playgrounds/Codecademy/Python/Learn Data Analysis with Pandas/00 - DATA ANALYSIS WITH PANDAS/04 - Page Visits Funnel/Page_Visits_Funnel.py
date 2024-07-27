import pandas as pd

visits = pd.read_csv('visits.csv',
                     parse_dates=[1])
cart = pd.read_csv('cart.csv',
                   parse_dates=[1])
checkout = pd.read_csv('checkout.csv',
                       parse_dates=[1])
purchase = pd.read_csv('purchase.csv',
                       parse_dates=[1])

# Inspect the DataFrames using print and head:
# print(visits.head())
# print(cart.head())
# print(checkout.head())
# print(purchase.head())

# Combine visits and cart using a left merge.
visits_cart_left_merge = pd.merge(visits, cart, how='left')

# How long is your merged DataFrame?
visits_cart_count = len(visits_cart_left_merge)

# How many of the timestamps are null for the column cart_time?
timestamps_null_count = len(
    visits_cart_left_merge[visits_cart_left_merge.cart_time.isnull()])

# print(timestamps_null_count)

# What percent of users who visited Cool T-Shirts Inc. ended up not placing a t-shirt in their cart?
percent_users_no_order = timestamps_null_count / visits_cart_count
#print("%.2f" % percent_users_no_order)

# Repeat the left merge for cart and checkout and count null values.
# What percentage of users put items in their cart, but did not proceed to checkout?
cart_checkout_left_merge = pd.merge(cart, checkout, how='left')

# print(cart_checkout_left_merge)

cart_checkout_null_count = len(cart_checkout_left_merge)

cart_checkout_times = len(
    cart_checkout_left_merge[cart_checkout_left_merge.checkout_time.isnull()])

#print("%.2f" % (cart_checkout_times / cart_checkout_null_count))

# Merge all four steps of the funnel, in order, using a series of left merges.
# Save the results to the variable all_data.
all_data = visits.merge(cart, how='left').merge(
    checkout, how='left').merge(purchase, how='left')

# print(all_data.head())

# What percentage of users proceeded to checkout, but did not purchase a t-shirt?
percent_to_checkout = pd.merge(checkout, purchase, how='left')
cart_checkout_null_count = len(percent_to_checkout)

checkout_no_purcharse = len(
    percent_to_checkout[percent_to_checkout.purchase_time.isnull()])

# What percentage of users proceeded to checkout, but did not purchase a t-shirt?
#print("%.2f" % percent_users_no_order)
#print("%.2f" % (cart_checkout_times / cart_checkout_null_count))
#print("%.2f" % (checkout_no_purcharse / cart_checkout_null_count))

# Using the giant merged DataFrame all_data that you created, let’s calculate the average time from initial visit to final purchase.
# Start by adding the following column to your DataFrame:
all_data['time_to_purchase'] = all_data.purchase_time - all_data.visit_time

# Examine the results using:
# print(all_data.time_to_purchase)

# Calculate the average time to purchase using the following code:
print(all_data.time_to_purchase.mean())
