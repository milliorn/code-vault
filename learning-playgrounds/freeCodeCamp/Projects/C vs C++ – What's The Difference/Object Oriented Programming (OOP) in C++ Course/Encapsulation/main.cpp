#include <iostream>
#include <string>

using std::string;

class Employee {
public:
	void setName(string name) { Name = name; }

	void setCompany(string company) { Company = company; }

	void setAge(int age) { Age = age; }

	string getName() { return Name; }

	string getCompany() { return Company; }

	int getAge() { return Age; }

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
	string Name;
	string Company;
	int Age;
};

int main() {
	std::cout << "Hello world!" << std::endl;
	Employee scott("Scott", "Self", 40);
	scott.Intro();
	std::cout << scott.getAge() << std::endl;
	std::cout << scott.getCompany() << std::endl;
	std::cout << scott.getName() << std::endl;
	return 0;
}
