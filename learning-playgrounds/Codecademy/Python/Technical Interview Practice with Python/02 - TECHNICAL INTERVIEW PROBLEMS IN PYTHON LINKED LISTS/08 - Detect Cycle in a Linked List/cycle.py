from linked_list import LinkedList, Node, build_cycle_linked_list, build_linked_list_no_cycle


cycle_linked_list = build_cycle_linked_list()
no_cycle_linked_list = build_linked_list_no_cycle()

def has_cycle(linked_list):
    s = set()
    temp = linked_list.head

    while temp:
        if temp in s:
            return True
        
        s.add(temp)
        temp = temp.next
    
    return False

cycle_result = has_cycle(cycle_linked_list)
no_cycle_result = has_cycle(no_cycle_linked_list)

print("Should return True when a cycle exists: {0}".format(cycle_result))

print("Should return False when a cycle does not exist: {0}".format(no_cycle_result))

