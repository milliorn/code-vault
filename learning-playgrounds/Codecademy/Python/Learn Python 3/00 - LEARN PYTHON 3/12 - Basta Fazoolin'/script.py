# Create a Menu class
# Give Menu a constructor with the five parameters self, name, items, start_time, and end_time.


class Menu:
    def __init__(self, name, items, start_time, end_time):
        self.name = name
        self.items = items
        self.start_time = start_time
        self.end_time = end_time

    # Give our Menu class a string representation method that will tell you the name of the menu.
    # Also, indicate in this representation when the menu is available.
    def __repr__(self):
        return "{} menu available from {} to {}".format(self.name, self.start_time, self.end_time)

    # Give Menu a method .calculate_bill() that has two parameters: self, and purchased_items, a list of the names of purchased items.
    # Have calculate_bill return the total price of a purchase consisiting of all the items in purchased_items.
    def calculate_bill(self, purchased_items):
        total_price = 0

        for item in purchased_items:
            if item in self.items:
                total_price += self.items[item]

        return total_price

# Let’s create a Franchise class.
# Give the Franchise class a constructor.
# Take in an address, and assign it to self.address.
# Also take in a list of menus and assign it to self.menus.


class Franchise():
    def __init__(self, address, menus):
        self.address = address
        self.menus = menus

    # Give our Franchises a string represenation so that we’ll be able to tell them apart.
    # If we print out a Franchise it should tell us the address of the restaurant.
    def __repr__(self):
        return "The address is {}".format(self.address)

    # Give Franchise an .available_menus() method
    # that takes in a time parameter and returns a list of the Menu objects
    # that are available at that time.
    def available_menus(self, time):
        available_menu = []

        for menu in self.menus:
            if menu.start_time <= time and menu.end_time >= time:
                available_menu.append(menu)

        return available_menu if len(available_menu) > 0 else "No menus are available right now at this time."

# Let’s define a Business class.
# Give Business a constructor.
# A Business needs a name and a list of franchises.


class Business():
    def __init__(self, name, franchises):
        self.name = name
        self.franchises = franchises


# Let’s create our first menu: brunch.
# Brunch is served from 11am to 4pm.
# The following items are sold during brunch:
items_brunch = {'pancakes': 7.50, 'waffles': 9.00, 'burger': 11.00, 'home fries': 4.50,
                'coffee': 1.50, 'espresso': 3.00, 'tea': 1.00, 'mimosa': 10.50, 'orange juice': 3.50}

brunch = Menu("Brunch", items_brunch, 1100, 1600)

# Let’s create our second menu item early_bird.
# Early-bird Dinners are served from 3pm to 6pm.
# The following items are available during the early-bird menu:
items_early_bird = {'salumeria plate': 8.00, 'salad and breadsticks (serves 2, no refills)': 14.00, 'pizza with quattro formaggi': 9.00,
                    'duck ragu': 17.50, 'mushroom ravioli (vegan)': 13.50, 'coffee': 1.50, 'espresso': 3.00, }

early_bird = Menu("Early Bird", items_early_bird, 1500, 1800)

# Let’s create our third menu, dinner.
# Dinner is served from 5pm to 11pm.
# The following items are available for dinner:
items_dinner = {'crostini with eggplant caponata': 13.00, 'ceaser salad': 16.00, 'pizza with quattro formaggi': 11.00,
                'duck ragu': 19.50, 'mushroom ravioli (vegan)': 13.50, 'coffee': 2.00, 'espresso': 3.00, }

dinner = Menu("Dinner", items_dinner, 1700, 2300)

# And let’s create our last menu, kids.
# The kids menu is available from 11am until 9pm.
# The following items are available on the kids menu.
items_kids = {'chicken nuggets': 6.50,
              'fusilli with wild mushrooms': 12.00, 'apple juice': 3.00}

kids = Menu("Kids", items_kids, 1100, 1900)

# Let’s create our first two franchises!
# Our flagship store is located at "1232 West End Road" and our new installment is located at "12 East Mulberry Street".
# Pass in all four menus along with these addresses to define flagship_store and new_installment.
store_flagship = Franchise("1232 West End Road", [
                           brunch, dinner, early_bird, kids])
store_new_installment = Franchise("12 East Mulberry Street",
                                  [brunch, dinner, early_bird, kids])

# Let’s create our first Business.
# The name is "Basta Fazoolin' with my Heart" and the two franchises are flagship_store and new_installment.
basta = Business("Basta Fazoolin' with my Heart",
                 [store_flagship, store_new_installment])

# Before we create our new business, we’ll need a Franchise and before our Franchise we’ll need a menu.
# The items for our Take a’ Arepa available from 10am until 8pm are the following:
# Save this to a variable called arepas_menu.
items_arepas = {'arepa pabellon': 7.00, 'pernil arepa': 8.50,
                'guayanes arepa': 8.00, 'jamon arepa': 7.50}

arepas_menu = Menu("Arepas", items_arepas, 1000, 2000)

# Next let’s create our first Take a’ Arepa franchise!
# Our new restaurant is located at "189 Fitzgerald Avenue".
# Save the Franchise object to a variable called arepas_place.
arepas_place = Franchise("189 Fitzgerald Avenue", arepas_menu)

# Now let’s make our new Business! The business is called "Take a' Arepa"!
arepa = Business("Take a Arepa", arepas_place)

# Test out Menu.calculate_bill().
# We have a breakfast order for one order of pancakes, one order of home fries, and one coffee.
# Pass that into brunch.calculate_bill() and print out the price.
print(brunch.calculate_bill(["pancakes", "home fries", "coffee"]))

# What about an early-bird purchase?
# Our last guests ordered the salumeria plate and the vegan mushroom ravioli.
# Calculate the bill with .caluclate_bill().
print(early_bird.calculate_bill(["salumeria plate", "vegan mushroom ravioli"]))

# Let’s test out our .available_menus() method!
# Call it with 12 noon as an argument and print out the results.
print(store_flagship.available_menus(1200))

# Let’s do another test!
# If we call .available_menus() with 5pm as an argument and print out the results.
print(store_new_installment.available_menus(1700))

print(arepa.franchises)
print(arepa.name)
