# Begin by including a multi-line comment that starts on line 1 that describes what your program will do.
# You can use the instructions above to help you write the comment.
"""Build a basic calendar that the user will be able to interact with from the command line."""

# On the next line, use a function import to import sleep from the time module.
# On the next line, use a function import to import strftime from the time module.
# Use a function import to import both sleep and strftime from the time module, all in one line of code.
from time import sleep, strftime

# On the next line, add a constant variable that stores the user’s first name as a string.
# Set it equal to your name (or another name).
FIRST_NAME = "Scott"

# On the next line, create an empty dictionary called calendar.
calender = {}

# On the next line, create a function called welcome().
# On the next line, inside of the function, print a welcome message to the user.
# Use concatenation to include the message and the user’s first name.
# Next, print a message to let the user know the calendar is opening.
# On the next line, sleep the program for 1 second.
# On the next line, print the current date in the following format:
# Full weekday name Month Day, Year.
# Use concatenation and strftime to help you.
# On the next line, print the current time in the following format: H:M:S.
# Use concatenation and strftime to help you.
# Next, sleep the program for 1 second.
# You succesfully used a new function, congrats!
# On the next line, print "What would you like to do?" to the user.


def welcome():
    print("Welcome " + FIRST_NAME + "\nOpening the calender.")
    sleep(1)
    print(strftime("%A %B %dth, %Y"))
    print(strftime("%I:%M:%S%p"))
    sleep(1)
    print("What would you like to do?")

# Create a new function called start_calendar().
# When the calendar starts, the first thing we’d like to do is welcome the user.
# On the next line, inside of start_calendar(), call the welcome() function.
# On the next line, create a variable called start and set it equal to True.
# Next, add a while loop that uses start as the Boolean condition.
# Inside of the while loop,
# prompt the user to enter A to Add, U to Update, V to View, D to Delete, X to Exit:.
# Store their input in a variable called user_choice.
# On the next line, convert user_choice to upper case.
# Keeping inside the while loop, add an if statement that checks if the user’s choice is V (for View).
# Inside of the current if statement,
# add another if statement that checks if there are no dates (keys) in the calendar (i.e. less than 1 key).
# Inside of the new if statement, print a message to the user letting them know the calendar is empty.
# Add an else block that corresponds to the if block you just added.
# Inside of the else block, print the calendar.
# Add an elif block (corresponding to the first if block you coded) that checks if the user’s choice is U (for Update).
# On the next line, prompt the user for the date with the following: "What date? ".
# Store their input into a variable called date.
# On the line after that, prompt the user for the update with the following :
# "Enter the update: ". Store their input into a variable called update.
# On the next line, update calendar by adding the update to the date that the user specifies.
# Now that we’ve made the update possible,
# print a message to the user on the next line about the update being successful.
# On the line after that, print the calendar.
# Add an elif block (again, corresponding to the first if block you coded) that checks if the user’s choice is A (for Add).
# On the next line, prompt the user for their input with the following: "Enter event: ".
# Store their input into a variable called event.
# On the line after that, prompt the user for their input with the following : "Enter date (MM/DD/YYYY): ".
# Store their input into a variable called date.
# On the next line, add an if statement that checks if the length of date is greater than 10.
# Expand the if statement by using Boolean or and checking if the year the user entered occurs before the year that the strftime function returns (in other words, the current year).
# You can use the < operator to achieve this.
# On the next line, inside the if block, print a message to user indicating that an invalid date was entered.
# Next, still inside the if block,
# ask the user if they would like to try again by prompting them with: "Try Again? Y for Yes, N for No: ".
# Store their input in a variable called try_again.
# Directly after that, convert try_again to uppercase.
# Next, add another if statement that checks if try_again is Y (for Yes).
# Otherwise, if they select N, we have to exit the program.
# Add a corresponding else block.
# Inside the block, set start equal to False to exit the loop and quit the program.
# Add an else block that corresponds to the if block.
# On the next line, add to calendar by adding the event to the date the user specifies.
# Then, on the next line, print a message saying the event was successfully added.
# After that, print the calendar.
# Add an elif block (corresponding to the first if block you coded) that checks if the user’s choice is "D" (for Delete).
# On the next line, inside of the block,
# add an if statement that checks if there are no dates in the calendar (i.e. less than 1 key).
# You can use the .keys() function on our calendar, and use the len() function to check the length of the keys.
# Inside of the if statement, print a message to the user letting them know the calendar is empty.
# Add an else block. Then, on the next line,
# prompt the user for their input with the following: "What event?".
# Store their input into a variable called event.
# On the next line, still inside the else block,
# add a for loop that iterates through the keys using a date variable. Use .keys() to help you.
# On the next line, add an if statement that checks if event is equal to calendar[date].
# This statement checks if the event exists.
# On the next line, use the del statement to delete calendar[date].
# Learn more about the del statement here.
# On the next line, print a message to the user indicating that the event was successfully deleted.
# Then, directly after, print the calendar.
# Add a corresponding else block. Inside, print a message indicating that an incorrect event was specified.
# Add an elif block (again, corresponding to the very first if block you coded) that checks if the user’s choice is "X" (for Exit).
# On the next line, inside the block, exit the program by changing the value of start.
# This time, add an else block (again, corresponding to the very first if block you coded).
# Inside of the block, print a message indicating that an invalid command was entered.
# On the next line, exit the program.


def start_calendar():
    welcome()
    start = True
    while(start):
        user_choice = input(
            "A to Add, U to Update, V to View, D to Delete, X to Exit: ")
        user_choice = user_choice.upper()
        if user_choice == 'V':
            if bool(calender) == False:
                print("Calender is empty.")
            else:
                print(calender)
        elif user_choice == 'U':
            date = input("What date?: ")
            update = input("Enter the update: ")
            calender[date] = update
            print("Update successful.")
            print(calender)
        elif user_choice == 'A':
            event = input("Enter event: ")
            date = input("Enter date (MM/DD/YYYY): ")
            print(date[6:10])
            if len(date) > 10 or int(date[6:10]) - int(strftime("%Y")) > 0:
                print("Invalid date was entered.")
                try_again = input("Try Again? Y for Yes, N for No: ")
                try_again = try_again.upper()
                if try_again == 'Y':
                    continue
                elif try_again == 'N':
                    print("Exiting program.")
                    start = False
            else:
                calender[date] = event
                print("Event was sucessfully added.")
                print(calender)
        elif user_choice == 'D':
            if bool(calender) == False:
                print("Calender is empty.")
            else:
                event = input("What event?: ")
                for date in calender:
                    if event == calender[date]:
                        del calender[date]
                        print("Event was successfully deleted.")
                    else:
                        print("Incorrect event was specified.")
        elif user_choice == 'X':
            start = False
        else:
            print("Invalid command was entered. Program exiting.")
            start = False


# The program won’t run unless we call it.
# For the grand finale, call the start_calendar() function on the next line (outside of any function).
start_calendar()
