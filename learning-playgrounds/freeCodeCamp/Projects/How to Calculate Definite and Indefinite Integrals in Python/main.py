# Import the integrate submodule from scipy
from scipy import integrate
# Import the sin, cos, and pi functions from numpy
from numpy import sin, log, inf, exp
from sympy import Symbol, integrate as integrate_sympy, sin as sin_sympy

# Elementary Function


def integral_x_squared(x):
    return x**2


result, error = integrate.quad(integral_x_squared, 0, 1)
print(result)  # Output the result of the definite integral
# (0.33333333333333337, 3.700743415417189e-15)
# The first number is the result of the definite integral
# The second number is the estimated error of the result


def integrand(x):
    return (x+1)/x**2


print(integrate.quad(integrand, 1, 2))
# (1.1931471805599452, 1.3246594716242401e-14)

# Other Common Functions


def sin_integrand(x):
    return log(sin(x))


print(integrate.quad(sin_integrand, 0, 2))
# (-1.1022223889049558, 1.2237126744196256e-15)

# How to Use Constants


def definite_integral(x):
    return exp(-x)


print(integrate.quad(definite_integral, 0, inf))
# (1.0000000000000002, 5.842606742906004e-11)

# Double Integrals


def double_integrand(x, y):
    return x*y**2


print(integrate.dblquad(double_integrand, 0, 1, lambda x: 0, lambda x: 2))
print(integrate.dblquad(double_integrand, 0, 1, 2, 4))

# Variable Limits


def upper_limit_y(x):
    return x**2


def lower_limit_y(x):
    return x


def variable_limits(y, x):
    return x+y


print(integrate.dblquad(variable_limits, 0, 2, lower_limit_y, upper_limit_y))

# Triple Integrals


def triple_integrand(x, y, z):
    return z*(x+y+z)


print(integrate.tplquad(triple_integrand, 0, 1, lambda x: 0,
                        lambda x: 2, lambda x, y: 0, lambda x, y: 1))

print(integrate.tplquad(triple_integrand, 0, 1, 4, 5, 0, 1))
# (2.8333333333333335, 3.6983326566167174e-14)

# How to Evaluate Single Variable Indefinite Integrals

x = Symbol('x')
print(integrate_sympy(x**2, x))
# (x**3)/3

print(integrate_sympy(sin_sympy(x), x))
# -cos(x)
