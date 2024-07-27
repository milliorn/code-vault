# Basic Query Syntax

A basic LINQ query, in query syntax, has three parts:

    string[] heroes = { "D. Va", "Lucio", "Mercy", "Soldier 76", "Pharah", "Reinhardt" };

    var shortHeroes = from h in heroes
    where h.Length < 8
    select h;

The from operator declares a variable to iterate through the sequence. In this case, h is used to iterate through heroes.

The where operator picks elements from the sequence if they satisfy the given condition. The condition is normally written like the conditional expressions you would find in an if statement. In this case, the condition is h.Length < 8.

The select operator determines what is returned for each element in the sequence. In this case, it’s just the element itself.

The from and select operators are required, where is optional. In this next example, select is used to make a new string starting with “Hero: “ for each element:

    var heroTitles = from hero in heroes
    select $"HERO: {hero.ToUpper()};

Each element in heroTitles would look like "HERO: D. VA", "HERO: LUCIO", etc.
