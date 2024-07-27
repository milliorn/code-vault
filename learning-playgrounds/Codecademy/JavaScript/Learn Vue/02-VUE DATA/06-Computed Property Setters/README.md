# Computed Property Setters

Being able to generate computed properties based on data is super useful. But why limit ourselves by only allowing this data flow to only go one way?

Vue allows us to not only determine computed values based on data values but to also update the necessary data values if a computed value ever changes! This allows our users to potentially edit computed values in the front-end and have all of the corresponding data properties get changed in response so that the computed property will re-calculate to the user’s chosen value.

    const app = new Vue({
    el: '#app',
    data: {
        hoursStudied: 274
    },
    computed: {
        languageLevel: {
        get: function() {
            if (this.hoursStudied < 100) {
            return 'Beginner';
            } else if (this.hoursStudied < 1000) {
            return 'Intermediate';
            } else {
            return 'Expert';
            }
        },
        set: function(newLanguageLevel) {
            if (newLanguageLevel === 'Beginner') {
            this.hoursStudied = 0;
            } else if (newLanguageLevel === 'Intermediate') {
            this.hoursStudied = 100;
            } else if (newLanguageLevel === 'Expert') {
            this.hoursStudied = 1000;
            }
        }
        }
    }
    });
    <div id=“app”>
    <p>You have studied for {{ hoursStudied }} hours. You have {{ languageLevel }}-level mastery.</p>
    <span>Change Level:</span>
    <select v-model="languageLevel">
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Expert</option>
    </select>
    </div>

In this example:

We modified our computed languageLevel value to contain both a getter and a setter method. We did this by making the value of languageLevel an object with two keys, get and set, each with a value of a function.
The get function is the same function we used earlier, computing the value of languageLevel based on hoursStudied.

The set function updates other data whenever the value of languageLevel changes. set functions take one parameter, the new value of the computed value. This value can then be used to determine how other information in your app should be updated. In this case, whenever languageLevel changes, we set the value of hoursStudied to be the minimum number of hours needed to achieve that mastery level.

    Finally, we added a <select> field to our template that allows users to change their mastery level. Don’t worry about this part of the logic yet, we will cover this information in Vue Forms.
