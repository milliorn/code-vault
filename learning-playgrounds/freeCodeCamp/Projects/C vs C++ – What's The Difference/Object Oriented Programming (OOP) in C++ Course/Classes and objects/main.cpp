#include <iostream>

using std::string;
using namespace std;

class Employee {
public:
  std::string Name;
  std::string Company;
  int Age;
};

int main() {
  Employee first;
  cout << "Hello world!" << endl;
  first.Name = "Jon";
  cout << first.Name << endl;
  return 0;
}
