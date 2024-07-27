# Representing Transactions

In this lesson, you’ll build a small blockchain of your own in Python! This lesson assumes a familiarity with Python syntax, functions, loops, importing libraries, and constructing classes, but there are some hints along the way to help out. If you’ve never used Python before, you might want to learn some with Codecademy.

The blockchain is a new way of storing and moving data securely. The data mostly consists of transactions which include messages exchanged between two parties. Before we start creating our blockchain, let’s think of a way to store a transaction like the one shown below:

amount: 30\
sender: Alice\
receiver: Bob

In this example, Alice is trying to transfer 30 units of some currency to Bob. Can you think of a Python data type to best represent the above transaction?

This transaction is best represented in the form of a Python dictionary, with keys for the required fields and values specific to the transaction.

These transactions are all stored inside the mempool, a pool of transactions that miners reference when selecting the set of transactions they want to verify.
