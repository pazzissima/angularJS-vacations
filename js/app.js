angular.module('destination', [])
  .config(locationRouter);

function locationRouter ($routeProvider) {
  $routeProvider
    .when('/', {templateUrl: 'partials/destination.html',
      controller: function ($scope) {
        $scope.setActive('destinations');
    }})
    .when('/locations', {templateUrl: 'partials/location.html',
      controller: function ($scope) {
        $scope.setActive('location');
    }})
    .when('/plan', {template: '<h3>My next trip</h3>',
      controller: function ($scope) {
        $scope.setActive('plan');
    }});
}