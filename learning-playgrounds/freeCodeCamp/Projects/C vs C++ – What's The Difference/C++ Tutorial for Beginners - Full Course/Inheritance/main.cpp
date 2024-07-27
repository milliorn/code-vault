#include <iostream>

using namespace std;

class Chef {
public:
	void makeChicken() { cout << "Chef made chicken" << endl; }
};

class Italian : public Chef {};

int main() {
	cout << "Hello world!" << endl;
	Chef chef;
	chef.makeChicken();
	Italian italian;
	italian.makeChicken();
	return 0;
}
