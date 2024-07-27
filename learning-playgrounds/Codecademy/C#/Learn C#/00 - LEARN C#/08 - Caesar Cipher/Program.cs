using System;

namespace CaesarCipher
{
  class Program
  {
    static void Main(string[] args)
    {
      char[] alphabet = new char[] {'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'};
      
      Console.WriteLine("Type a secret message.");
      string secret = Console.ReadLine();

      while (String.IsNullOrWhiteSpace(secret))
      {
        Console.Write("Sorry, didn't understand.  What is your name?: ");
        secret = Console.ReadLine();
      }

      char[] secretMessage = secret.ToCharArray();   
      char[] encryptedMessage = new char[secretMessage.Length];
      
      for (int i = 0; i < secretMessage.Length; i++) 
      {
        int position = Array.IndexOf(alphabet, secretMessage[i]);
        int letterPosition = (position += 3) % 26;
        encryptedMessage[i] = alphabet[alphabet[letterPosition] - 97];        
      }
      
      string msgString = String.Join("", encryptedMessage);
      Console.WriteLine(msgString);
    }
  }
}
