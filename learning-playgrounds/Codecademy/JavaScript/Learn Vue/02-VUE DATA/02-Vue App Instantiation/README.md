# Vue App Instantiation

Now that we have the Vue library available to use, we need to create our Vue app. All Vue apps are instances of the Vue class provided by the imported Vue library. As with all classes, we must use the new keyword to make an instance of this class, like so:

    const app = new Vue({});

As seen in this example, the only parameter the Vue constructor takes is an object, called the options object, that will contain all the information (options) the Vue app needs to function. We will cover many of the options you can add to this object in the following exercises
