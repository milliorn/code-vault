using System;

namespace TrueOrFalse
{
  class Program
  {
    static void Main(string[] args)
    {
      // Do not edit these lines
      Console.WriteLine("Welcome to 'True or False?'\nPress any key to begin:");
      //string entry = Console.ReadLine();

      // Type your code below
      //Declare and initialize a questions array of type string[].
      string[] questions = {"The sky is blue?", "The grass is green?"};
      
      //Declare and initialize an answers array of type bool[].
      bool[] answers = {true, true};
      
      //If they are not equal, write a warning to the console.
      if (!Methods.CheckLength(questions, answers)) return;
      
      //Create a variable askingIndex to keep track of the currently asked question.
      int askingIndex = 0;

      //Declare responses array of type bool[].
      bool[] responses = new bool[answers.Length];
      
      //Build an empty foreach loop that iterates through each question in questions.
      foreach(string s in questions)
      {
        //Define some empty variables. Declare these in the loop.
        string input;
        bool isBool;
        bool inputBool;
        
        //Ask the question once. In the loop.
        Console.WriteLine($"{s}.  true or false?");
        
        //Capture the users input in input
        input = Console.ReadLine();
        
        //Now lets check if the users input can be converted to a boolean.
        isBool = Boolean.TryParse(input, out inputBool);
        
        //while loop should continue looping while isBool is false.
        while (!isBool)
        {
          //user not respond with true or false, then ask for a response again.
          Console.WriteLine("Please respond with 'true' or 'false'.");
          //Capture the users input in input
          input = Console.ReadLine();
          //Try to convert input to a boolean
          isBool = Boolean.TryParse(input, out inputBool);
        }
        
        //store users boolean answer in responses and increment askingIndex by 1.
        responses[askingIndex] = inputBool;
        askingIndex++;
      }
      
      //Define a few variables
      int scoringIndex = 0;
      int score = 0; 
      
      //Create foreach loop that iterates through each answer in answers.
      foreach(bool b in answers)
      {
        //First, capture the response matching the answer.
        bool userInput = responses[scoringIndex];
        bool userAnswer = answers[scoringIndex];
        int idx = scoringIndex + 1;
        
        //Write out the user response and correct answer for each answer in answers.
        Console.WriteLine($"{idx}. Input: {userInput} | Answer: {userAnswer}");
        
        //Increments score if the response equals the answer.
        if (userInput == userAnswer)
        {
          score++;
        }
        
        //increment scoringIndex by 1.
        scoringIndex++;
      }
      
      //Outside of this loop, announce the userâ€™s score.
      Console.WriteLine($"You got {score} out of {scoringIndex} correct!");
    }
  }
}