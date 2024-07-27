using System;
using System.Collections.Generic;
using System.Linq;

namespace LearnLists
{
    class Program
    {
        static void Main()
        {
            //  Create a list to hold the top women’s marathon times in hours.
            //  Create an empty list of type double and stored it in a variable marathons.
            List<double> marathons = new List<double>();

            marathons.Add(144.07);
            marathons.Add(143.12);

            //  Print the second value in the list to the console.
            //Console.WriteLine($"{marathons.Last()}");
            Console.WriteLine($"{marathons[1]}");

        }
    }
}
