ground_flat_charge = 20.00

# Create a variable for the cost of premium ground shipping.
premium_ground_flat_charge = 125.00

# Write a function for the cost of ground shipping.
# This function should take one parameter, weight, and return the cost of shipping a package of that weight.


def ground_shipping(weight):
    price = 0

    if weight <= 2:
        price += 1.50
    elif weight >= 2 and weight <= 6:
        price += 3.00
    elif weight >= 6 and weight <= 10:
        price += 4.00
    else:
        price += 4.75

    return price * weight + ground_flat_charge


# A package that weighs 8.4 pounds should cost $53.60 to ship with normal ground shipping:
print(ground_shipping(8.4))

# Write a function for the cost of drone shipping.
# This function should take one parameter, weight, and return the cost of shipping a package of that weight.


def drone_shipping(weight):
    price = 0

    if weight <= 2:
        price += 4.50
    elif weight >= 2 and weight <= 6:
        price += 9.00
    elif weight >= 6 and weight <= 10:
        price += 12.00
    else:
        price += 14.25

    return price * weight


# A package that weighs 1.5 pounds should cost $6.75 to ship by drone:
print(drone_shipping(1.5))


def statement(weight):
    ground = ground_shipping(weight)
    drone = drone_shipping(weight)

    if ground > premium_ground_flat_charge and drone > premium_ground_flat_charge:
        print("Premium ground shipping is the cheapest: ${:,.2f}".format(premium_ground_flat_charge))
    elif ground < drone:
        print("Ground shipping is the cheapest: ${:,.2f}".format(ground))
    elif ground > drone:
        print("Drone shipping is the cheapest: ${:,.2f}".format(drone))
    else:
        print("Shipping cost the same: ${:,.2f}".format(ground))


statement(1.8)
