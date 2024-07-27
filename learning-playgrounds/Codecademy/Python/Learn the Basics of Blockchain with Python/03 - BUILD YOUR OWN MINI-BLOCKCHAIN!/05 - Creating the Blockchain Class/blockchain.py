# imports the Block class from block.py
from block import Block

# Fill in the __init__() method inside the Blockchain class by initializing instance variables chain and all_transactions as empty Python lists.


class Blockchain:
    def __init__(self):
        self.chain = []
        self.all_transactions = []
        self.genesis_block()

    # Complete the method genesis_block by instantiating a new Block object with an empty transactions list and a previous hash of 0.
    # Append the resulting block to the chain.

    # Since we want to automatically create a Genesis Block when a new blockchain object is created,
    # call the method .genesis_block() inside the __init__() method.
    def genesis_block(self):
        transactions = []
        previous_hash = "0"
        self.chain.append(Block(transactions, previous_hash))
