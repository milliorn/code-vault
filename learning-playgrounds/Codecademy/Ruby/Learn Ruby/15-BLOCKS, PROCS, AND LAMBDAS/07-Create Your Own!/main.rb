# Create a method, greeter, that takes no arguments and yields to a block.
# Create a Proc, phrase, that puts "Hello there!".
# Pass this to greeter instead of a block. (Don’t forget to pass &phrase instead of just phrase!)
def greeter
    yield
end

phrase = Proc.new do
    puts "Hello there!"
end

greeter(&phrase)