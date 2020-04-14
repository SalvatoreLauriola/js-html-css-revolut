$(document).ready(function() {  // Preparo il documento

// Dropdown menu

// Refs
var icon2 = $('.icon i');
var icon = $('.icon');
var dropDown = $('.list-dx .relative');
var dropLinks = dropDown.children('a');
var dropMenus = dropDown.children('.products-drop');

// Show / Hide dropdown menu
dropLinks.mouseenter(function(){
  var actualMenu =$(this).next('.products-drop');

  dropMenus.not(actualMenu).hide();

  // Show / hide atual dropmenu
  actualMenu.toggle();

});

dropLinks.mouseleave(function(){
  var actualMenu =$(this).next('.products-drop');

  dropMenus.not(actualMenu).hide();

  // Show / hide atual dropmenu
  actualMenu.toggle();

});


// dropLinks.click(function(){
//   var actualMenu =$(this).next('.products-drop');

//   dropMenus.not(actualMenu).hide();

//   // Show / hide atual dropmenu
//   actualMenu.toggle();

// });

icon.mouseenter(function(){

  icon2.removeClass('fas fa-chevron-down');
  icon2.addClass('fas fa-chevron-up')

}) 
icon.mouseleave(function(){

  icon2.removeClass('fas fa-chevron-up');
  icon2.addClass('fas fa-chevron-down')
}) 
















});                                   // Fine doc ready