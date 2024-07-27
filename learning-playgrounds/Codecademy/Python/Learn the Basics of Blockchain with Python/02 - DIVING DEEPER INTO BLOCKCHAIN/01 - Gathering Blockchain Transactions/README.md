# Gathering Blockchain Transactions

The magic of blockchain is that it’s a secure digital ledger that records transactions in chronological order. In this exercise, we’ll explore how blockchain transactions are handled.

As transactions are carried out, they get placed in a special location called the mempool that collects all these unvalidated transactions. The latest transactions in the mempool are broadcasted to all blockchain participants.

Each participant collects these transactions into a new block. However, each block can only hold a limited number of transactions. Therefore, not all transactions can be added to a block at once.

Once a block is full, the next set of transactions will have to wait in the memory pool. At this point, the block is said to be unconfirmed, and the transactions inside the block are said to be invalidated.

Next, we’ll explore how blocks are added to the blockchain!

Note: Our course is explaining a very general approach to implementing blockchain technology. The way that the blockchain handles and verifies transactions can be customized to fit various applications, such as the oh so cute Cryptokitties.

Key Terms:

Transactions: An exchange of value among participants on the blockchain network.

Participants: Individuals accessing the blockchain network through computers to exchange value.

*Unconfirmed:*Blocks and transactions that are yet to be verified.
