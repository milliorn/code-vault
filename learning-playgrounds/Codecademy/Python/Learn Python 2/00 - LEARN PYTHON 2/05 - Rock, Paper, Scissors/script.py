# Begin by writing a multi-line comment that describes what this program will do.

# The program should do the following:
# Prompt the user to select either Rock, Paper, or Scissors.
# Instruct the computer to randomly select either Rock, Paper, or Scissors.
# Compare the user’s choice and the computer’s choice.
# Determine a winner (the user or the computer).
# Inform the user who the winner is

# Use a function import to import randint from the random module.
from random import randint

# Use a function import to import randint from the random module.
options = ["ROCK", "PAPER", "SCISSORS"]

# Create a dictionary called message with three key-value pairs:
message = {"tie": "Yawn it's a tie!",
           "won": "Yay you won!", "lost": "Aww you lost!"}

# Create a function called decide_winner.
# The function should take two parameters: user_choice and computer_choice.


def decide_winner(user_choice, computer_choice):
    # First, print the user_choice, the first parameter, using string formatting.
    print("You selected %s" % user_choice)
    # Print the computer_choice, the second parameter, use string formatting.
    print("Computer selected %s" % computer_choice)
    # Inside the if statement,
    # print the message to the user informing them of the tie.
    # The message is stored under the "tie" key in message dictionary.
    if user_choice == computer_choice:
        print(message["tie"])
    # Add an elif statement that checks if the user selects Rock and the computer selects Scissors.
    elif user_choice == options[0] and computer_choice == options[2]:
        # print the winning message which is the value stored under the "won" key in message dictionary.
        print(message["won"])
    # Add two more elif statements that print the winning message when the user wins.
    elif user_choice == options[1] and computer_choice == options[0]:
        print(message["won"])
    elif user_choice == options[2] and computer_choice == options[2]:
        print(message["won"])
    # Add an else block and print the losing message inside of it.
    else:
        print(message["lost"])

# Create a new function called play_RPS().


def play_RPS():
    # Prompt them with the message: "Enter Rock, Paper, or Scissors: ".
    # Store their input in a variable called user_choice.
    # Convert the user’s choice to uppercase in case they type in lowercase rock, paper, or scissors.
    user_choice = input("Enter Rock, Paper, or Scissors: ").upper()
    # Create a variable called computer_choice.
    # Set the variable equal to an item in options at a random index (0 to 2).
    computer_choice = options[randint(0, 2)]
    # Call the decide_winner function.
    # Pass in user_choice as the first argument and computer_choice as the second argument.
    decide_winner(user_choice, computer_choice)


# Call the play_RPS() function.
# Make sure it’s outside of any other function.
play_RPS()
