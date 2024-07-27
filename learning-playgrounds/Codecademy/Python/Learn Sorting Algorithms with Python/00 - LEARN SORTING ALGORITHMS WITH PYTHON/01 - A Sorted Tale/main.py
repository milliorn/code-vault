import utils
import sorts

bookshelf = utils.load_books(
    r'C:\Users\scott\Documents\Coding\Tutorials\Codecademy\Python\Learn Sorting Algorithms with Python\00 - LEARN SORTING ALGORITHMS WITH PYTHON\01 - A Sorted Tale\books_small.csv')

# Load the long list of books into a new variable, long_bookshelf.
long_bookshelf = utils.load_books(
    r'C:\Users\scott\Documents\Coding\Tutorials\Codecademy\Python\Learn Sorting Algorithms with Python\00 - LEARN SORTING ALGORITHMS WITH PYTHON\01 - A Sorted Tale\books_large.csv')

# Our sorting algorithms will alter the original bookshelf,
# so create a new copy of this data, bookshelf_v1.
bookshelf_v1 = bookshelf.copy()

# Create another copy of bookshelf as bookshelf_v2.
bookshelf_v2 = bookshelf.copy()


# Define a sort comparison function, by_title_ascending


def by_title_ascending(book_a, book_b):
    return book_a['title_lower'] > book_b['title_lower']

# Define a new comparison function, by_author_ascending,


def by_author_ascending(book_a, book_b):
    return book_a['author_lower'] > book_b['author_lower']

# Create a new comparison function, by_total_length.
# It should return True if the sum of characters in the title and author of book_a is
# “greater than” the sum in book_b and False otherwise.


def by_total_length(book_a, book_b):
    return len(book_a['title_lower']) + len(book_a['author_lower']) > len(book_b['title_lower']) + len(book_b['author_lower'])


# Sort the bookshelf using bubble sort.
# Save the result as sort_1 and print the titles to the console to verify the order.
# Add a for loop to print the titles within the bookshelf.
sort_1 = sorts.bubble_sort(bookshelf, by_title_ascending)

# for book in sort_1:
#    print(book['title_lower'])

# Try sorting the list of books,
# bookshelf_v1 using the new comparison function and bubble sort.
# Save the result as sort_2 and print the authors to the console to verify the order.
sort_2 = sorts.bubble_sort(bookshelf_v1, by_author_ascending)

# for book in sort_2:
#    print(book['author_lower'])

# Perform quicksort on bookshelf_v2 using by_author_ascending.
# This implementation operates on the input directly, so does not return a list.
sorts.quicksort(bookshelf_v2, 0, len(bookshelf_v2) - 1, by_author_ascending)

# Print the authors in bookshelf_v2 to ensure they are now sorted correctly.
# for book in bookshelf_v2:
#    print(book['author_lower'])

# Run bubble sort on long_bookshelf using by_total_length as the comparison function
sorts.bubble_sort(long_bookshelf, by_total_length)
# for book in long_bookshelf:
#    print(len(book['title_lower']) + len(book['author_lower']))

# Comment out the bubble sort attempt and now try quicksort. Does it live up to its name?
sorts.quicksort(long_bookshelf, 0, len(long_bookshelf) - 1, by_total_length)
# for book in long_bookshelf:
#    print(len(book['title_lower']) + len(book['author_lower']))
