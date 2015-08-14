(function () {
  'use strict';

  angular
    .module('tiffany')
    .controller('MainController', function ($scope, $routeParams, _, $timeout) {
        $scope.hello= "hello World";

        $scope.oneAtATime = false;

      //  $scope.pdfUrl = 'views/tiffany_robinson_resume.pdf';
    })


})();
