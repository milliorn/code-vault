INTERFACES
What Interfaces Cannot Do
The Sedan needs to satisfy more than the highway patrol’s rules (the IAutomobile interface). The car designers have asked that sedans are built and move in certain ways — it must have constructors and methods that aren’t required by the IAutomobile interface. This is okay in C#! The interface says what a class MUST have. It does not say what a class MUST NOT have.

In fact, interfaces cannot specify two types of members that are commonly found in classes:

Constructors
Fields
