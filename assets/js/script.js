// Load header
$(document).ready(function() {
    $('head').load("head.html");

    $('#sidebar-wrapper').load("sidenav.html", function() {
        $('.nav').children().each(function() {
            var link = $(this).children("a").prop('href');
            //console.log(window.location.href);
            if (link == window.location.href) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });


        // $('#collapse1').collapse({"toggle": false});
    });

    $('.header-nav').load("header.html", function() {
        $("#menu-toggle").click(function(e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });

    });


    if ($(window).width() >= 768) {
        $('.section-content').addClass('in');
    }

});