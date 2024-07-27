# Introduction

Linked lists are a sequential data structure. A linked list consists of nodes which store data and a link to another node. Each node knows its location, what value it holds, and where to find the next node in the linked list. The first node is the head node, and the last node is the tail node.

Nodes of a linked list are stored anywhere in the computer’s memory unlike an array (or list), where values are stored sequentially in memory. The actual memory address is abstracted away from us by Python. With our Node class, we use the instance property .next to represent the location of the following node.

Due to the difference in memory storage, linked lists are more efficient than arrays at inserting and deleting values; arrays are more efficient at looking up values.

In an array, inserting a value causes every subsequent value to be shifted over to make room. In a linked list, inserting a value requires a change of .next for the preceding node.

With an index, we can retrieve any value in a list in constant time. Linked lists have no index because nodes are located all over the computer’s memory. We must traverse, or move through each node starting at the head, to find a value. The traversal takes linear time.

We’ll explore common technical interview questions. By the end of the lesson,
you’ll be prepared for linked list questions during a job interview.
