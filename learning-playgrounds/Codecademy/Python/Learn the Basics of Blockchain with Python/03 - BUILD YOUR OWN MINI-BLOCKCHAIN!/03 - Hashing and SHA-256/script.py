# Import sha256 from the hashlib Python library.
from hashlib import sha256

# Create a variable called text.
# Initialize the variable with this string I am excited to learn about blockchain.
#text = "I am excited to learn about blockchain"
text = "I am excited to learn about blockchain!"

# Create a sha256 hash object, using the constructor sha256() and pass the text variable as its argument.
# Assign the value of this object to a variable called hash_result.
# Be sure to use the .encode() method on the text variable.
hash_result = sha256(text.encode())

# Call the .hexdigest() method on hash_result and print the result.
print(hash_result.hexdigest())

# Modify the text variable by adding an exclamation mark at the end and running your code.
# Notice how this hash is completely different from the last one?
print(hash_result)
text = "I am excited to learn about blockchain"