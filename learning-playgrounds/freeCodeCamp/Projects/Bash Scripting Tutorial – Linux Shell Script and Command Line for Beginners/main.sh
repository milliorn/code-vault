#!/bin/bash

ps # Display process information
echo -e "\n"
echo "Today is $(date)" # Print the current date and time
echo -e "\n"
pwd # Print the current working directory
echo -e "\n"
ls # List files and directories in the current directory
echo -e "\n"
echo "Hello World" # Print "Hello World" message
echo -e "\n"
which bash # Print the path to the Bash executable
echo -e "\n"
chmod u+x main.sh                       # Give the user permission to execute the script
country="USA"                           # Assign the value "USA" to the variable country
same_country=$country                   # Assign the value of country to the variable same_country
echo "The value of country is $country" # Print the value of country
echo -e "\n"
while [ $country == "USA" ]; do # While the value of country is "USA"
  echo "I am from $country"     # Print "I am from USA"
  break                         # Exit the loop
done
echo -e "\n"                                                    # Print a new line
input_file="./input.txt"                                        # Assign the path to the file input.txt to the variable input_file
if [ ! -f "$input_file" ]; then                                 # If the file input.txt does not exist
  echo "Error: $input_file not found in the current directory." # Print an error message
  exit 1                                                        # Exit the script
fi                                                              # End if statement

generate_lorem_ipsum() {
  echo "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit diam eget risus suscipit, vitae rutrum nisi ultricies. Nulla non nulla vestibulum, pulvinar massa quis, rutrum est. Nam a justo eget nisi aliquet aliquam. Morbi eu convallis ipsum. Phasellus vulputate, sem ut iaculis tempor, turpis sapien placerat urna, non mattis ex libero a turpis. Integer feugiat odio sit amet odio consectetur, vel placerat urna tempor. Curabitur vitae tortor vitae leo scelerisque eleifend. Quisque facilisis tortor dui, vel euismod lacus mollis nec. Suspendisse eu mauris vitae nisi aliquet vulputate et vitae turpis. Maecenas malesuada sem nec diam volutpat cursus. Sed scelerisque augue ac dolor auctor, a consectetur lectus efficitur. Sed et enim sit amet velit interdum tincidunt. Vivamus pellentesque auctor urna vel posuere. Nam id malesuada elit, at semper est."
}

generate_lorem_ipsum >"$input_file" # Save the generated Lorem Ipsum text to input.txt

while IFS= read -r line; do # Read each line of the file input.txt
  echo "$line"              # Print the line
done <"$input_file"         # End while loop
