#include <iostream>

using namespace std;

class Movie {
public:
	string title;
	string director;

	Movie(string sTitle, string sDirector, string sRating) {
		title = sTitle;
		director = sDirector;
		setRating(sRating);
	}

	void setRating(string sRating) {
		if (sRating == "G" || sRating == "PG" || sRating == "PG-13" ||
			sRating == "R") {
			rating = sRating;
		} else {
			rating = "NR";
		}
	}

private:
	string rating;
};

int main() { Movie avengers("The Avengers", "Joss Whedon", "PG-13"); }
