# Import the datetime module from the datetime library.
from datetime import datetime

# Call the datetime module’s .now() method to print out the current date and time.
# print(datetime.now())

# Now let’s work on creating our Block.
# We will be passing transactions and previous_hash to the default constructor each time a Block is created.
# Complete the __init__() method inside the Block class by initializing the following instance variables:
# transactions
# previous_hash
# nonce(with a default value of 0).

# Inside the __init__() method, create a timestamp instance variable that stores the current date and time.


class Block:
    # default constructor for block class
    def __init__(self, transactions, previous_hash, nonce=0):
        self.transactions = transactions
        self.previous_hash = previous_hash
        self.nonce = nonce
        self.timestamp = datetime.now()
