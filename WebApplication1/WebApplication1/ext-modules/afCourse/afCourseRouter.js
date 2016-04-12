angular.module("afCourse").config(function ($routeProvider, $locationProvider) {
    $routeProvider
     .when('/course/:courseId/test', {
         templateUrl: 'ext-modules/afCourse/afCourseTestTemplate.html',
         controller: 'afCourseTestController',
     })
     .when('/course/:courseId/learn', {
         templateUrl: 'ext-modules/afCourse/afCourseLearnTemplate.html',
         controller: 'afCourseLearnController',
     });
});