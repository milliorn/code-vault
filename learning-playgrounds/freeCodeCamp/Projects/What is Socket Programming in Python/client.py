# client.py

# Importing the necessary module for network communication
import socket

# Creating a client socket
client_object = socket.socket(family=socket.AF_INET, type=socket.SOCK_STREAM)

# Server's IP address and port number
ip_address = "127.0.0.1"
port = 5555

# Connecting the client socket to the server
client_object.connect((ip_address, port))

# Receiving an initial message from the server
data_receive = client_object.recv(1024)

if data_receive:
    # Client successfully connected to the server
    print("CLIENT CONNECTED TO SERVER")
    print(data_receive.decode("utf-8"))

    while data_receive:
        # Taking input from the user
        client_input = input().encode("utf-8")

        # Sending the user input to the server
        client_object.send(client_input)

        # Receiving the server's response
        data_receive = client_object.recv(1024)

        if data_receive:
            # Printing the server's response
            print("{}: {}".format("SERVER", data_receive.decode("utf-8")))
