# How Hashing Maintains the Blockchain's Integrity

In the previous lesson, we briefly touched upon the idea of hashing — generating a random string of characters from a given input. Let’s go a step further and explore why hashing is so fundamental to the design of the Blockchain.

In a blockchain, each block has a unique hash and a link to the previous block’s hash. If a participant decides to tamper with a block by modifying the transactions, the block’s unique hash gets changed. However, the following block does not update to reflect this change — it still points to the previous block’s hash. Thus, there is a mismatch between hashes and the link between blocks is broken. This results in an invalid copy of the blockchain.

In this way, the records in the blockchain cannot be altered. In other words, the records are said to be immutable.

But what if someone tampers with a block and recalculates the hashes for every single block? Does hashing still guarantee that the blockchain is fully secure? Let’s find out in the next exercise.

Key Terms:

Hashing: Generating a random string of characters from a given input.

Immutable: Something whose records can’t be changed.
