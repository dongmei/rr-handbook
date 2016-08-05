// Load header

var chaptercounter = 6;


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

    $("#chapter-ectothermic").load("ectothermic.html", t);
    $("#chapter-crocodilians").load("crocodilians.html", t);
    $("#chapter-snakes").load("snakes.html", t);
    $("#chapter-lizards").load("lizards.html", t);
    $("#chapter-testudines").load("testudines.html", t);
    $("#chapter-kccommentary").load("kccommentary.html", t);

});

$(window).scroll(function() {

    var position = $(this).scrollTop();
    console.log("scroll down");

    $('.chapter-container').each(function() {
        var target = $(this).offset().top;
        var id = $(this).attr('id');

        if (position >= target) {
            $('a').removeClass('active');
            $("a[href=" + "\"#" + id + "\"" + ']').addClass('active');
        }
    });
});


$("#side-nav .nav .panel .panel-collapse .list-group .list-group-item").children("a").click(function() {
    console.log("clicked chapter link in side navbar");
    if ($(window).width() < 992) {
        $("#wrapper").toggleClass("toggled");
    }
});