# First, we’ll create the RGB to Hex method.
# Inside the method, create a variable called invalid_msg and set it equal to an appropriate error message.
# The message should say something about invalid values being entered.
# On the next line, still inside of the method, prompt the user to enter a red value using raw_input.
# Wrap their input usingint(). Finally, set the result equal to a variable called red.
# On the next line, add an if statement that checks if the value of red is less than 0, or greater than 255.
# Inside of the statement, print the error message that you created earlier. Then, on the next line, return.
# Now, just as in Step 3, prompt the user to enter a value for green (G).
# Wrap the input using int() and set the result equal to a variable called green.
# Next, add error checking to make sure that the value the user enters for the color green is valid.
# Inside of the if statement, print the error message and then return on the next line.
# Prompt the user, wrap their input with int(), and set it equal to a variable called blue.
# On the next line, outside of any if statement, create a variable called val.
# Set it equal to the sum of shifting red to left by 16 bits, shifting green to left by 8 bits, and blue.
# Finally, call the hex() method and pass value in as the argument.
# Use list slicing to print out everything except the first two characters of that string.
# Also, call the upper() method on the result.

invalid_msg = "invalid values being entered."


def rgb_hex():
    red = int(input("Input Red value: "))
    if red < 0 or red > 255:
        print(invalid_msg)
        return

    green = int(input("Input Green value: "))
    if green < 0 or green > 255:
        print(invalid_msg)
        return

    blue = int(input("Input Blue value: "))
    if blue < 0 or blue > 255:
        print(invalid_msg)
        return

    val = (red << 16) + (green << 8) + blue

    print("%s" % (hex(val)[2:]).upper())

# Now, add a method called hex_rgb().
# This is the method we’ll use to convert the opposite way (from Hex to RGB).
# Inside of the method, prompt the user to enter a hexadecimal value using raw_input().
# Set the result equal to a variable called hex_val.
# Add an if statement that checks if the length of hex_val is not equal to six.
# Inside of the if statement, print a message to the user indicating that an invalid value was entered.
# On the next line, return.
# Add a corresponding else block that sets hex_val equal to calling int() with the arguments hex_val and 16.
# Next, outside of the else block, but still within the method,
# create a variable called two_hex_digits and set it equal to 2 raised to the power of 8.
# Create a variable called blue and set it equal to hex_val modulo two_hex_digits.
# Next, shift hex_val to the right by 8 bits.
# Now, just as you did in Step 19,
# create a variable called green and set it equal to hex_val modulo two_hex_digits.
# On the next line, shift hex_val once more to the right by 8 bits.
# Finally, calculate the red value by creating a variable called red and setting it equal to hex_val modulo two_hex_digits.
# On the next line, use string formatting to print out the RGB values on one line.
# There should be no space between the individual values.


def hex_rgb():
    hex_val = input("Enter a hexadecimal value: ")

    if len(hex_val) != 6:
        print(invalid_msg)
        return
    else:
        hex_val = int(hex_val, 16)

    two_hex_digits = 2 ** 8
    blue = hex_val % two_hex_digits
    hex_val = hex_val >> 8
    green = hex_val % two_hex_digits
    hex_val = hex_val >> 8
    red = hex_val % two_hex_digits

    print("RGB: %s" % red, blue, green)

# Let’s add the last method that will run our program. Create a new method called convert().
# Inside the method, add a while loop with the Boolean True as the condition.
# On the next line, inside of the while loop,
# prompt the user for input with the following message: Enter 1 to convert RGB to HEX. Enter 2 to convert HEX to RGB. Enter X to Exit:.
# Set the result equal to a variable called option.
# Start an if statement that checks if option is equal to '1' (as a string).
# Inside of the if statement, print the message RGB to Hex... to the user.
# On the following line, call the rgb_hex() method.
# Add a corresponding elif block that checks if the option is '2'.
# If it is, print Hex to RGB... first.
# Then, on the next line, call the hex_rgb() method.
# Add another elif statement that checks if the option is 'X' or 'x'.
# If it is, exit the loop with the break keyword.
# Finally, finish the if statement by adding an else block.
# This part of the statement will handle any other input from the user. Inside of the else block, print Error..


def convert():
    while(True):
        option = input("Enter 1 to convert RGB to HEX. Enter 2 to convert HEX to RGB. Enter X to Exit: ")
        if option == '1':
            print("RGB to Hex...")
            rgb_hex()
        elif option == '2':
            print("HEX to RGB...")
            hex_rgb()
        elif option == 'x' or option == 'X':
            break
        else:
            print("Error.")


# As the final line of your code (outside of any method), call the convert() method.
# Great! Let’s test out the converter.
# In the terminal, type the following and hit “Enter” on your keyboard:
# python rgb2hex.py
# Feel free to expand the functionality. Happy coding!

convert()
