var index = 4
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


$('.menu_box').css({
    height: h,
    width: w,
    right: -w
})
if (w <= 1300) {
    $('.header img').css({
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



















$(document).ready(function() {
    var bigimage = $("#big");
    var thumbs = $("#thumbs");
    //var totalslides = 10;
    var syncedSecondary = true;
  
    bigimage
      .owlCarousel({
      items: 1,
      slideSpeed: 2000,
      nav: true,
      autoplay: true,
      dots: false,
      loop: true,
      responsiveRefreshRate: 200,
      navText: [
        '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
      ]
    })
      .on("changed.owl.carousel", syncPosition);
  
    thumbs
      .on("initialized.owl.carousel", function() {
      thumbs
        .find(".owl-item")
        .eq(0)
        .addClass("current");
    })
      .owlCarousel({
      items: 4,
      dots: true,
      nav: true,
      navText: [
        '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
      ],
      smartSpeed: 200,
      slideSpeed: 500,
      slideBy: 4,
      responsiveRefreshRate: 100
    })
      .on("changed.owl.carousel", syncPosition2);
  
    function syncPosition(el) {
      //if loop is set to false, then you have to uncomment the next line
      //var current = el.item.index;
  
      //to disable loop, comment this block
      var count = el.item.count - 1;
      var current = Math.round(el.item.index - el.item.count / 2 - 0.5);
  
      if (current < 0) {
        current = count;
      }
      if (current > count) {
        current = 0;
      }
      //to this
      thumbs
        .find(".owl-item")
        .removeClass("current")
        .eq(current)
        .addClass("current");
      var onscreen = thumbs.find(".owl-item.active").length - 1;
      var start = thumbs
      .find(".owl-item.active")
      .first()
      .index();
      var end = thumbs
      .find(".owl-item.active")
      .last()
      .index();
  
      if (current > end) {
        thumbs.data("owl.carousel").to(current, 100, true);
      }
      if (current < start) {
        thumbs.data("owl.carousel").to(current - onscreen, 100, true);
      }
    }
  
    function syncPosition2(el) {
      if (syncedSecondary) {
        var number = el.item.index;
        bigimage.data("owl.carousel").to(number, 100, true);
      }
    }
  
    thumbs.on("click", ".owl-item", function(e) {
      e.preventDefault();
      var number = $(this).index();
      bigimage.data("owl.carousel").to(number, 300, true);
    });
  });
  