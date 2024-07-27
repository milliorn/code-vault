from vertex import Vertex


class Graph:
    def __init__(self):
        self.graph_dict = {}

    def add_vertex(self, node):
        self.graph_dict[node.value] = node

    def add_edge(self, from_node, to_node, weight=0):
        self.graph_dict[from_node.value].add_edge(to_node.value, weight)
        self.graph_dict[to_node.value].add_edge(from_node.value, weight)

    # In this method, create a variable called current_room and set it equal to 'entrance'.
    # Next, create a variable called path_total and set it equal to 0.
    # Now create a print statement with the following text:
    # "\nStarting off at the {0}\n". such that the {0} should hold the value of current_room.
    # Make a while loop that checks if the current_room is NOT equal to 'treasure room'
    # In the while loop, we first want to retrieve all the data of the current_room.
    # Create a variable called node and
    # set it equal to the values corresponding to the current_room in the graph dictionary.
    # Create a for loop that iterates through the items of the node’s edges and
    # retrieves each connected_room and weight.
    # In the for loop, create a variable key and
    # set it equal to the first letter of the connected_room.
    # In the for loop, print the following statement:
    # "enter {0} for {1}: {2} cost"
    # {0} corresponds to key. {1} corresponds to connected_room.
    # {2} corresponds to weight.
    # Create a variable called valid_choices and
    # set it equal to a list of all the first letters of the keys of the node’s edges
    # Now, print the following: "\nYou have accumulated: {0} cost"
    # Create a variable choice and set it equal to the input of the following string:
    # create an if statement that checks if choice is NOT in valid_choices.
    # If so, print the following: "please select from these letters: {0}"
    # In the else clause,
    # create a for loop that iterates through the keys of the node’s edges and retrieves each room.
    # In the for loop, create an if statement that checks if the first letter of the room is the user’s choice.
    # In the if statement, set current_room equal to the room.
    # Also within the if statement,
    # update path_total to itself plus the edge weight between the node and the room.
    # Use the edges dictionary!
    # Outside the for loop, but still within the else clause, print the following:
    # "\n*** You have chosen: {0} ***\n"
    # Finally, outside the while loop, print the following:

    def explore(self):
        print("Exploring the graph....\n")
        current_room = 'entrance'
        path_total = 0
        print("\nStarting off at the {0}\n".format(current_room))

        while current_room != 'treasure room':
            node = self.graph_dict[current_room]

            for connected_room, weight in node.edges.items():
                key = connected_room[0]
                print("enter {0} for {1}: {2} cost".format(
                    key, connected_room, weight))

            valid_choices = [room[:1] for room in node.edges.keys()]
            print("\nYou have accumulated: {0} cost".format(path_total))
            choice = input("\nWhich room do you move to? ")

            if choice not in valid_choices:
                print("please select from these letters: {0}".format(
                    valid_choices))
            else:
                for room in node.edges.keys():
                    if room[0] == choice:
                        current_room = room
                        path_total += node.edges[room]

                print("\n*** You have chosen: {0} ***\n".format(current_room))

        print("Made it to the treasure room with {0} cost".format(path_total))

    def print_map(self):
        print("\nMAZE LAYOUT\n")

        for node_key in self.graph_dict:
            print("{0} connected to...".format(node_key))

            node = self.graph_dict[node_key]
            for adjacent_node, weight in node.edges.items():
                print("=> {0}: cost is {1}".format(adjacent_node, weight))

            print("")
        print("")


def build_graph():
    graph = Graph()

    # MAKE ROOMS INTO VERTICES BELOW...
    entrance = Vertex("entrance")
    ante_chamber = Vertex("ante-chamber")
    kings_room = Vertex("king's room")
    grand_gallery = Vertex("grand gallery")
    treasure_room = Vertex("treasure room")

    # ADD ROOMS TO GRAPH BELOW...
    graph.add_vertex(entrance)
    graph.add_vertex(ante_chamber)
    graph.add_vertex(kings_room)
    graph.add_vertex(grand_gallery)
    graph.add_vertex(treasure_room)

    # ADD EDGES BETWEEN ROOMS BELOW...
    graph.add_edge(entrance, ante_chamber, 7)
    graph.add_edge(entrance, kings_room, 3)
    graph.add_edge(ante_chamber, kings_room, 1)
    graph.add_edge(ante_chamber, grand_gallery, 2)
    graph.add_edge(kings_room, grand_gallery, 2)
    graph.add_edge(treasure_room, ante_chamber, 6)
    graph.add_edge(treasure_room, grand_gallery, 4)

    # DON'T CHANGE THIS CODE
    graph.print_map()
    return graph
