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
			std::cout << "Promotion denied for " + Name << std::endl;
		}
	}

protected:
	string Name;

private:
	string _Name;
	string Company;
	int Age;
};

class Developer : Employee {
public:
	string Language;
	string Name;
	Developer(string name, string company, int age, string lang)
		: Employee{name, company, age} {
		Name = name;
		Language = lang;
	}

	void BugFix() {
		std::cout << Name << " fixed bug using " << Language << std::endl;
	}
};

class Teacher : public Employee {
public:
	string Subject;

	void PrepareLesson() {
		std::cout << Name << " is preparing " << Subject << " lesson." << std::endl;
	}

	Teacher(string name, string company, int age, string subject)
		: Employee(name, company, age) {
		Subject = subject;
	}
};

int main() {
	std::cout << "Hello world!" << std::endl;

	Employee scott("Scott", "Self", 40);
	scott.Intro();
	std::cout << scott.getAge() << std::endl;
	std::cout << scott.getCompany() << std::endl;
	std::cout << scott.getName() << std::endl;
	scott.AskForPromotion();

	Developer developer("Jon", "Self", 20, "cpp");
	developer.BugFix();

	Teacher teacher = Teacher("Jack", "School", 35, "History");
	teacher.PrepareLesson();
	teacher.AskForPromotion();
	return 0;
}
