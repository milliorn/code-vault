# When and Then: The Case Statement

The if/else statement is powerful, but we can get bogged down in ifs and elsifs if we have a lot of conditions to check. Thankfully, Ruby provides us with a concise alternative: the case statement. The syntax looks like this:

    case language
    when "JS"

        puts "Websites!"

    when "Python"

        puts "Science!"

    when "Ruby"

        puts "Web apps!"

    else

        puts "I don't know!"

    end

But you can fold it up like so:

    case language
        when "JS" then puts "Websites!"
        when "Python" then puts "Science!"
        when "Ruby" then puts "Web apps!"
        else puts "I don't know!"
    end
