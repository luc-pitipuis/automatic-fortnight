"use strict";

angular.module("afMainApp").directive("afMainApp", function () {
    return {
        transclude: true,
        scope: {

        },
        controller: "afMainAppController",
        templateUrl: "ext-modules/afMainApp/afMainAppTemplate.html"
    };
});

angular.module("afMainApp").directive('backImg', function () {
    return function (scope, element, attrs) {
        attrs.$observe('backImg', function (value) {
            element.css({
                'background-image': 'url(' + value + ')',
                'background-size': 'cover',
                'opacity': 0.6
            });
        });
    };
});