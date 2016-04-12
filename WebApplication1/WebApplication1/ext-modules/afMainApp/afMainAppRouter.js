"use strict";

angular.module("afMainApp").config(function ($routeProvider, $locationProvider) {
    $routeProvider
    .when('/Book/:bookId/ch/:chapterId', {
        templateUrl: 'chapter.html',
        controller: 'ChapterController'
    })
    .otherwise({
        redirectTo: '/'
    });
});