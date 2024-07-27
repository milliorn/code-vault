import calendar


def leap_year(year):
    is_leap = calendar.isleap(year)
    print("True or false, the year " + str(year) + " a leap year? " + str(is_leap))


input_year = int(input("Type in a year to check if its a leap year: "))
leap_year(input_year)
