$(document).ready(() => {
  const $cart = $('#cart');
  const $account = $('#account');
  const $help = $('#help');
  
  const $cartMenuDown = $('#cartMenu');
  const $accountMenuDown = $('#accountMenu');
  const $helpMenuDown = $('#helpMenu');
  
  
  $($cart).on('click', () => {
  	$cartMenuDown.show();
	})  
	
  $($account).on('click', () => {
  	$accountMenuDown.show();
	})
	
  $($help).on('click', () => {
  	$helpMenuDown.show();
	})  
  

  $($cart).on('mouseleave', () => {
  	$cartMenuDown.hide();
	})  
	
  $($account).on('mouseleave', () => {
  	$accountMenuDown.hide();
	})
	
  $($help).on('mouseleave', () => {
  	$helpMenuDown.hide();
	})  
  
});
