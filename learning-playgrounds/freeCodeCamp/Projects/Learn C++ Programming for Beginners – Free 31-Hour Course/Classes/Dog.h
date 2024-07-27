#include <iostream>

struct Cat
{
  std::string m_name;
};

class Dog
{
public:
  std::string m_name;

  Dog() = default;
  Dog(std::string_view name, std::string_view breed, int p_age_param);
  ~Dog();

  void print_info()
  {
    std::cout << "Dog (" << this << ") : [name : " << name << " breed : " << breed << " age : " << *p_age << "]" << std::endl;
  }
  /* Setters */
  void set_dog_name(std::string_view name)
  {
    this->name = name;
  }

private:
  std::string name;
  std::string breed;
  int *p_age{nullptr};
  size_t leg_count;
  size_t arm_count;
};

Dog::Dog(std::string_view dogName, std::string_view dogBreed, int dogAge)
{
  name = dogName;
  breed = dogBreed;
  p_age = new int;
  *p_age = dogAge;
  std::cout << "Dog constructor called -> " << name << " at " << this << std::endl;
}

void dog_func()
{
  Dog dog("Bulldog", "Tazz", 1);
}

Dog::~Dog()
{
  delete p_age;
  std::cout << "Dog destructor called -> " << name << std::endl;
}
