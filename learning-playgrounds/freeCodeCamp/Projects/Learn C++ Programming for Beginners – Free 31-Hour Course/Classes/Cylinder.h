#include "constants.h"

class Cylinder
{
public:
  // Cylinder() = default;
  Cylinder()
  {
    base_radius = 2.0;
    base_height = 2.0;
  }

  Cylinder(double radius, double height)
  {
    base_radius = radius;
    base_height = height;
  }

  double volume()
  {
    return PI * base_radius * base_radius * base_height;
  }

  double get_base_radius()
  {
    return base_radius;
  }

  double get_height()
  {
    return base_height;
  }

  void set_base_radius(double radius)
  {
    base_radius = radius;
  }

  void set_height(double height)
  {
    base_height = height;
  }

private:
  double base_radius;
  double base_height;
};