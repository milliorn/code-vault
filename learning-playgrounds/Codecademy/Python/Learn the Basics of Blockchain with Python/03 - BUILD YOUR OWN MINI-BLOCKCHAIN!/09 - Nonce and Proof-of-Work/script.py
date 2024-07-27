# import sha256
from hashlib import sha256

new_transactions = [{'amount': '30', 'sender': 'alice', 'receiver': 'bob'},
                    {'amount': '55', 'sender': 'bob', 'receiver': 'alice'}]

# Create a variable called difficulty and assign it a value of 2.
# This sets the number of leading zeros that the hash we find must have.
# Create another variable called nonce and assign it to a value of 0. This will be our default starting value.
difficulty = 2
nonce = 0

# Using the .str() method, cast nonce and new_transactions into strings.
# Pass the two strings into the sha256 function.
proof = sha256((str(nonce)+str(new_transactions)).encode()).hexdigest()
# printing proof
print(proof)

# finding a proof that has 2 leading zeros
while (proof[:2] != '0' * difficulty):
    nonce += 1
    proof = sha256((str(nonce) + str(new_transactions)).encode()).hexdigest()

# printing final proof that was found
final_proof = proof
print(final_proof)
