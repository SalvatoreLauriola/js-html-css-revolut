// Preparo il documento
$(document).ready(function() {  

  // Refs

// Ref x freccia su icona
var icon2 = $('.icon i');

// Ref x freccia giu icona
var icon = $('.icon');    

//Prendo tutte le a della pagina
var dropLinks = $('.list-dx .relative > a'); 

// la stilo per far capire quale deve attivare e per chiudere quelli inattivi usa il not.
var dropMenus = $('.list-dx .relative .products-drop'); 

// Show / Hide dropdown menu
// Quando ci passo con il mouse avvia la funzione
dropLinks.mouseenter(function(){
  
  //Il this rileva quale dei menu è attualmente stato cliccato e lo racchiude in una variabile
  var actualMenu =$(this).next('.products-drop');

  //Nasconde tutto tranne il menu aperto in quel momento grazie al not.
  dropMenus.not(actualMenu).hide();

  // grazie al toggle attiva e disattiva i menu drop con Show and Hide
  actualMenu.toggle();
});

// Quando si passa con il mouse nasconde i menu
dropLinks.mouseleave(function(){
  var actualMenu =$(this).next('.products-drop');

  dropMenus.not(actualMenu).hide();

  // Show / hide atual dropmenu
  actualMenu.toggle();
});

// Avvia la funzione al click

// dropLinks.click(function(){
//   var actualMenu =$(this).next('.products-drop');

//   dropMenus.not(actualMenu).hide();

//   // Show / hide atual dropmenu
//   actualMenu.toggle();

// });

// Cambia icona quando si passa sopra con il mouse
icon.mouseenter(function(){
  icon2.removeClass('fas fa-chevron-down');
  icon2.addClass('fas fa-chevron-up')
}) 

// Ritorna icona precedente quando si toglie mouse
icon.mouseleave(function(){
  icon2.removeClass('fas fa-chevron-up');
  icon2.addClass('fas fa-chevron-down')
}) 




// Fine doc ready
});                                  