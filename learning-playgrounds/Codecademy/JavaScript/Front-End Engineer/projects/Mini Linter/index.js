let story =
  'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nack" and it actually stretches all the way from Riverside Park in Manhattan to South Nack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenroom Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ["really", "very", "basically"];

let unnecessaryWords = ["extremely", "literally", "actually"];

const storyWords = story.split(" ");
console.log(storyWords.length);

const betterWords = storyWords.filter(
  (e) => unnecessaryWords.indexOf(e) === -1
);
console.log(betterWords.length);

let overusedWordsCount = 0;

storyWords.forEach((e) => {
  if (overusedWords.includes(e)) {
    overusedWordsCount++;
  }
});
console.log(overusedWordsCount);

const period = story.match(/\./g).length;
const exclamation = story.match(/\!/g).length;
console.log(period + exclamation);

console.log(betterWords.join(" "));
