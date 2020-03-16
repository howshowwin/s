var index = 2
var nav_index_div = $('.nav_mid li').eq(index).children("div")
var nav_index_a = $('.nav_mid li').eq(index).children("a")
var w = $(window).width()
var h = $(window).height()
var math = ["img/sys_00_new.png"]
var chinese = ['img/sys_01.png']
var english = ['img/sys_02.png']
var physical = ["img/sys_14.png"]
var chemistry = ['img/sys_21.png']
var small_school = [chinese, math, english]
var little_school = [chinese, math, english, physical, chemistry]
var high_school = [math, english, physical, chemistry]
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


$('.menu_box').css({
    height: h,
    width: w,
    right: -w
})

$('.buttom-part3').click(function () {
    $(this).addClass('main-part3-active')
    $('.buttom-part3').not($(this)).removeClass('main-part3-active')
    console.log($('.main-part3-active').text())
    let choose = $('.main-part3-active').text()
    if (choose == "小學") {
        $('.btn-area-part3-2').empty()
        $('.btn-area-part3-2').append(`        
         <div class="buttom-part3-small buttom-part3-1 main-part3-small-active">語文</div>
        <div class="buttom-part3-small buttom-part3-2">數學</div>
        <div class="buttom-part3-small buttom-part3-3">英語</div>`)
    } else if (choose == "國中") {
        $('.btn-area-part3-2').empty()
        $('.btn-area-part3-2').append(`        
        <div class="buttom-part3-small buttom-part3-1 main-part3-small-active">語文</div>
       <div class="buttom-part3-small buttom-part3-2">數學</div>
       <div class="buttom-part3-small buttom-part3-3">英語</div>
       <div class="buttom-part3-small buttom-part3-2">物理</div>
       <div class="buttom-part3-small buttom-part3-3">化學</div>
       `
       )
    } else if (choose == '高中') {
        $('.btn-area-part3-2').empty()
        $('.btn-area-part3-2').append(`        
        <div class="buttom-part3-small buttom-part3-1 main-part3-small-active">數學</div>
       <div class="buttom-part3-small buttom-part3-2">英語</div>
       <div class="buttom-part3-small buttom-part3-2">物理</div>
       <div class="buttom-part3-small buttom-part3-3">化學</div>`)
    }
})

$('.btn-area-part3-2').on("click",".buttom-part3-small",function(){
    $(this).addClass('main-part3-small-active')
    $('.buttom-part3-small').not($(this)).removeClass('main-part3-small-active')
    var math = "img/sys_00_new.png"
    var chinese = 'img/sys_01.png'
    var english = 'img/sys_02.png'
    var physical = "img/sys_14.png"
    var chemistry = 'img/sys_21.png'
    var req = $('.main-part3-small-active').text()
    var res = ""
    console.log(req)
    if(req== "語文"){
        res = chinese
    }else if(req=="數學"){
        res = math
    }else if(req=="英語"){
        res = english
    }else if(req=="物理"){
        res = physical
    }else if(req=="化學"){
        res = chemistry
    }

    setTimeout(function(){
        $('.main-part3-img').empty()
        $('.main-part3-img').append(`        
        <img src= ${res} alt="">
       `)
    },100)
 
   

})

$('.main-part4-frame .box').mouseenter(function(){
    $(this).children('.title-view').addClass('move')
    $(this).children('.mask_show').addClass('move-mask')

})
$('.main-part4-frame .box').mouseleave(function(){
    $(this).children('.title-view').removeClass('move')
    $(this).children('.mask_show').removeClass('move-mask')

})






if (w <= 1500) {

    $(' .header img').css({
        marginLeft: (-1920 + w) / 1.9
    })
}
if (w <= 781) {
    $(".header").css({
        height: 500,
        marginTop: -5
    })
    $(' .header img').css({

        marginLeft: (-1920 + w) / 1.95

    })
    $('.forrwd').css({
        height: 200,
        width: "100%",
        background: "#FF4242"
    })
}
if (w <= 530) {
    $(".header").css({
        height: 300,
        marginTop: -5

    })
    $(' .header img').css({

        marginLeft: (-1920 + w) / 3.8
    })
}
if (w < 400) {
    $(".header").css({
        height: 300,
        marginTop: -5

    })
    $(' .header img').css({

        marginLeft: (-1920 + w) / 3.8
    })
}
$('.classhover').mouseenter(function () {
    $(this).css({
        background: "rgb(244, 188, 188)"
    })
    $(this).children('.class').css({
        transform: " scale(1)"
    })
    $('.classhover').not($(this)).css({
        background: "#fff"
    })
    $('.classhover').not($(this)).children('.class').css({
        transform: " scale(0)"
    })
})
$('.downdarg').mouseleave(function () {
    $('.downdarg').css({
        transform: " scale(0)"

    })
    $('.class').css({
        transform: " scale(0)"

    })
})



$(".class p").mouseenter(function () {
    $(this).css({
        background: "rgb(244, 188, 188)"

    })
    $(".class p").not($(this)).css({
        background: "#fff"
    })
})
// .mouseleave(function () {

//     $(this).css({
//         transform: " scale(0)"
//     })
// })
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