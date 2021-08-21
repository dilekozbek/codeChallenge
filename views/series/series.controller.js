(function () {
    'use strict';

    angular
        .module('app')
        .controller('SeriesController', SeriesController);

    SeriesController.$inject = ['$rootScope','$scope', '$http', '$timeout'];
    function SeriesController($rootScope, $scope, $http, $timeout) {

        var request = {
            method: 'get',
            url: 'assets/feed/sample.json',
            dataType: 'json',
            contentType: "application/json"
        };
        $scope.loaded = false;
        $rootScope.title = 'Popular Series';
        $http(request)
            .success(function (jsonData) {
                $scope.series = jsonData.entries;
            })
            .error(function () {
                $scope.error = 'Oops, something went wrong...';
            }).then(function () {
                $timeout(function () { $scope.loaded = true; }, 1000);
            });
    }

})();