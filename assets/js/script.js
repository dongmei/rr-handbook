// Load header
$(document).ready(function() {

    $('.nav').children().each(function() {
        var link = $(this).children("a").prop('href');
        //console.log(window.location.href);
        if (link == window.location.href) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });

    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });


    if ($(window).width() >= 768) {
        $('.section-content').addClass('in');
    }

});