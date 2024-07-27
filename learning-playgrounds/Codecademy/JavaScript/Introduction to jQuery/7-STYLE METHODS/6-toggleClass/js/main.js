$(document).ready(() => {
  $('.login-button').on('click', () => {
    $('.login-form').show();
  });
  
  $('.menu-button').on('click', () => {
    $('.nav-menu').toggleClass('hide')
    $('.menu-button').toggleClass('button-active')
  })
}); 
