# Var

    Every LINQ query returns either a single value or an object of type IEnumerable<T>. For now, all you need to know about that second type is that:

It works with foreach loops, just like arrays and lists
You can check its length with Count()
Since the single value type and/or the parameter type T is not always known, it’s common to store a query’s returned value in a variable of type var.

var is just an implicitly typed variable — we let the C# compiler determine the actual type for us. Here’s one example:

    string[] names = { "Tiana", "Dwayne", "Helena" };
    var shortNames = names.Where(n => n.Length < 4);

    In this case shortNames is actually of type IEnumerable<string>, but we don’t need to worry ourselves about that as long as we have var!
