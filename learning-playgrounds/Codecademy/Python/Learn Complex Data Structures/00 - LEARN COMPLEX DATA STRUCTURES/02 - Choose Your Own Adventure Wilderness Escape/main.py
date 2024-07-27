# Define a TreeNode class.
# Within TreeNode, define an __init__() method that takes self, story_piece as arguments.
# Inside of __init__(), assign story_piece to self.story_piece.
# Also assign self.choices to be an empty Python list.


class TreeNode:
    def __init__(self, story_piece):
        self.story_piece = story_piece
        self.choices = []

    # We’ll need an .add_child() method defined within TreeNode that has self and node as parameters.
    def add_child(self, node):
        self.choices.append(node)

    # Within TreeNode, define .traverse(). It should only take self as an argument.
    # Inside of .traverse(), declare a variable story_node and assign it to self.
    # This variable will track the current portion of the story.
    # Let’s write out the while loop that will make up the rest of .traverse().
    # The loop should run as long as story_node.choices is not equivalent to an empty list.
    # If story_node.choices is an empty list then we know the story is over.
    # Inside of the while loop,
    # declare a variable choice and set it to input() with the argument: "Enter 1 or 2 to continue the story: ".
    # Let’s use a conditional to ensure the user is entering valid input.
    # If choice is not in a list with the valid options,
    # then print out a message asking them to enter a valid choice: 1 or 2.
    # Declare a variable chosen_index and assign it to int() with choice passed as an argument.
    # Reassign chosen_index to be one less than it was before.
    # Use print() to display chosen_child.story_piece.
    # Finally, set story_node to be chosen_child.

    def traverse(self):
        story_node = self
        print(story_node.story_piece)

        while len(story_node.choices) > 0:
            choice = input("Enter 1 or 2 to continue the story: ")

            if choice not in ['1', '2']:
                print("Try again. Enter 1 or 2 to continue the story: ")
            else:
                chosen_index = int(choice) - 1
                chosen_child = story_node.choices[chosen_index]
                print(chosen_child.story_piece)
                story_node = chosen_child


# Declare a variable story_root and assign it to an instance of TreeNode with the following text:
story_root = TreeNode("""
You are in a forest clearing. There is a path to the left.
A bear emerges from the trees and roars!
Do you:
1 ) Roar back!
2 ) Run to the left...
""")

# Declare choice_a and assign it to a new instance of TreeNode with the following argument:
choice_a = TreeNode("""
The bear is startled and runs away.
Do you:
1 ) Shout 'Sorry bear!'
2 ) Yell 'Hooray!'
""")

# Declare choice_b and assign it to a new instance of TreeNode with the following argument:
choice_b = TreeNode("""
You come across a clearing full of flowers.
The bear follows you and asks 'what gives?'
Do you:
1 ) Gasp 'A talking bear!'
2 ) Explain that the bear scared you.
""")

# Declare a variable choice_a_1 and assign it to an instance of TreeNode with the following string as an argument:
choice_a_1 = TreeNode("""
The bear returns and tells you it's been a rough week. After making peace with
a talking bear, he shows you the way out of the forest.

YOU HAVE ESCAPED THE WILDERNESS.
""")

# Declare a variable choice_a_2 and assign it to an instance of TreeNode with the following string as an argument:
choice_a_2 = TreeNode("""
The bear returns and tells you that bullying is not okay before leaving you alone
in the wilderness.

YOU REMAIN LOST.
""")

# Now let’s create the child nodes for choice_b.
# Declare a variable choice_b_1 and assign it to an instance of TreeNode with the following string as an argument:
choice_b_1 = TreeNode("""
The bear is unamused. After smelling the flowers, it turns around and leaves you alone.

YOU REMAIN LOST.
""")

# Declare a variable choice_b_2 and assign it to an instance of TreeNode with the following string as an argument:
choice_b_2 = TreeNode("""
The bear understands and apologizes for startling you. Your new friend shows you a
path leading out of the forest.

YOU HAVE ESCAPED THE WILDERNESS.
""")

# Call add_child() on story_root and pass choice_a as an argument.
story_root.add_child(choice_a)

# Call add_child() on story_root and pass choice_b as an argument.
story_root.add_child(choice_b)

# choice_a_1 and choice_a_2 should be child nodes to choice_a.
# Call .add_child() on choice_a to set up the relationship between these nodes.
choice_a.add_child(choice_a_1)
choice_a.add_child(choice_a_2)

# Set up the appropriate relationship for choice_b_1 and choice_b_2; they should be child nodes of choice_b.
choice_b.add_child(choice_b_1)
choice_b.add_child(choice_b_2)

# This project will be heavily interactive,
# write a print() function inside of script.py to display “Once upon a time…” in the console.
print("Once upon a time…")

# Test out that we’re on the right path by printing story_root.story_piece near the bottom of script.py.
# print(story_root.story_piece)

# Test out our .traverse() method by calling it on story_root.
story_root.traverse()
