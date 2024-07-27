# Data

Now that our Vue app is hooked up to our HTML, we are ready to generate and display dynamic data. As discussed in Introduction to Vue, displaying and updating dynamic data for users is essential functionality for most front-ends.

Most values on the web can change at any moment, such as the number of likes on a post or the current set of posts to display. We call constantly-changing data values like this dynamic data. We need a place to store dynamic data values so that we can still use them in our HTML even when we don’t know what their values will be at any given moment. There are many different ways to do this in Vue.

The simplest way is the data property on the options object. The value of data is an object. Each key-value pair in this object corresponds to a piece of data to be displayed in the template. The key is the name of the data to use in the template and the value is the value to display when the template is rendered.

We then use mustache syntax to display this data in our HTML template.

    const app = new Vue({
    el: '#app',
    data: {
        language: 'Spanish',
        hoursStudied: 274
    }
    });
    
    <div id="app">
    <p>You have been studying {{ language }} for {{ hoursStudied }} hours</p>
    </div>

Looking at this example, we see that two pieces of dynamic data were added to data on our Vue instance: language and hoursStudied with values of 'Spanish' and 274 respectively. These values are then displayed in our template using mustache syntax, displaying the text You have been studying Spanish for 274 hours to our user. If these values are changed later on by our app, such as if the language is changed or the number of hours studied increases, our template will automatically display this new value for the user.
