# Define your own method, double, that accepts a single parameter and yields to a block.
# Then call it with a block that multiplies the number parameter by 2.
# You can double any number you like!
# puts the result in order to see your yield in action!

def double(num)
    yield num
end

double(2) { |n| n * 2 }
