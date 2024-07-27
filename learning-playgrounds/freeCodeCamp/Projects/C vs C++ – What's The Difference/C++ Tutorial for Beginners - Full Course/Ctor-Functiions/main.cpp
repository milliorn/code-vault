#include <iostream>

using namespace std;

class Book {
public:
	string title;
	string author;
	int pages;

	Book() {
		title = "None";
		author = "None";
		pages = 0;
	}

	Book(string atitle, string aAuthor, int apages) {
		title = atitle;
		author = aAuthor;
		pages = apages;
	}
};

int main() {
	Book book("Hello World", "CPP", 2);

	cout << book.title << endl;
	cout << book.author << endl;
	cout << book.pages << endl;

	Book blank;

	cout << blank.title << endl;
	cout << blank.author << endl;
	cout << blank.pages << endl;
	return 0;
}
