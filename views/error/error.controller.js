(function () {
    'use strict';

    angular
        .module('app')
        .controller('ErrorController', ErrorController);

    ErrorController.$inject = ['$rootScope','$scope'];
    function ErrorController($rootScope,$scope) {
        $rootScope.title = 'Error Page';
        $scope.error = 'Oops, something went wrong...';
    }

})();
