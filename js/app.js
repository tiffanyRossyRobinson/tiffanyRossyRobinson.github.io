(function () {
  'use strict';

  angular
    .module('tiffany', [
      'ngRoute',
      'underscore',
      'ui.bootstrap',
      'pdf'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainController'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'MainController'
        })
        .when('/Work', {
          templateUrl: 'views/work.html',
          controller: 'MainController'
        })
        .when('/Resume', {
          templateUrl: 'views/resume.html',
          controller: 'MainController'
        })
        .when('/HireMe', {
          templateUrl: 'views/hire.html',
          controller: 'MainController'
        })
        .when('/404', {
          template: '<h2>Sorry, page not found</h2>'
        })
        .otherwise({
          redirectTo: '/404'
        });
    });
    angular
      .module('underscore', [])
      .factory('_', function ($window) {
        return $window._;
      });
      angular
        .module('WOW', [])
        .factory('WOW', function ($window) {
          return $window._;
        });

})();
