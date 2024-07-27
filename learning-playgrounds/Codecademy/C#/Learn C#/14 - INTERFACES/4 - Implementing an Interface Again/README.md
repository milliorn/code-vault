INTERFACES
Implementing an Interface Again
We’ve completed a Sedan class that satisfies both car designers and highway patrol: it can be constructed and change speed, and it implements the IAutomobile interface.

But sedans aren’t the only automobile on the road. There can be multiple classes that implement an interface.

For example, we can create a Truck class that also implements the interface.

This is where we start to see the power of interfaces. Even though Sedan and Truck are different types, we can assume that they behave similarly because they share an interface. Car designers can build different vehicle classes, but the highway patrol can treat them all the same.
