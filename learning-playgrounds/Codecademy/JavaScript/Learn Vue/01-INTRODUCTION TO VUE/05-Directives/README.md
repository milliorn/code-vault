# Templates

As a reminder, we need the following tools to display dynamic information in our Vue app:

A place to store the data we will be displaying
A syntax for displaying that information
We now know that we store our dynamic information on the .data attribute of our Vue app options object, but how do we display that information if it potentially will keep changing values?

Vue makes use of templating meaning that the developer specifies certain content in our HTML isn’t meant to be displayed literally but rather substituted out with the appropriate data from the app. We specify which content inside our HTML should be substituted by surrounding it in two layers of curly brackets, like so:

    <div id="app">
    <h2>Hello, {{ username }}</h2>
    </div>

In this example, {{ username }} will be filled in with the value of username from the Vue app’s .data object when the page is rendered to the user. If the value of username changes, the value displayed to the user will be changed as well.

This type of HTML code, where dynamic data is stubbed out, is called a template. Templates contain all of the hard-coded information displayed on the site but specify places where dynamic information needs to be filled in.

Using curly brackets for templating in HTML was popularized by a framework called mustache. As a result, curly braces in templates are often called “mustaches.” Whenever you want to display information from the Vue app’s data, you wrap the name of the .data property in two sets of mustaches (curly brackets) and the expression will be replaced with the Vue data information for the end user to see.

This is far easier to read and write than trying to write vanilla JavaScript that selects specific HTML elements and updates their content dynamically. Using the .data attribute and mustache templates is yet another way Vue makes front-end web development faster to write, easier to read, and less error-prone.
