meal = 44.50
tax = 6.75 / 100
tip = 15.0 / 100

meal = meal + (meal * tax)
total = meal + (meal * tip)

#https://stackoverflow.com/questions/21208376/converting-float-to-dollars-and-cents
print('${:,.2f}'.format(total))