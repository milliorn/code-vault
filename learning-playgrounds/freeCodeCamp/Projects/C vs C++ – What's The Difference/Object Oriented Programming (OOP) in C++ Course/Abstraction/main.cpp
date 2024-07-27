#include <iostream>
#include <string>

using std::string;

class IEmployee {
	virtual void AskForPromotion() = 0;
};

class Employee : IEmployee {
public:
	void setName(string name) { Name = name; }

	void setCompany(string company) { Company = company; }

	void setAge(int age) { Age = age; }

	string getName() { return Name; }

	string getCompany() { return Company; }

	int getAge() { return Age; }

	Employee(string name = "None", string company = "None", int age = 0) {
		Name = name;
		Company = company;
		Age = age;
	}

	void Intro(string name = "None", string company = "None", int age = 0) {
		std::cout << "My name is " + name << std::endl;
		std::cout << "My company is " + company << std::endl;
		std::cout << "My age is " + std::to_string(age) << std::endl;
	}

	void AskForPromotion() {
		if (Age > 30) {
			std::cout << Name << " was promoted!" << std::endl;
		} else {
			std::cout << "Promotion denied for " << Name << std::endl;
		}
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
	scott.AskForPromotion();
	return 0;
}
