(function () {
    'use strict';

    angular
        .module('app')
        .controller('MoviesController', MoviesController);

    MoviesController.$inject = ['$rootScope', '$scope', '$http', '$timeout'];
    function MoviesController($rootScope,$scope, $http, $timeout) {

        var request = {
            method: 'get',
            url: 'assets/feed/sample.json',
            dataType: 'json',
            contentType: "application/json"
        };
        $scope.loaded = false;
        $rootScope.title = 'Popular Movies';
        $http(request)
            .success(function (jsonData) {
                $scope.movies = jsonData.entries;
            })
            .error(function () {
                $scope.error = 'Oops, something went wrong...';
            }).then(function () {
                $timeout(function () { $scope.loaded = true; }, 1000);
            });
    }

})();
