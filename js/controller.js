(function () {
  'use strict';

  angular
    .module('tiffany')
    .controller('MainController', function ($scope, $location, $anchorScroll, $window, $mdSidenav) {

      $scope.openLeftMenu = function() {
        $mdSidenav('left').toggle();
      };

      $scope.GoTo = function(location) {
        console.log(location);
        $location.hash(location);
        $anchorScroll();
        $mdSidenav('left').toggle();
      }

      $scope.SendEmail = function(){
        var link = "mailto:trossys@gmail.com?Subject=Let's%20discuss%20possible%20job%20opportunities!"
        window.location.href = link;
      }

      $scope.isSidenavOpen = false;
      $scope.isActive = true;
      $scope.$watch('isSidenavOpen', function(isSidenavOpen) {
        $scope.isActive = !$scope.isActive;
      });

    })
})();
