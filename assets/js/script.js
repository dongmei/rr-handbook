// Load header
$(document).ready(function(){
  $('.header-nav').load("header.html");
  $('.sidenav').load("sidenav.html", function(){

      $('.nav').children().each(function() {
  	  var link = $(this).children("a").prop('href');
  	  //console.log(window.location.href);
    	if (link == window.location.href) {
         $(this).addClass('active');
        }else{
       	  $(this).removeClass('active');
        }
  	});
  });
  
});
