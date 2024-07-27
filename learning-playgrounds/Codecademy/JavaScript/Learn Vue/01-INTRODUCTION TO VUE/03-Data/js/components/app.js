/*
	Let’s start by creating a new Vue app.
	In app.js, add the following code to create a new Vue app instance:

	Add an el key to our Vue app’s options object and a value corresponding to the #app HTML element.
*/
const app = new Vue({
	el: '#app',
	data: {
		username: 'CoderInTraining',
		newTweet: '',
		tweets: [
		'Started learning to code today. Wish me luck!',
		'Okay, I learned HTML, CSS, and JavaScript. But, how do I combine them together?? Send help.',
		'Today I start learning Vue. I got this.'
			],
		bio: 'Excited future software engineer.'
	}
});
