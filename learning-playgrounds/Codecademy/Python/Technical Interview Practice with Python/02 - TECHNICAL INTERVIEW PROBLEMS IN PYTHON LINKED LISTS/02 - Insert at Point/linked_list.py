from node import Node

class LinkedList:
	def __init__(self, head_node = None):
		self.head = head_node

	def add(self, val):
		new_head = Node(val)
		new_head.next = self.head
		self.head = new_head

	def traverse(self):
		head = self.head
		print("Starting traversal from head")
		while head:
			print("visiting node: {0}".format(head.val))
			head = head.next
		print("Traversal complete")

	def size(self):
		node_count = 0
		current_node = self.head
		while current_node:
			node_count += 1
			current_node = current_node.next
		return node_count

	def insert(self, value, location):
		#If location is 0, we want to insert at self.head which is exactly what .add() does for us. 
		# Use the built-in .add() method passing in node_value and returning self afterwards.
		if location == 0:
			self.add(value)
			return self 

		#Otherwise, we’ll need to make a Node with the value:
		new_node = Node(value)

		#From the head, we want to traverse location - 1 number of nodes. 
		#Track the prev and current_node as we traverse to identify which nodes need to have their .next property updated.
		prev = self.head
		node = Node(value)
		current_node = self.head.next

		while location > 1:
			prev = current_node
			current_node = current_node.next
			location -= 1

		#Once location has hit 1 we’re in the proper spot to insert our new node:
		prev.next = node
		node.next = current_node

	def __repr__(self):
		text = ''
		head = self.head
		while head:
			text += str(head.val) + ' -> '
			head = head.next
		return text