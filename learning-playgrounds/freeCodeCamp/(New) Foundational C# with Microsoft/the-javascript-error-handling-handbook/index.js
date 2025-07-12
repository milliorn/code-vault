import chalk from 'chalk';

class ValidationError extends Error {
  constructor(field, message) {
    super(message);
    this.name = 'ValidationError';
    this.field = field;
    this.message = message;
    this.stack = (new Error()).stack;
    this.timestamp = new Date();
    this.code = 'VALIDATION_ERROR';
    this.userMessage = `Invalid input for ${field}: ${message}`;
    this.suggestedFix = `Please check the input for ${field} and try again.`;
    this.logError();
  }
}

function validateUser(user) {
  if (!user.email.includes('@')) {
    throw new ValidationError('email', 'Email must contain "@" symbol');
  }

  if (!user.age || user.age < 10) {
    throw new ValidationError('age', 'Age must be at least 18');
  }
  if (!user.name || user.name.length < 3) {
    throw new ValidationError('name', 'Name must be at least 3 characters long');
  }
  return 'User is valid';
}

function checkingUserAge(age) {
  if (age < 18) {
    throw new Error('User is under 18 years old');
  }
  return 'User is an adult';
}

try {
  console.log(chalk.blue('Hello, world!'));

  // Simulate an error for demonstration purposes
  console.log(chalk.green("Validating user..."))
  console.log(chalk.green("Checking user age..."));
  let result = checkingUserAge(16); // This will throw an error
  console.log(chalk.green(result));
  // nonExistentFunction(); // This will throw a ReferenceError
  result = validateUser({ email: 'wrongformatemail.com', age: 15, name: 'Jo' });
  console.log(chalk.green(result));
} catch (error) {
  console.error(chalk.red('Error name:'), error.name);
  console.error(chalk.red('Error message:'), error.message);
  console.error(chalk.red('Error Stack trace:\n') + error.stack || 'No stack trace available');
  console.error(chalk.red("Custom Error Thrown ->"), `${error.name}: ${error.message}`);

  if (error instanceof ValidationError) {
    console.error(chalk.red(`Validation Error for field "${error.field}": ${error.userMessage}`));
    console.error(chalk.red(`Suggested fix: ${error.suggestedFix}`));
  } else {
    console.error(chalk.red('An unexpected error occurred.'), error);
  }
}