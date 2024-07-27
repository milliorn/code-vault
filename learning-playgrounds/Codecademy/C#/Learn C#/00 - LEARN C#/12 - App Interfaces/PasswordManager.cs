//Declare that it implements IDisplayable.
//In PasswordManager, implement the interface:
//Declare that it implements IResetable

using System;

namespace SavingInterface
{
    class PasswordManager : IDisplayable, IResetable
    {
        private string Password { get; set; }
        private bool Hidden { get; set; }

        public string HeaderSymbol => "-----------";

        public PasswordManager(string password, bool hidden)
        {
            Password = password;
            Hidden = hidden;
        }

        //Define a Display() method that:
        //satisfies the interface requirements
        //uses Console.WriteLine() to print the actual password if Hidden is false.
        //If Hidden is true, print asterisks *

        public void Display()
        {
            if (Hidden)
            {
                Console.WriteLine(new string('*', Password.Length));
            }
            else
            {
                Console.WriteLine(Password);
            }
        }

        //Define a Reset() method to satisfy the interface.
        //It should set Password to an empty string and set Hidden to false.
        public void Reset() => Password = "";
    }
}