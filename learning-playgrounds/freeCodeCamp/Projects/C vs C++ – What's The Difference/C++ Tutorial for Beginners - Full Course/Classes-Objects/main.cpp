#include <iostream>

using namespace std;

class Book {
public:
	string title;
	string author;
	int pages;
};

int main() {
	Book book;
	book.title = "Hello World!";
	book.author = "CPP";
	book.pages = 2;

	cout << book.title << endl;
	cout << book.author << endl;
	cout << book.pages << endl;

	return 0;
}
