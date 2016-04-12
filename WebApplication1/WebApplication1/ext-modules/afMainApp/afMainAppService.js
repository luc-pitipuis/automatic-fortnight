"use strict";

angular.module("afMainApp").service('dataService', function ($localStorage, $http) {
    var self = this;

    var defaultData = {
        hiragana : [
            "あ"
        ]
    };
    

    self.saveData = function (data) {
        $localStorage.data= data;
    };

    self.retrieveData = function () {
        return $localStorage.data || defaultData;
    };

    self.resetData = function () {
        $localStorage.$reset();
    }

    this.retrieveHiraganaTestData = function () {
        var hiraganaTest = [];
        $http.get('/ext-modules/afMainApp/hiragana.json').success(function(data) {
            var testData = data.filter(function (item) {
                return !(-1 !== self.retrieveData().hiragana.indexOf(item['jp']));
            });
            var log = [];
            //var choices = 
            angular.forEach(testData.slice(0, 5), function (line) {
                this.push({ "question": line.jp, "choices": ['ni', 'ki', 'mi', 'naj', line.en], "answer": line.en });
            }, hiraganaTest);
        });
        return hiraganaTest;
    };

});