# Adding More Blocks

In this exercise, we’ll explore how blocks are confirmed and added to the blockchain.

The first step in adding blocks is verifying transactions. This means making sure that transactions haven’t been swapped or duplicated. For simplicity, we will assume that all participants know how to verify transactions and that they will verify them honestly. As you progress through this lesson, you will explore how verification really works in later exercises.

The next step is establishing a consensus in the network. In other words, the entire network needs to agree to the transactions.

Assuming everyone honestly verified the transactions, a random participant broadcasts their block to the entire network. If more than 51% of the participants agree with the block, a consensus has been reached, and the block is now said to be confirmed!

However, the network might not agree on the first try. This would happen if someone tried to share an invalid block. The network would reject the attempt at introducing a fake transaction!

The key takeaway from this exercise is that — as long as the majority of participants verify transactions honestly, the blockchain remains secure.

Key Terms:

Consensus: The process of agreeing to the transactions on the blockchain network.
