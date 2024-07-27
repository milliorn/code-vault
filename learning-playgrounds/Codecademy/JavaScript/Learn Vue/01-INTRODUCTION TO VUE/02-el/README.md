# el

In making a new Vue app, we gain access to all of the powerful features Vue has to offer. However, we don’t necessarily want all of our HTML to have access to these features. We need to specify to our Vue app which portion of our HTML we want to gain access to our Vue app’s logic.

We do this by adding a key-value pair to the Vue app’s options object. We add a key called el, standing for HTML element, with a value of a CSS selector as a string that will target an element in our HTML and give it access to our Vue app’s functionality.

    // app.js
    const app = new Vue({
        el: '#app'
    });

In the above example, we wanted an HTML element with an ID of app to gain access to our Vue app’s functionality. We added an el key to the options object and made the value '#app', a CSS selector that will target an element with an ID, #, of app.

We then import this JavaScript file into our HTML file so that our Vue app can find the specified HTML element and turn it into a Vue app.

    <!-- index.html -->
    <head>
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js" defer></script>
        <script src="./js/app.js" defer></script>
    </head>
    <body>
        <div id="app">
            <!-- Vue App HTML Code -->
        </div>
    </body>

    In this example, we wrote the HTML that will be turned into a Vue app. Then, in the <head> we imported the file containing the JavaScript from the previous example that will turn the HTML #app <div> element into a Vue app.

    Note: We must import our Vue app code after the <script> that loads Vue.js. Otherwise, we would not yet have access to the Vue library in app.js, making it impossible to create a Vue app. This is also why we add defer to both elements — to ensure Vue has fully loaded when we go to make our Vue app.
