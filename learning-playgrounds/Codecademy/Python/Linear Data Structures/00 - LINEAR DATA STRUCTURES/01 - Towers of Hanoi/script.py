from stack import Stack

print("\nLet's play Towers of Hanoi!!")

# Create the Stacks

# create a variable, stacks, and set it equal to an empty list.
# create three Stack instances: left_stack, middle_stack, right_stack
# Append each of these Stack instances to stacks.


stacks = []

left_stack = Stack("Left")
middle_stack = Stack("Middle")
right_stack = Stack("Right")

stacks.extend([left_stack, middle_stack, right_stack])


# Set up the Game

# create a variable, num_disks, and set it equal to the int representation of the user input
# Make a while loop that checks if num_disks is less than 3.
# In the loop, set num_disks to the int representation of the user input when prompted
# After the while loop, create a for loop that iterates backwards through the range of the num_disks.
# In the for loop, push the number onto the left_stack.
# After the for loop, create a variable, num_optimal_moves,
# and set it equal to the number of optimal moves.


num_disks = int(input("\nHow many disks do you want to play with?\n"))

while num_disks < 3:
    num_disks = int(input("Enter a number greater than or equal to 3\n"))

for i in range(num_disks, 0, -1):
    left_stack.push(i)

num_optimal_moves = (2 ** num_disks) - 1

print("\nThe fastest you can solve this game is in {0} moves".format(
    num_optimal_moves))


# Get User Input

# define a function called get_input that takes in no parameters.
# In the function, create a variable, choices,
# and set it equal to a list of the first letters of the names of the stacks
# keep asking the user for an input until we get one that is valid create a while True loop
# In the while loop, create a for loop that uses an iterator, i,
# to iterate through the range of the length of stacks.
# Create a variable, name, and set it equal to the name of stacks[i]. Use the .get_name() method.
# Create a variable, letter, and set it equal to choices[i]
# After the for loop, but still inside the while loop:
# Create a variable user_input.
# Set it equal to an input of empty quotes.
# In the while loop, create an if statement that checks the following:
# user_input is in choices
# Inside the if statement, create a for loop that uses an iterator, i,
# to iterate through the range of the length of stacks.
# Inside the for loop, do the following:
# Check if user_input is equal to choices[i]
# If so, return stacks[i]


def get_input():
    choices = [(stack.get_name()[0]) for stack in stacks]

    while True:
        for i in range(len(stacks)):
            name = stacks[i].get_name()
            letter = choices[i]
            print("Enter {0} for {1}".format(letter, name))

        user_input = input("")

        if user_input in choices:
            for i in range(len(stacks)):
                if user_input == choices[i]:
                    return stacks[i]


# Play the Game

# Create a variable, num_user_moves, and setting it equal to 0.
# The game ends when the right_stack is full.
# Create a while loop that loops while the size of the right_stack is not equal to num_disks.
# Use the .get_size() method.
# In the while loop, do the following:
# print "\n\n\n...Current Stacks..."
# Iterate through stacks and call the .print_items() method on each stack.
# After printing the stacks, but still in the while loop, create a while True loop.
# In this inner loop, start off by doing the following:
# Print "\nWhich stack do you want to move from?\n"
# Create a variable, from_stack, and set it equal to the return value of get_input()
# Print "\nWhich stack do you want to move to?\n"
# Create a variable, to_stack, and set it equal to the return value of get_input()
# In the inner while loop, create an if statement that checks if the from_stack is empty.
# If so, print "\n\nInvalid Move. Try Again".
# In the inner while loop, create an elif statement that checks if EITHER of the following is True:
# The to_stack is empty.
# The “peeked” value of the from_stack is less than the “peeked” of the to_stack
# If so, do the following:
# Create a variable, disk, and set it equal to the popped value of the from_stack.
# Push disk onto the to_stack
# Increment num_user_moves
# break from the inner while loop
# In the inner while loop, create an else statement. Inside it, print "\n\nInvalid Move. Try Again".
# Finally, after both while loops, print the following:
# "\n\nYou completed the game in {0} moves, and the optimal number of moves is {1}". {0} corresponds to num_user_moves and {1} corresponds to num_optimal_moves.


num_user_moves = 0

while right_stack.get_size() != num_disks:
    print("\n\n\n...Current Stacks...")

    for stack in stacks:
        stack.print_items()

    while True:
        print("\nWhich stack do you want to move from?\n")
        from_stack = get_input()
        print("\nWhich stack do you want to move to?\n")
        to_stack = get_input()

        if from_stack.is_empty():
            print("\n\nInvalid Move. Try Again")
        elif to_stack.is_empty() or from_stack.peek() < to_stack.peek():
            disk = from_stack.pop()
            to_stack.push(disk)
            num_user_moves += 1
            #break
        else:
            print("\n\nInvalid Move. Try Again")
        break

print("\n\nYou completed the game in {0} moves, and the optimal number of moves is {1}".format(
    num_user_moves, num_optimal_moves))