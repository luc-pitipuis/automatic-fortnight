angular.module("afHome").config(function ($routeProvider, $locationProvider) {
    $routeProvider
     .when('/', {
         templateUrl: 'ext-modules/afHome/afHomeTemplate.html',
         controller: 'afHomeController',
     });
});