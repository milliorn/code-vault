/*
	First, add 'author' to the props array so that our component can accept the username of the tweet’s author as a prop.

    Replace CoderInTraining in the component’s template with a mustache expression that will evaluate to author.
*/
const Tweet = Vue.component('tweet', {
	props: ['message', 'author'],
	template: '<div class="tweet"><h3>{{author}}</h3><p>{{ message }}</p></div>'
	});
