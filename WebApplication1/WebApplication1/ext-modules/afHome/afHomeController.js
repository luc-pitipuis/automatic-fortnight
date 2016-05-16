"use strict";

angular.module("afHome").controller("afHomeController",
     ['$scope', 'dataService',
        function ($scope, dataService) {
            $scope.userData = dataService.retrieveData();
            $scope.getData = function getData() {
                console.log(dataService.retrieveData());
            }

        }
    ]);