using System;
using System.Collections.Generic;

namespace LearnLists
{
    class Program
    {
        static void Main()
        {
            List<double> marathons = new List<double>
            {
                144.07,
                143.12,
                146.73,
                146.33
            };

            //  Use GetRange() to get the first three elements in the marathons list.
            //  Store the result in a new list variable called topMarathons.
            List<double> topMarathons = marathons.GetRange(0, 3);

            //  Loop through the topMarathons list and print each value to the console.
            foreach (double item in topMarathons)
            {
                Console.WriteLine(item);
            }
        }
    }
}
