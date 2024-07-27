LEARN C#

Console Creatures

C# can be used to make nearly anything – even creatures! Using the Console.WriteLine() command, you can print text to the console and make something like this:

 .-.
(o o)
| O |
|   |
'~~~'
Each part of the ghost is a line of text, using symbols like parentheses () and tildes ~. Spooky, right? These type of drawings are sometimes called ASCII art, and you can find them all across the internet.

The C# program is already set-up for you in the text editor. For now, you can ignore everything except the line with Console.WriteLine();. You’ll be copying and editing this command throughout the project.

Make sure to use double quotes (") and a semicolon (;) like so:

Console.WriteLine("This will be printed to the console!");
Tasks
0/7Complete
Mark the tasks as complete by checking them off


Build a Creature
1.
Run the code once to see what we have to start.

You may need to use the “Save” button.

2.
Before the first Console.WriteLine() command, write a comment explaining the purpose of this program.

3.
Since the ghostly head has already been created, draw the eyes: write a new Console.WriteLine() command with this text inside the parentheses:

"(o o)"
4.
Draw the mouth: write another Console.WriteLine() command, this time using the text:

"| O |"
5.
Make the body of the ghost by using two more Console.WriteLine() commands and this text:

"|   |"
"'~~~'"
6.
Name your ghost by adding another line of text below it.

7.
You’ve built your very own apparition! You can build all kinds of ghouls with this technique. Find even more inspiration in the hint.

c_     ___
　 \\__|__|__
　　 \( o_o)
　　　 > ~  >
　　　/ 　 / \\
　　 /　　/　 \\
　　 \　 )　　c/
　　/　 /
　 /　/|
　(　( \
　|　|  \
　| / \  )
　| |　) |
 /  )(_/
(_ /
–Dancing Man

Remember:

The backslash \ is an escape character in C#, so \" will show up as one quote in the output (") and \\ will show up as one backslash in the output (\).
Spaces matter! " (" is not the same as "(".
