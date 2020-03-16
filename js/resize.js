$(function () {
    $(window).resize(objSizeReset);
    objSizeReset();
    function objSizeReset() {
        convertSizeALL('.outside-frame');

    }



    $(window).on('load', function () {
        objSizeReset();
    });


});




function convertSizeALL(className) {

    var w = 1920, h = 900;
    var iw = $(window).innerWidth(), ih = $(window).innerHeight();
    var pRatio = window.devicePixelRatio || 0, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
    sRatio = Math.min(xRatio, yRatio);
    $(className).css({ width: Math.round(w * sRatio), height: Math.round(h * sRatio) });
    $(".bgc").css({height: Math.round(800* sRatio) });

    var reW = 1.92771084337349
    var reH = 1.31964809384164


}


