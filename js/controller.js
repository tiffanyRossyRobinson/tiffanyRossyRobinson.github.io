(function () {
  'use strict';

  angular
    .module('tiffany')
    .controller('MainController', function ($scope, $routeParams, _, pdfDelegate, $timeout) {
        $scope.hello= "hello World";

       $scope.pdfUrl = 'views/tiffany_robinson_resume.pdf';
    })


})();
