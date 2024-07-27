using System;
using System.Collections.Generic;
using System.Linq;

namespace LearnLinq
{
    class Program
    {
        static void Main()
        {
            string[] heroes = { "D. Va", "Lucio", "Mercy", "Soldier 76", "Pharah", "Reinhardt" };

            //  Write a method-syntax query that selects all of the elements in heroes containing
            //  the character "i". Store the result in a variable named heroesWithI.
            var heroesWithI = heroes.Where(h => h.Contains("i"));

            //  Print out all of the elements in heroesWithI to check your work.
            foreach (var item in heroes)
            {
                Console.WriteLine(item);
            }
        }
    }
}
