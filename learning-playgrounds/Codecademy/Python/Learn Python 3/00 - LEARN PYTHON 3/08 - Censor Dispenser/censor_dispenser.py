import re

# These are the emails you will be censoring.
# The open() function is opening the text file that the emails are contained in
# and the .read() method is allowing us to save their contexts to the following variables:
email_one = open("email_one.txt", "r").read()
email_two = open("email_two.txt", "r").read()
email_three = open("email_three.txt", "r").read()
email_four = open("email_four.txt", "r").read()

# Write a function that can censor a specific word or phrase from a body of text,
# and then return the text.


def censor_words(text, censor):
    if censor.lower() in text:
        text = text.replace(censor, '*' * len(censor))
    return text


# Write a function that can censor not just a specific word or phrase from a body of text,
# but a whole list of words and phrases, and then return the text.
# Mr. Cloudy has asked that you censor all words and phrases from the following list in email_two.
#proprietary_terms = ["she", "personality matrix", "sense of self",
 #                    "self-preservation", "learning algorithm", "her", "herself"]


def censor_words_in_list(text):
    regex = re.compile(
        r'\bshe\b|\bpersonality matrix\b|\bsense of self\b'
        r'|\bself-preservation\b|\blearning algorithms\b|\bher\b|\bherself\b',
        re.IGNORECASE)
    matches = regex.finditer(text)
    # find location of matches in text

    for match in matches:
        # find how many * should be used based on length of match
        span = match.span()[1] - match.span()[0]
        replace_string = '*' * span
        # substitution expression based on match
        expression = r'\b{}\b'.format(match.group())
        text = re.sub(expression, replace_string, text, flags=re.IGNORECASE)
    return text


# Write a function that can censor any occurance of a word from the “negative words” list
# after any “negative” word has occurred twice,
# as well as censoring everything from the list from the previous step as well
# and use it to censor email_three.
negative_words = ["concerned", "behind", "danger", "dangerous", "alarming", "alarmed", "help", "unhappy", "bad", "upset",
                  "awful", "broken", "damage", "damaging", "dismal", "distressed", "distressed", "concerning", "horrible", "horribly", "questionable"]


def censor_excessive_negative_words(email, censor):
    email = censor_words_in_list(email)
    has_occured = False

    lst = str.split(re.sub(r"[^A-Za-z,.()*']", " ", email))

    for y, x in enumerate(lst):
        if x.lower() in negative_words and has_occured == False:
            has_occured = True
            continue
        if x.lower() in negative_words and has_occured == True:
            lst[y] = '*' * len(x)

    result = ' '.join(lst)
    return result

# Write a function that censors not only all of the words from the negative_words and
# proprietary_terms lists, but also censor any words in email_four that come before
# AND after a term from those two lists.


def censor_all_words(email):
    email = censor_words_in_list(email)
    email = censor_excessive_negative_words(email, negative_words)
    lst = email.split(' ')
    i = 0

    while i < len(lst):
        if "*" in lst[i]:
            lst[i - 1] = '*' * len(lst[i - 1])
            lst[i + 1] = '*' * len(lst[i + 1])
            i += 1
        i += 1

    result = ' '.join(lst)
    print(result)
    return result


output = open("output_email_one.txt", "w")
output.write(censor_words(email_one, "learning algorithms"))
output.close()

output = open("output_email_two.txt", "w")
output.write(censor_words_in_list(email_two))
output.close()

output = open("output_email_three.txt", "w")
output.write(censor_excessive_negative_words(email_three, negative_words))
output.close()

output = open("output_email_four.txt", "w")
output.write(censor_all_words(email_four))
output.close()
