import numpy as np
import pandas as pd
# import CountVectorizer, TfidfTransformer, TfidfVectorizer
from sklearn.feature_extraction.text import (
    CountVectorizer, TfidfTransformer, TfidfVectorizer)

from articles import articles
from preprocessing import preprocess_text

# print one of the articles and read its contents.
# print(articles[0])

# Preprocess each article in articles and store the processed articles in a list called processed_articles.
# Print out one of the preprocessed articles.
processed_articles = []

for article in articles:
    processed_articles.append(preprocess_text(article))

# Initialize a CountVectorizer object assigned to a variable named vectorizer
# Fit and transform your vectorizer on processed_articles to get the word counts for each article.
# Save the resulting counts to a variable named counts.
vectorizer = CountVectorizer()
counts = vectorizer.fit_transform(processed_articles)

# Initialize a TfidfTransformer object with keyword argument norm=None saved to a variable transformer.
transformer = TfidfTransformer(norm=None)

# Fit and transform your transformer on counts to convert the word counts
# into tf-idf scores for each article.
# Save the resulting tf-idf scores to a variable named tfidf_scores_transformed.
tfidf_scores_transformed = transformer.fit_transform(counts)
tfidvectorizer = TfidfVectorizer(norm=None)

# Fit and transform your vectorizer on processed_articles to calculate the
# tf-idf scores for each article in one step.
# Save the resulting tf-idf scores to a variable named tfidf_scores.
tfidf_scores = tfidvectorizer.fit_transform(processed_articles)

# check if tf-idf scores are equal
if np.allclose(tfidf_scores_transformed.todense(), tfidf_scores.todense()):
    print(pd.DataFrame({'Are the tf-idf scores the same?': ['YES']}))
else:
    print(pd.DataFrame(
        {'Are the tf-idf scores the same?': ['No, something is wrong :(']}))

# get vocabulary of terms
try:
    feature_names = vectorizer.get_feature_names()
except:
    pass

# get article index
try:
    article_index = [f"Article {i+1}" for i in range(len(articles))]
except:
    pass

# create pandas DataFrame with word counts
try:
    df_word_counts = pd.DataFrame(
        counts.T.todense(), index=feature_names, columns=article_index)
    print(df_word_counts)
except:
    pass

# create pandas DataFrame(s) with tf-idf scores
try:
    df_tf_idf = pd.DataFrame(tfidf_scores_transformed.T.todense(
    ), index=feature_names, columns=article_index)
    print(df_tf_idf)
except:
    pass

try:
    df_tf_idf = pd.DataFrame(tfidf_scores.T.todense(),
                            index=feature_names, columns=article_index)
    print(df_tf_idf)
except:
    pass

# get highest scoring tf-idf term for each article
# begin by writing a for loop that iterates a variable i through the values 1 to 10.
# The Pandas Series method .idxmax() is a helpful tool for returning the index of the
# highest value in a DataFrame column.
# We will use this method to find the highest scoring tf-idf term for each article.
# On each pass through the for loop,
# this code will print the index of the term with the highest tf-idf score for that article
# (from Article 1 to Article 10).
for i in range(1, 11):
    print(df_tf_idf[[f'Article {i}']].idxmax())
