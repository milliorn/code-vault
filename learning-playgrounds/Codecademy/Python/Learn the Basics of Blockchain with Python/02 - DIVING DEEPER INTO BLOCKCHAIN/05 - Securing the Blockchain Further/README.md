# Securing the Blockchain Further

Believe it or not, the security measures introduced in the previous exercises are not enough to secure the entirety of the blockchain. There needs to be another layer of security to protect the blockchain from outside interference. Allowing anyone to tamper with their copy of the blockchain and trick everyone on the network to update their copies is a big problem.

An additional requirement needs to be introduced that makes it infeasible for someone to tamper with subsequent blocks and take over the blockchain.

Just like how the bank has an accountant to verify transactions manually, the blockchain has a clever technique called Proof-of-Work that accomplishes two important goals:

It makes it difficult for participants to modify blocks by re-calculating hashes.
It relies on bulletproof cryptography instead of anonymous participants to verify transactions.
This essentially creates a trustless system and is the main reason why the blockchain is so secure and powerful. Let’s see how Proof-of-Work actually works in the next exercise.

Key Terms:

Proof-of-Work: A security feature in blockchain to prevent attackers from easily taking over the blockchain.

Trustless: A feature of blockchain that states how the system doesn’t rely on any participant to verify transactions.
