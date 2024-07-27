using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace ProgrammingLanguages
{
    class Program
    {
        static void Main()
        {
            List<Language> languages = File.ReadAllLines("./languages.tsv")
                .Skip(1)
                .Select(line => Language.FromTsv(line))
                .ToList();

            //Let’s start by printing all of the languages: print each item in languages by calling its Prettify() method.
            foreach (var item in languages)
            {
                Console.WriteLine(item.Prettify());
            }

            //Write a query that returns a string for each language.
            //It should include the year, name, and chief developer of each language.
            //Print each one to the console.
            var queryEachLanguage = languages.Select(x => $"{x.Year}, {x.Name}, {x.ChiefDeveloper}");
            foreach (var item in queryEachLanguage)
            {
                //Console.WriteLine(item);
            }

            //When was C# first released?
            //Find the language(s) with the name "C#".
            //Use the Prettify() method to print the results to the console.
            var releaseDateCSharp = from x in languages where x.Name.Contains("C#") select x;
            foreach (var item in releaseDateCSharp)
            {
                //Console.WriteLine(item.Prettify());
            }

            //Find all of the languages which have "Microsoft" included in their ChiefDeveloper property.
            var allLanguageMicrosoft = from x in languages where x.ChiefDeveloper.Contains("Microsoft") select x;
            foreach (var item in allLanguageMicrosoft)
            {
                //Console.WriteLine(item.Prettify());
            }

            //Find all of the languages that descend from Lisp.
            var findAllLisp = from x in languages where x.Predecessors.Contains("Lisp") select x;
            foreach (var item in findAllLisp)
            {
                //Console.WriteLine(item.Prettify());
            }

            //Find all of the language names that contain the word "Script" (capital S).
            //Make sure the query only selects the name of each language.
            var findAllScripts = from x in languages where x.Name.IndexOf("Script") != -1 select x;
            foreach (var item in findAllScripts)
            {
                //Console.WriteLine(item.Prettify());
            }

            //How many languages are included in the languages list?
            var languageCount = languages.Count;
            //Console.WriteLine($"{languageCount} found in the languages list.");

            //How many languages were launched between 1995 and 2005?
            var languagesBetween1995To2005 = from x in languages where x.Year >= 1995 && x.Year <= 2005 select x;
            foreach (var item in languagesBetween1995To2005)
            {
                //Console.WriteLine(item.Prettify());
            }

            //Print a string for each of those near-millenium languages.
            //In your query add a Select operation that returns a string of this format for each element:
            //NAME was invented in YEAR
            var nearmilleniumLanguages = from x in languages where x.Year >= 1995 && x.Year <= 2005 select $"{x.Name} was invented in {x.Year}.";
            foreach (var item in nearmilleniumLanguages)
            {
                //Console.WriteLine(item);
            }

            //Your queries are currently sorted by year since the languages list was sorted by year.
            //Try sorting a query alphabetically (on the name of each language) using the OrderBy() method.
            var sortLanguages = languages.OrderBy(x => x.Name);
            foreach (var item in sortLanguages)
            {
                //Console.WriteLine(item.Name);
            }
        }

        //You might have used foreach loops to print every Language in this project.
        //Write a method PrettyPrintAll() that handles that for us.
        //It should:
        //return nothing
        //accept an argument of type IEnumerable<Language>
        //pretty print every language in the argumen
        private static void PrettyPrintAll(IEnumerable<Language> language)
        {
            foreach (var item in language)
            {
                Console.WriteLine(item.Prettify());
            }
        }

        //You might have also used foreach loops to print every query result in this project.
        //Write a method PrintAll() that handles that for us.
        //It should:
        //return nothing
        //accept an argument of type IEnumerable<Object>
        //prints every object in the argument
        private static void PrintAll(IEnumerable<Object> objects)
        {
            foreach (var item in objects)
            {
                Console.WriteLine(item);
            }
        }
    }
}