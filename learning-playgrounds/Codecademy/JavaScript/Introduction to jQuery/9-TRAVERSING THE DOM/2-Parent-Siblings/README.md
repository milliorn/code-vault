TRAVERSING THE DOM

Parent & Siblings

In addition to the .children() method we covered in the last exercise, there are two methods you can use to select the parent and siblings of an element.


$('.choice').on('click', event => {
  $(event.currentTarget).parent().hide();
});


In the example above, the .parent() method targets the parent element of '.choice' elements and removes it from the DOM.


$('.choice').on('click', event => {
  $(this).siblings().removeClass('selected');
  $(event.currentTarget).addClass('selected');
});


In the code above, the .siblings() method targets elements adjacent to the clicked '.choice' and removes the 'selected' class from any previously clicked '.choice's. Then the 'selected' class is added only to the clicked '.choice'.
