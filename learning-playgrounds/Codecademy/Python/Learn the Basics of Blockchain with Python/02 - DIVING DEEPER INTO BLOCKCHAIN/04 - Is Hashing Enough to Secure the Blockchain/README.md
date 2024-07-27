# Is Hashing Enough to Secure the Blockchain

We ended the last exercise on a cryptic note — what if an attacker tampers with a block and then somehow covers their tracks by recalculating the hash of each subsequent block to make the blockchain valid once again? Let’s explore this concept through an example.

Let’s say we have three blocks: A, B, and C with hashes X123, Y456, and Z789 that represent the state of each block. If an attacker tampers with Block A, its contents get changed, so its hash gets changed — let’s say the hash is changed from X123 to 123X. Block B no longer points to Block A because the previous hash X123 no longer matches with the new hash 123X. The only way for the attacker to make the chain valid is by fixing this mismatch. For Block B to point to Block A, its previous hash needs to be changed from X123 to 123X.

However, this also counts as tampering with Block B’s data. Thus, its hash also gets changed. If the attacker repeats this process for all subsequent blocks, they will have succeeded in creating a valid copy of the blockchain!

Key Terms:

Recalculating Hashes: Replacing the incorrect hash with a “correct” one to validate the chain.
