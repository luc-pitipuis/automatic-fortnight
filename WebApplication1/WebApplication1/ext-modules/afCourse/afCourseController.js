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
            $scope.lastAnswer = "";

            $scope.getDraw = function () {
                var code = $scope.courseData[$scope.currentStep].question.charCodeAt();
                code = code.toString(16);
                code = ("000" + code).slice(-5);
                var path = 'ext-modules/afMainApp/data/' + code + '.svg'
                return path;
            }

            $scope.answer = function () {
                $scope.analyzing = true;
                var canvas = document.getElementById('pwCanvasMain');
                //canvas.getContext("2d").font = "30px Noto Sans";
                //canvas.getContext("2d").fillText($scope.courseData[$scope.currentStep].question, 10, 50);
                Tesseract.recognize(canvas, {
                    lang: 'jpn'
                }).then(function (result) {
                    $scope.analyzing = false;
                    $scope.$apply(function () {
                        if ($scope.courseData[$scope.currentStep].question == result.text.trim()) {
                            $scope.lastAnswer = "RIGHTY OH";
                            $scope.userData[$routeParams.courseId].push($scope.courseData[$scope.currentStep].question);
                            dataService.saveData($scope.userData);
                            $scope.currentStep++;
                        } else {
                            $scope.lastAnswer = "YOU SUCK, DO AGAIN, i guessed: " + result.text.trim();
                            //$scope.courseData.push($scope.courseData[$scope.currentStep]);
                        }
                    });
                    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
                    
                });
                
            }
        }
    ]);