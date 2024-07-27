# Watchers

So far we’ve learned that data is used to store known dynamic data and computed is used to store dynamic data that is computed using other pieces of dynamic data. However, there is one caveat.

A computed value will only recompute when a dynamic value used inside of its getter function changes. For example, in our previous examples languageLevel would only be recomputed if hoursStudied changed. But what do we do if we want to make app updates without explicitly using a value in a computed function? We use the watch property.

    const app = new Vue({
    el: '#app',
    data: {
        currentLanguage: 'Spanish',
        supportedLanguages: ['Spanish', 'Italian', 'Arabic'],
        hoursStudied: 274
    },
    watch: {
        currentLanguage: function (newCurrentLanguage, oldCurrentLanguage) {
        if (supportedLanguages.includes(newCurrentLanguage)) {
            this.hoursStudied = 0;
        } else {
            this.currentLanguage = oldCurrentLanguage;
        }
        }
    }
    });

In this example, we want to set the number of hours studied to 0 whenever the user changes languages to a new supported language. If the language is not supported, it reverts the language back to the previously-selected language.

This functionality is not a computed value because we do not actually need to continually use this information to compute a new dynamic property: we just need to update existing properties whenever the change happens.

The value of watch is an object containing all of the properties to watch. The keys of this object are the names of the properties to watch for changes and the values are functions to run whenever the corresponding properties change. These functions take two parameters: the new value of that property and the previous value of that property.

Note: It may seem like you could use watch in many instances where you could use computed. The Vue team encourages developers to use computed in these situations as computed values update more efficiently than watched values.
