"use strict";

angular.module("afMainApp").controller("afMainAppController",
    ['$scope', 'dataService',
        function ($scope, dataService) {
            $scope.userData = dataService.retrieveData();
            $scope.resetData = dataService.resetData();
        }
    ]);