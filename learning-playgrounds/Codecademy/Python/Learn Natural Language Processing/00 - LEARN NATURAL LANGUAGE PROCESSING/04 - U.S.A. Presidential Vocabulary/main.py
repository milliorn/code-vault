import os

import gensim
import spacy
from president_helper import (get_president_sentences,
                              get_presidents_sentences, merge_speeches,
                              most_frequent_words, process_speeches, read_file)

# get list of all speech files
files = sorted([file for file in os.listdir() if file[-4:] == '.txt'])

# Print files to view the names of each inauguration speech file.
print(files)
print()
# read each speech file
# Call read_file() on each file in files,
# and save all the resulting string versions to a list named speeches.
speeches = [read_file(file) for file in files]

# preprocess each speech
# Call process_speeches() with speeches as an argument and
# save the resulting list to processed_speeches.
processed_speeches = process_speeches(speeches)

# merge speeches
# Call merge_speeches() on processed_speeches and save the result to all_sentences.
all_sentences = merge_speeches(processed_speeches)

# view most frequently used words
# Call most_frequent_words() with all_sentences as an argument and
# save the result to most_freq_words. Print most_freq_words to the terminal.
most_freq_words = most_frequent_words(all_sentences)
print(most_freq_words)
print()

# create gensim model of all speeches
all_prez_embeddings = gensim.models.Word2Vec(
    all_sentences, size=96, window=5, min_count=1, workers=2, sg=1)

# view words similar to freedom
# Find the top 20 words that are used in similar contexts to “freedom”,
# and save the results to a variable named similar_to_freedom.
# Print similar_to_freedom to the terminal.
similar_to_freedom = all_prez_embeddings.most_similar('freedom', topn=20)
print(similar_to_freedom)
print()

# Pick a word from most_freq_words and
# find other words that are used similarly.
# Are you surprised by the words that are used in the same contexts?
similar_to_government = all_prez_embeddings.most_similar('government', topn=20)
print(similar_to_government)
print()

# get President Roosevelt sentences
# Call get_president_sentences() with "franklin-d-roosevelt" as an argument and
# save the result to roosevelt_sentences.
roosevelt_sentences = get_president_sentences("franklin-d-roosevelt")

# view most frequently used words of Roosevelt
# Call most_frequent_words() with roosevelt_sentences as an argument and
# save the result to roosevelt_most_freq_words.
# Print roosevelt_most_freq_words to the terminal.
roosevelt_most_freq_words = most_frequent_words(roosevelt_sentences)
print(roosevelt_most_freq_words)
print()

# create gensim model for Roosevelt
roosevelt_embeddings = gensim.models.Word2Vec(
    roosevelt_sentences, size=96, window=5, min_count=1, workers=2, sg=1)

# view words similar to freedom for Roosevelt
# Find the top 20 words that are used in similar contexts to “freedom”,
# and save the results to a variable named roosevelt_similar_to_freedom
# Print roosevelt_similar_to_freedom to the terminal.
roosevelt_similar_to_freedom = all_prez_embeddings.most_similar(
    'freedom', topn=20)
print(similar_to_freedom)
print()

# get sentences of multiple presidents
# function get_presidents_sentences() that takes a list of multiple presidents’ names as an
# argument and returns a list of processed sentences from every inaugural address given by the
# group of presidents.
rushmore_prez_sentences = get_presidents_sentences(
    ["washington", "jefferson", "lincoln", "theodore-roosevelt"])

# view most frequently used words of presidents
# Call most_frequent_words() with rushmore_prez_sentences as an argument and
# save the result to rushmore_most_freq_words.
# Print rushmore_most_freq_words to the terminal.
rushmore_most_freq_words = most_frequent_words(rushmore_prez_sentences)
print(rushmore_most_freq_words)
print()

# create gensim model for the presidents
rushmore_embeddings = gensim.models.Word2Vec(
    rushmore_prez_sentences, size=96, window=5, min_count=1, workers=2, sg=1)

# view words similar to freedom for presidents
# Find words that are used in similar contexts to “freedom”,
# and save the results to a variable named rushmore_similar_to_freedom.
rushmore_similar_to_freedom = rushmore_embeddings.most_similar(
    'freedom', topn=20)

# Pick a word from rushmore_most_freq_words and find other words that are used similarly.
rushmore_similar_to_government = rushmore_embeddings.most_similar(
    'government', topn=20)
print(rushmore_similar_to_government)
print()
