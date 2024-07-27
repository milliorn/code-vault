# import CountVectorizer from sklearn.feature_extraction.text.
# import MultinomialNB from sklearn.naive_bayes.
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB

from goldman_emma_raw import goldman_docs
from henson_matthew_raw import henson_docs
from wu_tingfang_raw import wu_docs

# Setting up the combined list of friends' writing samples
friends_docs = goldman_docs + henson_docs + wu_docs
# Setting up labels for your three friends
friends_labels = [1] * 154 + [2] * 141 + [3] * 166

# Print out a document from each friend:


mystery_postcard = """
My friend,
From the 10th of July to the 13th, a fierce storm raged, clouds of
freeing spray broke over the ship, incasing her in a coat of icy mail,
and the tempest forced all of the ice out of the lower end of the
channel and beyond as far as the eye could see, but the _Roosevelt_
still remained surrounded by ice.
Hope to see you soon.
"""

# Define bow_vectorizer as an implementation of CountVectorizer.
bow_vectorizer = CountVectorizer()

# Use your newly minted bow_vectorizer to both fit (train) and
# transform (vectorize) all your friends’ writing (stored in the variable friends_docs).
# Save the resulting vector object as friends_vectors.
friends_vectors = bow_vectorizer.fit_transform(friends_docs)

# Create a new variable mystery_vector.
# Assign to it the vectorized form of [mystery_postcard] using the vectorizer’s .transform() method.
mystery_vector = bow_vectorizer.transform([mystery_postcard])

# Implement a Naive Bayes classifier using MultinomialNB. Save the result to friends_classifier.
friends_classifier = MultinomialNB()

# Train friends_classifier on friends_vectors and friends_labels using the classifier’s.fit() method.
friends_classifier.fit(friends_vectors, friends_labels)

# Change predictions value from ["None Yet"] to the classifier’s prediction about which friend wrote the postcard.
# You can do this by calling the classifier’s .predict() method on the mystery_vector.
predictions = friends_classifier.predict(mystery_vector)

mystery_friend = predictions[0] if predictions[0] else "someone else"

# Uncomment the print statement:
print("The postcard was from {}!".format(mystery_friend))
