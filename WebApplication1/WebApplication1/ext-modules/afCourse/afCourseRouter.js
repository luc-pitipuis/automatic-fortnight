angular.module("afCourse").config(function ($routeProvider, $locationProvider) {
    $routeProvider
     .when('/Course/Test', {
         templateUrl: 'ext-modules/afCourse/afCourseTestTemplate.html',
         controller: 'afCourseTestController',
     })
     //.when('/Course/:courseId/Learn', {
     ////    controller: 'afCourseLearnController',
     //});
});