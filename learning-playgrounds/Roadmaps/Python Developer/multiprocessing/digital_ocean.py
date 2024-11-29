import time
import queue
import multiprocessing

from multiprocessing import Pool, Process, Queue, Lock, current_process


# print(multiprocessing.cpu_count())  # Print the number of CPUs

work = (["A", 5], ["B", 2], ["C", 1], ["D", 3])


def work_log(work_data):  # Function to log the work done
    print(f'{work_data[0]} is being processed by {
          current_process().name}')  # Print the process name
    time.sleep(int(work_data[1]))  # Sleep for the time specified in the input
    print(f'{work_data[0]} is finished by {
          current_process().name}')  # Print the process name


def pool_handler():  # Function to handle the pool
    p = Pool(2)  # Create a pool of 2 processes
    p.map(work_log, work)  # Map the work log function to the work data


def do_job(tasks_to_accomplish, tasks_that_are_done):  # Function to do some work
    while True:  # Infinite loop
        try:  # Try to get a task from the queue
            '''
                try to get task from the queue. get_nowait() function will 
                raise queue.Empty exception if the queue is empty. 
                queue(False) function would do the same task also.
            '''
            task = tasks_to_accomplish.get_nowait()  # Get the task from the queue
        except queue.Empty:  # If the queue is empty
            break  # Break the loop
        else:  # If the queue is not empty
            '''
                if no exception has been raised, add the task completion 
                message to task_that_are_done queue
            '''
            print(task)  # Print the task
            tasks_that_are_done.put(
                task + ' is done by ' + current_process().name)  # Put the task in the queue
            time.sleep(.5)  # Sleep for 0.5 seconds
    return True


def main():  # Main function
    number_of_task = 10  # Number of tasks
    number_of_processes = 4  # Number of processes
    tasks_to_accomplish = Queue()  # Queue to store tasks
    tasks_that_are_done = Queue()  # Queue to store completed tasks
    processes = []  # List to store processes

    for i in range(number_of_task):  # Loop over the number of tasks
        # Put the task in the queue
        tasks_to_accomplish.put("Task no " + str(i))

    # creating processes
    for w in range(number_of_processes):  # Loop over the number of processes
        p = Process(target=do_job, args=(
            tasks_to_accomplish, tasks_that_are_done))  # Create a process
        processes.append(p)  # Append the process to the list
        p.start()  # Start the process

    # completing process
    for p in processes:  # Loop over the processes
        p.join()  # Wait for the process to complete

    # print the output
    while not tasks_that_are_done.empty():  # Loop until the queue is empty
        print(tasks_that_are_done.get())  # Print the task

    return True


def print_func(continent='Asia'):  # This function will be executed in parallel
    print('The name of continent is : ', continent)  # Print the input


if __name__ == "__main__":  # confirms that the code is under main function
    names = ['America', 'Europe', 'Africa']  # List of strings
    procs = []  # a list to keep references to all processes
    proc = Process(target=print_func)  # instantiating without any argument
    procs.append(proc)  # adding process to the list
    proc.start()  # starting the process

    # instantiating process with arguments
    for name in names:  # Iterating over the list of strings
        # print(name)
        # instantiating with arguments
        proc = Process(target=print_func, args=(name,))
        procs.append(proc)  # adding process to the list
        proc.start()  # starting the process

    # complete the processes
    for proc in procs:  # Iterating over the list of processes
        proc.join()  # waiting for the process to complete

    colors = ['red', 'blue', 'green']  # List of strings
    cnt = 1  # counter
    queue = Queue()  # creating a queue

    print("Pushing items to the queue")

    for color in colors:  # Iterating over the list of strings
        print(f'item no: {cnt} - {color}')  # printing the item
        queue.put(color)  # pushing the item to the queue
        cnt += 1  # incrementing the counter

    print("Popping items from the queue")

    cnt = 0  # resetting the counter

    while not queue.empty():  # checking if the queue is empty
        print(f'item no: {cnt} - {queue.get()}')  # printing the item
        cnt += 1  # incrementing the counter

    main()  # calling the main function

    pool_handler()  # calling the pool handler function

    print("Done")
