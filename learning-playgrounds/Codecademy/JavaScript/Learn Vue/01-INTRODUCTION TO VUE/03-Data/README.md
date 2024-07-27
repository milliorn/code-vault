# Data

Now that we’ve transformed our HTML into a Vue app, we’re ready to make the magic happen!

An essential feature all front-end frameworks must accomplish is rendering and updating dynamic data. Information like the number of likes on a social media post may change at any second. Front-end frameworks must make it easy to display these types of dynamic data and automatically update them for users as soon as they change.

To display dynamic information we need:

A place to store the data we will be displaying
A syntax for displaying that information
Let’s tackle the first point.

As mentioned in the last exercise, everything our Vue app needs should be provided on the options object when the Vue app is created. Therefore, all of our dynamic data will need to be specified in our options object at a property called data.

    const app = new Vue({
        el: '#app',
        data: {
            username: 'Michael'
        }
        });

In this example, we added the data property to our options object. Apps need to display many pieces of dynamic data. To accommodate this, the value of .data is an object as well. Every piece of data will be added to the .data object as a key-value pair. In this case, we only added one piece of data called username with a value of 'Michael'.

Note: In most apps, your code would likely get this data from a database (to find out what the user’s actual name is), but for this lesson, we will hard-code some of our starting data for simplicity.
