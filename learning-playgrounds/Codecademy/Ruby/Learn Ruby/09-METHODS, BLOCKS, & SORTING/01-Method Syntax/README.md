# Method Syntax

Methods are defined using the keyword def (short for “define”). Methods have three parts:

The header, which includes the def keyword, the name of the method, and any arguments the method takes. (We’ll get to arguments in the next section)
The body, which is the code block that describes the procedures the method carries out. The body is indented two spaces by convention (as with for, if, elsif, and else statements)
The method ends with the end keyword.
Here’s an example of what the syntax would look like for a simple function, welcome, that just prints “Welcome to Ruby!” to the console:

    def welcome
    puts "Welcome to Ruby!"
    end