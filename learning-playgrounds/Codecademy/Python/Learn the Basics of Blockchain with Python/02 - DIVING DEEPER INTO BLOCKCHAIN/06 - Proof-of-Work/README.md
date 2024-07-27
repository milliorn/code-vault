# Proof-of-Work

Since participants on the blockchain network are anonymous users on their computers, we can’t trust them to verify transactions honestly. Proof-of-Work does nothing more than introduce an additional security constraint to verify transactions. This constraint takes the form of a computationally difficult math problem, which means to say that it takes a lot of time even for the computer to solve the problem.

Instead of randomly being chosen to broadcast their unconfirmed block, a special group of participants, also known as miners, now need to solve a problem in order to be eligible to broadcast their block. The problem, also known as Proof-of-Work, takes the form of a guessing game that involves the use of hashing.

The hash function that’s most commonly used to create the hash for the block is the SHA-256. Miners first guess a nonce value, which is then combined with the contents of the block (i.e transactions, timestamp, hash, and previous hash). They repeat this process until the desired hash is generated.

The first miner to produce a proof broadcasts their unconfirmed block together with the correct nonce value. The rest of the network then verifies the calculation. If the majority of the participants agree, the Proof-of-Work for the block is now complete and the block has now been confirmed! The network then moves on to work on the next block.

Here’s an example of a simple problem — find a number which, when combined with the unconfirmed block’s contents, produces a hash whose first four digits equals 0000. Every participant uses their computer and a hash function (typically SHA-256) to find a number that generates a correct hash. Since this a random guessing game, everyone usually starts out with 0 and increases their guesses until they produce an acceptable hash.

Key Terms:

Miners: Special participants who calculate the Proof-of-Work to mine new blocks.

Nonce: A number to be guessed by miners which when combined with the block produces an acceptable hash.
