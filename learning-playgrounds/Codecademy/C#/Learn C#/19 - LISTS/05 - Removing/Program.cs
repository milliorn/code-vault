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

            //  The list marathons has been initialized for you.
            //  Print the second element in the list.
            Console.WriteLine(marathons[1]);

            //   Remove the item 143.12 (which is currently the second item in the list) and
            //  store the result in a bool variable named removed.
            bool removed = marathons.Remove(143.12);

            //  Print the second element again and the value of removed.
            //  The second element should be different and removed should be true.
            Console.WriteLine(marathons[1]);
            Console.WriteLine(removed);
        }
    }
}
