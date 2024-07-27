using System;
using System.Collections.Generic;
using System.Linq;

namespace Spaceman
{
    public class Game
    {
        //In the Game class well need to keep track of these six items:
        //Make a property/field for each.
        private string CodeWord { get; set; }
        private string CurrentWord { get; set; }
        private int MaxGuesses { get; }
        private int WrongGuesses { get; set; }
        private string[] WordBank = { "the", "be", "to", "of", "and", "a", "in", "that", "have", "I" };
        private List<string> PastGuesses = new List<string>();

        Ufo u = new Ufo();

        //Create a constructor
        public Game()
        {
            // Instantiate random number generator using system-supplied value as seed.
            Random rand = new Random();

            //Sets the codeword to a random value in the array of strings
            int i = rand.Next(WordBank.Length);
            CodeWord = WordBank[i];

            //Sets the maximum guesses to 5
            MaxGuesses = 5;

            //Sets the wrong guesses to 0
            WrongGuesses = 0;

            //Sets the current word to a string of _ that is the same length as codeword
            foreach (char c in CodeWord)
            {
                CurrentWord += ".";
            }
        }

        //Define a method Ask():
        public void Ask()
        {
            //Asks the user to guess a letter and captures their input
            Console.WriteLine("Guess a letter.");
            string userGuess = Console.ReadLine();

            //Checks that the input is length of 1. If not, tell user one letter at a time
            if (userGuess.Length != 1)
            {
                Console.WriteLine("One letter per guess only.");
                return;
            }

            //Check if we already used this letter in our guesses
            var match = PastGuesses.FirstOrDefault(stringToCheck => stringToCheck.Contains(userGuess));

            if (match != null)
            {
                Console.WriteLine("You already guessed this letter!  Try again.");
                return;
            }

            //Checks if the codeword Contains() the guess
            if (CodeWord.Contains(userGuess))
            {
                Console.WriteLine($"Letter: \"{userGuess}\" was found!");

                char guess = userGuess.Trim().ToCharArray()[0];

                if (CodeWord.Contains(guess))
                {
                    Console.WriteLine($"'{guess}' is in the word!");
                    for (int i = 0; i < CodeWord.Length; ++i)
                    {
                        if (guess == CodeWord[i])
                        {
                            CurrentWord = CurrentWord.Remove(i, 1).Insert(i, guess.ToString());
                        }
                    }
                }
            }
            //If the codeword does not contain the guess, tell the user,
            else
            {
                Console.WriteLine($"Letter: \"{userGuess}\" not found!");
                //Increase the number of wrong guesses by 1
                WrongGuesses++;
                //Call the AddPart() method on the Ufo object
                u.AddPart();
            }

            //Record past guesses
            PastGuesses.Add(userGuess);
        }

        //Next, create a Display() method prints all the necessary game information.
        public void Display()
        {
            int left = MaxGuesses - WrongGuesses;
            string lettersUsed = String.Join(", ", PastGuesses.ToArray());

            Console.WriteLine($"{u.Stringify()}\nCurrent Word:{CurrentWord}\nGuesses left: {left}\nPast Letters:{lettersUsed}");
        }

        //Make a Greet() method that will be called at the beginning of each.
        public void Greet() => Console.WriteLine("=============\nUFO: The Game\n=============\nInstructions: save your friend from alien abduction by guessing the letters in the codeword.");

        //Create a method that returns true if # of wrong guesses is >= to max # of guesses.
        public bool DidLose() => WrongGuesses >= MaxGuesses;

        //Create a method that return true when the current word matches the codeword.
        public bool DidWin() => CodeWord.Equals(CurrentWord) && !CodeWord.Contains('.');
    }
}