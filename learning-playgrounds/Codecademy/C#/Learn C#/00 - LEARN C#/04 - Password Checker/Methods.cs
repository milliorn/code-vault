using System;
namespace PasswordChecker
{
    class Methods
    {
        private int score;
        private const int minLength = 8;

        //Print the score to the console
        public static void EvaluateResults(int score)
        {
            //Print the score to the console
            Console.WriteLine($"Final Score: {score}");

            switch (score)
            {
                case 5: case 4: Console.WriteLine("Password strength is extremely strong."); break;
                case 3: Console.WriteLine("Password strength is strong."); break;
                case 2: Console.WriteLine("Password strength is medium."); break;
                case 1: Console.WriteLine("Password strength is weak."); break;
                case 0: Console.WriteLine("Password strength is poor."); break;
                default: Console.WriteLine("ERROR!"); break;
            }
        }

        //If the password is greater than or equal to the minimum length, add a point to the score.
        public static bool CheckLength(string s)
        {
            if (s.Length >= Methods.minLength)
            {
                Console.WriteLine("Minimum Length test passed.");
                return true;
            }
            else
            {
                Console.WriteLine("Minimum Length test failed.");
                return false;
            }
        }

        //If the password contains uppercase letters, add a point.
        public static bool CheckUpperCase(bool b)
        {
            if (b)
            {
                Console.WriteLine("Uppercase test passed.");
                return true;
            }
            else
            {
                Console.WriteLine("Uppercase test failed.");
                return false;
            }
        }

        //If the password contains lowercase letters, add a point.
        public static bool CheckLowerCase(bool b)
        {
            if (b)
            {
                Console.WriteLine("Lowercase test passed.");
                return true;
            }
            else
            {
                Console.WriteLine("Lowercase test failed.");
                return false;
            }
        }

        //If the password contains digits, add a point.
        public static bool CheckDigits(bool b)
        {
            if (b)
            {
                Console.WriteLine("Digits test passed.");
                return true;
            }
            else
            {
                Console.WriteLine("Digits test failed.");
                return false;
            }
        }

        //If the password contains special characters, add a point.
        public static bool CheckSpecialCharacters(bool b)
        {
            if (b)
            {
                Console.WriteLine("Special Characters test passed.");
                return true;
            }
            else
            {
                Console.WriteLine("Special Characters test failed.");
                return false;
            }
        }

        public int Score { get => score; private set => score = value; }

        public int Increase()
        {
            Score++;
            return Score;
        }
    }
}