from linked_list import Node, LinkedList
from blossom_lib import flower_definitions

# First, let’s define our HashMap class.
# Give HashMap a constructor that takes a size parameter. Save size into self.array_size.
# create a list of None objects of length size and save it into self.array

# In HashMap.__init__, find the line where we created a list of None objects.
# Change this so that self.array instead is a list of LinkedLists.
# The resulting self.array should be a Python list of LinkedList objects,
# make sure to instantiate them.


class HashMap():
    def __init__(self, size):
        self.array_size = size
        self.array = [LinkedList() for i in range(size)]

    # Define a method called .hash() that takes both self and key as parameters.
    # Calculate the hash code for the key by calling key.encode()
    # and performing the sum on the resulting list-like object.

    def hash(self, key):
        return sum(key.encode())

    # Define a .compress() method that takes a hash_code parameter.
    # Return the result of calculating the remainder of dividing hash_code by self.array_size.
    def compress(self, hash_code):
        return hash_code % self.array_size

    # Define a .assign() method that takes three parameters: self, key, and value.
    # Get the hash code by plugging key into .hash() and
    # then get the array index by plugging the resulting hash code into .compress().
    # Save the result into the variable array_index.
    # In the array, at the address array_index,
    # save both the key and the value as a list: [key, value].

    # In .assign(), we’re going to be replacing the assign logic after
    # getting the array_index from the .hash() and .compressor() methods.
    # Create a new Node object with value [key, value].
    # Assign that Node object to a variable called payload.
    # We’ll need to check if the key exists in the LinkedList before we add our new payload to it.
    # Save self.array[array_index] into the variable list_at_array.
    # Iterate through list_at_array using a for loop.
    # For every item in list_at_array,
    # check if the key (the element at index 0) is the same as the key we’re trying to assign.
    # If we do find a key at one of the items in the linked list, overwrite its value with value.
    # Remove the line where we assign self.array[array_index] = [key, value]

    def assigh(self, key, value):
        array_index = self.compress(self.hash(key))
        payload = Node([key, value])
        list_at_array = self.array[array_index]
        for lst_at_array in list_at_array:
            if lst_at_array[0] == key:
                lst_at_array[1] = value
                return
        list_at_array.insert(payload)

    # Define a .retrieve() method that takes two parameters: self and key.
    # .retrieve() should find the hash code for key by plugging it into .hash() and
    # then find the array index by plugging that hash code into .compress().
    # Save that index into a variable called array_index
    # Save the value of self.array at array_index into a variable called payload.
    # Check the first item (payload[0]) and compare it with key.
    # If they are the same, return the second item in payload (the value!).

    # Now we’re going to update .retrieve() to use separate chaining.
    # We’re going to rewrite the code after we get our array_index.
    # Using the array_index variable, get the LinkedList object at that index in self.array.
    # Before we called this payload but since it represents a different type of object,
    # let’s name it something different.
    # Save the result into a variable called list_at_index.
    # Iterate through the linked list similarly to how .assign() did,
    # checking the key in each part of the list to see if it’s the same as our key.

    def retrieve(self, key):
        array_index = self.compress(self.hash(key))
        list_at_index = self.array[array_index]
        for lst_at_index in list_at_index:
            if lst_at_index[0] == key:
                print(lst_at_array[0], lst_at_array[1])
                return(lst_at_index[1])
            return(None)


# Now let’s create a new instance of our HashMap create an instance called blossom.
# Make the list of our new HashMap the same length as flower_definitions.
blossom = HashMap(len(flower_definitions))

# Now, for every element of flower_definitions,
# assign the value (index 1) to its key (index 0) using blossom.assign().
for flower in flower_definitions:
    blossom.assigh(flower[1], flower[0])

# Now use our app! Look up a flower’s meaning using blossom.retrieve('daisy').
# Try printing it out!
print(blossom.retrieve('daisy'))
