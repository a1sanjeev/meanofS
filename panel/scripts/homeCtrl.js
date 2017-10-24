/**
 * Created by SanJeev on 23-06-2017.
 */


angular.module('home', [])

    .controller('homeCtrl', function ($scope) {

        var nav = $('.marketing');
        var callToTop = $('#callToTop');
        var callToDown = $('#callToDown');
        var dashboadLeft = $('.dashboard-left');
        var dashboadRight = $('#dashboardRight');
        var featureLeft = $('#featureLeft');
        var featureright = $('.feature-right');
        var appatstoreleft = $('.appatstore-left');
        var appatstoreRight = $('#appatstoreRight');
        var caraouselcontent = $('.owl-carousel');
        var callcontentLeft = $('#call-contentLeft');
        var callcontentRight = $('.sanju');

        $(window).scroll(function () {
            if ($(this).scrollTop() > 30) {
                nav.addClass('animated fadeInDown');
            } else {
                nav.removeClass('animated fadeInDown');
            }
            if ($(this).scrollTop() > 650) {
                callToTop.addClass('animated slideInDown');
                callToDown.addClass('animated slideInUp');
            } else {
                callToTop.removeClass('animated slideInDown');
                callToDown.removeClass('animated slideInUp');
            }
            if ($(this).scrollTop() > 1000) {
                dashboadLeft.addClass('animated slideInLeft');
                dashboadRight.addClass('animated slideInRight');
            } else {
                dashboadLeft.removeClass('animated slideInLeft');
                dashboadRight.removeClass('animated slideInRight');
            }
            if ($(this).scrollTop() > 1500) {
                featureLeft.addClass('animated slideInLeft');
                featureright.addClass('animated slideInRight');
            } else {
                featureLeft.removeClass('animated slideInLeft');
                featureright.removeClass('animated slideInRight');
            }
            if ($(this).scrollTop() > 1950) {
                appatstoreleft.addClass('animated slideInLeft');
                appatstoreRight.addClass('animated slideInRight');
            } else {
                appatstoreleft.removeClass('animated slideInLeft');
                appatstoreRight.removeClass('animated slideInRight');
            }
            if ($(this).scrollTop() > 2250) {
                caraouselcontent.addClass('animated fadeInUp');
            } else {
                caraouselcontent.removeClass('animated fadeInUp');
            }
            if ($(this).scrollTop() > 2950) {
                callcontentLeft.addClass('animated slideInLeft');
                callcontentRight.addClass('animated slideInRight');
            } else {
                callcontentLeft.removeClass('animated slideInLeft');
                callcontentRight.removeClass('animated slideInRight');
            }
        });
    });