// Load header

var chaptercounter = 3;


$(document).ready(function() {

    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });


    var t = function chapterCollapse() {
        chaptercounter -= 1;

        if (chaptercounter === 0) {
            if ($(window).width() >= 768) {
                $('.section-content').addClass('in');
            }
        }

    };


    $("#chapter-crocodilians").load("crocodilians.html", t);

    $("#chapter-snakes").load("snakes.html", t);

    $("#chapter-lizards").load("lizards.html", t);

});

$(window).scroll(function() {

    var position = $(this).scrollTop();

    $('.chapter').each(function() {
        var target = $(this).offset().top;
        var id = $(this).attr('id');

        if (position >= target) {
            $('a').removeClass('active');
            $("a[href=" + "\"#" + id + "\"" + ']').addClass('active');
        }
    });
});