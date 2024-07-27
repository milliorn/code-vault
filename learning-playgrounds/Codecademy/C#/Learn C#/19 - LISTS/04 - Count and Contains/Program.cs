using System;
using System.Collections.Generic;

namespace LearnLists
{
    class Program
    {
        static void Main()
        {
            var marathons = new List<double> { 144.07, 143.12, 146.73, 146.33 };

            //  Print the Count to the console.
            Console.WriteLine($"{marathons.Count}");

            marathons.Add(143.23);

            //  Make sure that 143.23 was added to the list.
            //  Call the Contains() method and print the returned value to the console.
            Console.WriteLine(marathons.Contains(143.23));

            //  Print Count again. Make sure it increased to 5!
            Console.WriteLine($"{marathons.Count}");
        }
    }
}
