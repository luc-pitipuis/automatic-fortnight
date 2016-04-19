"use strict";

angular.module("afCourse").controller("afCourseTestController",
    ['$scope', 'dataService', '$routeParams',
        function ($scope, dataService, $routeParams) {
            // get available data
            dataService.retrieveTestData($routeParams.courseId).then(function (data) {
                $scope.courseData = data;
            });
            $scope.userData = dataService.retrieveData();
            $scope.currentStep = 0;

            $scope.answer = function (answer) {
                if (answer == $scope.courseData[$scope.currentStep].answer) {
                    //$scope.userData.hiragana.push($scope.courseData[$scope.currentStep].question);
                    $scope.lastAnswer = "Correct";
                    dataService.saveData($scope.userData);
                } else {
                    $scope.lastAnswer = "False";
                    //$scope.courseData.push($scope.courseData[$scope.currentStep]);
                }
                $scope.currentStep++;
                
            }
        }
    ]);


angular.module("afCourse").controller("afCourseLearnController",
    ['$scope', 'dataService', '$routeParams',
        function ($scope, dataService, $routeParams) {
            // get available data
            dataService.retrieveLearnData($routeParams.courseId).then(function (data) {
                $scope.courseData = data;
            });
            $scope.userData = dataService.retrieveData();
            $scope.currentStep = 0;

            $scope.answer = function (answer) {
                var canvas = document.getElementById('pwCanvasMain');
                console.log('blah');
                console.log(Tesseract.recognize(canvas, 'jpn'));
                Tesseract.recognize(canvas, {
                    lang: 'jpn'
                }).then(function (result) { console.log(result) });

                if (answer == 'I KNOW!!') {
                    $scope.userData.hiragana.push($scope.courseData[$scope.currentStep].question);
                    dataService.saveData($scope.userData);
                } else {
                    $scope.lastAnswer = "False";
                    $scope.courseData.push($scope.courseData[$scope.currentStep]);
                }
                $scope.currentStep++;

            }
        }
    ]);