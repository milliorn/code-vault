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

            //  Write a from - where - select query that selects all of the elements in heroes
            //  that contain the character "i". Store the result in a variable named heroesWithI.
            var heroesWithI = from hero in heroes where hero == "i" select hero;

            //  Write a from - select query that returns the same array as heroes,
            //  but every space is replaced with an underscore (_).
            //  Store the result in a variable named underscored.
            var underscored = from hero in heroes select $"{hero.Replace(" ", "_")}";
        }
    }
}
