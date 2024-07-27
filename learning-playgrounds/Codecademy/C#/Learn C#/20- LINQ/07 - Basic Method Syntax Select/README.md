# Basic Method Syntax: Select

To transform each element in a sequence — like writing them in uppercase — we can use the select operator. In method syntax it’s written as the method Select(), which takes a lambda expression:

    string[] heroes = { "D. Va", "Lucio", "Mercy", "Soldier 76", "Pharah", "Reinhardt" };
    var loudHeroes = heroes.Select(h => h.ToUpper());

We can combine Select() with Where() in two ways:

Use separate statements:

    var longHeroes = heroes.Where(h => h.Length > 6);
    var longLoudHeroes = longHeroes.Select(h => h.ToUpper());
    Chain the expressions:
    var longLoudHeroes = heroes
    .Where(h => h.Length > 6)
    .Select(h => h.ToUpper());

As with most of LINQ, the choice is up to you!

In the first option, we use two variable names and two statements. You can tell there are two separate statements by counting the semi-colons.

In the second option, we use one variable name and one statement.

If we must use method-syntax, we prefer the second option (chaining) because it is easier to read and write. You can imagine each line like a step in a conveyor belt, filtering and transforming the sequence as it goes.
