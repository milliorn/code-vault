# Creating the Blockchain Class

Each computer participant has their own copy of the blockchain. Ideally, each copy of the blockchain should have the same properties and functionality to add and validate blocks.

We can represent the blockchain as an object. We are using objects for our implementation, because they offer the flexibility to create specific attributes and methods. Representing it as an object also allows us to create blockchain instances for each computer participant.

To review, our blockchain contains the following:

Chain: A list that that holds all the blocks inside the blockchain.
Unverified Transactions: A list that represents all the unverified transactions before being passed into a block.
Genesis Block: A block automatically generated when the blockchain is initialized.
