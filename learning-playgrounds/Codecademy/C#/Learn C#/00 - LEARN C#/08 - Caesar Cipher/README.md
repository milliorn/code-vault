LEARN C#
Caesar Cipher
By 6 a.m. on Sunday, your team’s project is nearly finished. The Object of Your Affection (the name’s a work in progress) is getting attention from other teams in the hackathon. With one day left, they’re getting desperate. To steal your project idea, your competitors have been reading your team’s emails!

As the team’s C# expert, you have been asked to write a cipher: a tool to encrypt text, making it unreadable to other teams. You’ve decided to implement the Caesar Cipher, which was used by the Roman Empire to encode military secrets.

https://en.wikipedia.org/wiki/Caesar_cipher

To use the cipher, draw the alphabet in a circle like so:

Alphabet with letters arranged in a circle
Take every letter of your message and shift it three places to the right. For example, A becomes D, B becomes E, C becomes F, and “attack” becomes “dwwdfn”.

Shift 3 places to turn A to D
Your teammates can decrypt your message by reversing the process: shift each letter three places to the left.

For this project you’ll need to convert strings to arrays of characters with ToCharArray():

string msgString = "brutus";
char[] msgArray = msgString.ToCharArray();
You’ll also need to convert arrays of characters to strings with Join():

char[] msgArray = new char[] {'b', 'r', 'u', 't', 'u', 's'};
string msgString = String.Join("", msgArray);
The team is counting on you. Let’s get started!
