using System;
using System.Linq;

namespace PasswordChecker
{
    class Program
    {
        public static void Main(string[] args)
        {
            //Ask the user to enter a password and capture their input in a variable.
            Console.WriteLine("Enter a password.");
            string password = Console.ReadLine();

            //Make boolean so we can use in if statements later on for validation
            bool containsAtLeastOneUppercase = password.Any(char.IsUpper);
            bool containsAtLeastOneLowercase = password.Any(char.IsLower);
            bool containsAtLeastOneSpecialChar = password.Any(ch => !Char.IsLetterOrDigit(ch));
            bool containsAtLeastOneDigit = password.Any(char.IsDigit);

            //Define a variable score to hold their score and set it to 0.
            Methods m = new Methods();

            //If the password is greater than or equal to the minimum length, add a point to the score.
            if (Methods.CheckLength(password)) m.Increase();

            //If the password contains uppercase letters, add a point.
            if (Methods.CheckUpperCase(containsAtLeastOneUppercase)) m.Increase();

            //If the password contains lowercase letters, add a point.
            if (Methods.CheckLowerCase(containsAtLeastOneLowercase)) m.Increase();

            //If the password contains digits, add a point.
            if (Methods.CheckDigits(containsAtLeastOneDigit)) m.Increase();

            //If the password contains special characters, add a point.
            if (Methods.CheckSpecialCharacters(containsAtLeastOneSpecialChar)) m.Increase();

            //Print the score to the console
            Methods.EvaluateResults(m.Score);
        }
    }
}