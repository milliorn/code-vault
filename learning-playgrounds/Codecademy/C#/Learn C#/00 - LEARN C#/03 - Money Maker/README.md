LEARN C#

Money Maker

You have three types of coins:

A bronze coin is worth 1 cent
A silver coin is worth 5 cents
A gold coin is worth 10 cents
What is the minimum number of coins that equals 98 cents?

It’s a hard question to answer in your head, but it’s a fun problem to solve with programming. In this project you’ll use C# to build a Money Maker: a program in which a user enters an amount and gets the minimum number of coins that equal that value.

For example, 16 cents could be:

16 bronze coins,
3 silver coins and 1 bronze coin, or
1 gold coin, 1 silver coin, 1 bronze coin
16 cents, divided three ways

We’d like the last option because it uses the fewest coins.

This project will get you comfortable with division (/), rounding down (Math.Floor()), and modulo (%): You can find how many coins “fit” into an amount by dividing the amount by the coin value, rounding down, and finding the remainder. Let’s walk through an example:

The user enters 15 cents. A gold coin is 10 cents, so 1.5 gold coins fit into the total.

goldCoinsIn15Cents = 15 / 10; // equals 1.5
But we can’t divide coins in half, so instead, we round down to the nearest whole number:

actualGoldCoins = Math.Floor( 15 / 10 ); // equals 1
You can find the remainder using modulo:

double remainder = 15 % 10; // equals 5
Using the remainder, repeat the process with the smaller coins.
