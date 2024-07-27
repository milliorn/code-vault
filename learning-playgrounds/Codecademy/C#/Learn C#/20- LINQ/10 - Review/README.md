# Review

Great job — we just covered a lot of LINQ! Here’s a recap:

    LINQ is a set of language and framework features for writing structured, type-safe queries over local object collections and remote data sources.

    Use LINQ by referencing the System.Linq namespace in your file.

    When a LINQ query returns a sequence of elements its type is IEnumerable<T>. That means it works with foreach loops and its length is accessible with Count().

    Store a query’s result in a variable of type var. var is an implicit type, meaning it gets all of the benefits of type-checking without our specifying the actual type.

    LINQ queries can be written in method syntax or query syntax.

    We prefer method syntax for single operations and query syntax for most everything else.
    The Where operator is used to select certain elements from a sequence.

    The Select operator determines what is returned for each element in the sequence.

    The from operator declares a range variable that is used to traverse the sequence.

    LINQ can be used on arrays and lists, among other datatypes.
