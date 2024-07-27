# Call yield_name with your name as a parameter.
# Make sure to pass in a block that puts “My name is #{your name here}!”

def yield_name(name)
    puts "In the method! Let's yield."
    yield("Kim")
    puts "In between the yields!"
    yield(name)
    puts "Block complete! Back in the method."
end

yield_name("Eric") { |n| puts "My name is #{n}." }

# Now call the method with your name!
yield_name("Scott") { |n| puts "My name is #{n}." }
