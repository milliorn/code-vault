#include <iostream>
#include <string>

using std::string;

class Employee {
public:
	string Name;
	string Company;
	int Age;

	void Intro(string name = "None", string company = "None", int age = 0) {
		std::cout << "My name is " + name << std::endl;
		std::cout << "My company is " + company << std::endl;
		std::cout << "My age is " + std::to_string(age) << std::endl;
	}

	Employee(string name = "None", string company = "None", int age = 0) {
		Name = name;
		Company = company;
		Age = age;
	}

private:
};

int main() {
	std::cout << "Hello world!" << std::endl;
	Employee scott("Scott", "Self", 40);
	scott.Intro();
	scott.Intro(scott.Name, scott.Company, scott.Age);
	return 0;
}
