let story =
	'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';
let overusedWords = ["really", "very", "basically"];
let unnecessaryWords = ["extremely", "literally", "actually"];
const punctuation = ['!', '?', '.'];
/*
In the code editor, there is a string called story. 
We want to gather some information about the individual words and sentences in the string. 
Let’s split the string into individual words and save them in a new array called storyWords.
*/
const storyWords = story.split(' ');

//Log how many words there are in this story to the console.
console.log(storyWords.length);

/*
There is an array of words that are unnecessary. 
Iterate over your array to filter out these words. 
Save the remaining words in an array called betterWords. 
*/
const betterWords = storyWords.filter(x => !unnecessaryWords.includes(x));

/*
There is an array of words called overusedWords. 
You want to let the user of your program know how many times they have used these overused words. 
*/
const overused = betterWords.filter((x) => overusedWords.includes(x)).length;
console.log(`You have ${overused} overused words.`);

//Now, count how many sentences are in the paragraph.
const sentences = story.split(/[.?!]/);
console.log(`There are ${sentences.length - 1} sentences in the paragraph.`);

//Now, log the betterWords array to the console as a single string.
console.log(betterWords.join(" "));