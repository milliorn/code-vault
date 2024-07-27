#include <iostream>
#include <string>

using std::string;

class Employee {
public:
	string Name;
	string Company;
	int Age;

	void Intro(std::string name = "John", std::string company = "None",
		int age = 1) {
		std::cout << "My name is " + name << std::endl;
		std::cout << "My company is " + company << std::endl;
		std::cout << "My age is " + std::to_string(age) << std::endl;
	}
};

int main() {
	std::cout << "Hello world!" << std::endl;

	Employee scott;
	scott.Age = 40;
	scott.Company = "Self";
	scott.Name = "Scott";

	scott.Intro();
	scott.Intro(scott.Name, scott.Company, scott.Age);

	return 0;
}
