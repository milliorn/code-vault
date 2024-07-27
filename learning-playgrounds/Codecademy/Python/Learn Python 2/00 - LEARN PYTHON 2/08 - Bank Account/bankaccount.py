# On line 1, create a BankAccount class.
# Next, add a member variable called balance and set it equal to 0.
# This will represent the starting balance of any new BankAccount object.
# Add the __init__() method that takes the default self parameter and an additional name parameter.
# Later, we’ll use the name parameter to specify who the account belongs to.
# Inside the __init__() method, assign the self.name property to the name parameter that the method accepts.
# Next, add a __repr__() method that takes the default self parameter.
# In the __repr__() method, return a message stating who the account belongs to.
# The message should also include the balance, limited to two decimal places.
# Use string formatting to complete the message.
# Since printing an object isn’t always useful,
# let’s add a method called show_balance() that will print just the balance.
# It should accept the default self parameter.
# On the next line, use string formatting to print the user’s balance to two decimal places.
# Next, let’s add a method that allows deposits to the bank account.
# Add a method called deposit() that takes the default parameter, as well as an amount parameter.
# Add an if statement that checks if amount is less than or equal to zero.
# Inside of the statement, print an appropriate error message. Then, on the next line, return.
# Add a corresponding else block. Inside of the else block,
# print a message that displays the amount that the user is depositing.
# Use string formatting and print only to two decimal places.
# Increment the user’s balance using the += operator.
# On the next line, display the new balance to the user by calling the show_balance() method.
# Add a new method called withdraw(). It should take the default parameter, as well as an amount parameter.
# On the next line, add an if statement that checks if amount is greater than the balance.
# Inside the statement, print an appropriate error message. Then on the next line, return.
# First, add a corresponding else block.
# Then, add a line that prints the amount that the user is withdrawing.
# Use string formatting and print the amount to two decimal places.
# On the next line, decrement the balance by the amount using the -= operator.
# On the next line, display the user’s balance by calling the show_balance() method.


class BankAccount(object):
    balance = 0

    def __init__(self, name):
        self.name = name

    def __repr__(self):
        return "Account Name: %s\nAccount Balance: $%.2f" % (self.name, self.balance)

    def show_balance(self):
        print("Account Balance: $%.2f" % (self.balance))

    def deposit(self, amount):
        if amount <= 0:
            print("ERROR: Cannot deposit zero amount of funds.")
            return
        else:
            print("$%.2f deposited." % (amount))
            self.balance += amount
            self.show_balance()

    def withdraw(self, amount):
        if amount >= self.balance:
            print("ERROR: Cannot withdraw more than your balance")
        else:
            print("Withdrawing $%.2f" % (amount))
            self.balance -= amount
            self.show_balance()


# Outside of any function, at the bottom of your file,
# create a BankAccount object called my_account and specify a name (as a string) for the argument.
my_account = BankAccount("Scott")

# On the next line, print the my_account object.
print(my_account)

# On the next line, call the show_balance() method on my_account.
my_account.show_balance()

# Next, deposit 2000 dollars to my_account using the deposit() method.
my_account.deposit(2000)

# Let’s make sure the withdraw() function works.
# On the next line, withdraw 1000 dollars from my_account using the withdraw() method.
my_account.withdraw(1000)

# As the last line of code, print the my_account object once again.
print(my_account)

# Now it’s time to see the results of our class. Make sure that you have saved your code.
# Then, in the terminal, type the following and hit “Enter” on your keyboard:
# python bankaccount.py
# The console should show, in order:
# The bank account’s initial information
# The balance
# The deposit (along with the balance)
# The withdrawal (along with the balance)
# The bank account’s most recent information
