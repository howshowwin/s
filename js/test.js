var index = 0
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
var arr_img = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg"]
var arr_dot = []
var arr_re = arr_img.slice()


var append_1 = `
        <div class="outside-box outside-box1 wow bounceIn" data-wow-delay='1.6s'>
            <div class="main-part6-word-box">
                <h3>LV5</h3>
                <h4>拔高衝刺</h4>
                <div class="star">
                    <img src="/img/star.svg" alt="">
                    <img src="/img/star.svg" alt="">
                    <img src="/img/star.svg" alt="">
                    <img src="/img/star.svg" alt="">
                    <img src="/img/star.svg" alt="">
                </div>
                <p>
                    1.回歸細節，基礎再強鞏固<br>
                    2.難點重點，強化拓展訓練<br>
                    3.考前心理疏導，經驗傳授<br>
                    4.壓軸題莫，應對專項抽解
                </p>
            </div>
            <div class="box"> </div>
         
        </div>
        <div class="outside-box outside-box2 wow bounceIn" data-wow-delay='1.2s'>
            <div class="main-part6-word-box">
                <h3>LV4</h3>
                <h4>強化應用</h4>
                <div class="star">
                    <img src="/img/star.svg" alt="">
                    <img src="/img/star.svg" alt="">
                    <img src="/img/star.svg" alt="">
                    <img src="/img/star.svg" alt="">
                    <img src="/img/star.svg" alt="">
                </div>
                <p>
                    1.專題重點突破，難點拔高<br>
                    2.提升解題能力，專項突破<br>
                    3.達提斯為訓練，輕鬆面試
                </p>
            </div>

            <div class="box"> </div>
            <div class="cut">
                <div class="tri"></div>
            </div>
        </div>
        <div class="outside-box outside-box3 wow bounceIn" data-wow-delay='0.8s'>
            <div class="main-part6-word-box">
                <h3>LV3</h3>
                <h4>方法技巧</h4>
                <div class="star">
                    <img src="/img/star.svg" alt="">
                    <img src="/img/star.svg" alt="">
                    <img src="/img/star.svg" alt="">
                    <img src="/img/star.svg" alt="">
                </div>
                <p>
                    1.深入梳理重點難點模塊，<br>&nbsp;&nbsp;&nbsp;全方位建構知識體系<br>
                    2.知識重點難點專項突破，<br>&nbsp;&nbsp;&nbsp;精講專題練習集中訓練<br>
                    3.題型歸納和技巧，答題策<br>&nbsp;&nbsp;&nbsp;略和講解，解題技巧
                </p>
            </div>

            <div class="box"> </div>
            <div class="cut">
                <div class="tri"></div>
            </div>
        </div>
        <div class="outside-box outside-box4 wow  bounceIn" data-wow-delay='0.4s'>
            <div class="main-part6-word-box">
                <h3>LV2</h3>
                <h4>知識鞏固</h4>
                <div class="star">
                    <img src="/img/star.svg" alt="">
                    <img src="/img/star.svg" alt="">
                    <img src="/img/star.svg" alt="">
                </div>
                <p>
                    1.深入梳理簡單模塊知識<br>
                    2.深化對知識的理解程度<br>
                    3.基礎經典立題講練結合
                </p>
            </div>

            <div class="box"> </div>
            <div class="cut">
                <div class="tri"></div>
            </div>
        </div>
        <div class="outside-box outside-box5 wow bounceIn">
            <div class="main-part6-word-box">
                <h3>LV1</h3>
                <h4>基礎梳理</h4>
                <div class="star">
                    <img src="/img/star.svg" alt="">
                    <img src="/img/star.svg" alt="">
                </div>
                <p>
                    1.梳理各年級學科知識點<br>
                    2.補足基礎漏洞全面掌握<br>
                    3.激發學生隱藏學習興趣
                </p>
            </div>

            <div class="box"> </div>
            <div class="cut">
                <div class="tri"></div>
            </div>
        </div>`

var append_2 = `
        <div class="outside-box outside-box1 wow bounceIn" data-wow-delay='1.6s'>
            <div class="main-part6-word-box">
                <h3>LV5</h3>
                <h4 class='append_color'>拔高衝刺</h4>
                <div class="star">
                    <img src="/img/star.svg" alt="">
                    <img src="/img/star.svg" alt="">
                    <img src="/img/star.svg" alt="">
                    <img src="/img/star.svg" alt="">
                    <img src="/img/star.svg" alt="">
                </div>
                <p class='append_color'>
                    1.回歸細節，基礎再強鞏固<br>
                    2.難點重點，強化拓展訓練<br>
                    3.考前心理疏導，經驗傳授<br>
                    4.壓軸題莫，應對專項抽解
                </p>
            </div>
            <div class="box appen2color"> </div>
         
        </div>
        <div class="outside-box outside-box2 wow bounceIn" data-wow-delay='1.2s'>
            <div class="main-part6-word-box">
                <h3>LV4</h3>
                <h4 class='append_color'>強化應用</h4>
                <div class="star">
                    <img src="/img/star.svg" alt="">
                    <img src="/img/star.svg" alt="">
                    <img src="/img/star.svg" alt="">
                    <img src="/img/star.svg" alt="">
                    <img src="/img/star.svg" alt="">
                </div>
                <p class='append_color'>
                    1.專題重點突破，難點拔高<br>
                    2.提升解題能力，專項突破<br>
                    3.達提斯為訓練，輕鬆面試
                </p>
            </div>

            <div class="box appen2color"> </div>
            <div class="cut">
                <div class="tri appen2color"></div>
            </div>
        </div>
        <div class="outside-box outside-box3 wow bounceIn" data-wow-delay='0.8s'>
            <div class="main-part6-word-box">
                <h3>LV3</h3>
                <h4 class='append_color'>方法技巧</h4>
                <div class="star">
                    <img src="/img/star.svg" alt="">
                    <img src="/img/star.svg" alt="">
                    <img src="/img/star.svg" alt="">
                    <img src="/img/star.svg" alt="">
                </div>
                <p class='append_color'>
                    1.深入梳理重點難點模塊，<br>&nbsp;&nbsp;&nbsp;全方位建構知識體系<br>
                    2.知識重點難點專項突破，<br>&nbsp;&nbsp;&nbsp;精講專題練習集中訓練<br>
                    3.題型歸納和技巧，答題策<br>&nbsp;&nbsp;&nbsp;略和講解，解題技巧
                </p>
            </div>

            <div class="box appen2color"> </div>
            <div class="cut">
                <div class="tri appen2color"></div>
            </div>
        </div>
        <div class="outside-box outside-box4 wow  bounceIn" data-wow-delay='0.4s'>
            <div class="main-part6-word-box">
                <h3>LV2</h3>
                <h4 class='append_color'>知識鞏固</h4>
                <div class="star">
                    <img src="/img/star.svg" alt="">
                    <img src="/img/star.svg" alt="">
                    <img src="/img/star.svg" alt="">
                </div>
                <p class='append_color'>
                    1.深入梳理簡單模塊知識<br>
                    2.深化對知識的理解程度<br>
                    3.基礎經典立題講練結合
                </p>
            </div>

            <div class="box appen2color"> </div>
            <div class="cut">
                <div class="tri appen2color"></div>
            </div>
        </div>
        <div class="outside-box outside-box5 wow bounceIn">
            <div class="main-part6-word-box">
                <h3>LV1</h3>
                <h4 class='append_color'>基礎梳理</h4>
                <div class="star">
                    <img src="/img/star.svg" alt="">
                    <img src="/img/star.svg" alt="">
                </div>
                <p class='append_color'>
                    1.梳理各年級學科知識點<br>
                    2.補足基礎漏洞全面掌握<br>
                    3.激發學生隱藏學習興趣
                </p>
            </div>

            <div class="box appen2color"> </div>
            <div class="cut">
                <div class="tri appen2color"></div>
            </div>
        </div>`

var append_3 = `
        <div class="outside-box outside-box1 wow bounceIn" data-wow-delay='1.6s'>
            <div class="main-part6-word-box">
                <h3>LV5</h3>
                <h4>拔高衝刺</h4>
                <div class="star">
                    <img src="/img/star.svg" alt="">
                    <img src="/img/star.svg" alt="">
                    <img src="/img/star.svg" alt="">
                    <img src="/img/star.svg" alt="">
                    <img src="/img/star.svg" alt="">
                </div>
                <p>
                    1.回歸細節，基礎再強鞏固<br>
                    2.難點重點，強化拓展訓練<br>
                    3.考前心理疏導，經驗傳授<br>
                    4.壓軸題莫，應對專項抽解
                </p>
            </div>
            <div class="box appen3color"> </div>
         
        </div>
        <div class="outside-box outside-box2 wow bounceIn" data-wow-delay='1.2s'>
            <div class="main-part6-word-box">
                <h3>LV4</h3>
                <h4>強化應用</h4>
                <div class="star">
                    <img src="/img/star.svg" alt="">
                    <img src="/img/star.svg" alt="">
                    <img src="/img/star.svg" alt="">
                    <img src="/img/star.svg" alt="">
                    <img src="/img/star.svg" alt="">
                </div>
                <p>
                    1.專題重點突破，難點拔高<br>
                    2.提升解題能力，專項突破<br>
                    3.達提斯為訓練，輕鬆面試
                </p>
            </div>

            <div class="box appen3color"> </div>
            <div class="cut">
                <div class="tri appen3color"></div>
            </div>
        </div>
        <div class="outside-box outside-box3 wow bounceIn" data-wow-delay='0.8s'>
            <div class="main-part6-word-box">
                <h3>LV3</h3>
                <h4>方法技巧</h4>
                <div class="star">
                    <img src="/img/star.svg" alt="">
                    <img src="/img/star.svg" alt="">
                    <img src="/img/star.svg" alt="">
                    <img src="/img/star.svg" alt="">
                </div>
                <p>
                    1.深入梳理重點難點模塊，<br>&nbsp;&nbsp;&nbsp;全方位建構知識體系<br>
                    2.知識重點難點專項突破，<br>&nbsp;&nbsp;&nbsp;精講專題練習集中訓練<br>
                    3.題型歸納和技巧，答題策<br>&nbsp;&nbsp;&nbsp;略和講解，解題技巧
                </p>
            </div>

            <div class="box appen3color"> </div>
            <div class="cut">
                <div class="tri appen3color"></div>
            </div>
        </div>
        <div class="outside-box outside-box4 wow  bounceIn" data-wow-delay='0.4s'>
            <div class="main-part6-word-box">
                <h3>LV2</h3>
                <h4>知識鞏固</h4>
                <div class="star">
                    <img src="/img/star.svg" alt="">
                    <img src="/img/star.svg" alt="">
                    <img src="/img/star.svg" alt="">
                </div>
                <p>
                    1.深入梳理簡單模塊知識<br>
                    2.深化對知識的理解程度<br>
                    3.基礎經典立題講練結合
                </p>
            </div>

            <div class="box appen3color"> </div>
            <div class="cut">
                <div class="tri appen3color"></div>
            </div>
        </div>
        <div class="outside-box outside-box5 wow bounceIn" >
            <div class="main-part6-word-box">
                <h3>LV1</h3>
                <h4>基礎梳理</h4>
                <div class="star">
                    <img src="/img/star.svg" alt="">
                    <img src="/img/star.svg" alt="">
                </div>
                <p>
                    1.梳理各年級學科知識點<br>
                    2.補足基礎漏洞全面掌握<br>
                    3.激發學生隱藏學習興趣
                </p>
            </div>

            <div class="box appen3color"> </div>
            <div class="cut">
                <div class="tri appen3color"></div>
            </div>
        </div>`



















// arr_re.push(arr_re[0])
console.log(arr_re)
for (i = 0; i < arr_re.length; i++) {
    $('.inside_img_box').append(`<img src="${arr_re[i]}" alt="">`)
    // $('.inside_img_box').append(`<img src="${arr_img[0]}" alt="">`)
    if (i < arr_img.length) {
        $('.select_dot_box').append(`<div class="dot dot${i + 1}"></div>`)
        arr_dot.push(`dot dot${i + 1}`)
    }

}
function nowW (){
    console.log(parseInt(w))
    if(1028<parseInt(w) ){

        var aa = $('.outside-box')
        console.log(aa.length)
        for (i = 0; i < aa.length; i++) {
            $(`.outside-box${5 - i}`).attr('data-wow-offset', `${h / 4 + 40 * i}`)
     
        }
        $('.main').css({
            top: h,
            height: h * 6.2,
            width: w
        })
        // $(".footer").css({
        //     position: absolute,
        //     top:h*6.6
        // })
    }else{
        var aa = $('.outside-box')
        console.log(aa.length)
        $('.main').css({
            top: h,
            height: h * 8,
            width: w
        })
        // $(".footer").css({
        //     position: absolute,
        //     top:h*8.8
        // })
        for (i = 0; i < aa.length; i++) {
            $(`.outside-box${5 - i}`).attr("data-wow-delay", `0s`)
        }
    }
}
nowW ()
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
$('.inside_img_box').css({
    height: h
})
$('.inside_img_box').css({
    width: w * 4
})
$('.inside_img_box img').css({
    width: w
})
$('.part1_bgc').css({
    width: w,
    height: h
})
$(".main-part4").css({
    height: h
})




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



$('.btn-area button').click(function () {
    $(this).addClass('choosed')
    $('.btn-area button').not(this).removeClass('choosed')
    $('div').remove('.outside-box')
    var choose = $('.choosed').attr('data-choose')
    if (choose == 4) {
        $('.display_flex_rv').append(append_1)
        nowW ()

    } else if (choose == 5) {
        $('.display_flex_rv').append(append_2)
        nowW ()

    } else if (choose == 6) {

        $('.display_flex_rv').append(append_3)
        nowW ()
    }


})


$('.footer-arrow').click(function(){
    $(".footer-flex").toggleClass('footer-flex-change')
})

var thisClick = "dot dot1"
$(".select_dot_box").on("mouseenter", ".dot", function () {

    $(this).css({
        opacity: 1
    })
    $(".dot").not(this).css({
        opacity: 0.6

    })
    thisClick = $(this).attr("class")

    let thisMove = arr_dot.indexOf(thisClick)

    $('.inside_img_box').css({
        left: - thisMove * w
    })
    clearInterval(carousel);

})




// $(".select_dot_box").on("click", ".dot", function () {

// })

var carousel = setInterval(function () {
    let now = parseInt($('.inside_img_box').css("left"))

    console.log(thisClick)
    let thisMove = Math.ceil(now / w)

    console.log()

    if (thisMove > -3) {
        $('.inside_img_box').css({
            left: (thisMove - 1) * w
        })
        // console.log( `dot${ Math.abs(thisMove)}`)

        let dot = $(`.dot${Math.abs(thisMove) + 2}`)
        console.log(dot)
        dot.css({
            opacity: 1
        })
        $(".dot").not(dot).css({
            opacity: 0.6
        })
    }
    else if (thisMove == -3) {
        thisMove = 0
        $('.inside_img_box').css({
            left: (thisMove) * w
        })
        $(".dot").css({
            opacity: 0.6
        })
        $(".dot1").css({
            opacity: 1
        })

    }
}, 4000)

$(".select_dot_box").on("mouseleave", ".dot", function () {
    carousel = setInterval(function () {
        let now = parseInt($('.inside_img_box').css("left"))

        console.log(thisClick)
        let thisMove = Math.ceil(now / w)

        console.log()

        if (thisMove > -3) {
            $('.inside_img_box').css({
                left: (thisMove - 1) * w
            })
            let dot = $(`.dot${Math.abs(thisMove) + 2}`)
            console.log(dot)
            dot.css({
                opacity: 1
            })
            $(".dot").not(dot).css({
                opacity: 0.6
            })
        }
        else if (thisMove == -3) {
            thisMove = 0
            $('.inside_img_box').css({
                left: (thisMove) * w
            })
            $(".dot").css({
                opacity: 0.6
            })
            $(".dot1").css({
                opacity: 1
            })
        }
    }, 4000)

})

$(".img-box").mouseenter(function () {
    $(this).children("img").css({
        transform: " scale(1.2)"
    })
    $(this).children("p").css({
        top: "50%",
        left: "50%",
        transform: 'translate(-50%,-50%)'
    })
}).mouseleave(function () {
    $(this).children("img").css({
        transform: " scale(1)"
    })
    $(this).children("p").css({
        top: "10%",
        left: "5%",
        transform: 'translate(0,0)'
    })
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
        $('.part1_word').css({
            opacity:1-opacity
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