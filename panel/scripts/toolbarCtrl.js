/**
 * Created by SanJeev on 23-06-2017.
 */

'use strict';
angular.module('app.toolbar', [])
    .controller('toolbarCtrl', ['$scope', '$mdSidenav', function ($scope, $mdSidenav,$stateProvider) {
        $(document).ready(function ($) {
            var nav = $('.md-toolbar-tools');
            var div = $('#fieldID');
            var items = $('#navdraweritems a');
            var togglebutton = $('#togglebutton');
            $(window).scroll(function () {
                if ($(this).scrollTop() > 100) {
                    nav.addClass('animated bounceInDown');
                    div.css('background-color', '#FFFFFF');
                    items.css('color', '#000000');
                    $("#navdraweritems a").hover(function () {
                        $(this).css("color", "#37BA85");
                    }, function () {
                        $(this).css("color", "#000000");
                    });
                    togglebutton.css("color", "#000000");
                } else {
                    nav.removeClass('animated bounceInDown');
                    div.css('background-color', '');
                    items.css('color', '#FFFFFF');
                    $("#navdraweritems a").hover(function () {
                        $(this).css("color", "#37BA85");
                    }, function () {
                        $(this).css("color", "#FFFFFF");
                    });
                    togglebutton.css("color", "#FFFFFF");
                }
            });
        });

        var value = 0;
        $scope.toggleRight = function () {
            if (value === 0) {
                $mdSidenav('right').open();
                value = 1;
            } else {
                $mdSidenav('right').close();
                value = 0;
            }
        };

        $scope.close = function () {
            $mdSidenav('right').close();
        };
        $('.toTop ').click(function () {
            $("html, body").animate({scrollTop: 0}, 3000);
            return false;
        });

        $scope.openLoginPage = function () {
            window.location.href = 'guest.html';
        };

        $scope.socialPage=function(){
            window.location.href = 'socialapp.html';
        };
    }]);

