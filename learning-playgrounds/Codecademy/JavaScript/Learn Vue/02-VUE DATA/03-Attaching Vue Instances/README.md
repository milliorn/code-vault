# Attaching Vue Instances

The first property you will usually need to add to your Vue app’s options object is el. The el property corresponds to the HTML element that should be turned into a Vue app. The value of this key is a string containing a CSS selector that targets a single element in your HTML file. As a result, it is a good idea to always use an ID for this selector.

    <div id="app"></div>
    const app = new Vue({ el: '#app' });

    In this example, we added a <div> element with an ID of app to our HTML file that will surround all of the HTML of our Vue app.

We then added an el attribute to our Vue app’s options object with a value of '#app'. This will find the element with an ID of app in the HTML file and transform it into a Vue app.

    Adding a <div> that surrounds the template code of a Vue app and then using that <div> as the value of el is common practice in setting up a Vue app.
