TRAVERSING THE DOM

find

Sometimes we want to target an element that lives inside another, but we don’t want to use the .children() method, since that might target more elements than we need. That’s where the .find() method comes in. This method finds and targets singular or multiple elements that are descendants of an element. Unlike the .children() method, it traverses all descendants of the specified element, not just the first level down.


const $items = $('.myList').find('li');


The .find() method takes a parameter that specifies how to filter results. This parameter is just like anything you might use to select a jQuery object, ('#id', '.class', tag, etc.). .find() will return all descendants that match the passed in selector. In the example above, the .find() method will return all <li> child elements inside the '.myList' element.
