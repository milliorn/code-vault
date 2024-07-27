using System;

internal class Program
{
  private static void Main(string[] args)
  {
    // Initialize variables - graded assignments
    int examAssignments = 5;

    // Define student scores using arrays of arrays
    int[][] studentScores = new int[][]
    {
            new int[] { 90, 86, 87, 98, 100, 94, 90 },
            new int[] { 92, 89, 81, 96, 90, 89 },
            new int[] { 90, 85, 87, 98, 68, 89, 89, 89 },
            new int[] { 90, 95, 87, 88, 96, 96 }
    };

    // Student names
    string[] studentNames = new string[] { "Sophia", "Andrew", "Emma", "Logan" };

    // Write the Report Header to the console
    Console.WriteLine("Student\t\tGrade\tLetter Grade\n");

    // Loop through each student
    for (int i = 0; i < studentNames.Length; i++)
    {
      string currentStudent = studentNames[i];
      int[] currentStudentScores = studentScores[i];

      // Initialize/reset the sum of scored assignments
      int sumAssignmentScores = 0;

      // Initialize/reset the calculated average of exam + extra credit scores
      decimal currentStudentGrade = 0;

      // Initialize/reset a counter for the number of assignment 
      int gradedAssignments = 0;

      // Loop through the scores array and complete calculations for currentStudent
      foreach (int score in currentStudentScores)
      {
        // Increment the assignment counter
        gradedAssignments += 1;

        if (gradedAssignments <= examAssignments)
        {
          // Add the exam score to the sum
          sumAssignmentScores += score;
        }
        else
        {
          // Add the extra credit points to the sum - bonus points equal to 10% of an exam score
          sumAssignmentScores += score / 10;
        }
      }

      currentStudentGrade = (decimal)sumAssignmentScores / examAssignments;

      // Determine the letter grade
      string currentStudentLetterGrade = GetLetterGrade(currentStudentGrade);

      // Display student information
      Console.WriteLine($"{currentStudent}\t\t{currentStudentGrade}\t{currentStudentLetterGrade}");
    }

    // Required for running in VS Code (keeps the Output windows open to view results)
    Console.WriteLine("\nPress the Enter key to continue");
    Console.ReadLine();
  }

  // Helper method to get the letter grade based on the numeric grade
  private static string GetLetterGrade(decimal numericGrade)
  {
    if (numericGrade >= 97)
      return "A+";
    else if (numericGrade >= 93)
      return "A";
    else if (numericGrade >= 90)
      return "A-";
    else if (numericGrade >= 87)
      return "B+";
    else if (numericGrade >= 83)
      return "B";
    else if (numericGrade >= 80)
      return "B-";
    else if (numericGrade >= 77)
      return "C+";
    else if (numericGrade >= 73)
      return "C";
    else if (numericGrade >= 70)
      return "C-";
    else if (numericGrade >= 67)
      return "D+";
    else if (numericGrade >= 63)
      return "D";
    else if (numericGrade >= 60)
      return "D-";
    else
      return "F";
  }
}
