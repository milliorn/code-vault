age = 26

# Add your code below!
# Rather than checking to see if our age variable is an integer,
# check to see if it will .respond_to? the .next method.
# (.next will return the integer immediately following the integer it’s called on,
# meaning 4.next will return 5.)
age.respond_to?(:next)