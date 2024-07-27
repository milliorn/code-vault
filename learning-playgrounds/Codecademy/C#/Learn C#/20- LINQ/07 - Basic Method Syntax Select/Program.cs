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

            //  Write a method-syntax query that:
            //  Selects all of the elements in heroes containing the character "c" and
            //  Transforms them to lowercase
            //  Use separate statements and store the final result in a variable lowerHeroesWithC.
            var temp = heroes.Where(h => h.Contains("c"));
            var lowerHeroesWithC = temp.Select(h => h.ToLower());

            //  Write a second query that does the same thing, but uses chained expressions.
            var sameResult = heroes.Where(b => b.Contains("c")).Select(b => b.ToLower());

            //  Print out all of the elements of sameResult to check your work.
            foreach (var item in sameResult)
            {
                Console.WriteLine(item);
            }
        }
    }
}
