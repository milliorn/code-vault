# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    # How to Open a File

    # Get the file handler
    fhand = open('daffodils.txt')
    print(fhand)

    # In the output, we have received a file handle where name is the file name and mode is the permission which is r
    # (stands for read) in our case. encoding is the encoding mechanism for the Unicode character set. You can learn
    # more details about UTF-8 here.

    # How to Print the File

    # Now we have the file handle which means we can access the file. Let's print the file and see its contents.

    # Loop through each line via file handler

    for line in fhand:
        print(line)

    fhand.close()
    fhand = open('daffodils.txt')

    # How to Handle Extra Line Spaces

    # Loop through each line via file handler

    for line in fhand:
        print(repr(line))

    fhand.close()
    fhand = open('daffodils.txt')

    # Approach #1: Change the default end value of print

    # We can change the default value end='\n' to a blank so that we do not get a new line at the end of each line.
    # Let's see the example below to understand better.
    # By default, output would go in separate lines
    print("Hello")
    print("World")

    # Print on the same line because end = ' '
    # added single space
    print("Hello", end=' ')
    print("World")

    # Back to our main file, let's modify the code a bit to get the output without extra blank lines.
    # Loop through each line and modify the default value of 'end'

    for line in fhand:
        print(line, end='')

    fhand.close()
    fhand = open('daffodils.txt')

    # Approach #2: Use the rstrip() method
    for line in fhand:
        line = line.rstrip()
        print(line)

    fhand.close()

    # How to Let the User Choose a File
    # fname = input('Enter filename: ')
    # fhand = open(fname)
    # count = 0
    # for line in fhand:
    # count = count + 1
    # print("There are", count, 'lines in', fname)
    # fhand.close()

    # How to create a file and write to it
    # Open file with mode 'x'
    # fout = open('new-file.txt', 'x')
    # fout.write("Now the new file has some content!")
    # fout.close()

    # How to Write a File in Python
    # Open file with mode 'w'
    fout = open('flower.txt', 'w')
    fout.write("This content would be added and existing would be discarded")
    fout.close()

    # Exception Handling
    fname = input('Enter the file name: ')
    try:
        fhand = open(fname)
    except:
        print('File not found and can not be opened:', fname)
        exit()
    count = 0
    for line in fhand:
        count = count + 1
    print('There are', count, 'lines in', fname)
