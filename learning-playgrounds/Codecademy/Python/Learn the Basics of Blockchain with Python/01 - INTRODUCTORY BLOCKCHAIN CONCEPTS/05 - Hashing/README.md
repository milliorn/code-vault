# Hashing

Hashing is an application of cryptography that is fundamental to the design of the blockchain. It is a way to generate a seemingly random, but calculated string of letters and numbers from any input. This is accomplished by the use of a hash function.

Think of a hash function as a machine that takes an object, such as an apple, and turns it into a varying combination of letters and numbers, such as “1a432bf”. The output (“1a432bf”) is known as the hash of the input, the apple. If you give the machine two apples instead of one, it will return a different hash (such as “26f5ce1”).

There are many types of machines out there, so the resulting hash varies from machine to machine. Similarly, there are many types of hash functions available. Blockchain uses a cryptographic hash function, meaning that the output is random but deterministic. This means the same input will always produce the same hash. That process is one-way, so the output (hash) cannot be used to produce the original input.

Key Terms:

Deterministic: The same input will always produce the same output, but that output cannot produce the original input.

Hash: A calculated string of letters and numbers produced from a specific input.

Hash Function: A function that takes in an input of a random size, performs hashing on the input, and generates a seemingly random output of a fixed size, also known as the hash.
