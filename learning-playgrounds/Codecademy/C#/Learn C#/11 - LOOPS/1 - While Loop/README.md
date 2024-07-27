LOOPS
While Loop
Loops are used to repeat a set of instructions based on a set of conditions. If this makes you think of conditional statements, you’re not wrong!

The while loop looks very similar to an if statement. Just like an if statement, it executes the code inside of it if the condition, a statement that evaluates to a boolean value, is true.

while (condition) 
{
  statement;
}
However, unlike an if statement that runs once, a while loop will continue to execute the code inside of it, over and over again, while the condition is true. The computer is constantly checking to see if the condition is satisfied. For this reason, while loops are useful when you know at what point a program should stop, rather than the number of times it should repeat.

In your video game, you want the player to rise up in the air as long as the user is pressing the spacebar:

while (spacebar == "down") 
{
 RiseUp();
}
In this example, while spacebar is equal to down, the character will keep rising on the screen. It will exit the while loop once the user releases the spacebar and then the rest of the program will continue.

while loops can get dangerous, because they depend on that condition to at some point return false. What if we never take our finger off the spacebar? Sounds ridiculous, but theoretically, the program would run forever! This is known as an infinite loop. If you get stuck in an infinite loop while on Codecademy, you can reload the page to stop it.
