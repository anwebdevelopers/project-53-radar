$(function() {

    'use strict';

    /*******************************************************/
    //Header NAv
    /*******************************************************/

    var  w = $(window).width(),
        $headerButton = $('.header__button'),
        $headerNAv = $('.header__nav');

    if (w < 641) {
        $headerNAv.hide();
        $headerButton.removeClass('active');
    }

    $headerButton.click(function(e) {
        e.stopPropagation();
        $(this).toggleClass('active');
        $headerNAv.slideToggle(200);
    });

    //Выключение скрытого меню по ресайзу
    $(window).resize(function() {
        var  w = $(window).width();
        if (w > 640 && $headerNAv.is(':hidden')) {
            $headerNAv.removeAttr('style');
            $headerButton.addClass('active');
        }
    });

    /*******************************************************/
    //Test popup open
    /*******************************************************/
    $('.center-banner').click(function() {
        $.magnificPopup.open({
                items: {
                src: '.object',
                type: 'inline'
            }
        })
    });
    $('.main__banner').click(function() {
        $.magnificPopup.open({
                items: {
                src: '.comments',
                type: 'inline'
            },
            callbacks: {
                open: function() {
                   $('.comments__photos-box').addClass('owl-carousel').owlCarousel({
                       loop: true,
                       nav: true,
                       navText: '',
                       responsive: {
                           0: {
                               items: 1
                           },
                           361: {
                               items: 2,
                               margin: 10
                           },
                           481: {
                               items: 3,
                               margin: 10
                           },
                           769: {
                               items: 4,
                               margin: 15
                           }
                       }
                   });
                }
            }
        })
    });
});
