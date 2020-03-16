var index = 3
var nav_index_div = $('.nav_mid li').eq(index).children("div")
var nav_index_a = $('.nav_mid li').eq(index).children("a")
var w = $(window).width()
var h = $(window).height()
wow = new WOW(
    {
        offset: h / 4,          // default
        mobile: true,       // default
    }
)
wow.init();



$(window).resize(function () {
    window.location.reload()
})

if (w <= 768) {
    $("#nav-icon3").removeClass('display_none')
} else {
    $("#nav-icon3").addClass('display_none')
}
$('.header-bgc video').attr('width',"100%")
$('.header-bgc video').attr('height',"100%")
document.querySelector('video').play();
// $('video').play()
// document.querySelector('video').muted();
// $('video').muted()
$('.menu_box').css({
    height: h,
    width: w,
    right: -w
})
if (w <= 1700) {
    $('.main-part4-post').css({
        marginLeft: (-1920 + w) / 2
    })
} 

nav_index_div.addClass('active select')
nav_index_a.addClass('select')
$(".nav_mid li a").mouseenter(function () {
    $(this).next().addClass('active select')
    $(this).addClass('select')
    $(".nav_mid li a").not(this).next().removeClass('active select')
    nav_index_a.removeClass('select')
})
$(".nav_mid li a").mouseleave(function () {
    $(this).next().removeClass('active select')
    $(this).removeClass('select')
    nav_index_a.addClass('select')
    nav_index_div.addClass('active select')
})

$('.footer-arrow').click(function () {
    $(".footer-flex").toggleClass('footer-flex-change')
})

$(window).scroll(function () {
    var scrollTop = $(window).scrollTop()
    console.log($(window).scrollTop())

    if (scrollTop <= 0) {
        $('.navbar').css({
            boxShadow: "0px 0px 0px rgba(99, 99, 99, 0)"
        })

    } else {
        $('.navbar').css({
            boxShadow: "0px 3px 2px rgba(99, 99, 99, 0.144)"
        })
    }
    if (scrollTop < h / 2) {
        let opacity = scrollTop / (h / 2)
        $(".navbar").css({
            top: 40 - opacity * 40,

        })


    }
    else {
        $(".navbar").css({
            top: 0
        })

    }

    if (scrollTop > h / 3) {
        $('.navbar_bottom').addClass('navbar_bottom_appear')
    }
    else {
        $('.navbar_bottom').removeClass('navbar_bottom_appear')

    }

    if (scrollTop < h) {
        let opacity = scrollTop / (h)
        $(".navbar").css({
            background: " rgba(255, 255, 255, " + opacity + ")"
        })
        $(".nav_mid li a").css({
            color: `rgba(${255 - (opacity * 255)},${255 - (opacity * 255)},${255 - (opacity * 255)},1)`
        })
        $(".nav_logo").css({
            color: `rgba(${255 - (opacity * 2)},${255 - (opacity * 162)},${255 - (opacity * 184)},1)`
        })
        $('.nav_bottom_line').css({
            background: `rgba(${255 - (opacity * 2)},${255 - (opacity * 162)},${255 - (opacity * 184)},1)`

        })
        $(".login a").css({
            color: `rgba(${255 - (opacity * 255)},${255 - (opacity * 255)},${255 - (opacity * 255)},1)`

        })
        $('#nav-icon3 span').css({
            background: `rgba(${255 - (opacity * 2)},${255 - (opacity * 162)},${255 - (opacity * 184)},1)`

        })
    } else {
        $(".navbar").css({
            background: " rgba(255, 255, 255, 1)"

        })
    }

})


$('.return').click(function () {
    var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
    $body.animate({
        scrollTop: 0
    }, 1000);

    return false;
});
setTimeout(function () {
    $('.menu_box').removeClass('display_none')

}, 500)
$(document).ready(function () {
    $('#nav-icon3').click(function () {

        $(this).toggleClass('open');
        if ($("#nav-icon3").attr('class') == "open") {

            $('.menu_box').css({
                right: 0
            })
        } else {
            $('.menu_box').css({
                right: -w
            })
        }

    });
});