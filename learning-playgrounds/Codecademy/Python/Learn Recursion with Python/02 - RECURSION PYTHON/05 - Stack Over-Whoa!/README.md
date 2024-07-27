# Stack Over-Whoa

The previous exercise ended with a stack overflow, which is a reminder that recursion has costs that iteration doesn’t. We saw in the first exercise that every recursive call spends time on the call stack.

Put enough function calls on the call stack, and eventually there’s no room left.

Even when there is room for any reasonable input, recursive functions tend to be at least a little less efficient than comparable iterative solutions because of the call stack.

The beauty of recursion is how it can reduce complex problems into an elegant solution of only a few lines of code. Recursion forces us to distill a task into its smallest piece, the base case, and the smallest step to get there, the recursive step.

What’s the simplest power set possible? An empty list!

power_set([])

## [[]]

Now the recursive step. We need to progress towards our base case, an empty list, so we’ll be removing an element from the input.

Examine the simplest powerset that isn’t the base case:

power_set(['a'])

## [[], ['a']]

A power set in the recursive step requires:

all subsets which contain the element
in this case "a"
all subsets which don’t contain the element
in this case [].
With the recursive approach, we’re able to articulate the problem in terms of itself. No need to bring in a whole number system to find the solution!

Here’s the recursive solution in its entirety:

def power_set(my_list):\
  if len(my_list) == 0:\
    return [[]]\
  power_set_without_first = power_set(my_list[1:])\
  with_first = [ [my_list[0]] + rest for rest in power_set_without_first ]\
  return with_first + power_set_without_first

Neither of these solutions is simple, this is a complicated algorithm, but the recursive solution is almost half the code and more directly conveys what this algorithm does.

Give yourself a pat on the back for making it through a tough exercise!
