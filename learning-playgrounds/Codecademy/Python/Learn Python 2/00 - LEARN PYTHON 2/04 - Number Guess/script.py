#   Describe what this program does.
#   Build a program that rolls a pair of dice and asks the user to guess the sum.
#   If the user’s guess is equal to the total value of the dice roll,
#   the user wins! Otherwise, the computer wins.

#   To make sure that the rolls are random,
#   we will need some Python code that isn’t built-in – we need to import the randint function,
#   from the random module.
from random import randint

#   Import the sleep function, from the time module.
from time import sleep

#   Create a function called get_user_guess(). The function should take no arguments.
#   Inside of the function, prompt the user for their guess.
#   Store the input into a variable called guess.
#   On the next line, return the user’s guess.


def get_user_guess():
    guess = int(input("Guess a number: "))
    return guess

#   Create a second function called roll_dice().
#   The roll_dice function will be used to simulate the rolling of a pair of dice.
#   Modify the function to include a parameter called number_of_sides.
#   Use the randint function that you imported earlier to generate a random integer between 1 and number_of_sides.
#   Set the result equal to a variable called first_roll.
#   On the next line, simulate the second roll.
#   Set the result equal to a variable called second_roll.
#   On the next line,
#   create a variable called max_val and set it equal to number_of_sides times 2 (since there are two dice).
#   print the max_val
#   On the next line, call the get_user_guess() function.
#   Store the returned value into a variable called guess.
#   On the next line, write an if statement that checks if the user’s guess is greater than the maximum value.
#   Within the if block, let the user know that their guess is invalid by printing an appropriate message.
#   Inside of the else block, print the message Rolling... to the user.
#   Staying inside the else block,
#   Sleep the program for 2 seconds on the next line to simulate the dice rolling:
#   Print the first roll.
#   Then, on the next line, sleep the program for 1 second.
#   Print the value of the second roll.
#   On the next line,
#   create a variable called total_roll and set it equal to the sum of the first roll and the second roll.
#   On the next line, print the total roll to the user.
#   On the following line, print the message Result... to the user.
#   Directly after that, sleep the program for 1 second
#   Inside of the else block, add an if statement.
#   if the user’s guess is equal to the total roll,
#   print a message to the user that they won.
#   If the user’s guess is not equal to the total roll then make an else block,
#   print a message to the user informing them that they lost.


def roll_dice(number_of_sides):
    first_roll = randint(1, number_of_sides)
    second_roll = randint(1, number_of_sides)
    max_val = number_of_sides * 2

    print("Maximum possible value is %d." % (max_val))
    guess = get_user_guess()

    if guess > max_val:
        print("No guessing higher than the maximum possible value!")
    else:
        print("Rolling...")
        sleep(2)
        print("First roll: %d" % (first_roll))
        sleep(1)
        print("Second roll: %d" % (second_roll))

        total_roll = first_roll + second_roll
        sleep(1)
        print("Total: %d" % (total_roll))
        sleep(1)

        if guess == total_roll:
            print("You won!")
        else:
            print("You lose!")


#   Specify the number of sides a single die has as the argument
roll_dice(6)
