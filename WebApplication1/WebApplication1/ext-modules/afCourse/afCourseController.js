"use strict";

angular.module("afCourse").controller("afCourseTestController",
    ['$scope', 'dataService', 
        function ($scope, dataService) {
            // get available data
            $scope.courseData = dataService.retrieveHiraganaTestData();
            $scope.userData = dataService.retrieveData();
            $scope.currentStep = 0;

            $scope.answer = function (answer) {
                
                if (answer == $scope.courseData[$scope.currentStep].answer) {
                    $scope.userData.hiragana.push($scope.courseData[$scope.currentStep].question);
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
    ['$scope',
        function ($scope) {
            // get available data
            $scope.courseData = [
                { "question": "キ", "choices": ['ni', 'ki', 'mi', 'naj'], "answer": 'ki' },
                { "question": "ニ", "choices": ['ni', 'ki', 'mi', 'naj'], "answer": 'ni' },
                { "question": "ミ", "choices": ['ni', 'ki', 'mi', 'naj'], "answer": 'mi' },
            ];

            $scope.currentStep = 0;

            $scope.answer = function (answer) {
                if (answer == $scope.courseData[$scope.currentStep].answer) {
                    $scope.lastAnswer = "Correct";
                } else {
                    $scope.lastAnswer = "False";
                }
                $scope.currentStep++;
            }
        }
    ]);