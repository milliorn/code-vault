from PyDictionary import PyDictionary

dictionary = PyDictionary()


def word_dictionary(text):
    return dictionary.meaning(text)


word = input("Type in a word to get its meaning from a dictionary: ")
print(word_dictionary(word))
