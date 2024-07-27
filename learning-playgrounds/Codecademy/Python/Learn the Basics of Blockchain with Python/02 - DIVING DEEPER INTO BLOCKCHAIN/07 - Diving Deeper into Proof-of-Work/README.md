# Diving Deeper into Proof-of-Work

The blockchain participants always consider the longest chain to be the correct one. If someone is able to create the longest chain of blocks (even if the blocks are fake), the network is forced to accept the new chain.

The reason for this is simple — the blockchain network assumes that the longest chain has the most amount of computational work done in finding the Proof-of-Work for each block. Therefore, it is reasonable for the network to think that the longest chain contains the most proven record of transactions.

If a dishonest participant decides to tamper with a block, they would have to solve the Proof-of-Work for each subsequent block in order to introduce the tampered block into the network. This is computationally infeasible and almost impossible!

Furthermore, while the participant is busy finding the Proof-of-Work for each block, newer blocks are being added to the blockchain at a faster rate. The participant soon finds out that they are playing a losing battle against the entire network.

What is the key takeaway from all this? A block gets increasingly more tamper-proof as newer blocks are added next to it. Proof-of-Work makes it hard to get through the entire blockchain and allow someone to introduce a fake transaction.

Key Terms:

Longest Chain: The most trusted chain with the largest amount of computational work done in calculating the Proof-of-Work.
