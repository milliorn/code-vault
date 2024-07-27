LEARN C#
Architect Arithmetic
Architects have big ideas – but big ideas can be expensive. How expensive? Depends on the size.

In this project, you’ll use methods to build a program that calculates the material cost for any architect’s floor plan. For example, the floor plan of the Pantheon in Rome, Italy:

Pantheon blueprint

…can be (approximately) broken into circles and rectangles:

Pantheon can be broken into circle radius 21.5m and rectangle 15m by 18m

Using basic formulas, we can calculate the area of each shape and find the total:

double totalArea = Circle(21.5) + Rect(15, 18);
You’ll be defining area methods like Circle() and Rect(), but we’ll provide the formulas for you to use.

Finally, we multiply the total area by the cost of each unit of flooring material. Let’s assume that tiles cost ₤100 each:

double tileCost = 100;
double totalCost = totalArea * tileCost;
Although the floor plan isn’t exactly one circle and rectangle, this approximation is good enough for estimating costs. Let’s get started!
