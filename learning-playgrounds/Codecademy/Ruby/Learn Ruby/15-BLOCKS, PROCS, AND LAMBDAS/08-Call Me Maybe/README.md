# Call Me Maybe

Nice work! Calling a proc with a method isn’t too tricky. However, there’s an even easier way.

Unlike blocks, we can call procs directly by using Ruby’s .call method. Check it out!

    test = Proc.new { # does something }
    test.call
    # does that something!

Remember: there’s always more than one way to do something in Ruby.
