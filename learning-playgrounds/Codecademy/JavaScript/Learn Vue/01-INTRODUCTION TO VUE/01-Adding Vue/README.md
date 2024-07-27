# Adding Vue

We hope you found our video insightful! In summary, front-end frameworks aim to fix the following issues in front-end web development:

    Long development times
    Difficult bug fixes and updates
    Slow page rendering

In this lesson, we will be introducing some of the features that allow Vue to tackle these issues. This lesson will give you a taste for programming in Vue. Everything covered will be covered in more depth in later lessons, so don’t worry if you don’t feel like you’re absorbing it all right away!

    The first thing you’ll need to do to begin using any front-end framework is to add the framework to your project. You can import Vue by adding a <script> tag inside the <head> of your project’s HTML file:

    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js" defer></script>
    Above we load the current version of Vue, hosted by the Vue team, directly into your project. We use the defer attribute on the <script> tag to make sure that the page is loaded and ready to hook up to Vue before we actually load Vue.

Even at this preliminary step, the Vue team has found ways to shorten your development time. Many front-end frameworks, like React and Angular, have difficult setup processes that can make starting a project a hassle. The Vue team recognized that many complex front-end features aren’t useful until late in the front-end learning journey (or sometimes at all). As a result, they offered this simple alternative that provides most of Vue’s features to developers quickly and easily.

Note: This lesson will be using cutting edge browser features. If you are experiencing technical issues at any point during the lesson, we suggest you download and use the most up-to-date version of Google Chrome to potentially fix these issues.
