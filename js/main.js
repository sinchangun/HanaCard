    // slick
    let eb_slider = $('.eb_slider_list')
    eb_slider.slick({
        arrows: false,
        dots: true,
        autoplay: true,
        pauseOnHover: false,
        fade: true,
    });

    //정지/재생 버튼
    $('.event_box2 .page_act .btn_stop').click(function (e) {
        e.preventDefault();
        if ($('.event_box2 .page_act').hasClass('on')) {
            $('.event_box2 .page_act').removeClass('on');
            eb_slider.slick('slickPause');

        }
    })

    $('.event_box2 .page_act .btn_play').click(function (e) {
        e.preventDefault();
        if (!$('.event_box2 .page_act').hasClass('on')) {

            $('.event_box2 .page_act').addClass('on');
            eb_slider.slick('slickPlay');
        }
    })


    $('.card').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        pauseOnHover: false,
        fade: true,
    });


    //정지/재생 버튼
    $('.event_box3 .page_act .btn_stop').click(function (e) {
        e.preventDefault();
        if ($('.event_box3 .page_act').hasClass('on')) {
            $('.event_box3 .page_act').removeClass('on');
            $('.card').slick('slickPause');

        }
    })

    $('.event_box3 .page_act .btn_play').click(function (e) {
        e.preventDefault();
        if (!$('.event_box3 .page_act').hasClass('on')) {

            $('.event_box3 .page_act').addClass('on');
            $('.card').slick('slickPlay');
        }
    })

    // life 버튼
    let tab = $('.life_menu ul li');
    let menu = $('.life_style ul li');

    tab.mouseover(function () {
        let target = $(this);
        let index = target.index();
        console.log(index)
        menu.css({
            opacity: 0
        })
        menu.eq(index).css({
            opacity: 1
        })
    });