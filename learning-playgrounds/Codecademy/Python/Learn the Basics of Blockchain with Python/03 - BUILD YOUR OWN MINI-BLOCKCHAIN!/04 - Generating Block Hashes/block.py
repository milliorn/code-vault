from datetime import datetime
from hashlib import sha256

# Uncomment the line in __init__() that calls the generate_hash() function to complete the Block class.


class Block:
    def __init__(self, transactions, previous_hash, nonce=0):
        self.timestamp = datetime.now()
        self.transactions = transactions
        self.previous_hash = previous_hash
        self.nonce = nonce
        self.hash = self.generate_hash()

    def print_block(self):
        # prints block contents
        print("timestamp:", self.timestamp)
        print("transactions:", self.transactions)
        print("current hash:", self.generate_hash())

    # In the .generate_hash() method, create the variable block_contents, which combines the Block timestamp,
    # transactions, nonce, and previous hash.
    # Wrap each item in the str() method in order to convert them to a string type to prepare for hashing.
    # Return the result.

    # Create a variable block_hash.
    # Create a new hash with sha256() and block_contents and save the value to block_hash.
    # Remember to use the .encode() method to encode the string.
    # Update the method to return block_hash.

    # Return the text hash value by calling the hexdigest() method on block_hash.

    def generate_hash(self):
        block_contents = str(self.timestamp) + str(self.transactions) + \
            str(self.nonce) + str(self.previous_hash)
        # return block_contents
        block_hash = sha256(block_contents.encode())
        return block_hash.hexdigest()
