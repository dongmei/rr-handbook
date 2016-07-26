// Load header
$(document).ready(function(){
  $('head').load("head.html");
  $('.header-nav').load("header.html");


  $('.sidenav').load("sidenav.html", function(){
      $('.nav').children().each(function() {
  	    var link = $(this).children("a").prop('href');
  	   //console.log(window.location.href);
    	  if (link == window.location.href) {
            $(this).addClass('active');
        } else{ 
       	    $(this).removeClass('active');
        }
  	  });


      // $('#collapse1').collapse({"toggle": false});
  });

  if ($(window).width() >= 768) {
    $('.section-content').addClass('in');
  } 

});
