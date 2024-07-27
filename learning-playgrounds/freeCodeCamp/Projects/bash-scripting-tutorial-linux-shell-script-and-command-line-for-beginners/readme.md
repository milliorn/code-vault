# Bash Scripting Tutorial – Linux Shell Script and Command Line for Beginners

<https://www.freecodecamp.org/news/bash-scripting-tutorial-linux-shell-script-and-command-line-for-beginners/>

- cd: Change the directory to a different location.
- ls: List the contents of the current directory.
- mkdir: Create a new directory.
- touch: Create a new file.
- rm: Remove a file or directory.
- cp: Copy a file or directory.
- mv: Move or rename a file or directory.
- echo: Print text to the terminal.
- cat: Concatenate and print the contents of a file.
- grep: Search for a pattern in a file.
- chmod: Change the permissions of a file or directory.
- sudo: Run a command with administrative privileges.
- df: Display the amount of disk space available.
- history: Show a list of previously executed commands.
- ps: Display information about running processes.

## Conditional statements (if/else)

```sh
if [[ condition ]];
then
 statement
elif [[ condition ]]; then
 statement 
else
 do this by default
fi
```

## Case statements

```sh
case expression in
    pattern1)
        # code to execute if expression matches pattern1
        ;;
    pattern2)
        # code to execute if expression matches pattern2
        ;;
    pattern3)
        # code to execute if expression matches pattern3
        ;;
    *)
        # code to execute if none of the above patterns match expression
        ;;
esac
```

## How to Schedule Scripts using cron

### Cron job example

`* ** ** sh /path/to/script.sh`
