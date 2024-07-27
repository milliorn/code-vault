# Components

It is incredibly common to re-use complex elements throughout a front-end web app. For example, every post on Instagram or Facebook needs to look the same but contain different information. Additionally, they need to look the same on many different pages within the site and on many different devices. To make this easier, Vue has added the ability to create custom, reusable HTML elements called components.

When creating a component, you provide a template that should be rendered whenever the component is used in HTML. You then specify which pieces of dynamic information, called props, the component can receive to fill in this template. When used in your HTML code, props look like normal HTML attributes, you add them to the opening tag of the component HTML element with a name and a value.

Once you’ve created your component, you can then use it throughout your site just like any other HTML element. This means no copy/pasting of HTML code, no need to make the same change in multiple places across your site, and no potentially broken or misstyled elements.

Knowing how and when to make components is a slightly more advanced topic, so we won’t cover it in depth. However, that doesn’t mean we can’t play around with them right now. Let’s check one out!
