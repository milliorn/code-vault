using System;

namespace ChooseYourOwnAdventure
{
    class Program
    {
        static void Main(string[] args)
        {
            /* THE MYSTERIOUS NOISE */

            // Start by asking for the user's name:
            Console.Write("What is your name?: ");
            string s = Console.ReadLine();

            while (String.IsNullOrWhiteSpace(s))
            {
                Console.Write("Sorry, didn't understand.  What is your name?: ");
                s = Console.ReadLine();
            }

            Console.WriteLine($"Hello, {s}! Welcome to our story.");

            //Lets start our story. Print the following sentences to the console:
            Console.WriteLine("It begins on a cold rainy night. You're sitting in your room and hear a noise coming from down the hall. Do you go investigate?");

            //Lets give our user some instructions for how to make a decision in this game.
            Console.Write("Type YES or NO:");

            //Capture the users decision.  Modify the variable so that its uppercase.
            s = Console.ReadLine().ToUpper();

            while (String.IsNullOrWhiteSpace(s) || s != "YES" && s != "NO")
            {
                Console.Write("Sorry, didn't understand.  Type YES or NO: ");
                s = Console.ReadLine().ToUpper();
            }

            if (Adventure.YesOrNo(s) == false) return;

            //Now its time for our user to make another decision.
            Console.Write("Type OPEN or KNOCK:");
            s = Console.ReadLine().ToUpper();

            while (String.IsNullOrWhiteSpace(s) || s != "OPEN" && s != "KNOCK")
            {
                Console.Write("Sorry, didn't understand.  Type OPEN or KNOCK: ");
                s = Console.ReadLine().ToUpper();
            }

            //Lets write another conditional statement based on the users choice.
            if (s == "KNOCK")
            {
                Adventure.Knock();
            }
            else if (s == "OPEN")
            {
                Adventure.Open();
            }
            else
            {
                Console.WriteLine("ERROR: KNOCK/OPEN IF/ELSE IF/ELSE");
            }
        }
    }
}
