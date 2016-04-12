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

    self.getRawData = function (type) {
        return $http.get('/ext-modules/afMainApp/' + type + '.json', { cache: true }).then(function (response) {
            return response.data;
        });;
    }

    this.retrieveTestData = function (type) {
        return self.getRawData(type).then(function (data) {
            var testData = data;

            var userData = self.retrieveData()[type];
            testData.filter(function (item) { //we filter only the one we know
                return (-1 !== userData.indexOf(item['jp']))
            });
            var Test = [];
            var choices = testData.map(function (value, index) { return value['en']; });
            angular.forEach(shuffle(testData).slice(0, 5), function (line) {
                var currentChoices = shuffle(shuffle(choices.filter(function (item) { return item != line.en })).slice(0, 4).concat(line.en));
                this.push({ "question": line.jp, "choices": currentChoices, "answer": line.en });
            }, Test);
            return Test;
        });
    };

    this.retrieveLearnData = function (type) {
        return self.getRawData(type).then(function (data) {
            var testData = data;

            var userData = self.retrieveData()[type];
            testData.filter(function (item) {
                return !(-1 !== userData.indexOf(item['jp']))
            });
            var Learn = [];
            angular.forEach(shuffle(testData).slice(0, 5), function (line) {
                this.push({ "question": line.jp, "choices": ['I KNOW!!', 'NO IDEA'], "answer": line.en });
            }, Learn);
            return Learn;
        });
    };

    function shuffle(array) {
        var m = array.length, t, i;

        // While there remain elements to shuffle…
        while (m) {

            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element.
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }

        return array;
    }
});