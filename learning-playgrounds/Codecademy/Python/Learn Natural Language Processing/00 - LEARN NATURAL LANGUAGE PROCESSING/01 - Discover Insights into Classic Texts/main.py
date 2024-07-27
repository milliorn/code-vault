from nltk import RegexpParser, pos_tag

from chunk_counters import np_chunk_counter, vp_chunk_counter
from tokenize_words import word_sentence_tokenize

# Import the text of your choosing, convert it to lowercase,
# and name it text using the following line of code
text = open("dorian_gray.txt", encoding='utf-8').read().lower()

# Provided to you in the code editor is a customized function word_sentence_tokenize() that
# will sentence tokenize a text and then word tokenize each sentence,
# returning a list of word tokenized sentences.
# Call the function with text as an argument and save the result to a variable named
# word_tokenized_text.
word_tokenized_text = word_sentence_tokenize(text)

# Save any word tokenized sentence in word_tokenized_text to a variable named single_word_tokenized_sentence.
# Print single_word_tokenized_sentence as a check to visualize what you have done so far!
single_word_tokenized_sentence = word_tokenized_text[0]
print(single_word_tokenized_sentence)

# create a list to hold that will hold each part-of-speech tagged sentence from the novel.
pos_tagged_text = []

# create a for loop through each word tokenized sentence here
# part-of-speech tag each sentence and append to list of pos-tagged sentences here

for word in word_tokenized_text:
    pos_tagged_text.append(pos_tag(word))

# store and print any part-of-speech tagged sentence here
single_pos_sentence = pos_tagged_text[0]
print(single_pos_sentence)

# Begin by defining a piece of chunk grammar np_chunk_grammar that will chunk a noun phrase.
# Remember, a noun phrase consists of an optional determiner DT,
# followed by any number of adjectives JJ, followed by a noun NN.
np_chunk_grammar = "NP: {<DT>?<JJ>*<NN>}"

# Create a nltk RegexpParser object named np_chunk_parser
# using the noun phrase chunk grammar you defined as an argument.
np_chunk_parser = RegexpParser(np_chunk_grammar)

# Define a piece of chunk grammar named vp_chunk_grammar
# that will chunk a verb phrase of the following form: noun phrase, followed by a verb VB,
# followed by an optional adverb RB.
vp_chunk_grammar = "VP: {<DT>?<JJ>*<NN><VB.*><RB.?>?}"

# Create a nltk RegexpParser object named vp_chunk_parser using the verb phrase chunk grammar
# you defined as an argument.
vp_chunk_parser = RegexpParser(vp_chunk_grammar)

# Create two empty lists np_chunked_text and vp_chunked_text
# that will hold the chunked sentences from your text.
np_chunked_text = []
vp_chunked_text = []

# Loop through each part-of-speech tagged sentence in pos_tagged_text and
# noun phrase chunk each sentence using your RegexpParser‘s .parse() method.
# Append the result to np_chunked_text.

# Within the same loop you defined in the previous task,
# verb phrase chunk each part-of-speech tagged sentence using your RegexpParser‘s .parse() method.
# Append the result to vp_chunked_text.
for word in pos_tagged_text:
    np_chunked_text.append(np_chunk_parser.parse(word))
    vp_chunked_text.append(vp_chunk_parser.parse(word))

# Call np_chunk_counter() with np_chunked_text as an argument and save the result to a variable
# named most_common_np_chunks.
# Print most_common_np_chunks.
most_common_np_chunks = np_chunk_counter(np_chunked_text)
print(most_common_np_chunks)

# Call vp_chunk_counter() with vp_chunked_text as an argument and save the result to
# a variable named most_common_vp_chunks.
# Print most_common_vp_chunks.
most_common_vp_chunks = vp_chunk_counter(vp_chunked_text)
print(most_common_vp_chunks)
