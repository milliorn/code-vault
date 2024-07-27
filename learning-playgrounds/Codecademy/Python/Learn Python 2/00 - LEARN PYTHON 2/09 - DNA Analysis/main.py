sample = ['GTA', 'GGG', 'CAC']

# On Line 3, start by adding a method called read_dna. It should take one parameter, called dna_file.
# Inside of the method, create a variable called dna_data and set it equal to an empty string.
# This will be the string that will eventually contain a suspect’s DNA.
# On the next line, still inside of the method, use with to open dna_file in read-only mode, as f.
# We’re using f as short for “file.” Using “file” would not be allowed since it’s a keyword in Python.
# Now that the file is open, add a for loop inside the with block.
# The loop should iterate through each line in f.
# On the next line, inside of the for loop, add line to the empty dna_data using +=.
# Finally, to complete the method, return dna_data on the next line.
# This line of code should align with the first line of indented code in the method (which means it’s not included in the with block).


def read_dna(dna_file):
    dna_data = ""

    with open(dna_file, 'r') as f:
        for line in f:
            dna_data += line

    return dna_data

# Add a new method called dna_codons. It should take one parameter called dna.
# We’ll need an empty list to add the codons to.
# On the next line, inside the method, create an empty list called codons.
# On the next line, add a for loop. The loop should have a range from 0 to the length of dna.
# It should also iterate in increments of 3.
# Inside the for loop, add a line that checks if the iterator, when incremented by 3, exceeds the length of dna.
# On the next line, add to the list using the .append() method.
# Since the iterator i starts at 0, we’ll be adding the first three characters only.
# On the next line, return codons.
# This line of code will have to be written at the level of indentation that aligns with the for loop.


def dna_codons(dna):
    codons = []
    dna_len = len(dna)

    for i in range(0, dna_len, 3):
        if (i + 3) < dna_len:
            codons.append(dna[i:i + 3])

    return codons

# On the next line, add a method called match_dna. It should take one parameter called dna.
# Inside the method, add a variable called matches and set it equal to zero.
# We will increment this variable by 1 every time there is a match.
# On the next line, add a for loop that iterates through the dna list. Call the iterator codon.
# Inside of the for loop, add an if statement that checks if the codon is also in the sample list.
# Inside the if statement, increment matches by 1 using the += operator.
# As the last line of this method, return the matches variable.


def match_dna(dna):
    matches = 0

    for codon in dna:
        if codon in sample:
            matches += 1

    return matches

# Next, add a method called is_criminal that takes a parameter called dna_sample.
# Inside the method, create a variable called dna_data.
# Set it equal to the result of calling the read_dna() method on the dna_sample parameter.
# On the next line, create a variable called codons.
# Set it equal to the result of calling the dna_codons() method with dna_data as the argument.
# On the next line, create a variable called num_matches.
# Set it equal to the result of calling the match_dna() method with codons as the argument.
# Next, add an if statement that checks if the number of matches is greater than or equal to three.
# If the number of matches is greater than or equal to three,
# print out the number of matches using string formatting,
# as well as a message stating that the investigation should continue.
# Add an else block that prints the number of matches using string formatting,
# as well as a message stating the suspect can be freed.


def is_criminal(dna_sample):
    dna_data = read_dna(dna_sample)
    codons = dna_codons(dna_data)
    num_matches = match_dna(codons)

    if num_matches >= 3:
        print("Number of matches is %s.  DNA profile match.  The investigation should continue." % num_matches)
    else:
        print("Number of matches is %s.  Suspect should be freed." % num_matches)


# On the next three lines, outside of any method,
# call the is_criminal() method separately on the three .txt files.
is_criminal('suspect1.txt')
is_criminal('suspect2.txt')
is_criminal('suspect3.txt')

# Ready to find out who the spy is?
# In the terminal, type the following command and hit “Enter” on your keyboard:
# python dna.py
# You should see the analysis run and find out who the spy is!
