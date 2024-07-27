# Importing the necessary modules for network communication
import socket  # Provides access to sockets for network communication
import random  # Provides functions for generating random values
import string  # Provides functions for working with strings

# Creating a server socket
server_object = socket.socket(family=socket.AF_INET, type=socket.SOCK_STREAM)

# Server's IP address and port number
ip_address = "127.0.0.1"
port = 5555

# Binding the server socket to the IP address and port number
server_object.bind((ip_address, port))

# Listening for incoming connections
server_object.listen()

# Accepting the client connection
connection_object, _ = server_object.accept()

# Checking if the server is connected to the client
if connection_object:
    print("SERVER CONNECTED TO CLIENT")

    # Sending an initial message to the client
    connection_object.send(b"type the message")

    # Receiving data from the client
    data_receive = connection_object.recv(1024)

    # Processing data until "stop" message is received
    while data_receive != b"stop":
        # Printing the received message from the client
        print("{}: {}".format("CLIENT MESSAGE: ", data_receive.decode("utf-8")))

        # Generating a random server response using ASCII letters
        server_input = random.choice(string.ascii_letters)

        # Sending the server response to the client
        connection_object.send(server_input.encode("utf-8"))

        # Receiving the next data from the client
        data_receive = connection_object.recv(1024)
