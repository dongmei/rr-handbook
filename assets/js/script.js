// Load header
$(document).ready(function() {

    $('.nav').children().each(function() {
        var link = $(this).children("a").prop('href');
        console.log(window.location.pathname);
        if (link == window.location.href) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });


    $('#main-panel').scrollspy({ target: '#side-nav' });

    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    $("#chapter-crocodilians").ready(function(){
        console.log("test");
        $("#chapter-crocodilians").load("crocodilians.html");

        if ($(window).width() >= 768) {
            $('.section-content').addClass('in');
        }
    });

    $()
});