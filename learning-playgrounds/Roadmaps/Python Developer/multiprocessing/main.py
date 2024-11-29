from multiprocessing import Pool, Process
import os


def f(x):  # This function will be executed in parallel
    return x*x  # Return the square of the input


def ff(name):  # This function will be executed in parallel
    print(f'Hello {name}')  # Print the input


def fff(name):
    info('function f')
    print('hello', name)


def info(title):  # This function will be executed in parallel
    print(title)  # Print the input
    print('module name:', __name__)  # Print the module name
    if hasattr(__name__, '__main__'):  # Check if the module has a main function
        print('parent process:', os.getppid())  # Print the parent process id
    print('process id:', os.getpid())  # Print the process id


if __name__ == '__main__':  # This is the main function
    with Pool(5) as p:  # Create a pool of 5 processes
        # Execute the function f in parallel for the input values 1, 2, and 3
        print(p.map(f, [1, 2, 3]))

    # Create a process that will execute the function f with the input 'Bob'
    p = Process(target=ff, args=('Bob',))
    p.start()  # Start the process
    p.join()  # Wait for the process to finish

    info('main line')
    p = Process(target=fff, args=('bob',))
    p.start()
    p.join()
