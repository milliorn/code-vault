# What are Blocks in the Blockchain

Just like bricks are the building blocks of a house, blocks themselves are the building blocks of a blockchain.

A block contains transaction data and other important details related to the creation of that block, such as the time when it was created and other unique information. In order to create a block, we must have a record that we wish to store.

In this lesson, we will be discussing transaction data. This is just one example, but blocks can hold different types of data depending on what the blockchain is used for. However, at its heart, a block will always contain a timestamp or the data regarding the time when the block was created. A block will also always contain a unique hash or a unique code produced by combining all the contents within the block itself — also known as a digital fingerprint. Lastly, a block will also always contain a previous hash or a reference to the prior block’s hash. This reference to the prior block is how blocks chain to one another. We will dive into more details about the hash later. These attributes about a block are what make it part of a blockchain structure.

Properties in a Block:

Timestamp: The time the block is created determines the location of it on the blockchain.
Transaction Data: The information to be securely stored in the block.
Hash: A unique code produced by combining all the contents within the block itself — also known as a digital fingerprint.
Previous Hash: Each block has a reference to the block prior to its hash. This is what makes the blockchain unique because this link will be broken if a block is tampered with.
