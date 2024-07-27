# Define a class called Art.
# Give Art a constructor that takes self and four additional parameters: artist, title, medium, and year.
# Now that we have Clients our works of Art can have owners! Let’s update our Art class constructor to take an additional parameter, owner, and assign that to self.owner.


class Art:
    def __init__(self, artist, title, medium, year, owner):
        self.artist = artist
        self.title = title
        self.medium = medium
        self.year = year
        self.owner = owner

    # Give your Art class a string representation method.
    # This method should return a representation of the artwork in as close to standard citation format as we can manage (without italics). It should state:
    # Let’s update Art‘s string representation method to add the self.owner.name at the very end,
    # followed by a comma, followed by self.owner.location, followed by a period.
    def __repr__(self):
        return "{sname}. {stitle}, {syear}, {smedium}, {sowner}, {slocation}.".format(sname=self.artist, stitle=self.title, syear=self.year, smedium=self.medium, sowner=self.owner.name, slocation=self.owner.location)

# Create a new class called Marketplace.
# Give your Marketplace class a constructor.
# In Marketplace‘s constructor, define self.listings as a new list.


class Marketplace:
    def __init__(self):
        self.listings = []

    # Create an .add_listing() method for your Marketplace class.
    # This should take two arguments: self and new_listing.
    # Have .add_listing() add the new listing to Marketplace‘s listings attribute.
    def add_listing(self, new_listing):
        self.listings.append(new_listing)

    # Since we’ll need a way to remove listings when they expire or are acted upon,
    # let’s implement a .remove_listing() method for our Marketplace
    def remove_listing(self, listing):
        self.listings.remove(listing)

    # Add a .show_listings() method to your Marketplace class that iterates through each listing in self.listings and prints them all out.
    def show_listings(self):
        if not self.listings:
            print("List is empty")

        for x in self.listings:
            print(x)

# Now for the most important aspect of a marketplace, clients! Create a new class called Client.
# Give our Client class a constructor. A client should have the following data:
# self.name the name of the person or institution.
# self.location is the name of the location of the museum or “Private Collection” if the client is a collector.
# self.is_museum, a boolean value representing whether the client is a museum (if True) or a collector (if False).
# name, location, and is_museum should all be passed as arguments to the constructor.


class Client:
    def __init__(self, name, location, is_museum):
        self.name = name
        self.is_museum = is_museum

        if is_museum:
            self.location = location
        else:
            self.location = "Private Collection"

    # Update our Client class to have a new method, .sell_artwork().
    # This method should take three parameters: self, artwork, and price.
    # .sell_artwork() should do the following:
    # Check that artwork.owner is the same (==) as self (i.e., make sure the client owns the art they’re trying to sell).
    # Create a new Listing with the given art, price, and client.
    # Add the listing to the marketplace using veneer.add_listing().
    def sell_artwork(self, artwork, price):
        if artwork.owner == self:
            veneer.add_listing(Listing(artwork, price, self))

    # Create a .buy_artwork() method for the Client class. .buy_artwork() should take two arguments: self and artwork.
    # Start by having .buy_artwork() check that the artwork is not owned by the client.
    # The next thing .buy_artwork() should do is make sure that the artwork is listed in veneer.listings.
    # Save the appropriate listing as art_listing, we’ll need to remove it later.
    # If the art is not currently owned and is listed then go through with the transaction!
    # .buy_artwork() should do the following:
    # Change the artwork.owner to the client doing the purchasing.
    # Remove the listing from the marketplace using veneer.remove_listing()
    def buy_artwork(self, artwork):
        if artwork.owner == self:
            print("Client owns this artwork.")
            return

        art_listing = None

        for listing in veneer.listings:
            if listing.art == artwork:
                art_listing = listing
                break

        if art_listing == None:
            return
        else:
            art_listing.art.owner = self
            veneer.remove_listing(art_listing)

# Create a new class called Listing. We’ll use these as listings for our Marketplace.
# Our Listing class needs a constructor! It should define the following instance variables:
# self.art, the work of art being listed
# self.price, the price of the work
# self.seller an instance of Client.
# Each instance variable should be set equal to an argument passed to the constructor.


class Listing:
    def __init__(self, art, price, seller):
        self.art = art
        self.price = price
        self.seller = seller

    # Give the Listing a string representation which should print out the following:
    # The name of the work of art
    # The price of the work of art
    def __repr__(self):
        return "Name - {}, Price - ${}.".format(self.art.title, self.price)


# Now instantiate our first Client: her name is Edytta Halpirt and she is a collector and not a museum.
# Save our new Client to a variable called edytta.
edytta = Client("Edytta Halpirt", None, False)

# Let’s see how our Art class looks, create a new work of art.
# Our first client wants to list a particular Picasso painting to make more space for her new fascination with Italian Futurism,
# so let’s see if we can use our data model for this piece:
# The artist is “Picasso, Pablo”.
# The work’s title is “Girl with a Mandolin (Fanny Tellier)”.
# The artwork was created in 1910.
# The medium is “oil on canvas”.
# Save this work of art into the variable girl_with_mandolin.
# Move our instantiation of girl_with_mandolin to after our instantiation of edytta.
# When creating the Art object for girl_with_mandolin, pass in edytta as the owner.
girl_with_mandolin = Art(
    "Picasso, Pablo", "Girl with a Mandolin (Fanny Tellier)", "oil on canvas", 1910, edytta)

# Print out girl_with_mandolin and run your code, does your code produce this output?
# Move our print statement printing out girl_with_mandolin to after its new instantiation. Does it print out the following?
print(girl_with_mandolin)

# Create our main marketplace by instantiating Marketplace and saving it into the variable veneer.
veneer = Marketplace()

# Print out the results of veneer.show_listings().
# This should be empty for now so won’t print anything, but it’s good to test if your code has any errors!
veneer.show_listings()

# Every purchase requires a buyer and a seller, let’s create a second Client with the following information:
# It’s name is “The MOMA”
# It is located in “New York”
# It is a museum.
# Save this Client to a variable called moma.
moma = Client("MOMA", "New York", True)

# We need to get the MOMA to purchase a Picasso from Edytta,
# but for now try running your code to make sure our Client class doesn’t produce any errors.
print(moma.name)
print(moma.location)
print(moma.is_museum)
print(edytta.name)
print(edytta.location)
print(edytta.is_museum)

# Use edytta.sell_artwork() to create a listing for girl_with_mandolin. Edytta wants to sell it for $6M (USD).
edytta.sell_artwork(girl_with_mandolin, 6000000)

# Call veneer.show_listings(), is our newly listed work of art on the market?
veneer.show_listings()

# The MOMA is very interested in purchasing girl_with_mandolin.
# Call .buy_artwork() from the moma instance with girl_with_mandolin as an argument.
moma.buy_artwork(girl_with_mandolin)

# Finally, print out girl_with_mandolin one last time.
print(girl_with_mandolin)

# Also call veneer.show_listings(). There shouldn’t be any listings left! Congrats on one purchase successfully made!
veneer.show_listings()
