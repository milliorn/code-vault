# String Interpolation

You can always use plain old + or << to add a variable value into a string:

    drink = "espresso"
    "I love " + drink

    ==> I love espresso

    "I love " << drink

    ==> I love espresso

But if you want to do it for non-string values, you have to use .to_s to make it a string:

    age = 26
    "I am " + age.to_s + " years old."

    ==> "I am 26 years old."

    "I am " << age.to_s << " years old."

    ==> "I am 26 years old."

This is complicated, and complicated is not the Ruby way. A better way to do this is with string interpolation. The syntax looks like this:

    "I love {drink}."

    ==> I love espresso.

    "I am {age} years old."

    ==> I am 26 years old.

All you need to do is place the variable name inside {} within a string!
