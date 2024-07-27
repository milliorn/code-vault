# No Nested Lists Anymore, I Want Them to Turn Flat

Let’s use recursion to solve another problem involving lists: flatten().

We want to write a function that removes nested lists within a list but keeps the values contained.

nested_planets = ['mercury', 'venus', ['earth'], 'mars', [['jupiter', 'saturn']], 'uranus', ['neptune', 'pluto']]

flatten(nested_planets)
 ['mercury'
 'venus'
 'earth',
  'mars',  'jupiter',  'saturn',  'uranus',  'neptune',  'pluto']

Remember our tools for recursive functions. We want to identify a base case, and we need to think about a recursive step that takes us closer to achieving the base case.

For this problem, we have two scenarios as we move through the list.

The element in the list is a list itself.
We have more work to do!
The element in the list is not a list.
All set!
Which is the base case and which is the recursive step?
