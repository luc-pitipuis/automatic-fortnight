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