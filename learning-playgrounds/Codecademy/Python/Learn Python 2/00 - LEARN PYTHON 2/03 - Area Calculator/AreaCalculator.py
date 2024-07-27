# Begin by writing a multi-line comment that describes what this program does, starting on line 1.
"""
In this project, we’ll create a calculator that can compute the area of the following shapes:

Circle
Triangle
"""
# Let’s inform the user that the program is running.
# Print a message to let the user know the calculator is starting up.
print("Area Calculator is starting up.")

# Next, ask the user what shape to calculate the area of using raw_input().
# Store their input into a variable called option.
option = input(
    "What shape to calculate the area of?\nEnter C for Circle or T for Triangle: ")

# Calculate the area of the shape that the user specifies.
# Write an if statement that will check if the option the user entered is 'C' for circle.
if option.upper() == 'C':
    # Prompt the user to input the radius.
    # Store their input into a variable called radius.
    # Put the raw_input part of your code inside float():
    radius = float(input("Input the radius: "))
    # Calculate the area of a circle.
    # Use 3.14159 for the value of pi.
    # Use exponentiation ** to square.
    # Store the result in a variable called area.
    area = 3.14159 * radius ** 2
    # print the area using string formatting.
    print("Area: %f" % area)
# Add a corresponding elif statement to your if statement.
elif option.upper() == 'T':
    # To calculate the area of a triangle, first ask the user to enter the base of the triangle.
    # Store the user’s input in a variable called base.
    # Convert the user’s input from a string to a number by using float().
    base = float(input("Enter the base of the triangle: "))
    # Ask the user to enter the height of the triangle and store the input in a variable called height.
    # Convert the user’s input from a string to a number by using float().
    height = float(input("Enter the height of the triangle: "))
    # Next, calculate the area and store it in a variable called area.
    area = base * 0.5 * base * height
    # Finally, print the area using string formatting.
    print("Area: %f" % area)
# The user can now specify C for circle or T for triangle.
# But what if the user enters something else?
# Add an else block to handle this possible case.
# Inside the else block, print a message to inform the user that they entered an invalid shape.
else:
    print("Invalid shape has been entered.")
# Outside of the if statement, inform the user that the program is exiting.
print("Program is exiting.")
