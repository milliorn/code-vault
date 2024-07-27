#!/bin/bash

echo "Hello World!"                   # Prints "Hello World!"
echo "Hello $USER!"                   # Prints "Hello <username>!"
echo "Today is $(date)"               # Prints the current date
echo "This current OS is $(uname -s)" # Prints the current OS
echo "This current shell is $SHELL"   # Prints the current shell
echo "This script name is $0"         # Prints the name of the script
# clear               # Clears the screen
echo "Working director is: $PWD"                       # Prints the current working directory
echo "List of all files in this directory: $(ls)"      # Prints the list of all files in the current directory
echo "List of all files in this directory: $(ls -l)"   # Prints the list of all files in the current directory
echo "List of all files in this directory: $(ls -a)"   # Prints the list of all files in the current directory
echo "List of all files in this directory: $(ls -la)"  # Prints the list of all files in the current directory
echo "List of all files in this directory: $(ls -lh)"  # Prints the list of all files in the current directory
echo "List of all files in this directory: $(ls -lah)" # Prints the list of all files in the current directory
echo "List of all files in this directory: $(ls -lha)" # Prints the list of all files in the current directory
head -n 5 main.sh                                      # Prints the first 5 lines of the file
tail -n 5 main.sh                                      # Prints the last 5 lines of the file
wc -l main.sh                                          # Prints the number of lines in the file
wc -w main.sh                                          # Prints the number of words in the file
wc -c main.sh                                          # Prints the number of characters in the file
wc -m main.sh                                          # Prints the number of characters in the file
wc -L main.sh                                          # Prints the length of the longest line in the file
echo "This is a test" >test.txt                        # Creates a file with the given text
