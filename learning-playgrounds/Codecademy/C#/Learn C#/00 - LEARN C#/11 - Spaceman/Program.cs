using System;

namespace Spaceman
{
    class Program
    {
        static void Main(string[] args)
        {
            //Create a new Game object and have it Greet() the player
            Game g = new Game();
            g.Greet();

            //Create a loop that calls the objects Display() and Ask() methods.
            //The loop should run until DidWin() or DidLose() returns true.
            do
            {
                g.Display();
                g.Ask();

                if (g.DidWin())
                {
                    g.Display();
                    Console.WriteLine("You win!");
                    break;
                }

                if (g.DidLose())
                {
                    g.Display();
                    Console.WriteLine("You lose!");
                    break;
                }
            }
            while (true);
        }
    }
}