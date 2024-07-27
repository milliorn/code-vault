# Computed Properties

We can use the values in the data object with the mustache templating syntax to display information in our HTML. Doing this requires named data to be stored in the data object, but some data can be calculated based on information already stored and doesn’t require it’s own key-value pair in the data object.

For example, if I know a month, April for example, I can calculate the season, spring, in response. Trying to store these values separately on data would require us to constantly update one whenever the other changes, potentially allowing the values to get out of sync from each other if we’re not careful. Vue allows us to store data that can be calculated using values from the data object at a separate property called computed.

Instead of storing computed data as key-value pairs in our data object, we store key-value pairs in a separate computed object. Each key in the computed object is the name of the property and the value is a function that can be used to generate a value rather than a specific value.

    const app = new Vue({
    el: '#app',
    data: {
        hoursStudied: 274
    },
    computed: {
        languageLevel: function() {
        if (this.hoursStudied < 100) {
            return 'Beginner';
        } else if (this.hoursStudied < 1000) {
            return 'Intermediate';
        } else {
            return 'Expert';
        }
        }
    }
    });
    <div id="app">

    <p>You have studied for {{ hoursStudied }} hours. You have {{ languageLevel }}-level mastery.</p>
    </div>

In this example, we need to know how many hours the user has studied in order to determine their language mastery. The number of hours is known, so we store it in data. However, we need to use hoursStudied in order to compute languageLevel, so languageLevel must be stored in computed.

The Vue app determines the value of languageLevel using the provided function. In this case, hoursStudied is 274, so languageLevel will be 'Intermediate'. The template will display You have studied for 274 hours. You have Intermediate-level mastery.. If numberOfHours were to change, languageLevel would automatically be recomputed as well.

In order to reference a value from data in this function, we treat that value as an instance property using this. followed by the name of the data — in our example, this.hoursStudied.

Finally, in order to display computed values in our template, we use mustaches surrounding the name of the computed property just as we did for data.
