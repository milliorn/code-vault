﻿using System;

class Program
{
  static void Main()
  {
    // Store the values in variables
    string name = "Bob";
    int inboxCount = 3;
    double temperature = 34.4;

    // Display the message
    Console.Write("Hello, ");
    Console.Write(name);
    Console.Write("! You have ");
    Console.Write(inboxCount);
    Console.Write(" in your inbox. The temperature is ");
    Console.Write(temperature);
    Console.WriteLine(" celsius.");

    string projectName = "ACME";

    string russianMessage = "\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0440\u0443\u0441\u0441\u043a\u0438\u0439 \u0432\u044b\u0432\u043e\u0434";

    Console.WriteLine("View English output:");
    Console.WriteLine($"  c:\\Exercise\\{projectName}\\data.txt\n");

    Console.WriteLine(russianMessage + ":");
    Console.WriteLine($"  c:\\Exercise\\{projectName}\\ru-RU\\data.txt");

    int result = 3 + 1 * 5 / 2;
    Console.WriteLine(result);

    int sum = 7 + 5;
    int difference = 7 - 5;
    int product = 7 * 5;
    int quotient = 7 / 5;

    Console.WriteLine("Sum: " + sum);
    Console.WriteLine("Difference: " + difference);
    Console.WriteLine("Product: " + product);
    Console.WriteLine("Quotient: " + quotient);

    // Order of operations
    // Parentheses (whatever is inside the parenthesis is performed first)
    // Exponents
    // Multiplication and Division (from left to right)
    // Addition and Subtraction (from left to right)

    int fahrenheit = 94;
    decimal celsius = (fahrenheit - 32m) * (5m / 9m);
    Console.WriteLine("The temperature is " + celsius + " Celsius.");

    Console.WriteLine("Windows " + 7 + 4);
    Console.WriteLine("Windows " + 11);
    Console.Write("Windows " + 1 + 1);
    Console.WriteLine("");
    Console.WriteLine(5 / 10);

    int currentAssignments = 5;

    int sophia1 = 93;
    int sophia2 = 87;
    int sophia3 = 98;
    int sophia4 = 95;
    int sophia5 = 100;

    int nicolas1 = 80;
    int nicolas2 = 83;
    int nicolas3 = 82;
    int nicolas4 = 88;
    int nicolas5 = 85;

    int zahirah1 = 84;
    int zahirah2 = 96;
    int zahirah3 = 73;
    int zahirah4 = 85;
    int zahirah5 = 79;

    int jeong1 = 90;
    int jeong2 = 92;
    int jeong3 = 98;
    int jeong4 = 100;
    int jeong5 = 97;

    int sophiaSum = sophia1 + sophia2 + sophia3 + sophia4 + sophia5;
    int nicolasSum = nicolas1 + nicolas2 + nicolas3 + nicolas4 + nicolas5;
    int zahirahSum = zahirah1 + zahirah2 + zahirah3 + zahirah4 + zahirah5;
    int jeongSum = jeong1 + jeong2 + jeong3 + jeong4 + jeong5;

    decimal sophiaScore = (decimal)sophiaSum / currentAssignments;
    decimal nicolasScore = (decimal)nicolasSum / currentAssignments;
    decimal zahirahScore = (decimal)zahirahSum / currentAssignments;
    decimal jeongScore = (decimal)jeongSum / currentAssignments;

    Console.WriteLine("Student\t\tGrade\n");
    Console.WriteLine("Sophia:\t\t" + sophiaScore + "\tA");
    Console.WriteLine("Nicolas:\t" + nicolasScore + "\tB");
    Console.WriteLine("Zahirah:\t" + zahirahScore + "\tB");
    Console.WriteLine("Jeong:\t\t" + jeongScore + "\tA");

    string studentName = "Sophia Johnson";
    string course1Name = "English 101";
    string course2Name = "Algebra 101";
    string course3Name = "Biology 101";
    string course4Name = "Computer Science I";
    string course5Name = "Psychology 101";

    int course1Credit = 3;
    int course2Credit = 3;
    int course3Credit = 4;
    int course4Credit = 4;
    int course5Credit = 3;

    int gradeA = 4;
    int gradeB = 3;

    int course1Grade = gradeA;
    int course2Grade = gradeB;
    int course3Grade = gradeB;
    int course4Grade = gradeB;
    int course5Grade = gradeA;

    int totalCreditHours = 0;
    totalCreditHours += course1Credit;
    totalCreditHours += course2Credit;
    totalCreditHours += course3Credit;
    totalCreditHours += course4Credit;
    totalCreditHours += course5Credit;

    int totalGradePoints = 0;
    totalGradePoints += course1Credit * course1Grade;
    totalGradePoints += course2Credit * course2Grade;
    totalGradePoints += course3Credit * course3Grade;
    totalGradePoints += course4Credit * course4Grade;
    totalGradePoints += course5Credit * course5Grade;

    decimal gradePointAverage = (decimal)totalGradePoints / totalCreditHours;

    int leadingDigit = (int)gradePointAverage;
    int trailingDigits = (int)(gradePointAverage * 100) - (leadingDigit * 100);

    Console.WriteLine($"Student: {studentName}\n");
    Console.WriteLine("Course\t\t\t\tGrade\tCredit Hours");

    Console.WriteLine($"{course1Name}\t\t\t{course1Grade}\t\t{course1Credit}");
    Console.WriteLine($"{course2Name}\t\t\t{course2Grade}\t\t{course2Credit}");
    Console.WriteLine($"{course3Name}\t\t\t{course3Grade}\t\t{course3Credit}");
    Console.WriteLine($"{course4Name}\t{course4Grade}\t\t{course4Credit}");
    Console.WriteLine($"{course5Name}\t\t{course5Grade}\t\t{course5Credit}");

    Console.WriteLine($"\nFinal GPA:\t\t\t{leadingDigit}.{trailingDigits}");
  }
}
