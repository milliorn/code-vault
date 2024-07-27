# LINQ with Other Collections

You’ve mostly seen LINQ used with arrays, but it can be used for lists as well! The syntax is the same:

    List<string> heroesList = new List<string> { "D. Va", "Lucio", "Soldier 76" };

    var longLoudheroes = from h in heroesList
    where h.Length > 6
    select h.ToUpper();

    // longLoudHeroes is [ "SOLDIER 76" ]

Technically, LINQ can be used with any type that supports foreach loops, but we won’t cover all of those here.
