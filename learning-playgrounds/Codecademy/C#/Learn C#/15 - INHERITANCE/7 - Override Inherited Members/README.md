INHERITANCE
Override Inherited Members
Say that we wanted to make one more vehicle that operates a bit differently than a sedan or truck. We want to use most of the members in Vehicle, but we need to write new versions of SpeedUp() and SlowDown().

What we want is to override an inherited method. To do that, we use the override and virtual modifiers.

In the superclass, we mark the method in question as virtual, which tells the computer “this member might be overridden in subclasses”:

public virtual void SpeedUp()
In the subclass, we mark the method as override, which tells the computer “I know this member is defined in the superclass, but I’d like to override it with this method”:

public override void SpeedUp()
As an aside: there’s another way to solve this problem. Instead of using virtual and override to override a member, we can define a new member with the same name. Essentially, the inherited member still exists, but it is “hidden” by the member in the subclass. If this sounds confusing, that’s okay! We also think it leads to unnecessary confusion, and that leads to errors. We’re going to stick with the virtual - override approach in this lesson.

https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/knowing-when-to-use-override-and-new-keywords
