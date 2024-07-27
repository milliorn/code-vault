# SOLID Design Principles in Software Development

<https://www.freecodecamp.org/news/solid-design-principles-in-software-development/>

## The Single Responsibility Principle (SRP)

The single responsibility principle states that a class, module, or function should have only one reason to change, meaning it should do one thing.

For example, a class that shows the name of an animal should not be the same class that displays the kind of sound it makes and how it feeds.

The code above violates the single responsibility principle because the class that's responsible for printing the name of the animal also shows the sound it makes and its type of feeding.

To fix this, you have to create a separate class for the sound and feeding. This way, each of the classes is doing only one thing.

## The Open-Closed Principle (OCP)

The open-closed principle states that classes, modules, and functions should be open for extension but closed for modification.

This principle might seem to contradict itself, but you can still make sense of it in code. It means you should be able to extend the functionality of a class, module, or function by adding more code without modifying the existing code.

## The Liskov Substitution Principle (LSP)

The Liskov substitution principle is one of the most important principles to adhere to in object-oriented programming (OOP). It was introduced by the computer scientist Barbara Liskov in 1987 in a paper she co-authored with Jeannette Wing.

The principle states that child classes or subclasses must be substitutable for their parent classes or super classes. In other words, the child class must be able to replace the parent class. This has the advantage of letting you know what to expect from your code.

## The Interface Segregation Principle (ISP)

The interface segregation principle states that clients should not be forced to implement interfaces or methods they do not use.

More specifically, the ISP suggests that software developers should break down large interfaces into smaller, more specific ones, so that clients only need to depend on the interfaces that are relevant to them. This can make the codebase easier to maintain.

This principle is fairly similar to the single responsibility principle (SRP). But it’s not just about a single interface doing only one thing – it’s about breaking the whole codebase into multiple interfaces or components.

Think about this as the same thing you do while working with frontend frameworks and libraries like React, Svelte, and Vue. You usually break down the codebase into components you only bring in when needed.

This means you create individual components that have functionality specific to them. The component responsible for implementing scroll to the top, for example, will not be the one to switch between light and dark, and so on.

## The Dependency Inversion Principle (DIP)

The dependency inversion principle is about decoupling software modules. That is, making them as separate from one another as possible.

The principle states that high-level modules should not depend on low-level modules. Instead, they should both depend on abstractions. Additionally, abstractions should not depend on details, but details should depend on abstractions.

In simpler terms, this means instead of writing code that relies on specific details of how lower-level code works, you should write code that depends on more general abstractions that can be implemented in different ways.

This makes it easier to change the lower-level code without having to change the higher-level code.
