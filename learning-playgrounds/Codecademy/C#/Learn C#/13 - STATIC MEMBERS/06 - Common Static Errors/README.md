STATIC MEMBERS
Common Static Errors
With great power comes great responsibility. If you plan on using static, you must be familiar with the errors you might cause! Here a few common ones:

This error usually means you labeled a static constructor as public or private, which is not allowed:

error CS0515: 'Forest.Forest()': static constructor cannot have an access modifier
This usually means you tried to reference a non-static member from a class, instead of from an instance:

error CS0120: An object reference is required to access non-static field, method, or property 'Forest.Grow()'
This usually means that you tried to reference a static member from an instance, instead of from the class:

error CS0176: Member 'Forest.TreeFacts' cannot be accessed with an instance reference; qualify it with a type name instead
