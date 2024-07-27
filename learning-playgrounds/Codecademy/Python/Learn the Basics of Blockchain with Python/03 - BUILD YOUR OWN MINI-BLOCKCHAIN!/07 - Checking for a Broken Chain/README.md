# Checking for a Broken Chain

Hashing helps to maintain the integrity of the blockchain. In this exercise, we will see this in action. Let’s write a .validate_chain() method that checks to see if blocks are linked to each other properly.

In order to validate the entire blockchain, we must loop through each of the blocks stored inside the blockchain itself. Then, we will check through each of the blocks to ensure that the previous hash value matches with the hash value inside our previous block.
