# Create Your Own

Okay! Time to take off the training wheels.

    cube = Proc.new { |x| x ** 3 }
    [1, 2, 3].map(&cube)
    # [1, 8, 27]

You’re going to create your very own method that calls your very own proc! We’ll do this in two steps. Use the example above as a syntax reminder.
