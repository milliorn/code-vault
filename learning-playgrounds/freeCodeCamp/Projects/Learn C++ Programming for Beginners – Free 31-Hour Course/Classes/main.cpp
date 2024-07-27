#include "Cylinder.h"
#include "Dog.h"
#include <iostream>

int main()
{
  Cylinder cylinder;

  std::cout << "volume -> " << cylinder.volume() << std::endl;
  std::cout << "radius -> " << cylinder.get_base_radius() << std::endl;
  std::cout << "height -> " << cylinder.get_height() << std::endl;

  cylinder.volume();

  Cylinder *p_cylinder = &cylinder;

  std::cout << "volume -> " << p_cylinder->volume() << std::endl;

  Cylinder *p_cylinder2 = new Cylinder(100, 2);
  std::cout << "volume2 -> " << p_cylinder2->volume() << std::endl;
  std::cout << "radius2 -> " << p_cylinder2->get_base_radius() << std::endl;

  delete p_cylinder2;
  dog_func();

  Dog dog("Frenchie", "Tazz", 1);
  std::cout << "sizeof(size_t) : " << sizeof(size_t) << std::endl;
  std::cout << "sizeof(Dog) : " << sizeof(Dog) << std::endl;

  dog.print_info();
  dog.set_dog_name("Tazzy");

  Dog dog1("Dog1", "Sheperd", 1);
  Dog dog2("Dog2", "Sheperd", 3);
  Dog dog3("Dog3", "Sheperd", 4);
  Dog dog4("Dog4", "Sheperd", 2);

  Cat cat;
  cat.m_name = "Joe";
  std::cout << cat.m_name << std::endl;
  return 0;
}
