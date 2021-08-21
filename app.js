(function () {
    'use strict';

    angular
        .module('app', ['ngRoute'])
        .config(config);

    config.$inject = ['$routeProvider'];
    function config($routeProvider) {
        $routeProvider
            .when('/home', {
                controller: 'HomeController',
                templateUrl: 'views/home/home.view.html'
            })

            .when('/movies', {
                controller: 'MoviesController',
                templateUrl: 'views/movies/movies.view.html'
            })

            .when('/series', {
                controller: 'SeriesController',
                templateUrl: 'views/series/series.view.html'
            })

            .when('/error', {
                controller: 'ErrorController',
                templateUrl: 'views/error/error.view.html'
            })

            .otherwise({ redirectTo: '/home' });
    }

    var upbutton = document.getElementById("up");
    document.addEventListener('scroll', function(){
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        upbutton.style.display = "inline-block";
    } else {
        upbutton.style.display = "none";
    }

    upbutton.addEventListener("click",function(e){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
 });

})();