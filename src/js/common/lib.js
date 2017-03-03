/**
 * Created by sunrise2075 on 2017/3/3.
 */
$(document).ready(function(){//
    $(window).resize(function () {
        var h = $(window).height();

        $('#map-canvas').css('height', h);
    }).resize();

    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
})
