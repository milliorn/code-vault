#include <iostream>

using namespace std;

class Student {
public:
  string name;
  string major;
  double gpa;

  Student(string sName, string sMajor, double dGpa) {
    name = sName;
    major = sMajor;
    gpa = dGpa;
  }

  bool hasHonors() { return gpa > 3.5; }
};

int main() {
  Student jim("Jim", "Business", 2.4);
  Student pam("Pam", "Art", 3.6);

  cout << jim.hasHonors() << endl;
  return 0;
}
