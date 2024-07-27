import re

text = "'To Sleep Or NOT to SLEep, THAT is THe Question'"


def lower_case(text):  # converts everthing to lowercase
    text = text.lower()
    return text


lower_case = lower_case(text)  # calls the function
print(lower_case)

text = ' (to love is to destroy, and to be loved, is to be "the" one <destroyed>} '


def remove_punctuation(text):  # removes punctuation
    punctuation = re.compile(
        r'[{};():,."/<>-]'
    )  # creates a list of punctuation to remove
    text = punctuation.sub("", text)  # removes punctuation
    return text


clean_text = remove_punctuation(text)  # calls the function
print(clean_text)

text = "her fiancé's résumé is beautiful"


def remove_accents(text):
    accents = re.compile("[\u0300-\u036F]|é|è")  # creates a list of accents
    text = accents.sub("e", text)  # removes accents
    return text


clean_text = remove_accents(text)  # calls the function
print(clean_text)
